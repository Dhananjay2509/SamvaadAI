import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
  try {
    const { identifier, password } = await request.json();

    // 1. Find user by email OR username
    const user = await prisma.user.findFirst({
      where: {
        OR: [{ email: identifier }, { username: identifier }],
      },
    });

    if (!user) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 },
      );
    }

    // Generate token
    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
        email: user.email,
      },
      process.env.JWT_SECRET!,
      {
        expiresIn: "7d",
      },
    );

    // 2. Check Password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log("isvalid", isPasswordValid);

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 },
      );
    }

    // 3. Create Session
    // const session = await prisma.session.create({
    //     data: {
    //         userId: user.id,
    //         expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    //     }
    // })

    // 4. Success
    const response = NextResponse.json({
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
      // session: {
      //     id: session.id,
      //     expiresAt: session.expiresAt
      // }
      message: "Login successful",
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
