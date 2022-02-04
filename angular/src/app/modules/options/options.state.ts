import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Currency } from '../../models/base.model';
import { BuyOrder } from '../../models/buy-order.model';

@Injectable({
  providedIn: 'root'
})
export class OptionsState {
  /**
   * Behavior Subject which stores planned orders
   *
   * @memberof OptionsState
   */
  plannedOrders$ = new BehaviorSubject<BuyOrder[]>([]);
  /**
   * Users currency
   *
   * @type {Currency}
   * @memberof OptionsState
   */
  currency: Currency;

  constructor() { }

}
