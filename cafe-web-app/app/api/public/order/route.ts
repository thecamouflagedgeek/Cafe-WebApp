import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(req: Request)
{
  const body = await req.json()
  const { sessionId, menuItemId, quantity } = body
  if (!sessionId || !menuItemId || !quantity)
  {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 })
  }

  const menuItem = await prisma.menuItem.findUnique({
    where: { id: menuItemId }
  })

  if (!menuItem)
{
    return NextResponse.json({ error: "Menu item not found" }, { status: 404 })
  }
  const order = await prisma.order.create({
    data: {
      sessionId,
      cafeId: menuItem.cafeId,
      tableId: menuItem.tableId, 
      status: "PENDING",
      items: {
        create: {
          menuItemId,
          quantity,
          price: menuItem.price
        }
      }
    }
  })
  return NextResponse.json(order)
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const sessionId = searchParams.get("sessionId")

  if (!sessionId) {
    return NextResponse.json({ error: "Session ID required" }, { status: 400 })
  }

  const orders = await prisma.order.findMany({
    where: { sessionId },
    include: {
      items: {
        include: {
          menuItem: true
        }
      }
    }
  })

  return NextResponse.json(orders)
}
