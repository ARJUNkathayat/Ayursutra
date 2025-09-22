import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } } // id comes as string
) {
  try {
    const userId = parseInt(params.id, 10); // convert to number

    if (isNaN(userId)) {
      return NextResponse.json(
        { success: false, error: "Invalid patient id" },
        { status: 400 }
      );
    }

    const getUserInfo = await prisma.patient.findUnique({
  where: { id: userId },
  include: {
    sessions: {
      include: {
        doctor: true,
        therapy: true
      }
    },
    feedbacks: true
  }
});


    if (!getUserInfo) {
      return NextResponse.json(
        { success: false, error: "Patient not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: getUserInfo }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
