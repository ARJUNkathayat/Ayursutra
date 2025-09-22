"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "@/Components/navbar";
export default function DoctorPage() {
  const { doctorName } = useParams();
  const [doctor, setDoctor] = useState<any>(null);
  const [newSlot, setNewSlot] = useState<string>("");
  const [loading, setLoading] = useState(false);

  // Fetch doctor info
  useEffect(() => {
    if (!doctorName) return;
    const fetchDoctor = async () => {
      try {
        const res = await axios.get(`/api/doctor/${doctorName}`);
        setDoctor(res.data.data);
      } catch (err) {
        console.error("Error fetching doctor:", err);
      }
    };
    fetchDoctor();
  }, [doctorName]);

  // Book slot
  const handleBooking = async () => {
    if (!newSlot) return alert("Please select a date & time!");
    try {
      setLoading(true);
      const res = await axios.post("/api/session/create", {
        doctorId: doctor.id,
        scheduledAt: newSlot,
        patientId: 8,
        therapyId: doctor.assignedTherapies?.[0]?.id || null,
      });
      alert("✅ Slot booked successfully!");
      setDoctor((prev: any) => ({
        ...prev,
        sessions: [...prev.sessions, res.data],
      }));
      setNewSlot("");
    } catch (err) {
      console.error("Booking error:", err);
      alert("❌ Failed to book slot");
    } finally {
      setLoading(false);
    }
  };

  if (!doctor) {
    return (
      <div 
        className="flex items-center justify-center min-h-screen"
        style={{
          background: 'linear-gradient(135deg, #f7f3e9 0%, #e8dcc0 100%)'
        }}
      >
       
        <div className="text-center">
          <div 
            className="w-16 h-16 border-4 border-t-transparent rounded-full animate-spin mx-auto mb-4"
            style={{ borderColor: '#d4af37' }}
          ></div>
          <h1 
            className="text-2xl font-semibold"
            style={{ color: '#2d5016' }}
          >
            Loading Ayurveda Doctor...
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar/>
       <div 
      className="min-h-screen p-4 sm:p-6"
      style={{
        background: 'linear-gradient(135deg, #f7f3e9 0%, #e8dcc0 50%, #d4e7d4 100%)'
      }}
    >
      <div className="absolute top-0 left-0 w-full h-2" 
           style={{ background: 'linear-gradient(90deg, #d4af37, #6b8e23, #8b4513)' }}></div>
      
      <div className="flex items-center justify-center">
        <div 
          className="shadow-2xl rounded-3xl w-full max-w-4xl relative overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, #fdfcf7 0%, #f9f6ea 100%)',
            border: '3px solid #d4af37'
          }}
        >
          {/* Decorative Corner Elements */}
          <div 
            className="absolute top-0 right-0 w-32 h-32 opacity-10"
            style={{
              background: 'radial-gradient(circle, #d4af37 0%, transparent 70%)'
            }}
          ></div>
          <div 
            className="absolute bottom-0 left-0 w-24 h-24 opacity-10"
            style={{
              background: 'radial-gradient(circle, #6b8e23 0%, transparent 70%)'
            }}
          ></div>

          <div className="p-8 sm:p-12 space-y-8">
            {/* Doctor Info Header */}
            <div className="text-center relative">
              <div 
                className="absolute inset-0 rounded-2xl opacity-5"
                style={{
                  background: 'radial-gradient(ellipse, #d4af37 0%, transparent 60%)'
                }}
              ></div>
              <div className="relative">
                <div className="mb-4">
                  <span className="text-6xl">🕉️</span>
                </div>
                <h1 
                  className="text-4xl sm:text-5xl font-bold mb-2"
                  style={{ 
                    color: '#2d5016',
                    textShadow: '2px 2px 4px rgba(212, 175, 55, 0.3)'
                  }}
                >
                   {doctor.name}
                </h1>
                <div 
                  className="inline-block px-6 py-2 rounded-full text-lg font-semibold shadow-lg"
                  style={{
                    background: 'linear-gradient(45deg, #d4af37, #f4e6a1)',
                    color: '#2d5016'
                  }}
                >
                  🌿 {doctor.specialization} 🌿
                </div>
              </div>
            </div>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center my-8">
              <div 
                className="h-1 w-16 rounded-full mx-2"
                style={{ background: '#d4af37' }}
              ></div>
              <span className="text-2xl" style={{ color: '#6b8e23' }}>❋</span>
              <div 
                className="h-1 w-16 rounded-full mx-2"
                style={{ background: '#6b8e23' }}
              ></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Contact Info */}
                <div 
                  className="p-6 rounded-2xl shadow-lg"
                  style={{
                    background: 'linear-gradient(145deg, #f9f6ea, #f0ead6)',
                    border: '2px solid #d4af37'
                  }}
                >
                  <h2 
                    className="text-2xl font-bold mb-4 flex items-center"
                    style={{ color: '#2d5016' }}
                  >
                    <span className="mr-3 text-3xl">📞</span>
                    Contact Details
                  </h2>
                  <div className="space-y-3">
                    <div className="flex items-center p-3 rounded-xl" 
                         style={{ background: 'rgba(212, 175, 55, 0.1)' }}>
                      <span className="mr-3 text-xl">📧</span>
                      <span style={{ color: '#2d5016' }}>{doctor.email}</span>
                    </div>
                    <div className="flex items-center p-3 rounded-xl" 
                         style={{ background: 'rgba(107, 142, 35, 0.1)' }}>
                      <span className="mr-3 text-xl">📱</span>
                      <span style={{ color: '#2d5016' }}>{doctor.phone}</span>
                    </div>
                    <div className="flex items-center p-3 rounded-xl" 
                         style={{ background: 'rgba(139, 69, 19, 0.1)' }}>
                      <span className="mr-3 text-xl">🎓</span>
                      <span style={{ color: '#2d5016' }}>{doctor.experienceYears} years of healing experience</span>
                    </div>
                  </div>
                </div>

                {/* Therapies */}
                {doctor.assignedTherapies?.length > 0 && (
                  <div 
                    className="p-6 rounded-2xl shadow-lg"
                    style={{
                      background: 'linear-gradient(145deg, #f0ead6, #e8dcc0)',
                      border: '2px solid #6b8e23'
                    }}
                  >
                    <h2 
                      className="text-2xl font-bold mb-4 flex items-center"
                      style={{ color: '#2d5016' }}
                    >
                      <span className="mr-3 text-3xl">🌺</span>
                      Ayurvedic Therapies
                    </h2>
                    <div className="space-y-4">
                      {doctor.assignedTherapies.map((therapy: any, index: number) => (
                        <div
                          key={therapy.id}
                          className="p-4 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300"
                          style={{
                            background: index % 2 === 0 
                              ? 'linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(212, 175, 55, 0.05))'
                              : 'linear-gradient(135deg, rgba(107, 142, 35, 0.15), rgba(107, 142, 35, 0.05))',
                            border: `2px solid ${index % 2 === 0 ? '#d4af37' : '#6b8e23'}`
                          }}
                        >
                          <div className="flex items-start justify-between mb-2">
                            <h3 
                              className="text-lg font-bold"
                              style={{ color: '#2d5016' }}
                            >
                              🌿 {therapy.name}
                            </h3>
                            <span 
                              className="px-3 py-1 rounded-full text-sm font-semibold shadow-sm"
                              style={{
                                background: index % 2 === 0 ? '#d4af37' : '#6b8e23',
                                color: 'white'
                              }}
                            >
                              {therapy.durationMinutes} mins
                            </span>
                          </div>
                          <p className="text-sm leading-relaxed" style={{ color: '#2d5016' }}>
                            {therapy.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Booked Slots */}
                <div 
                  className="p-6 rounded-2xl shadow-lg"
                  style={{
                    background: 'linear-gradient(145deg, #f9f6ea, #f0ead6)',
                    border: '2px solid #8b4513'
                  }}
                >
                  <h2 
                    className="text-2xl font-bold mb-4 flex items-center"
                    style={{ color: '#2d5016' }}
                  >
                    <span className="mr-3 text-3xl">📅</span>
                    Scheduled Sessions
                  </h2>
                  <div className="max-h-64 overflow-y-auto">
                    {doctor.sessions?.length > 0 ? (
                      <div className="space-y-3">
                        {doctor.sessions.map((session: any, index: number) => (
                          <div
                            key={session.id}
                            className="p-4 rounded-xl shadow-sm"
                            style={{
                              background: 'linear-gradient(135deg, rgba(139, 69, 19, 0.15), rgba(139, 69, 19, 0.05))',
                              border: '2px solid #8b4513'
                            }}
                          >
                            <div className="flex items-center">
                              <span className="mr-3 text-lg">⏰</span>
                              <span className="font-medium" style={{ color: '#2d5016' }}>
                                {new Date(session.scheduledAt).toLocaleString()}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <span className="text-6xl mb-4 block">🍃</span>
                        <p style={{ color: '#6b8e23' }} className="text-lg">
                          No sessions scheduled yet. Book your first healing session!
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Booking Form */}
                <div 
                  className="p-6 rounded-2xl shadow-lg"
                  style={{
                    background: 'linear-gradient(145deg, #e8dcc0, #d4e7d4)',
                    border: '3px solid #d4af37'
                  }}
                >
                  <h2 
                    className="text-2xl font-bold mb-6 flex items-center"
                    style={{ color: '#2d5016' }}
                  >
                    <span className="mr-3 text-3xl">🌟</span>
                    Book Your Healing Session
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label 
                        className="block text-sm font-semibold mb-2"
                        style={{ color: '#2d5016' }}
                      >
                        🕐 Select Date & Time
                      </label>
                      <input
                        type="datetime-local"
                        value={newSlot}
                        onChange={(e) => setNewSlot(e.target.value)}
                        className="w-full p-4 rounded-xl border-2 focus:outline-none focus:ring-4 focus:ring-opacity-50 transition-all duration-300"
                        style={{
                          borderColor: '#d4af37',
                          background: '#fdfcf7',
                          color: '#2d5016'
                        }}
                      />
                    </div>
                    <button
                      onClick={handleBooking}
                      disabled={loading}
                      className="w-full py-4 px-6 rounded-xl font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-300 disabled:transform-none disabled:opacity-50"
                      style={{
                        background: loading 
                          ? 'linear-gradient(45deg, #999, #ccc)'
                          : 'linear-gradient(45deg, #d4af37, #f4e6a1)',
                        color: loading ? '#666' : '#2d5016',
                        border: '2px solid',
                        borderColor: loading ? '#999' : '#2d5016'
                      }}
                    >
                      {loading ? (
                        <span className="flex items-center justify-center">
                          <div 
                            className="w-5 h-5 border-2 border-t-transparent rounded-full animate-spin mr-3"
                            style={{ borderColor: '#666' }}
                          ></div>
                          Booking Your Session...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <span className="mr-2 text-xl">🙏</span>
                          Book Healing Session
                          <span className="ml-2 text-xl">✨</span>
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Decoration */}
            <div className="text-center pt-6">
              <div className="flex items-center justify-center space-x-4">
                <span className="text-2xl">🌸</span>
                <span 
                  className="text-lg font-medium italic"
                  style={{ color: '#6b8e23' }}
                >
                  "Health is not just the absence of disease, but complete harmony of body, mind, and spirit"
                </span>
                <span className="text-2xl">🌸</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
   
  );
}
