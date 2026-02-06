import { NextResponse } from "next/server"
import { updateOrder } from "@/services/waiter.service"

export async function PATCH(
  req: Request,
  context: { params: Promise<{ orderId: string }> }
) {
  try {
    // 🚑 THIS IS THE KEY FIX
    const { orderId } = await context.params

    const body = await req.json()

    if (!body.status) {
      return NextResponse.json(
        { error: "status is required" },
        { status: 400 }
      )
    }

    const updated = updateOrder(orderId, body.status)

    return NextResponse.json(updated)
  } catch (error: any) {
    console.error("Order Update Error", error)

    return NextResponse.json(
      { error: error.message },
      { status: 400 }
    )
  }
}
