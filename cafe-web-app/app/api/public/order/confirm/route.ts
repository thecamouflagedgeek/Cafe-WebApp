import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function PATCH(req: Request)
{
  const { sessionId } = await req.json()

  if (!sessionId) {
    return NextResponse.json({ error: "Session ID required" }, { status: 400 })
  }

  await prisma.order.updateMany({
    where: {
      sessionId,
      status: "PENDING"
    },
    data: {
      status: "PLACED"
    }
  })

  return NextResponse.json({ message: "Order placed successfully" })
}
