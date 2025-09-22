import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import DoctorProfileClient from "@/Components/DoctorProfileClient";

// Server component to fetch doctor data
async function getDoctor(id: string) {
  try {
    const doctor = await prisma.doctor.findUnique({
      where: {
        id: parseInt(id)
      },
      include: {
        assignedTherapies: true,
        sessions: {
          include: {
            patient: true,
            therapy: true
          }
        }
      }
    });
    
    return doctor;
  } catch (error) {
    console.error("Error fetching doctor:", error);
    return null;
  }
}

// Main server component
export default async function DoctorProfilePage({ params }: { params: { id: string } }) {
  const doctor = await getDoctor(params.id);
  
  if (!doctor) {
    notFound();
  }
  
  return <DoctorProfileClient doctor={doctor} />;
}
