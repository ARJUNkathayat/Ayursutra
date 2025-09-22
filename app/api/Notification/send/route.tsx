import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

const notificationValidation = z.object({
  sessionId: z.number(),
  message: z.string(),
  type: z.enum(["PRE_PROCEDURE", "POST_PROCEDURE", "GENERAL"]),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = notificationValidation.parse(body);

    const notification = await prisma.notification.create({
      data: parsed,
    });

    return NextResponse.json({ success: true, data: notification }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 400 });
  }
}
