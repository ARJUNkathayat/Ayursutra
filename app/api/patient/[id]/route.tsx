import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";
import z from "zod";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const findPatient = await prisma.patient.findUnique({
    where: {
      id: Number(params.id), 
    },
  });

  if (!findPatient) {
    return NextResponse.json(
      { success: false, error: "Patient not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({ success: true, data: findPatient });
}

export async function PATCH(req: NextRequest,{params}:{params:{id:string}}) {
  try {
    const body = await req.json();
    const patientId = Number(params.id)

    const updateValidation = z.object({
      
      firstName: z.string().min(2).max(20).optional(),
      lastName: z.string().min(2).max(30).optional(),
      phoneNumber: z.string().length(10).optional(),
      gender: z.enum(["male", "female", "other"]).optional(),
      medicalHistory: z.string().optional(),
      age: z.number().min(1).max(100).optional(),
    });

    const parsed = updateValidation.parse(body);

    const updatedPatient = await prisma.patient.update({
      where: { id: patientId },
      data: {
        firstName: parsed.firstName,
        lastName: parsed.lastName,
        phoneNumber: parsed.phoneNumber,
        gender: parsed.gender,
        medicalHistory: parsed.medicalHistory,
        age: parsed.age,
      },
    });

    return NextResponse.json({ success: true, data: updatedPatient });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 400 });
  }
}










export async function DELETE(req:NextRequest,{params}:{params:{id:string}}) {
    const patientId = Number(params.id)
    const data = await prisma.patient.delete({
        where:{
            id:patientId
        }
    })
    return NextResponse.json({message:"Deleted Successfully"})
    
}