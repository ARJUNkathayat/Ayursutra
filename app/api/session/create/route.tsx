import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

const sessionValidation = z.object({
  patientId: z.number(),
  doctorId: z.number(),
  therapyId: z.number(),
  scheduledAt: z.string(), // ISO string datetime
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = sessionValidation.parse(body);

    const session = await prisma.session.create({
      data: {
        patientId: parsed.patientId,
        doctorId: parsed.doctorId,
        therapyId: parsed.therapyId,
        scheduledAt: new Date(parsed.scheduledAt),
        status: "PENDING",
      },
      include: { patient: true, doctor: true, therapy: true },
    });

    return NextResponse.json({ success: true, data: session }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 400 });
  }
}
