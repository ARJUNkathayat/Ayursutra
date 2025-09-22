"use client";

import { useRouter } from "next/navigation";

type TherapyProps = {
  name: string;
  description: string;
  durationMinutes: string;
  image: string;
  category: string;
  benefits: string;
}

export default function Card({
  name, description, durationMinutes, image, category, benefits
}: TherapyProps) {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/detailCard/${name}`);
  }

  return (
    <div 
      className="shadow-xl rounded-xl w-80 cursor-pointer transform hover:scale-[1.02] transition-all duration-300 overflow-hidden group"
      style={{
        background: 'linear-gradient(145deg, #fdfcf7 0%, #f9f6ea 100%)',
        border: '2px solid #d4af37'
      }}
      onClick={handleNavigate}
    >
      {/* Image Container */}
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="h-48 w-full object-cover"
        />
        {/* Overlay on hover */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(135deg, #d4af37, transparent)'
          }}
        ></div>
        
        {/* Category Badge */}
        <div 
          className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold"
          style={{
            background: 'linear-gradient(45deg, #d4af37, #f4e6a1)',
            color: '#2d5016'
          }}
        >
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h2 
          className="text-xl font-bold leading-tight"
          style={{ color: '#2d5016' }}
        >
          {name}
        </h2>

        {/* Description */}
        <p 
          className="text-sm leading-relaxed line-clamp-3"
          style={{ color: '#2d5016' }}
        >
          {description}
        </p>

        {/* Details Grid */}
        <div className="space-y-3">
          {/* Duration */}
          <div className="flex items-center">
            <div 
              className="w-4 h-4 rounded mr-3"
              style={{ background: '#6b8e23' }}
            ></div>
            <span 
              className="text-sm font-medium"
              style={{ color: '#2d5016' }}
            >
              Duration: {durationMinutes}
            </span>
          </div>

          {/* Benefits */}
          <div className="flex items-start">
            <div 
              className="w-4 h-4 rounded mr-3 mt-0.5"
              style={{ background: '#8b4513' }}
            ></div>
            <span 
              className="text-sm leading-relaxed"
              style={{ color: '#2d5016' }}
            >
              {benefits}
            </span>
          </div>
        </div>

        {/* Action Button */}
        <button 
          className="w-full mt-6 py-3 px-4 rounded-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #d4af37, #f4e6a1)',
            color: '#2d5016',
            border: '2px solid #2d5016'
          }}
          onClick={handleNavigate}
        >
          Explore Therapy
        </button>
      </div>

      <div 
        className="h-1"
        style={{
          background: 'linear-gradient(90deg, #d4af37, #6b8e23, #8b4513)'
        }}
      ></div>
    </div>
  )
}
