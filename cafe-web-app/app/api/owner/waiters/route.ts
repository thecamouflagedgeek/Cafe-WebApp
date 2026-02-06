import { NextResponse } from "next/server"
import { getWaiters } from "@/services/owner.service"

export async function GET() {
  return NextResponse.json(getWaiters())
}
