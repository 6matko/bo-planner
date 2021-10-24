import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { bindCallback, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { TAB_ID } from '../../../../providers/tab-id.provider';

@Component({
  selector: 'app-popup',
  templateUrl: 'popup.component.html',
  styleUrls: ['popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupComponent implements OnInit, OnDestroy {
  itemInfo: any;
  boForm: FormGroup;
  private destroy$: Subject<boolean> = new Subject();

  constructor(
    @Inject(TAB_ID) readonly tabId: number,
    private cdr: ChangeDetectorRef,
    private formBuilder: FormBuilder,
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

  private initInfo() {
    // Sending signal to content page to gather information from page itself
    bindCallback<any>(chrome.tabs.sendMessage.bind(this, this.tabId, 'getInfoFromPage'))()
      .pipe(
        // If there was an error, returning undefined. Otherwise giving info from thee page
        map(info => chrome.runtime.lastError ? undefined : info),
        takeUntil(this.destroy$),
      )
      .subscribe(info => {
        console.log(`Page info`, info);
        console.log(`I will init form`);
        // Storing information for further usage ONLY if user is currently on item info page.
        // Otherwise we can't get any information and should show informative message so user
        // goes to specific SCM item
        if (info.pageUrl.includes('/market/listings/')) {
          this.itemInfo = info;
          // Updating form value
          this.boForm.patchValue({
            itemName: info.itemName,
          });
          // Triggering change detection since there are changes that view needs to re-render
          this.cdr.detectChanges();
        }
      });
  }

  private createForm() {
    this.boForm = this.formBuilder.group({
      itemName: ['', Validators.required],
      price: [null, [Validators.min(0), Validators.required]],
      amount: [1, [Validators.min(1), Validators.required]],
    })
  }
}
