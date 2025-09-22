import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

const feedbackValidation = z.object({
  sessionId: z.number(),
  patientId: z.number(),
  rating: z.number().min(1).max(5),
  comments: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = feedbackValidation.parse(body);

    const feedback = await prisma.feedback.create({
      data: parsed,
    });

    return NextResponse.json({ success: true, data: feedback }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 400 });
  }
}
