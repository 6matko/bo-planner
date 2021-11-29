import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from '../../../../../core/pagination/pagination.module';
import { BuyOrderItemComponent } from './buy-order-item/buy-order-item.component';
import { PlannedOrdersRoutingModule } from './planned-order-routing.module';
import { PlannedOrdersComponent } from './planned-orders.component';

@NgModule({
  imports: [
    CommonModule,
    PlannedOrdersRoutingModule,
    FormsModule,
    PaginationModule,
  ],
  declarations: [PlannedOrdersComponent, BuyOrderItemComponent]
})
export class PlannedOrdersModule { }
