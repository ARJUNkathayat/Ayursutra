"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface DoctorProfileClientProps {
  doctor: any;
}

export default function DoctorProfileClient({ doctor }: DoctorProfileClientProps) {
  const router = useRouter();
  const [selectedSlot, setSelectedSlot] = useState("");

  const handleBooking = () => {
    if (selectedSlot) {
      router.push(`/bookSession/${doctor.name}?slot=${selectedSlot}`);
    } else {
      router.push(`/bookSession/${doctor.name}`);
    }
  };

  const availableSlots = doctor.availableSlots ? 
    (typeof doctor.availableSlots === 'string' ? 
      JSON.parse(doctor.availableSlots || '[]') : 
      doctor.availableSlots) : [];

  return (
    <div 
      className="min-h-screen"
      style={{
        background: 'linear-gradient(135deg, #f7f3e9 0%, #e8dcc0 50%, #d4e7d4 100%)'
      }}
    >
      {/* Header */}
      <div className="w-full h-1" 
           style={{ background: 'linear-gradient(90deg, #d4af37, #6b8e23, #8b4513)' }}></div>

      <div className="max-w-6xl mx-auto px-6 py-8 space-y-8">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105"
          style={{
            background: 'rgba(107, 142, 35, 0.1)',
            color: '#2d5016',
            border: '1px solid rgba(107, 142, 35, 0.3)'
          }}
        >
          <div className="w-4 h-4 border-l-2 border-b-2 transform rotate-45" style={{ borderColor: '#2d5016' }}></div>
          Back to Practitioners
        </button>

        {/* Main Profile Section */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Doctor Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Header */}
            <div 
              className="shadow-2xl rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #fdfcf7 0%, #f9f6ea 100%)',
                border: '2px solid #d4af37'
              }}
            >
              <div 
                className="p-8 text-center"
                style={{
                  background: 'linear-gradient(135deg, #d4af37, #f4e6a1)'
                }}
              >
                <div 
                  className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold shadow-xl"
                  style={{ 
                    background: '#2d5016',
                    color: 'white'
                  }}
                >
                  {doctor.name.charAt(0)}
                </div>
                <h1 
                  className="text-3xl font-bold"
                  style={{ color: '#2d5016' }}
                >
                  Dr. {doctor.name}
                </h1>
                <div 
                  className="inline-block px-4 py-2 rounded-full text-lg font-semibold mt-2"
                  style={{
                    background: '#2d5016',
                    color: 'white'
                  }}
                >
                  {doctor.specialization || 'Ayurvedic Practitioner'}
                </div>
              </div>

              <div className="p-8 space-y-6">
                {/* Contact Information */}
                <div className="grid sm:grid-cols-2 gap-6">
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
                        <p className="text-sm font-medium" style={{ color: '#2d5016' }}>Email</p>
                        <p className="font-semibold" style={{ color: '#6b8e23' }}>{doctor.email}</p>
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
                        <p className="text-sm font-medium" style={{ color: '#2d5016' }}>Phone</p>
                        <p className="font-semibold" style={{ color: '#8b4513' }}>{doctor.phone}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience & Location */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {doctor.experienceYears && (
                    <div 
                      className="p-4 rounded-xl shadow-sm"
                      style={{
                        background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(212, 175, 55, 0.03))',
                        border: '1px solid rgba(212, 175, 55, 0.3)'
                      }}
                    >
                      <div className="flex items-center">
                        <div 
                          className="w-10 h-10 rounded-lg mr-3 flex items-center justify-center"
                          style={{ background: '#d4af37' }}
                        >
                          <div className="w-4 h-4 bg-white rounded"></div>
                        </div>
                        <div>
                          <p className="text-sm font-medium" style={{ color: '#2d5016' }}>Experience</p>
                          <p className="font-semibold text-lg" style={{ color: '#d4af37' }}>
                            {doctor.experienceYears} years
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {doctor.state && (
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
                          <div className="w-4 h-4 border-2 border-white rounded"></div>
                        </div>
                        <div>
                          <p className="text-sm font-medium" style={{ color: '#2d5016' }}>Location</p>
                          <p className="font-semibold" style={{ color: '#6b8e23' }}>{doctor.state}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Therapies Offered */}
            {doctor.assignedTherapies && doctor.assignedTherapies.length > 0 && (
              <div 
                className="shadow-2xl rounded-2xl p-8"
                style={{
                  background: 'linear-gradient(145deg, #fdfcf7 0%, #f9f6ea 100%)',
                  border: '2px solid #6b8e23'
                }}
              >
                <h2 
                  className="text-2xl font-bold mb-6"
                  style={{ color: '#2d5016' }}
                >
                  Therapies Offered
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {doctor.assignedTherapies.map((therapy: any, index: number) => (
                    <div
                      key={therapy.id}
                      className="p-4 rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
                      style={{
                        background: index % 2 === 0 
                          ? 'linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(212, 175, 55, 0.05))'
                          : 'linear-gradient(135deg, rgba(107, 142, 35, 0.15), rgba(107, 142, 35, 0.05))',
                        border: `2px solid ${index % 2 === 0 ? '#d4af37' : '#6b8e23'}`
                      }}
                    >
                      <h3 
                        className="font-bold mb-2"
                        style={{ color: '#2d5016' }}
                      >
                        {therapy.name}
                      </h3>
                      <p className="text-sm" style={{ color: '#2d5016' }}>
                        {therapy.description}
                      </p>
                      {therapy.durationMinutes && (
                        <p className="text-xs mt-2" style={{ color: index % 2 === 0 ? '#d4af37' : '#6b8e23' }}>
                          Duration: {therapy.durationMinutes} minutes
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Booking */}
          <div className="lg:col-span-1">
            <div 
              className="shadow-2xl rounded-2xl p-8 sticky top-8"
              style={{
                background: 'linear-gradient(145deg, #fdfcf7 0%, #f9f6ea 100%)',
                border: '2px solid #8b4513'
              }}
            >
              <h2 
                className="text-2xl font-bold mb-6 text-center"
                style={{ color: '#2d5016' }}
              >
                Book Consultation
              </h2>

              {/* Available Slots */}
              <div className="mb-6">
                <h3 
                  className="font-semibold mb-4"
                  style={{ color: '#2d5016' }}
                >
                  Available Time Slots
                </h3>
                <div className="max-h-64 overflow-y-auto space-y-2">
                  {availableSlots.length > 0 ? (
                    availableSlots.map((slot: string, index: number) => (
                      <div
                        key={index}
                        onClick={() => setSelectedSlot(slot)}
                        className={`p-3 rounded-lg cursor-pointer transition-all duration-300 border-2 ${
                          selectedSlot === slot ? 'shadow-lg scale-105' : 'hover:scale-102'
                        }`}
                        style={{
                          background: selectedSlot === slot 
                            ? 'linear-gradient(45deg, #8b4513, #cd853f)'
                            : 'rgba(255, 255, 255, 0.7)',
                          borderColor: selectedSlot === slot ? '#8b4513' : 'rgba(139, 69, 19, 0.3)',
                          color: selectedSlot === slot ? 'white' : '#2d5016'
                        }}
                      >
                        <div className="text-sm font-medium">
                          {new Date(slot).toLocaleDateString()}
                        </div>
                        <div className="text-xs">
                          {new Date(slot).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <div 
                        className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                        style={{ background: 'rgba(139, 69, 19, 0.1)' }}
                      >
                        <div className="w-8 h-8 rounded bg-gray-400"></div>
                      </div>
                      <p style={{ color: '#6b8e23' }} className="text-sm">
                        No slots available. Please contact directly.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Booking Button */}
              <button
                onClick={handleBooking}
                className="w-full py-4 px-6 rounded-xl font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                style={{
                  background: 'linear-gradient(45deg, #8b4513, #cd853f)',
                  color: 'white',
                  border: '2px solid #2d5016'
                }}
              >
                Book Consultation
              </button>

              {/* Contact Info */}
              <div className="mt-6 pt-6" style={{ borderTop: '1px solid rgba(139, 69, 19, 0.2)' }}>
                <p 
                  className="text-sm text-center mb-3"
                  style={{ color: '#2d5016' }}
                >
                  Need assistance?
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={`tel:${doctor.phone}`}
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'rgba(107, 142, 35, 0.1)',
                      color: '#6b8e23',
                      border: '1px solid rgba(107, 142, 35, 0.3)'
                    }}
                  >
                    Call
                  </a>
                  <a
                    href={`mailto:${doctor.email}`}
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'rgba(212, 175, 55, 0.1)',
                      color: '#d4af37',
                      border: '1px solid rgba(212, 175, 55, 0.3)'
                    }}
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Quote */}
        <div className="text-center pt-8">
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
              "The best doctor gives the least medicines"
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
