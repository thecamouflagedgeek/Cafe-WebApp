import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {

  // 1️⃣ Read body
  const body = await req.json()

  const { sessionId, menuItemId, quantity, cafeId } = body

  // 2️⃣ Validate input (don't trust frontend)
  if (!sessionId || !menuItemId || !quantity || !cafeId) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    )
  }

  // 3️⃣ Fetch menu item price
  const menu = await prisma.menuItem.findUnique({
    where: { id: menuItemId }
  })

  if (!menu) {
    return NextResponse.json(
      { error: "Menu item not found" },
      { status: 404 }
    )
  }

  // 4️⃣ Create order + order item
  const order = await prisma.order.create({
    data: {
      sessionId,
      status: "PENDING",

      cafe: {
        connect: { id: cafeId }
      },

      customer: {
        connectOrCreate: {
          where: { email: `${sessionId}@guest.com` },
          create: {
            email: `${sessionId}@guest.com`,
            role: "CUSTOMER"
          }
        }
      },

      items: {
        create: {
          menuItemId,
          quantity,
          price: menu.price
        }
      }
    },

    include: {
      items: true
    }
  })

  return NextResponse.json(order)
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const sessionId = searchParams.get("sessionId")

  if (!sessionId) {
    return Response.json({ error: "Missing sessionId" }, { status: 400 })
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

  return Response.json(orders)
}

