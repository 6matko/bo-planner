import { Component, Input, OnInit } from '@angular/core';
import { BuyOrder } from '../../../../../../models/buy-order.model';

@Component({
  selector: 'app-buy-order-item',
  templateUrl: './buy-order-item.component.html',
  styleUrls: ['./buy-order-item.component.scss']
})
export class BuyOrderItemComponent implements OnInit {
  @Input() orderItem: BuyOrder;
  constructor() { }

  ngOnInit() {
  }

}
