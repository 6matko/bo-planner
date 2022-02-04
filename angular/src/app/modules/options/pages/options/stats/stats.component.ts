import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Currency } from '../../../../../models/base.model';
import { BuyOrder } from '../../../../../models/buy-order.model';
import { PlannedOrderStats } from '../../../../../models/stats.model';
import { OptionsFacade } from '../../../options.facade';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit, OnDestroy {
  /**
   * Flag indicates if stats are ready for display
   *
   * @type {boolean}
   * @memberof StatsComponent
   */
  areStatsReady: boolean = false;
  /**
   * Stats for display
   *
   * @type {PlannedOrderStats}
   * @memberof StatsComponent
   */
  stats: PlannedOrderStats = new PlannedOrderStats();
  currentCurrency: Currency;
  /**
   * Subject that is responsible for unsubscribing when component gets destroyed
   *
   * @private
   * @type {Subject<boolean>}
   * @memberof StatsComponent
   */
  private destroy$: Subject<boolean> = new Subject();
  constructor(
    private optionsFacade: OptionsFacade,
  ) { }

  ngOnInit() {
    this.optionsFacade.getPlannedOrders()
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(orders => {
        this.currentCurrency = this.optionsFacade.getCurrency();
        this.createStats(orders);
      })
  }

  ngOnDestroy(): void {
    // Completing subscriptions
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  private createStats(orders: BuyOrder[]) {
    this.stats.totalOrders = orders.length;

    for (const order of orders) {
      this.stats.totalAmount += order.amount;
      this.stats.totalPrice += order.amount * order.price;
    }

    // Getting top items and taking only necessary amount of items for display (5)
    this.stats.topItemsByAmount = [...orders].sort((a, b) => b.amount - a.amount).splice(0, 5);
    this.stats.topItemsByPrice = [...orders].sort((a, b) => b.price - a.price).splice(0, 5);
    this.stats.topItemsByTotalPrice = [...orders].sort((a, b) => (b.price * b.amount) - (a.price * a.amount)).splice(0, 5);

    // Fixing floating for price (Taking only 2 digits after comma)
    this.stats.totalPrice = +this.stats.totalPrice.toFixed(2);

    this.areStatsReady = true;
  }
}
