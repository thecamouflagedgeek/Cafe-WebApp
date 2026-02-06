import { NextResponse } from "next/server"
import { getDashboard } from "@/services/owner.service"

export async function GET() {
  return NextResponse.json(getDashboard())
}
