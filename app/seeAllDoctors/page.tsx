"use client"
import { prisma } from "@/lib/prisma";
import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/Components/navbar";

// Fetch doctors on the server
async function getDoctors() {
  return await prisma.doctor.findMany({
    orderBy: { name: 'asc' }
  });
}

export default async function DoctorsPage() {
  const doctors = await getDoctors();
  return <DoctorsClient doctors={doctors} />;
}

// Client-side filtering component
function DoctorsClient({ doctors }: { doctors: any[] }) {
  const router = useRouter();
  const [stateFilter, setStateFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [specializationFilter, setSpecializationFilter] = useState("");
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  const filteredDoctors = useMemo(() => {
    let filtered = doctors;

    if (stateFilter) {
      filtered = filtered.filter(
        (doc) => doc.state?.toLowerCase().includes(stateFilter.toLowerCase())
      );
    }

    if (specializationFilter) {
      filtered = filtered.filter(
        (doc) => doc.specialization?.toLowerCase().includes(specializationFilter.toLowerCase())
      );
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (doc) =>
          doc.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          doc.specialization?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          doc.email?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [doctors, stateFilter, specializationFilter, searchQuery]);

  const uniqueStates = [...new Set(doctors.map(doc => doc.state).filter(Boolean))];
  const uniqueSpecializations = [...new Set(doctors.map(doc => doc.specialization).filter(Boolean))];

  const handleDoctorClick = (doctorId: number) => {
    router.push(`/doctor/${doctorId}`);
  };

  return (
    <div 
      className="min-h-screen"
      style={{
        background: 'linear-gradient(135deg, #f7f3e9 0%, #e8dcc0 30%, #d4e7d4 70%, #f9f6ea 100%)'
      }}
    >
     
      <div className="w-full h-1" 
           style={{ background: 'linear-gradient(90deg, #d4af37, #6b8e23, #8b4513)' }}></div>

      {/* Page Header */}
      <div 
        className="shadow-lg border-b-2"
        style={{
          background: 'linear-gradient(145deg, #fdfcf7 0%, #f9f6ea 100%)',
          borderBottomColor: '#d4af37'
        }}
      >
         <Navbar/>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div 
                  className="p-3 rounded-full"
                  style={{ background: '#d4af37' }}
                >
                  <div className="w-8 h-8 rounded bg-white"></div>
                </div>
                <h1 
                  className="text-4xl font-bold"
                  style={{ 
                    color: '#2d5016',
                    textShadow: '2px 2px 4px rgba(212, 175, 55, 0.3)'
                  }}
                >
                  Ayurvedic Practitioners
                </h1>
              </div>
              <p 
                className="text-lg"
                style={{ color: '#6b8e23' }}
              >
                Find certified Ayurvedic doctors and healing specialists
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div 
                className="px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg"
                style={{
                  background: 'linear-gradient(45deg, #6b8e23, #8fbc8f)',
                  color: 'white'
                }}
              >
                <div className="w-4 h-4 rounded bg-white"></div>
                {filteredDoctors.length} Practitioner{filteredDoctors.length !== 1 ? 's' : ''}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter Controls */}
        <div 
          className="shadow-xl rounded-2xl p-8 mb-8"
          style={{
            background: 'linear-gradient(145deg, #fdfcf7 0%, #f9f6ea 100%)',
            border: '2px solid #d4af37'
          }}
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search Input */}
            <div className="flex-1 relative">
              <div 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 rounded"
                style={{ background: '#6b8e23' }}
              ></div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, specialization, or email..."
                className="w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-opacity-50 transition-all duration-300 text-lg"
                style={{
                  borderColor: '#d4af37',
                  background: '#fdfcf7',
                  color: '#2d5016'
                }}
              />
            </div>

            {/* State Filter */}
            <div className="relative min-w-[220px]">
              <div 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded"
                style={{ background: '#8b4513' }}
              ></div>
              <select
                value={stateFilter}
                onChange={(e) => setStateFilter(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-opacity-50 appearance-none transition-all duration-300"
                style={{
                  borderColor: '#6b8e23',
                  background: '#fdfcf7',
                  color: '#2d5016'
                }}
              >
                <option value="">All Locations</option>
                {uniqueStates.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>

            {/* Specialization Filter */}
            <div className="relative min-w-[220px]">
              <div 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded"
                style={{ background: '#d4af37' }}
              ></div>
              <select
                value={specializationFilter}
                onChange={(e) => setSpecializationFilter(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-opacity-50 appearance-none transition-all duration-300"
                style={{
                  borderColor: '#8b4513',
                  background: '#fdfcf7',
                  color: '#2d5016'
                }}
              >
                <option value="">All Specializations</option>
                {uniqueSpecializations.map(spec => (
                  <option key={spec} value={spec}>{spec}</option>
                ))}
              </select>
            </div>

            {/* View Toggle */}
            <div 
              className="flex p-1 rounded-xl"
              style={{ background: 'rgba(107, 142, 35, 0.1)' }}
            >
              <button
                onClick={() => setViewMode('grid')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  viewMode === 'grid' ? 'shadow-lg' : ''
                }`}
                style={{
                  background: viewMode === 'grid' 
                    ? 'linear-gradient(45deg, #d4af37, #f4e6a1)' 
                    : 'transparent',
                  color: viewMode === 'grid' ? '#2d5016' : '#6b8e23'
                }}
              >
                Grid View
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  viewMode === 'table' ? 'shadow-lg' : ''
                }`}
                style={{
                  background: viewMode === 'table' 
                    ? 'linear-gradient(45deg, #6b8e23, #8fbc8f)' 
                    : 'transparent',
                  color: viewMode === 'table' ? 'white' : '#6b8e23'
                }}
              >
                Table View
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        {filteredDoctors.length === 0 ? (
          <div className="text-center py-16">
            <div 
              className="shadow-xl rounded-2xl p-12 max-w-md mx-auto"
              style={{
                background: 'linear-gradient(145deg, #fdfcf7 0%, #f9f6ea 100%)',
                border: '2px solid rgba(107, 142, 35, 0.3)'
              }}
            >
              <div 
                className="mx-auto mb-6 w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(107, 142, 35, 0.1)' }}
              >
                <div className="w-8 h-8 rounded bg-gray-400"></div>
              </div>
              <h3 
                className="text-2xl font-bold mb-4"
                style={{ color: '#2d5016' }}
              >
                No practitioners found
              </h3>
              <p 
                className="text-lg"
                style={{ color: '#6b8e23' }}
              >
                Try adjusting your search criteria
              </p>
            </div>
          </div>
        ) : (
          <>
            {/* Grid View */}
            {viewMode === 'grid' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredDoctors.map((doc) => (
                  <div
                    key={doc.id}
                    onClick={() => handleDoctorClick(doc.id)}
                    className="shadow-xl rounded-2xl p-8 border-2 cursor-pointer transform hover:scale-105 transition-all duration-300 group"
                    style={{
                      background: 'linear-gradient(145deg, #fdfcf7 0%, #f9f6ea 100%)',
                      borderColor: 'rgba(212, 175, 55, 0.3)'
                    }}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div 
                        className="p-4 rounded-full"
                        style={{ background: 'linear-gradient(45deg, #d4af37, #f4e6a1)' }}
                      >
                        <div 
                          className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg"
                          style={{ background: '#2d5016', color: 'white' }}
                        >
                          {doc.name.charAt(0)}
                        </div>
                      </div>
                      <div 
                        className="px-4 py-2 rounded-full text-sm font-semibold"
                        style={{
                          background: '#6b8e23',
                          color: 'white'
                        }}
                      >
                        {doc.specialization || 'General Practice'}
                      </div>
                    </div>

                    {/* Name */}
                    <h3 
                      className="text-2xl font-bold mb-6 group-hover:underline"
                      style={{ color: '#2d5016' }}
                    >
                      Dr. {doc.name}
                    </h3>

                    {/* Details */}
                    <div className="space-y-4 mb-6">
                      {doc.email && (
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded bg-blue-500"></div>
                          <span 
                            className="text-sm truncate"
                            style={{ color: '#2d5016' }}
                          >
                            {doc.email}
                          </span>
                        </div>
                      )}
                      {doc.phone && (
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded bg-green-500"></div>
                          <span 
                            className="text-sm"
                            style={{ color: '#2d5016' }}
                          >
                            {doc.phone}
                          </span>
                        </div>
                      )}
                      {doc.state && (
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded bg-orange-500"></div>
                          <span 
                            className="text-sm"
                            style={{ color: '#2d5016' }}
                          >
                            {doc.state}
                          </span>
                        </div>
                      )}
                      {doc.experienceYears && (
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded bg-purple-500"></div>
                          <span 
                            className="text-sm"
                            style={{ color: '#2d5016' }}
                          >
                            {doc.experienceYears} years experience
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Action Button */}
                    <button 
                      className="w-full py-4 rounded-xl font-bold shadow-lg transform hover:scale-105 transition-all duration-300"
                      style={{
                        background: 'linear-gradient(45deg, #6b8e23, #8fbc8f)',
                        color: 'white'
                      }}
                    >
                      View Profile & Book
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Table View */}
            {viewMode === 'table' && (
              <div 
                className="shadow-xl rounded-2xl overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, #fdfcf7 0%, #f9f6ea 100%)',
                  border: '2px solid #d4af37'
                }}
              >
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead 
                      style={{
                        background: 'linear-gradient(135deg, #d4af37, #f4e6a1)'
                      }}
                    >
                      <tr>
                        <th 
                          className="px-8 py-6 text-left font-bold"
                          style={{ color: '#2d5016' }}
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded bg-white"></div>
                            Practitioner
                          </div>
                        </th>
                        <th 
                          className="px-8 py-6 text-left font-bold"
                          style={{ color: '#2d5016' }}
                        >
                          Contact
                        </th>
                        <th 
                          className="px-8 py-6 text-left font-bold"
                          style={{ color: '#2d5016' }}
                        >
                          Specialization
                        </th>
                        <th 
                          className="px-8 py-6 text-left font-bold"
                          style={{ color: '#2d5016' }}
                        >
                          Location
                        </th>
                        <th 
                          className="px-8 py-6 text-left font-bold"
                          style={{ color: '#2d5016' }}
                        >
                          Experience
                        </th>
                        <th 
                          className="px-8 py-6 text-center font-bold"
                          style={{ color: '#2d5016' }}
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y-2" style={{ borderColor: 'rgba(212, 175, 55, 0.2)' }}>
                      {filteredDoctors.map((doc, index) => (
                        <tr
                          key={doc.id}
                          className="hover:bg-opacity-50 transition-all duration-300 cursor-pointer"
                          style={{
                            background: index % 2 === 0 ? 'rgba(107, 142, 35, 0.05)' : 'transparent'
                          }}
                          onClick={() => handleDoctorClick(doc.id)}
                        >
                          <td className="px-8 py-6">
                            <div className="flex items-center gap-4">
                              <div 
                                className="p-3 rounded-full"
                                style={{ background: '#6b8e23' }}
                              >
                                <div 
                                  className="w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm"
                                  style={{ background: 'white', color: '#2d5016' }}
                                >
                                  {doc.name.charAt(0)}
                                </div>
                              </div>
                              <div>
                                <div 
                                  className="font-bold text-lg"
                                  style={{ color: '#2d5016' }}
                                >
                                  Dr. {doc.name}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-8 py-6">
                            <div className="space-y-1">
                              <div 
                                className="text-sm"
                                style={{ color: '#2d5016' }}
                              >
                                {doc.email}
                              </div>
                              <div 
                                className="text-sm"
                                style={{ color: '#6b8e23' }}
                              >
                                {doc.phone}
                              </div>
                            </div>
                          </td>
                          <td className="px-8 py-6">
                            <span 
                              className="px-4 py-2 rounded-full text-sm font-semibold"
                              style={{
                                background: '#8b4513',
                                color: 'white'
                              }}
                            >
                              {doc.specialization || 'General Practice'}
                            </span>
                          </td>
                          <td 
                            className="px-8 py-6 font-medium"
                            style={{ color: '#2d5016' }}
                          >
                            {doc.state || 'Not specified'}
                          </td>
                          <td 
                            className="px-8 py-6 font-medium"
                            style={{ color: '#6b8e23' }}
                          >
                            {doc.experienceYears ? `${doc.experienceYears} years` : 'N/A'}
                          </td>
                          <td className="px-8 py-6 text-center">
                            <button 
                              className="px-6 py-3 rounded-xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
                              style={{
                                background: 'linear-gradient(45deg, #d4af37, #f4e6a1)',
                                color: '#2d5016'
                              }}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDoctorClick(doc.id);
                              }}
                            >
                              View Profile
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
