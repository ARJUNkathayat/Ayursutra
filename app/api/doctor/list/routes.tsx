import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const doctors = await prisma.doctor.findMany({
    include: { assignedTherapies: true },
  });
  return NextResponse.json({ success: true, data: doctors });
}
