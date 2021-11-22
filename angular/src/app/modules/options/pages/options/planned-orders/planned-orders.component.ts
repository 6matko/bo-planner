import { Component, OnInit } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable } from 'rxjs';
import { BuyOrder } from '../../../../../models/buy-order.model';

@Component({
  selector: 'app-planned-orders',
  templateUrl: './planned-orders.component.html',
  styleUrls: ['./planned-orders.component.scss']
})
export class PlannedOrdersComponent implements OnInit {
  plannedOrders$: Observable<BuyOrder[]> = this.dbService.getAll('orders');
  constructor(
    private dbService: NgxIndexedDBService,
  ) { }

  ngOnInit() {
  }

}
