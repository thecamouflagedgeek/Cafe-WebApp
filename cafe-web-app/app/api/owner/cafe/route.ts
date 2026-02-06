import { NextResponse } from "next/server"
import { getCafe, updateCafe } from "@/services/owner.service"

export async function GET() {
  return NextResponse.json(getCafe())
}

export async function PATCH(req: Request) {
  const body = await req.json()
  return NextResponse.json(updateCafe(body))
}
