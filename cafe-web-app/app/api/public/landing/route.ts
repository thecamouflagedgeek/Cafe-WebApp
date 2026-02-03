import { NextResponse } from "next/server"
import { randomUUID } from "crypto"

export async function GET(req: Request) {

  const { searchParams } = new URL(req.url)

  const tableId = searchParams.get("tableId") ?? "1"

  const sessionId = randomUUID()

  return NextResponse.json({
    success: true,
    cafeName: "Demo Cafe",
    message: "Welcome! Scan → Order → Eat → Repeat",
    tableId,
    sessionId,
    timestamp: new Date().toISOString()
  })
}
