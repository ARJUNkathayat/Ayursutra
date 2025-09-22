// app/doctor/[id]/page.tsx
export default async function DoctorDashboard({ params }: { params: { id: string } }) {
  const { id } = await params;

  const res = await fetch(`http://localhost:3000/api/session/allSessionlist/${id}`, {
    cache: "no-store",
  });

  const data = await res.json();
  const allData = data.data;
    if (!data) {
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
  const doctorData = allData[0].doctor;

  


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

      <div className="max-w-7xl mx-auto p-6 sm:p-8 space-y-8">
        {/* Doctor Profile Section */}
        <div 
          className="shadow-2xl rounded-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, #fdfcf7 0%, #f9f6ea 100%)',
            border: '2px solid #d4af37'
          }}
        >
          <div className="flex flex-col lg:flex-row">
            {/* Doctor Avatar Section */}
            <div 
              className="lg:w-80 p-8 flex flex-col items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #d4af37, #f4e6a1)'
              }}
            >
              <div 
                className="w-32 h-32 rounded-full mb-6 flex items-center justify-center text-4xl font-bold shadow-xl"
                style={{ 
                  background: '#2d5016',
                  color: 'white'
                }}
              >
                {doctorData.name.charAt(0)}
              </div>
              <div 
                className="px-4 py-2 rounded-full text-sm font-semibold"
                style={{
                  background: '#2d5016',
                  color: 'white'
                }}
              >
                Doctor Dashboard
              </div>
            </div>

            {/* Doctor Information */}
            <div className="flex-1 p-8">
              <div className="space-y-6">
                <div>
                  <h1 
                    className="text-3xl sm:text-4xl font-bold mb-2"
                    style={{ 
                      color: '#2d5016',
                      textShadow: '1px 1px 2px rgba(212, 175, 55, 0.2)'
                    }}
                  >
                     {doctorData.name}
                  </h1>
                  <div 
                    className="inline-block px-4 py-1 rounded-full text-lg font-semibold"
                    style={{
                      background: 'linear-gradient(45deg, #6b8e23, #8fbc8f)',
                      color: 'white'
                    }}
                  >
                    {doctorData.specialization}
                  </div>
                </div>

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
                        <p className="font-semibold" style={{ color: '#6b8e23' }}>{doctorData.email}</p>
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
                        <p className="font-semibold" style={{ color: '#8b4513' }}>{doctorData.phone}</p>
                      </div>
                    </div>
                  </div>

                  <div 
                    className="p-4 rounded-xl shadow-sm sm:col-span-2"
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
                          {doctorData.experienceYears} years of healing practice
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Patient Appointments Section */}
        <div 
          className="shadow-2xl rounded-2xl p-8"
          style={{
            background: 'linear-gradient(145deg, #fdfcf7 0%, #f9f6ea 100%)',
            border: '2px solid #6b8e23'
          }}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 
              className="text-3xl font-bold"
              style={{ color: '#2d5016' }}
            >
              Patient Appointments
            </h2>
            <div 
              className="px-4 py-2 rounded-full text-sm font-semibold"
              style={{
                background: '#6b8e23',
                color: 'white'
              }}
            >
              {allData.length} Total Sessions
            </div>
          </div>

          {allData.length > 0 ? (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {allData.map((session: any, index: number) => {
                const statusColors = {
                  'completed': { bg: '#22c55e', text: 'white', bgLight: 'rgba(34, 197, 94, 0.1)' },
                  'scheduled': { bg: '#d4af37', text: '#2d5016', bgLight: 'rgba(212, 175, 55, 0.1)' },
                  'cancelled': { bg: '#ef4444', text: 'white', bgLight: 'rgba(239, 68, 68, 0.1)' },
                  'pending': { bg: '#f59e0b', text: 'white', bgLight: 'rgba(245, 158, 11, 0.1)' }
                };
                
                const statusColor = statusColors[session.status as keyof typeof statusColors] || 
                                 { bg: '#6b7280', text: 'white', bgLight: 'rgba(107, 114, 128, 0.1)' };

                return (
                  <div
                    key={index}
                    className="rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                    style={{
                      background: 'linear-gradient(135deg, rgba(107, 142, 35, 0.05), rgba(107, 142, 35, 0.02))',
                      border: '2px solid rgba(107, 142, 35, 0.2)'
                    }}
                  >
                    {/* Session Header */}
                    <div className="flex items-center justify-between mb-4">
                      <h3 
                        className="text-lg font-bold"
                        style={{ color: '#2d5016' }}
                      >
                        Session #{index + 1}
                      </h3>
                      <span 
                        className="px-3 py-1 rounded-full text-xs font-bold"
                        style={{
                          background: statusColor.bg,
                          color: statusColor.text
                        }}
                      >
                        {session.status.toUpperCase()}
                      </span>
                    </div>

                    {/* Patient Information */}
                    <div 
                      className="p-4 rounded-lg mb-4"
                      style={{
                        background: 'rgba(255, 255, 255, 0.7)',
                        border: '1px solid rgba(212, 175, 55, 0.3)'
                      }}
                    >
                      <h4 
                        className="font-semibold mb-3 text-sm uppercase tracking-wide"
                        style={{ color: '#2d5016' }}
                      >
                        Patient Details
                      </h4>
                      
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <div 
                            className="w-8 h-8 rounded-full mr-3 flex items-center justify-center text-sm font-bold"
                            style={{ 
                              background: '#d4af37',
                              color: '#2d5016'
                            }}
                          >
                            {session.patient.firstName.charAt(0)}{session.patient.lastName.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold" style={{ color: '#2d5016' }}>
                              {session.patient.firstName} {session.patient.lastName}
                            </p>
                            <p className="text-xs" style={{ color: '#6b8e23' }}>
                              {session.patient.age} years, {session.patient.gender}
                            </p>
                          </div>
                        </div>
                        
                        {session.patient.medicalHistory && (
                          <div 
                            className="mt-3 p-2 rounded text-xs"
                            style={{
                              background: 'rgba(139, 69, 19, 0.1)',
                              border: '1px solid rgba(139, 69, 19, 0.3)',
                              color: '#2d5016'
                            }}
                          >
                            <strong>Medical History:</strong> {session.patient.medicalHistory}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Therapy Information */}
                    <div 
                      className="p-4 rounded-lg mb-4"
                      style={{
                        background: 'rgba(255, 255, 255, 0.7)',
                        border: '1px solid rgba(107, 142, 35, 0.3)'
                      }}
                    >
                      <h4 
                        className="font-semibold mb-2 text-sm uppercase tracking-wide"
                        style={{ color: '#2d5016' }}
                      >
                        Therapy
                      </h4>
                      <p className="font-bold text-lg mb-1" style={{ color: '#6b8e23' }}>
                        {session.therapy.name}
                      </p>
                      {session.therapy.description && (
                        <p className="text-xs" style={{ color: '#2d5016' }}>
                          {session.therapy.description}
                        </p>
                      )}
                    </div>

                    {/* Appointment Time */}
                    <div 
                      className="p-3 rounded-lg text-center"
                      style={{
                        background: statusColor.bgLight,
                        border: `1px solid ${statusColor.bg}30`
                      }}
                    >
                      <p className="text-xs font-medium mb-1" style={{ color: '#2d5016' }}>
                        Scheduled For
                      </p>
                      <p className="font-bold" style={{ color: statusColor.bg === '#d4af37' ? '#2d5016' : statusColor.bg }}>
                        {new Date(session.scheduledAt).toLocaleDateString()} at{' '}
                        {new Date(session.scheduledAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <div 
                className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(107, 142, 35, 0.1), rgba(107, 142, 35, 0.05))',
                  border: '2px solid rgba(107, 142, 35, 0.3)'
                }}
              >
                <div 
                  className="w-8 h-8 rounded"
                  style={{ background: '#6b8e23' }}
                ></div>
              </div>
              <h3 
                className="text-2xl font-bold mb-2"
                style={{ color: '#2d5016' }}
              >
                No Appointments Yet
              </h3>
              <p 
                className="text-lg"
                style={{ color: '#6b8e23' }}
              >
                Patient appointments will appear here once scheduled.
              </p>
            </div>
          )}
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
              "Healing is not just about treating the disease, but nurturing the whole person"
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
