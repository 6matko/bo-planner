import { ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { bindCallback, of, Subject } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import { BuyOrder } from '../../../../models/buy-order.model';
import { TAB_ID } from '../../../../providers/tab-id.provider';

@Component({
  selector: 'app-popup',
  templateUrl: 'popup.component.html',
  styleUrls: ['popup.component.scss'],
})
export class PopupComponent implements OnInit, OnDestroy {
  itemInfo: any;
  boForm: FormGroup;
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
    console.log(`I am init`);
    this.initInfo();
  }

  ngOnDestroy() {
    // Completing subscriptions
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  save() {
    console.log(`I will save`, this.boForm.value);
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

  openPlaceBuyOrderWindow() {
    chrome.tabs.sendMessage(this.tabId, {
      type: 'openBOModal',
      data: {
        price: this.itemInfo.price,
        amount: this.itemInfo.amount,
      }
    });
  }
  private initInfo() {
    // Sending signal to content page to gather information from page itself
    bindCallback<any>(chrome.tabs.sendMessage.bind(this, this.tabId, { type: 'getInfoFromPage' }))()
      .pipe(
        // If there was an error, returning undefined. Otherwise giving info from thee page
        map(info => chrome.runtime.lastError ? undefined : info),
        switchMap(info => {
          console.log(`Info`, info);
          if (info) {
            return this.dbService.getByIndex('orders', 'itemName', info.itemName)
              .pipe(map(boEntity => {
                Object.assign(info, boEntity);
                return info;
              }))
          } else {
            return of(info);
          }
        }),
        takeUntil(this.destroy$),
      )
      .subscribe(info => {
        console.log(`Page info`, info);
        console.log(`I will init form`);
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

  private createBuyOrder() {
    const newBOEntity = new BuyOrder(this.boForm.value);
    this.dbService.add('orders', newBOEntity)
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe(result => {
        console.log(result);
        // Updating form value with latest update
        this.boForm.patchValue(result);
        this.updateItemInfo(result);
        // Triggering change detection since there are changes that view needs to re-render
        // and for some reason it doesn't happen automatically. Maybe due chrome extension
        this.cdr.detectChanges();
      });
  }

  private updateBuyOrder() {
    const updatedBuyOrder = Object.assign(this.itemInfo, this.boForm.value);
    const updatedBOEntity = new BuyOrder(updatedBuyOrder);
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
    });
  }
}
