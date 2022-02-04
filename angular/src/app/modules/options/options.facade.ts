import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { CURRENCY } from '../../core/currencies';
import { Currency } from '../../models/base.model';
import { BuyOrder } from '../../models/buy-order.model';
import { OptionsState } from './options.state';

@Injectable({
  providedIn: 'root'
})
export class OptionsFacade {

  constructor(
    private dbService: NgxIndexedDBService,
    private optionsState: OptionsState,
  ) { }

  /**
   * Method returns `Observable` with stored planned buy orders. If there are no planned orders
   * then it will look for them in DB, store and return observable with buy orders
   *
   * @return {Observable<BuyOrder[]>} `Observable` with planned buy orders
   * @memberof OptionsFacade
   */
  getPlannedOrders(): Observable<BuyOrder[]> {
    if (!this.optionsState.plannedOrders$.value?.length) {
      this.dbService.getAll<BuyOrder>('orders')
        .pipe(
          first(),
        )
        .subscribe(orders => this.updatePlannedOrders(orders));
    }
    return this.optionsState.plannedOrders$.asObservable();
  }

  /**
   * Updates planned buy orders in state
   *
   * @param {BuyOrder[]} orders Orders to store
   * @memberof OptionsFacade
   */
  updatePlannedOrders(orders: BuyOrder[]) {
    this.optionsState.plannedOrders$.next(orders);
  }

  /**
   * Method gets users currency based on first added planned order
   *
   * @return {Currency} Returns information about users currency
   * @memberof OptionsFacade
   */
  getCurrency() {
    // Checking if currency is stored in state. If not then trying to get and set it
    if (!this.optionsState.currency) {
      const currentCurrency = CURRENCY.find(currency => currency.currencyId === this.optionsState.plannedOrders$.value[0]?.currencyId);
      this.setCurrency(currentCurrency);
    }
    return this.optionsState.currency;
  }

  private setCurrency(currency: Currency) {
    this.optionsState.currency = currency;
  }
}
