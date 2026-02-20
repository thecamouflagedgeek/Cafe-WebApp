import { menuStore, orderStore } from "@/mock/store"
import { CartItem, Order } from "@/app/models/customer"

export function getMenu() {
    return menuStore.filter(item => item.available)
}

export function createOrder(data: {
    sessionId: string
    menuItemId: string
    quantity: number
}) {
    const menuItem = menuStore.find(m => m.id === data.menuItemId)
    if (!menuItem) {
        throw new Error("Menu item not found")
    }
    let order = orderStore.find(o => o.sessionId === data.sessionId && o.status === "PENDING")

    const cartItem: CartItem = { menuItemId: menuItem.id, name: menuItem.name, price: menuItem.price, quantity: data.quantity }
    if (!order) {
        order = {
            id: `o${orderStore.length + !}`,
            sessionId: data.sessionId,
            status: "PENDING",
            items: [cartItem],
            total: menuItem.price * data.quantity
        }
        orderStore.push(order)
    }
    else {
        order.items.push(cartItem)
        order.total += menuItem.price * data.quantity
    }
    return order
}

export function getCart(sessionId: string) {
    return orderStore.find(o => o.sessionId === sessionId && o.status === "PENDING")
}

export function calculate(sessionId: string) {
    const order = getCart(sessionId)
    if (!order) {
        throw new Error("No active order")
    }
    return
    {
        items: order?.items,
            total: order.total
    }
}