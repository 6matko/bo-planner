import { BuyOrder } from "./buy-order.model";

export class ItemInfo extends BuyOrder {
    /**
     * Price of active buy order
     *
     * @type {number}
     * @memberof ItemInfo
     */
    activeBOPrice: number;
    /**
     * Amount of active buy order
     *
     * @type {number}
     * @memberof ItemInfo
     */
    activeBOAmount: number;
    /**
     * Stringified price of active buy order. Used to display Steam value
     * with currency and format, for example: "92,--€" or "Rp 42000.43"
     *
     * @type {string}
     * @memberof ItemInfo
     */
    activeBOPriceString: string;
}