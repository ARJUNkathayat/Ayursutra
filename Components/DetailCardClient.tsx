"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function DetailCardClient({ therapy }: { therapy: any }) {
  const { name, description, category, durationMinutes, image } = therapy;
  const [data, setData] = useState<any>(null);
  const router = useRouter();

  const handleClick = (doctorName: string) => {
    router.push(`/bookSession/${doctorName}`);
  };

  useEffect(() => {
    if (name) {
      axios
        .get(`/api/doctor/byTherapy/${name}`)
        .then((res) => setData(res.data))
        .catch((err) => console.error(err));
    }
  }, [name]);

  if (!data) {
    return (
      <div 
        className="min-h-screen flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, #f7f3e9 0%, #e8dcc0 100%)'
        }}
      >
        <div className="text-center">
          <div 
            className="w-16 h-16 border-4 border-t-transparent rounded-full animate-spin mx-auto mb-4"
            style={{ borderColor: '#d4af37' }}
          ></div>
          <p 
            className="text-xl font-semibold"
            style={{ color: '#2d5016' }}
          >
            Loading therapy information...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen"
      style={{
        background: 'linear-gradient(135deg, #f7f3e9 0%, #e8dcc0 50%, #d4e7d4 100%)'
      }}
    >
      {/* Decorative Header */}
      <div className="w-full h-1" 
           style={{ background: 'linear-gradient(90deg, #d4af37, #6b8e23, #8b4513)' }}></div>
      
      <div className="p-6 sm:p-8 space-y-8 max-w-7xl mx-auto">
        {/* Therapy Info Card */}
        <div 
          className="shadow-2xl rounded-2xl overflow-hidden relative"
          style={{
            background: 'linear-gradient(145deg, #fdfcf7 0%, #f9f6ea 100%)',
            border: '2px solid #d4af37'
          }}
        >
          {/* Decorative Elements */}
          <div 
            className="absolute top-0 right-0 w-24 h-24 opacity-5"
            style={{
              background: 'radial-gradient(circle, #d4af37 0%, transparent 70%)'
            }}
          ></div>
          
          <div className="p-8 sm:p-10">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Image Section */}
              {image && (
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img
                      src={image}
                      alt={name}
                      className="w-48 h-48 sm:w-56 sm:h-56 object-cover rounded-xl shadow-lg"
                      style={{ border: '3px solid #d4af37' }}
                    />
                    {/* Decorative Corner */}
                    <div 
                      className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full"
                      style={{
                        background: 'linear-gradient(45deg, #d4af37, #f4e6a1)',
                        border: '2px solid #2d5016'
                      }}
                    ></div>
                  </div>
                </div>
              )}
              
              {/* Content Section */}
              <div className="flex-1 space-y-6">
                {/* Header */}
                <div className="text-center lg:text-left">
                  <h1 
                    className="text-3xl sm:text-4xl font-bold mb-4"
                    style={{ 
                      color: '#2d5016',
                      textShadow: '1px 1px 2px rgba(212, 175, 55, 0.2)'
                    }}
                  >
                    {name}
                  </h1>
                  <div 
                    className="inline-block px-4 py-1 rounded-full text-sm font-medium"
                    style={{
                      background: 'linear-gradient(45deg, #d4af37, #f4e6a1)',
                      color: '#2d5016'
                    }}
                  >
                    Ayurvedic Therapy
                  </div>
                </div>

                {/* Description */}
                <div 
                  className="p-6 rounded-xl shadow-sm"
                  style={{
                    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.08), rgba(212, 175, 55, 0.03))',
                    border: '1px solid rgba(212, 175, 55, 0.3)'
                  }}
                >
                  <p 
                    className="text-lg leading-relaxed"
                    style={{ color: '#2d5016' }}
                  >
                    {description}
                  </p>
                </div>

                {/* Details Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div 
                    className="p-4 rounded-xl shadow-sm"
                    style={{
                      background: 'linear-gradient(135deg, rgba(107, 142, 35, 0.1), rgba(107, 142, 35, 0.03))',
                      border: '1px solid rgba(107, 142, 35, 0.3)'
                    }}
                  >
                    <div className="flex items-center">
                      <div 
                        className="w-10 h-10 rounded-lg mr-3 flex items-center justify-center"
                        style={{ background: '#6b8e23' }}
                      >
                        <div className="w-4 h-4 rounded bg-white"></div>
                      </div>
                      <div>
                        <p 
                          className="font-semibold text-sm uppercase tracking-wide"
                          style={{ color: '#2d5016' }}
                        >
                          Category
                        </p>
                        <p 
                          className="text-lg font-bold"
                          style={{ color: '#6b8e23' }}
                        >
                          {category}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div 
                    className="p-4 rounded-xl shadow-sm"
                    style={{
                      background: 'linear-gradient(135deg, rgba(139, 69, 19, 0.1), rgba(139, 69, 19, 0.03))',
                      border: '1px solid rgba(139, 69, 19, 0.3)'
                    }}
                  >
                    <div className="flex items-center">
                      <div 
                        className="w-10 h-10 rounded-lg mr-3 flex items-center justify-center"
                        style={{ background: '#8b4513' }}
                      >
                        <div className="w-4 h-4 border-2 border-white rounded-full"></div>
                      </div>
                      <div>
                        <p 
                          className="font-semibold text-sm uppercase tracking-wide"
                          style={{ color: '#2d5016' }}
                        >
                          Duration
                        </p>
                        <p 
                          className="text-lg font-bold"
                          style={{ color: '#8b4513' }}
                        >
                          {durationMinutes} minutes
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Divider */}
        <div className="flex items-center justify-center my-10">
          <div 
            className="h-px w-20 mx-4"
            style={{ background: 'linear-gradient(to right, transparent, #d4af37, transparent)' }}
          ></div>
          <h2 
            className="text-2xl font-bold text-center"
            style={{ color: '#2d5016' }}
          >
            Available Practitioners
          </h2>
          <div 
            className="h-px w-20 mx-4"
            style={{ background: 'linear-gradient(to right, transparent, #6b8e23, transparent)' }}
          ></div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {data.data.map((doctor: any, index: number) => {
            let slots: string[] = [];
            try {
              slots = JSON.parse(doctor.availableSlots);
            } catch (err) {
              console.error("Invalid slots JSON", err);
            }

            const cardColors = [
              { bg: 'linear-gradient(145deg, rgba(212, 175, 55, 0.1), rgba(212, 175, 55, 0.03))', border: 'rgba(212, 175, 55, 0.4)', accent: '#d4af37' },
              { bg: 'linear-gradient(145deg, rgba(107, 142, 35, 0.1), rgba(107, 142, 35, 0.03))', border: 'rgba(107, 142, 35, 0.4)', accent: '#6b8e23' },
              { bg: 'linear-gradient(145deg, rgba(139, 69, 19, 0.1), rgba(139, 69, 19, 0.03))', border: 'rgba(139, 69, 19, 0.4)', accent: '#8b4513' }
            ];
            const colorScheme = cardColors[index % 3];

            return (
              <div
                key={doctor.id}
                onClick={() => handleClick(doctor.name)}
                className="cursor-pointer rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 overflow-hidden group relative"
                style={{
                  background: colorScheme.bg,
                  border: `2px solid ${colorScheme.border}`
                }}
              >
                {/* Hover Effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${colorScheme.accent}, transparent)`
                  }}
                ></div>

                <div className="p-6 relative z-10">
                  {/* Doctor Header */}
                  <div className="text-center mb-6">
                    <div 
                      className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                      style={{ background: colorScheme.accent }}
                    >
                      <div className="text-white text-2xl font-bold">
                        {doctor.name.charAt(0)}
                      </div>
                    </div>
                    <h3 
                      className="text-xl font-bold mb-2"
                      style={{ color: '#2d5016' }}
                    >
                       {doctor.name}
                    </h3>
                    <div 
                      className="inline-block px-4 py-1 rounded-full text-sm font-medium"
                      style={{
                        background: colorScheme.accent,
                        color: 'white'
                      }}
                    >
                      {doctor.specialization}
                    </div>
                  </div>

                  {/* Experience */}
                  <div 
                    className="p-3 rounded-lg mb-4 text-center"
                    style={{
                      background: 'rgba(255, 255, 255, 0.7)',
                      border: `1px solid ${colorScheme.border}`
                    }}
                  >
                    <div className="flex items-center justify-center">
                      <div 
                        className="w-6 h-6 rounded mr-2"
                        style={{ background: colorScheme.accent }}
                      ></div>
                      <span 
                        className="font-semibold"
                        style={{ color: '#2d5016' }}
                      >
                        {doctor.experienceYears} years experience
                      </span>
                    </div>
                  </div>

                  {/* Available Slots */}
                  <div className="mb-6">
                    <h4 
                      className="font-bold mb-3 text-center"
                      style={{ color: '#2d5016' }}
                    >
                      Available Time Slots
                    </h4>
                    <div 
                      className="max-h-32 overflow-y-auto rounded-lg p-3"
                      style={{
                        background: 'rgba(255, 255, 255, 0.7)',
                        border: `1px solid ${colorScheme.border}`
                      }}
                    >
                      {slots.length > 0 ? (
                        <div className="space-y-2">
                          {slots.slice(0, 3).map((slot, idx) => (
                            <div 
                              key={idx}
                              className="text-sm p-2 rounded"
                              style={{
                                background: `${colorScheme.accent}15`,
                                color: '#2d5016',
                                border: `1px solid ${colorScheme.border}`
                              }}
                            >
                              {new Date(slot).toLocaleDateString()} • {new Date(slot).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                            </div>
                          ))}
                          {slots.length > 3 && (
                            <p 
                              className="text-xs text-center font-medium"
                              style={{ color: colorScheme.accent }}
                            >
                              +{slots.length - 3} more available
                            </p>
                          )}
                        </div>
                      ) : (
                        <div className="text-center py-4">
                          <p 
                            className="text-sm"
                            style={{ color: '#6b8e23' }}
                          >
                            Please contact for availability
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Book Button */}
                  <button 
                    className="w-full py-3 px-4 rounded-lg font-semibold shadow-md transform group-hover:scale-[1.02] transition-all duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${colorScheme.accent}, ${colorScheme.accent}dd)`,
                      color: 'white'
                    }}
                  >
                    Book Session
                  </button>
                </div>

                {/* Status Indicator */}
                <div 
                  className="absolute top-4 right-4 w-3 h-3 rounded-full"
                  style={{
                    background: slots.length > 0 ? '#22c55e' : '#ef4444'
                  }}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center pt-10 pb-6">
          <div 
            className="max-w-lg mx-auto p-6 rounded-xl"
            style={{
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.08), rgba(107, 142, 35, 0.08))',
              border: '1px solid rgba(212, 175, 55, 0.3)'
            }}
          >
            <p 
              className="text-lg font-medium italic"
              style={{ color: '#2d5016' }}
            >
              "Traditional healing meets modern convenience"
            </p>
            <div 
              className="w-16 h-px mx-auto mt-4"
              style={{ background: '#6b8e23' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
