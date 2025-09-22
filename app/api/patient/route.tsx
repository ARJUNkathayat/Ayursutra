import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import z, { success } from "zod";
import jwt from "jsonwebtoken";
import { cookies} from "next/headers";
const secretKey = "panchKarmaministryofAyush";

// Validation (add password)
const formValidation = z.object({
  firstName: z.string().min(2).max(20),
  lastName: z.string().min(2).max(30),
  phoneNumber: z.string().length(10),
  gender: z.enum(["male", "female", "other"]),
  medicalHistory: z.string().optional(),
  age: z.number().min(1).max(100),
  password: z.string().min(6, "Password must be at least 6 characters"), // ✅ Add this
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = formValidation.parse(body);

    // Hash password before saving (important for security!)
    // You can use bcryptjs
    // const hashedPassword = await bcrypt.hash(parsed.password, 10);

    const patient = await prisma.patient.create({
      data: {
        ...parsed,
        // password: hashedPassword,
        password: parsed.password, // use hashed version in production
      },
    });

    const payload = { id: patient.id, firstName: patient.firstName };
    const token = jwt.sign(payload, secretKey, { expiresIn: "1d" });

    const cookie = await cookies();
    cookie.set("Token", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      path: "/",
    });

    return NextResponse.json({ success: true, data: patient });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 400 });
  }
}
