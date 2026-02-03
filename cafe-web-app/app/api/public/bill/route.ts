import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(req: Request) {

  const { searchParams } = new URL(req.url)

  const sessionId = searchParams.get("sessionId")

  if (!sessionId) {
    return NextResponse.json({ error: "Session missing" }, { status: 400 })
  }

  const orders = await prisma.order.findMany({
    where: {
      sessionId
    },
    include: {
      items: {
        include: {
          menuItem: true
        }
      }
    }
  })

  let subtotal = 0

  orders.forEach(order => {
    order.items.forEach(item => {
      subtotal += item.quantity * item.menuItem.price
    })
  })

  const tax = subtotal * 0.05
  const total = subtotal + tax

  return NextResponse.json({
    subtotal,
    tax,
    total,
    orders
  })
}
