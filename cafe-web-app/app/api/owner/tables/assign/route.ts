import { NextResponse } from "next/server"
import { assignWaiter } from "@/services/owner.service"

export async function PATCH(req: Request) {
  const { tableId, waiterId } = await req.json()
  return NextResponse.json(assignWaiter(tableId, waiterId))
}
