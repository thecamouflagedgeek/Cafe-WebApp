import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"
import bcrypt from "bcrypt"

export async function POST(req: Request) {

  const body = await req.json()

  const hashed = await bcrypt.hash(body.password, 10)

  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      password: hashed,
      role: body.role // OWNER / CUSTOMER / WAITER
    }
  })

  return NextResponse.json(user)
}
