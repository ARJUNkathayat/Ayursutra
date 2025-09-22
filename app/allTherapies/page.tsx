import Card from "@/Components/Card";
import Navbar from "@/Components/navbar";
import { prisma } from "@/lib/prisma";

export default async function TherapiesPage() {
  const data = await prisma.therapy.findMany();
  console.log(data);

  return (
    <div>
      <Navbar/>

       <div className="bg-pink-100 min-h-screen py-20 px-20">
   
      <div className="grid grid-cols-3 gap-8">
        {data.map((therapy, index) => (
          <Card
            
            key={index}
            name={therapy.name}
            description={therapy.description}
            durationMinutes={`${therapy.durationMinutes} mins`}
            image={therapy.image || "/default-therapy.jpg"} // fallback image
            category={therapy.category || "General"}
            benefits={therapy.benefits || "No details available"}
          />
        ))}
      </div>
    </div>
    </div>
   
  );
}
