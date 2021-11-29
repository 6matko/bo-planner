import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { concatMap, debounceTime, takeUntil } from 'rxjs/operators';
import { BuyOrder } from '../../../../../models/buy-order.model';

@Component({
  selector: 'app-planned-orders',
  templateUrl: './planned-orders.component.html',
  styleUrls: ['./planned-orders.component.scss']
})
export class PlannedOrdersComponent implements OnInit, OnDestroy {
  ordersForDisplay$: Observable<BuyOrder[]>;
  searchText: string;
  foundResults: number;
  allOrdersForDisplay: BuyOrder[] = [];
  currentPageItems: BuyOrder[] = [];
  dropdownOpen: boolean = false;
  showPerPage: number = 18;
  showPerPageOptions: number[] = [9, 18, 27, 36];
  private searchSubject: BehaviorSubject<string> = new BehaviorSubject('');
  /**
   * List with planned orders for display
   *
   * @type {BuyOrder[]}
   * @memberof PlannedOrdersComponent
   */
  private plannedOrders: BuyOrder[] = [];
  /**
   * Subject that is responsible for unsubscribing when component gets destroyed
   *
   * @private
   * @type {Subject<boolean>}
   * @memberof PlannedOrdersComponent
   */
  private destroy$: Subject<boolean> = new Subject();
  constructor(
    private dbService: NgxIndexedDBService,
  ) {
    this.dbService.getAll('orders');
  }

  ngOnInit() {
    this.dbService.getAll<BuyOrder>('orders')
      .subscribe(orders => {
        this.plannedOrders = orders;
        // this.ordersForDisplay = [...orders];
      });

    // Subscribing to search input changes
    this.searchSubject.asObservable()
      .pipe(
        debounceTime(200),
        concatMap(searchText => {
          // Filtering results and returning filtered array
          return of(this.plannedOrders.filter(order => order.itemName
            .toLowerCase()
            .includes(searchText.toLowerCase())
          )
          )
        }),
        takeUntil(this.destroy$)
        // tap(results => this.foundResults = results.length),
      ).subscribe(filteredResults => {
        // Storing amount of found results just for display
        this.foundResults = filteredResults.length;
        // Storing results for display
        this.allOrdersForDisplay = filteredResults;
      });
  }

  ngOnDestroy() {
    // Completing subscriptions
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  search(searchText: string) {
    this.searchSubject.next(searchText);
  }

  onChangePage(pageOfItems: BuyOrder[]) {
    this.currentPageItems = pageOfItems;
  }

  changePageSize(size: number) {
    this.showPerPage = size;
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
