import Image from "next/image";

export default function TherapyCard() {
  return (
    <div className="w-80 h-[28rem] bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      {/* Image Section */}
      <div className="relative h-56 w-full">
        <Image
          src="/therapy.jpg" // replace with dynamic therapy.image
          alt="Therapy"
          fill
          className="object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-2">
        <h1 className="text-xl font-bold text-gray-800">Therapy Name</h1>
        <p className="text-sm text-gray-600 line-clamp-2">
          Short description of the therapy goes here. (max 2 lines)
        </p>

        <div className="mt-3">
          <p className="text-gray-700 font-medium">⏳ Duration: 60 mins</p>
          <p className="text-gray-700 font-medium">✨ Benefits: Relaxation</p>
        </div>

        {/* Button */}
        <button className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-xl hover:bg-green-600 transition-colors">
          Book Now
        </button>
      </div>
    </div>
  );
}
