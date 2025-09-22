import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

const formValidation = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().length(10),
  specialization: z.string().min(2),
  experienceYears: z.number().min(0).max(50),
  therapyIds: z.array(z.number()).min(1),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = formValidation.parse(body);

    const doctor = await prisma.doctor.create({
      data: {
        name: parsed.name,
        email: parsed.email,
        phone: parsed.phone,
        specialization: parsed.specialization,
        experienceYears: parsed.experienceYears,
         availableSlots: "[]",
        assignedTherapies: {
          connect: parsed.therapyIds.map((id) => ({ id })),
        },
      },
      include: { assignedTherapies: true },
    });

    return NextResponse.json({ success: true, data: doctor }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 400 });
  }
}
