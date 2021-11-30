import { BaseEntity } from './base.model';

export class BuyOrder extends BaseEntity {
    /**
     * Steam Community Market full item name
     *
     * @type {string}
     * @memberof BuyOrder
     */
    itemName: string;
    /**
     * URL to item image
     *
     * @type {string}
     * @memberof BuyOrder
     */
    imgUrl: string;
    /**
     * Buy order price
     *
     * @type {number}
     * @memberof BuyOrder
     */
    price: number;
    /**
     * Buy order amount
     *
     * @type {number}
     * @memberof BuyOrder
     */
    amount: number;
    /**
     * App id of SCM item
     *
     * @type {number}
     * @memberof BuyOrder
     */
    appId: number;
    /**
     * Id of currency
     *
     * @type {number}
     * @memberof BuyOrder
     */
    currencyId: number;
    constructor(data: BuyOrder) {
        super();
        // Assigning data to current instance
        Object.assign(this, data);
        // If current buy order was previously created then setting current date
        // as date when it was updated last time. Otherwise using date when it was created
        // as initial value
        this.updated = this.created ? new Date() : (this.created || new Date());
        // Setting creation date
        this.created = new Date();
    }
}
