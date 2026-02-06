import { NextResponse } from "next/server"
import { getAnalytics } from "@/services/owner.service"

export async function GET() {
  return NextResponse.json(getAnalytics())
}
