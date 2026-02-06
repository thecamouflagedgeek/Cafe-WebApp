import {NextResponse} from "next/server"
import { getTables } from "@/services/waiter.service"

export async function GET()
{
    const waiterId="w1"
    const tables=getTables(waiterId)
    return NextResponse.json(tables)
}