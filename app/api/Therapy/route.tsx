import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

// Prisma model ke fields ke hisaab se schema
const formData = z.object({
  name: z.string().min(3),
  description: z.string(),
  durationMinutes: z.number().min(5),
  category: z.string().optional(),
  image: z.string().optional(),
  precautions: z.string().optional(),
  benefits: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const sendData = {
      name: body.name,
      description: body.description,
      durationMinutes: body.durationMinutes, // ✅ correct field name
      image: body.image,
      precautions: body.precautions,
      category: body.category,
      benefits: body.benefits,
    };

    const result = formData.safeParse(sendData);

    if (!result.success) {
      console.error("Invalid data received:", result.error.format());
      return NextResponse.json(
        { message: "Invalid data", errors: result.error.format() },
        { status: 400 }
      );
    }

    const therapy = await prisma.therapy.create({
      data: result.data, // ✅ validated data directly
    });

    console.log("Validation successful. Received data:", result.data);

    return NextResponse.json(
      { message: "Data saved successfully!", data: therapy },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const therapies = await prisma.therapy.findMany();
    return NextResponse.json({ success: true, data: therapies });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch therapies" },
      { status: 500 }
    );
  }
}

