  import { prisma } from "@/lib/prisma";
  import { NextRequest, NextResponse } from "next/server";
  import { cookies } from "next/headers";
  import jwt from "jsonwebtoken";

  const secretKey = "panchKarmaministryofAyush"; // move this to .env

  export async function POST(req: NextRequest) {
    try {
      const { phoneNumber, password } = await req.json();

      // Find user
      const findUser = await prisma.patient.findUnique({
        where: { phoneNumber },
      });

      if (!findUser) {
        return NextResponse.json({ message: "User not found" }, { status: 404 });
      }

      // Plain text password check
      if (findUser.password !== password) {
        return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
      }

      // Create JWT
      const token = jwt.sign(
        { id: findUser.id, phoneNumber: findUser.phoneNumber },
        secretKey,
        { expiresIn: "7d" }
      );

      const cookie = await cookies();
      cookie.set("authToken", token, {
        httpOnly: true,
         path: "/",
        maxAge: 60 * 60 * 24 * 7, 
        
      });
      console.log(findUser)

  return NextResponse.json({
    success: true,
    message: "Login successful",
    data: { id: findUser.id, phoneNumber: findUser.phoneNumber }
  });

    } catch (err) {
      console.error("Login Error:", err);
  return NextResponse.json({ success: false, error: "Invalid credentials" }, { status: 401 });

    }
  }
