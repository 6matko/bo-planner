import { ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { bindCallback, Observable, of, Subject, throwError } from 'rxjs';
import { map, mergeMap, switchMap, takeUntil } from 'rxjs/operators';
import { CURRENCY } from '../../../../core/currencies';
import { BuyOrder } from '../../../../models/buy-order.model';
import { ItemInfo } from '../../../../models/item-info.model';
import { TAB_ID } from '../../../../providers/tab-id.provider';

@Component({
  selector: 'app-popup',
  templateUrl: 'popup.component.html',
  styleUrls: ['popup.component.scss'],
})
export class PopupComponent implements OnInit, OnDestroy {
  /**
   * Information about current item
   *
   * @type {ItemInfo}
   * @memberof PopupComponent
   */
  itemInfo: ItemInfo;
  /**
   * Buy order planner form
   *
   * @type {FormGroup}
   * @memberof PopupComponent
   */
  boForm: FormGroup;
  /**
   * Indicates if user wants to manually add information
   *
   * @type {boolean}
   * @memberof PopupComponent
   */
  isManualAdding: boolean = false;
  /**
   * Indicates if manual adding was succcessful
   *
   * @type {boolean}
   * @memberof PopupComponent
   */
  isManualSuccess: boolean = false;
  /**
   * List of known currencies
   *
   * @memberof PopupComponent
   */
  currencies = CURRENCY;
  /**
   * Error message
   *
   * @type {string}
   * @memberof PopupComponent
   */
  error: string = '';
  /**
   * Subject that is responsible for unsubscribing when component gets destroyed
   *
   * @private
   * @type {Subject<boolean>}
   * @memberof PopupComponent
   */
  private destroy$: Subject<boolean> = new Subject();

  constructor(
    @Inject(TAB_ID) readonly tabId: number,
    private cdr: ChangeDetectorRef,
    private formBuilder: FormBuilder,
    private dbService: NgxIndexedDBService,
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.initInfo();
    chrome.commands.onCommand.addListener((command) => {
      switch (command) {
        case 'openBO':
          this.openPlaceBuyOrderWindow();
          break;
        default:
          break;
      }
    });
  }

  ngOnDestroy() {
    // Completing subscriptions
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  /**
   * Method saves buy order plan
   *
   * @memberof PopupComponent
   */
  save() {
    // If we have "created" property it means that buy order was already created and
    // we need to update it. Otherwise creating new one
    if (!this.isManualAdding && this.itemInfo.created) {
      this.updateBuyOrder();
    } else {
      this.createBuyOrder();
    }
  }

  /**
   * Method redirects user to Steam Community Market page
   *
   * @memberof PopupComponent
   */
  goToSCM() {
    // Changing current tab to SCM via redirect
    chrome.tabs.update({ url: "https://steamcommunity.com/market" }, () => {
      // Closing popup after redirect
      window.close();
    });
  }

  /**
   * Method opens a new tab with planned buy order list (options page)
   *
   * @memberof PopupComponent
   */
  goToPlannedList() {
    chrome.runtime.openOptionsPage(() => {
      // Closing popup after redirect
      window.close();
    });
  }

  /**
   * Method sends signal to contentPage to open buy order modal
   *
   * @memberof PopupComponent
   */
  /**
   * Method sends signal to contentPage to open buy order modal
   *
   * @param {number} [tabId=this.tabId] Id of tab where to open buy order modal (by default current tab)
   * @param {ItemInfo} [itemInfo=this.itemInfo] Information about item where to open buy order modal (by default current item)
   * @memberof PopupComponent
   */
  openPlaceBuyOrderWindow(tabId: number = this.tabId, itemInfo: ItemInfo = this.itemInfo) {
    chrome.tabs.sendMessage(tabId, {
      type: 'openBOModal',
      data: {
        price: itemInfo.price,
        amount: itemInfo.amount,
      }
    });
  }

  /**
   * Method sends signal to contentPage to open buy order modal on every opened SCM listing page
   *
   * @memberof PopupComponent
   */
  openPlaceBuyOrderWindowOnAllTabs() {
    // Getting list of all SCM listing pages to open BO modals on them
    bindCallback<chrome.tabs.Tab[]>(chrome.tabs.query.bind(this, { url: 'https://steamcommunity.com/market/listings/*' }))()
      .pipe(
        // Getting list of tab IDs because we need only them.
        // Using mergeMap to make concurency
        mergeMap(tabs => tabs.map(tab => tab.id)),
        // Requesting information about item for each opened tab
        mergeMap(tabId =>
          bindCallback<ItemInfo>(chrome.tabs.sendMessage.bind(this, tabId, { type: 'getInfoFromPage' }))()
            .pipe(
              switchMap(itemInfo => {
                // In case of error returning undefined
                if (chrome.runtime.lastError) {
                  return undefined;
                }

                // Trying to get stored information in DB (if user added planned buy order). In case if there is no
                // stored information then we are returning simple item info that we gathered from page (so price & amount wouldn't be pre-filled)
                return this.getSavedInfoFromDB(itemInfo).pipe(map(itemFromDB => itemFromDB ?? itemInfo))
              }),
              map(itemInfo => {
                // If everything is fine then returning tab Id and info about item
                return {
                  itemInfo,
                  tabId,
                };
              }),
            )
        ),
        takeUntil(this.destroy$)
      )
      .subscribe(result => {
        if (result) {
          this.openPlaceBuyOrderWindow(result.tabId, result.itemInfo);
        }
      });
  }

  /**
   * Method marks manual adding as enabled with all necessary setup
   *
   * @memberof PopupComponent
   */
  openManualAdd() {
    this.isManualAdding = true;
    // Adding REQUIRED validators cause we need values
    this.boForm.get('appId').setValidators(Validators.required);
    this.boForm.get('currencyId').setValidators(Validators.required);
  }

  /**
   * Method clears success message (hide from display)
   *
   * @memberof PopupComponent
   */
  clearSuccessMessage() {
    this.isManualSuccess = false;
  }

  /**
   * Method requests information about item from DB in case if user placed planned order
   *
   * @private
   * @param {ItemInfo} itemInfo Information about item to look in DB
   * @return {Observable<ItemInfo>} Returns `Observable` with found item info
   * @memberof PopupComponent
   */
  private getSavedInfoFromDB(itemInfo: ItemInfo): Observable<ItemInfo> {
    return this.dbService.getByIndex('orders', 'itemName', itemInfo.itemName)
      .pipe(map(boEntity => {
        // Updating current info object with information from DB
        Object.assign(itemInfo, boEntity);
        return itemInfo;
      }));
  }

  /**
   * Method gets information about item from page
   *
   * @private
   * @param {number} [tabId=this.tabId] Id of tab from which information gathernig should be done. By default current page
   * @return {Observable<ItemInfo>} Returns `Observable` with item info
   * @memberof PopupComponent
   */
  private getItemInfoFromPage(tabId: number = this.tabId): Observable<ItemInfo> {
    // Sending signal to content page to gather information from page itself
    return bindCallback<ItemInfo>(chrome.tabs.sendMessage.bind(this, this.tabId, { type: 'getInfoFromPage' }))()
      .pipe(
        // If there was an error, returning undefined. Otherwise giving info from thee page
        map(info => chrome.runtime.lastError ? undefined : info),
        switchMap(info => {
          // If we have info from page then getting stored information about this item from IndexedDB
          if (info) {
            return this.getSavedInfoFromDB(info);
            // If there is no info then reeturning same info object
          } else {
            return of(info);
          }
        }),
        takeUntil(this.destroy$),
      );
  }

  /**
   * Method initializes popup based on information gathered from current page
   *
   * @private
   * @memberof PopupComponent
   */
  private initInfo() {
    this.getItemInfoFromPage()
      .subscribe(info => {
        // Storing information for further usage ONLY if user is currently on item info page.
        // Otherwise we can't get any information and should show informative message so user
        // goes to specific SCM item
        if (info?.pageUrl?.includes('/market/listings/')) {
          this.itemInfo = info;
          // Updating form value
          this.boForm.patchValue(info);
          // Triggering change detection since there are changes that view needs to re-render
          // and for some reason it doesn't happen automatically. Maybe due chrome extension
          this.cdr.detectChanges();
        }
      });
  }

  /**
   * Method creates new buy order plan and stores it in DB
   *
   * @private
   * @memberof PopupComponent
   */
  private createBuyOrder() {
    // Creating new entity based on info on form
    const newBOEntity = new BuyOrder(this.boForm.value);

    // Checking if item with same name is already added
    this.dbService.getByIndex('orders', 'itemName', newBOEntity.itemName)
      .pipe(
        switchMap(item => {
          // If item exists then throwing error
          if (item) {
            return throwError('Item with this name already exists');
          }
          // Otherwise adding item
          return this.dbService.add('orders', newBOEntity);
        }),
        takeUntil(this.destroy$),
      )
      .subscribe(result => {
        // If user manually adds item then displaying success and resetting form
        // so he can do it again
        if (this.isManualAdding) {
          this.boForm.reset({ price: 0, amount: 1 });
          this.boForm.markAsUntouched();
          this.isManualSuccess = true;
        } else {
          // Updating form value with latest update
          this.boForm.patchValue(result);
          this.updateItemInfo(result);
        }

        // Clearing error message when all is done
        this.error = ''

        // Triggering change detection since there are changes that view needs to re-render
        // and for some reason it doesn't happen automatically. Maybe due chrome extension
        this.cdr.detectChanges();
      }, err => {
        // Setting error message for display
        this.error = err;
      });
  }

  /**
   * Method updates buy order plan and saves it to DB
   *
   * @private
   * @memberof PopupComponent
   */
  private updateBuyOrder() {
    // Updating current item info with data in form
    const updatedBuyOrder = Object.assign(this.itemInfo, this.boForm.value);
    // Creating entity for save
    const updatedBOEntity = new BuyOrder(updatedBuyOrder);
    // Updating in DB
    this.dbService.update('orders', updatedBOEntity)
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe(results => {
        // Updating form value with updated entity. Otherwise we would have to search for it in all results
        this.boForm.patchValue(updatedBOEntity);
        this.updateItemInfo(updatedBOEntity);
        // Triggering change detection since there are changes that view needs to re-render
        // and for some reason it doesn't happen automatically. Maybe due chrome extension
        this.cdr.detectChanges();
      });
  }

  /**
   * Method updates currently stored item info with latest changes (from Indexed DB)
   *
   * @private
   * @param {BuyOrder} boEntity Stored/updated entity in IndexedDB. These values will be added to item info
   * @memberof PopupComponent
   */
  private updateItemInfo(boEntity: BuyOrder) {
    Object.assign(this.itemInfo, boEntity);
  }

  private createForm() {
    this.boForm = this.formBuilder.group({
      itemName: ['', Validators.required],
      price: [0, [Validators.min(0), Validators.required]],
      amount: [1, [Validators.min(1), Validators.required]],
      appId: [null],
      currencyId: [null],
    });
  }
}
