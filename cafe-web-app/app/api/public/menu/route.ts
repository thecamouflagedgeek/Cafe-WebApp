import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {

  const menu = await prisma.menuItem.findMany({
    where: {
      available: true
    },
    select: {
      id: true,
      name: true,
      price: true,
      category: true,
      image: true
    }
  })

  return NextResponse.json(menu)
}
