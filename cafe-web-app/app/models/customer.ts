import {menuStore, orderStore} from "@/mock/store"

export interface MenuItem
{
    id:string
    name:string
    price:number 
    category:string 
    image?: string 
    available:boolean
}
export interface CartItem 
{
    menuItem: MenuItem 
    quantity:number 
}

export interface Order 
{
    sessionId:string 
    items: CartItem[]
    status:"PENDING"|"PLACED"|"DONE"
    createdAt:Date
}