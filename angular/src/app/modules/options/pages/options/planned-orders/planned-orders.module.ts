import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BuyOrderItemComponent } from './buy-order-item/buy-order-item.component';
import { PlannedOrdersRoutingModule } from './planned-order-routing.module';
import { PlannedOrdersComponent } from './planned-orders.component';

@NgModule({
  imports: [
    CommonModule,
    PlannedOrdersRoutingModule,
  ],
  declarations: [PlannedOrdersComponent, BuyOrderItemComponent]
})
export class PlannedOrdersModule { }
