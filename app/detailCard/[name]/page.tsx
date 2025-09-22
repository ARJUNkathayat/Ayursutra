import DetailCardClient from "@/Components/DetailCardClient";
import Navbar from "@/Components/navbar";
import { prisma } from "@/lib/prisma";


export default async function DetailCardPage({ params }: { params: { name: string } }) {
  const therapy = await prisma.therapy.findUnique({
    where: { name: params.name },
  });

  if (!therapy) {
    return <p>Therapy not found</p>;
  }

  return (
    <div>
      <Navbar/>
       <DetailCardClient therapy={therapy} />
    </div>
   
    
  );
}
