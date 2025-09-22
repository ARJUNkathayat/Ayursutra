import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// GET doctor by name
export async function GET(
  req: NextRequest,
  { params }: { params: { doctorName: string } }
) {
  try {
    const { doctorName } =  await params;
 
    // doctorName URL safe hai to decode karna better hai
    const decodedName = decodeURIComponent(doctorName);

    const doctor = await prisma.doctor.findFirst({
      where: { name: decodedName },
      include: {
        assignedTherapies: true,
        sessions: true,
      },
    });

    if (!doctor) {
      return NextResponse.json(
        { success: false, message: "Doctor not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: doctor });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
