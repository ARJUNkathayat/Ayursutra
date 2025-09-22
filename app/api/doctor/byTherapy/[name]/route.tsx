import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { name: string } }
) {
  try {
    const therapyName = await params.name;
    if (!therapyName) {
      return NextResponse.json({ success: false, error: "Therapy name required" }, { status: 400 });
    }

    const therapy = await prisma.therapy.findUnique({
      where: { name: therapyName },
      select: { id: true },
    });

    if (!therapy) {
      return NextResponse.json({ success: false, error: "Therapy not found" }, { status: 404 });
    }

    const doctors = await prisma.doctor.findMany({
      where: {
        assignedTherapies: {
          some: { id: therapy.id },
        },
      },
      select: {
        id: true,
        name: true,
        specialization: true,
        experienceYears: true,
        availableSlots: true,
      },
    });

    return NextResponse.json({ success: true, data: doctors });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
