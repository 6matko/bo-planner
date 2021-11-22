import { Component, OnInit } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { BuyOrder } from '../../../../../models/buy-order.model';

@Component({
  selector: 'app-planned-orders',
  templateUrl: './planned-orders.component.html',
  styleUrls: ['./planned-orders.component.scss']
})
export class PlannedOrdersComponent implements OnInit {
  /**
   * List with planned orders for display
   *
   * @type {BuyOrder[]}
   * @memberof PlannedOrdersComponent
   */
  plannedOrders: BuyOrder[] = [];
  constructor(
    private dbService: NgxIndexedDBService,
  ) {
    this.dbService.getAll('orders');
  }

  ngOnInit() {
    this.dbService.getAll<BuyOrder>('orders')
      .subscribe(orders => this.plannedOrders = orders);
  }

  /**
   * Tracks order by ID. Used for performance to minimize rendering
   *
   * @param {number} index Item index
   * @param {BuyOrder} item Item of current iteration
   * @return {*} Returns id of current iteration item
   * @memberof PlannedOrdersComponent
   */
  orderById(index: number, item: BuyOrder) {
    return item.id;
  }

  /**
   * Method removes planned order from list
   *
   * @param {number} index Index of element to remove
   * @memberof PlannedOrdersComponent
   */
  removeItem(index: number) {
    this.plannedOrders.splice(index);
  }
}
