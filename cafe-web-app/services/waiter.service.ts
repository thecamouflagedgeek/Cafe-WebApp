import {tables, orders} from "../mock/db";

export function getTables(waiterId:string)
{
    return tables.filter(t =>t.waiterId ===waiterId)
}

export function getOrders(tableId: string)
{
    return orders.filter(o=>o.tableId === tableId)
}
export function updateOrder(orderId:string, status:string)
{
    const order=orders.find(o=>o.id===orderId)
    
    if(!order)
    {
        throw new Error("Order not found")
    }
    if(order.status === "done")
    {
        throw new Error("Order is completed")
    }
    if(!status)
    {
        throw new Error("Invalid status")
    }
    order.status="done"
    return order
}


