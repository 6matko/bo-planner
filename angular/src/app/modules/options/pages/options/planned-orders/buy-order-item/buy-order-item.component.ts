import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DialogService } from '@ngneat/dialog';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { BuyOrder } from '../../../../../../models/buy-order.model';

@Component({
  selector: 'app-buy-order-item',
  templateUrl: './buy-order-item.component.html',
  styleUrls: ['./buy-order-item.component.scss']
})
export class BuyOrderItemComponent implements OnInit {
  /**
   * Current buy order plan item
   *
   * @type {BuyOrder}
   * @memberof BuyOrderItemComponent
   */
  @Input() orderItem: BuyOrder;
  /**
   * Event emitter which emits information about removed item when it got removed
   *
   * @type {EventEmitter<BuyOrder>}
   * @memberof BuyOrderItemComponent
   */
  @Output() itemRemoved: EventEmitter<BuyOrder> = new EventEmitter();
  constructor(
    private dialog: DialogService,
    private dbService: NgxIndexedDBService,
  ) { }

  ngOnInit() {
  }

  /**
   * Method show confirmation modal and on confirmed actions sends signal to remove item
   *
   * @memberof BuyOrderItemComponent
   */
  removeItem() {
    this.dialog.confirm({
      title: `Confirm your actions`,
      body: `You are about to remove <b>${this.orderItem.itemName}</b>.<br />Continue ?`
    })
      .afterClosed$
      .pipe(
        switchMap(confirmed => {
          // If user confirmed his actions - Removing from DB
          if (confirmed) {
            return this.dbService.delete<BuyOrder>('orders', this.orderItem.id)
              .pipe(
                // After successful removal returning "true" as confirmation for successful action
                // because we don't care about updated list in this case
                map(() => true)
              );
          } else {
            // If user canceled his action returning "false"
            return of(false);
          }
        })
      )
      .subscribe(removed => {
        // Explicitlly checking for "true" value because there are cases where this can be truthy
        // but in our case we need to be sure that exactly Delete operation was completed
        if (removed === true) {
          this.itemRemoved.emit(this.orderItem);
        }
      });
  }

}
