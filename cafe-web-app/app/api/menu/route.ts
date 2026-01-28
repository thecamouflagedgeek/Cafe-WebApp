import { NextResponse } from "next/server"
import {createItem, getItem} from "@/lib/services/menu.service"

export async function POST(req: Request)
{
    const body=await req.json()
    const item=await createItem({
        name:body.name,
        price:body.price,
        category:body.category,
        cid:body.cid
    })

    return NextResponse.json(item)
}

export async function GET(req: Request)
{
    const {searchParams}=new URL(req.url)
    const cid= searchParams.get("cid")

    if(!cid)
    {
        return NextResponse.json(
            {error:"The ID is required"},
        {status:400})
    }

    const menu=await getItem(cid)
    return NextResponse.json(menu)
}
