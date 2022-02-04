import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { concatMap, debounceTime, takeUntil } from 'rxjs/operators';
import { PaginationComponent } from '../../../../../core/pagination/pagination.component';
import { BuyOrder } from '../../../../../models/buy-order.model';
import { OptionsFacade } from '../../../options.facade';

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
   * Currency sign for visual display
   *
   * @type {string}
   * @memberof PlannedOrdersComponent
   */
  currencySign: string;
  /**
   * Reference to pagination component which holds many useful information
   *
   * @private
   * @type {PaginationComponent}
   * @memberof PlannedOrdersComponent
   */
  @ViewChild('pagination') private pagination: PaginationComponent;
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
    private optionsFacade: OptionsFacade,
    private cdr: ChangeDetectorRef,
  ) {

  }

  ngOnInit() {
    this.optionsFacade.getPlannedOrders()
      .subscribe(orders => {
        this.plannedOrders = orders;
        // Getting currency sign for display if we have at least one planned order because
        // currency id is stored on planned order level
        if (this.plannedOrders.length) {
          // Finding necessary currency from stored list
          // ...and using its symbol
          this.currencySign = this.optionsFacade.getCurrency()?.symbol ?? '';
        }
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
   * @param {number} currentPageIndex Index of element for removal on current page. Its not index in all list
   * @memberof PlannedOrdersComponent
   */
  removeItem(currentPageIndex: number) {
    // Getting index of item to remove among all items, not on current page
    const indexForRemoval = this.pagination.pager.startIndex + currentPageIndex;
    // Removing element from list of all items so after page change it won't appear again
    // NOTE: We are removing from two lists because one remains as original and the other one is
    // used for display and filtering
    this.pagination.items.splice(indexForRemoval, 1);
    this.plannedOrders.splice(indexForRemoval, 1);
    // Removing element from current page so it disappears
    this.currentPageItems.splice(currentPageIndex, 1);

    // Decreasing found result counter since element was removed
    this.foundResults--;

    // If there are no more items on current page then going back to previous page.
    // If user is currently on first page then it will trigger pagination recreate anyways
    if (!this.currentPageItems.length) {
      this.pagination.setPage(this.pagination.pager.currentPage - 1)
    }
  }
}
