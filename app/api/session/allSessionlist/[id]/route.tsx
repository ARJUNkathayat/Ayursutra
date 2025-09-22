import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const doctorId = parseInt(params.id, 10);
    const sessions = await prisma.session.findMany({
      where: { doctorId },
      include: { patient: true, doctor: true, therapy: true },
    });
    return NextResponse.json({ success: true, data: sessions });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
