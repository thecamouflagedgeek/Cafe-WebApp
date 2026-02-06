import {NextResponse } from "next/server"
import {getOrders} from "@/services/waiter.service"

export async function GET(req:Request)
{
    try 
    {
        const{searchParams}=new URL(req.url)
        const tableId=searchParams.get("tableId")
        if(!tableId)
        {
            return NextResponse.json({error:"tableId is required"},{status:400})
        }
        const orders=getOrders(tableId)

        return NextResponse.json(orders)
    }
    catch(error:any)
    {
        console.error("Waiter Orders Error:", error)
        return NextResponse.json({error:"Internal server error"},{status:500})
    }
}