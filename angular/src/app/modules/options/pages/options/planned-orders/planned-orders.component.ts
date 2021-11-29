import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { concatMap, debounceTime, takeUntil } from 'rxjs/operators';
import { BuyOrder } from '../../../../../models/buy-order.model';

@Component({
  selector: 'app-planned-orders',
  templateUrl: './planned-orders.component.html',
  styleUrls: ['./planned-orders.component.scss']
})
export class PlannedOrdersComponent implements OnInit, OnDestroy {
  /**
   * Model for search text input binding
   *
   * @type {string}
   * @memberof PlannedOrdersComponent
   */
  searchText: string;
  /**
   * Amount of found results after filtration
   *
   * @type {number}
   * @memberof PlannedOrdersComponent
   */
  foundResults: number;
  /**
   * List with all orders for display. Used for pagination
   *
   * @type {BuyOrder[]}
   * @memberof PlannedOrdersComponent
   */
  allOrdersForDisplay: BuyOrder[] = [];
  /**
   * List with current page items for display (from pagination)
   *
   * @type {BuyOrder[]}
   * @memberof PlannedOrdersComponent
   */
  currentPageItems: BuyOrder[] = [];
  /**
   * Flag indicates if show per page option dropdown is opened
   *
   * @type {boolean}
   * @memberof PlannedOrdersComponent
   */
  dropdownOpen: boolean = false;
  /**
   * Number of items per page
   *
   * @type {number}
   * @memberof PlannedOrdersComponent
   */
  showPerPage: number = 18;
  /**
   * Available options of page size that user can select from
   *
   * @type {number[]}
   * @memberof PlannedOrdersComponent
   */
  showPerPageOptions: number[] = [9, 18, 27, 36];
  /**
   * Behavior Subject that receives search text value to filter results
   *
   * @private
   * @type {BehaviorSubject<string>}
   * @memberof PlannedOrdersComponent
   */
  private searchSubject: BehaviorSubject<string> = new BehaviorSubject('');
  /**
   * List with planned orders for display
   *
   * @private
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

  }

  ngOnInit() {
    this.dbService.getAll<BuyOrder>('orders')
      .subscribe(orders => {
        this.plannedOrders = orders;
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
      )
      .subscribe(filteredResults => {
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

  /**
   * Method fills planned buy order list for display after page changed
   *
   * @param {BuyOrder[]} pageOfItems New items for displayy
   * @memberof PlannedOrdersComponent
   */
  onChangePage(pageOfItems: BuyOrder[]) {
    // Setting items that will be displayed
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
