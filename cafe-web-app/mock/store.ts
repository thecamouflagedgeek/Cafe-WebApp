import { MenuItem, Order } from "@/app/models/customer"

export const menuStore: MenuItem[] = [
  {
    id: "1",
    name: "Cappuccino",
    price: 150,
    category: "coffee",
    available: true
  }
]

export const orderStore: Order[] = []
