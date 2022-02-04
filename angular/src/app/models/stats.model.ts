import { BuyOrder } from "./buy-order.model";

export class PlannedOrderStats {
    totalOrders: number = 0;
    totalAmount: number = 0;
    totalPrice: number = 0;
    topItemsByAmount: BuyOrder[] = [];
    topItemsByPrice: BuyOrder[] = [];
    topItemsByTotalPrice: BuyOrder[] = [];
}