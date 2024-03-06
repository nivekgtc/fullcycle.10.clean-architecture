import Costumer from "../entity/costumer";
import Order from "../entity/order";
import OrderItem from "../entity/order_item";
import {randomUUID} from 'node:crypto'

export default class OrderService {

    static placeOrder(customer: Costumer, items: OrderItem[]): Order {
        if (items.length === 0) {
            throw new Error("Items are required")
        }

        const uuid = randomUUID()

        const order = new Order(uuid, customer.id, items)
        customer.addRewardPoints(order.total() / 2)
        return order
    }

    static total (orders: Order[]): number {
        return orders.reduce((acc, order) => acc + order.total() ,0)
    }
}