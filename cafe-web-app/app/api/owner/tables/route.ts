import { NextResponse } from "next/server"
import { getTables } from "@/services/owner.service"

export async function GET() {
  return NextResponse.json(getTables())
}
