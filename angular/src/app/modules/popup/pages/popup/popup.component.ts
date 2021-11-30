import { ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { bindCallback, of, Subject } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators';
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
    if (this.itemInfo.created) {
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
  openPlaceBuyOrderWindow() {
    chrome.tabs.sendMessage(this.tabId, {
      type: 'openBOModal',
      data: {
        price: this.itemInfo.price,
        amount: this.itemInfo.amount,
      }
    });
  }
  /**
   * Method initializes popup based on information gathered from current page
   *
   * @private
   * @memberof PopupComponent
   */
  private initInfo() {
    // Sending signal to content page to gather information from page itself
    bindCallback<any>(chrome.tabs.sendMessage.bind(this, this.tabId, { type: 'getInfoFromPage' }))()
      .pipe(
        // If there was an error, returning undefined. Otherwise giving info from thee page
        map(info => chrome.runtime.lastError ? undefined : info),
        switchMap(info => {
          // If we have info from page then getting stored information about this item from IndexedDB
          if (info) {
            return this.dbService.getByIndex('orders', 'itemName', info.itemName)
              .pipe(map(boEntity => {
                // Updating current info object with information from DB
                Object.assign(info, boEntity);
                return info;
              }))
            // If there is no info then reeturning same info object
          } else {
            return of(info);
          }
        }),
        takeUntil(this.destroy$),
      )
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
    // Saving in DB
    this.dbService.add('orders', newBOEntity)
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe(result => {
        // Updating form value with latest update
        this.boForm.patchValue(result);
        this.updateItemInfo(result);
        // Triggering change detection since there are changes that view needs to re-render
        // and for some reason it doesn't happen automatically. Maybe due chrome extension
        this.cdr.detectChanges();
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
      imgUrl: [''],
      appId: [null],
      currencyId: [null],
    });
  }
}
