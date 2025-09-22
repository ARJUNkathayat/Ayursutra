"use client";

import axios from "axios";
import { useState, useEffect } from "react";

import Card from "@/Components/Card";

interface Therapy {
  id: number;
  name: string;
  description: string;
  duration: number;
  image?: string;
  category?: string;
  benefits?: string;
}

export default function GeminiForm() {
  const [symptoms, setSymptoms] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  // New states for therapy data
  const [allTherapies, setAllTherapies] = useState<Therapy[]>([]);
  const [filteredTherapies, setFilteredTherapies] = useState<Therapy[]>([]);
  const [therapiesLoading, setTherapiesLoading] = useState(false);

  // Fetch all therapies on component mount
  useEffect(() => {
    fetchAllTherapies();
  }, []);

  const fetchAllTherapies = async () => {
    setTherapiesLoading(true);
    try {
      const response = await axios.get("/api/Therapy");
      setAllTherapies(response.data);
    } catch (err) {
      console.error("Failed to fetch therapies:", err);
    } finally {
      setTherapiesLoading(false);
    }
  };

  // Filter therapies based on AI recommendations
  useEffect(() => {
    if (result && result.recommendedTherapies && allTherapies.length > 0) {
      const recommendedNames = result.recommendedTherapies.map((therapy: any) => therapy.name);
      const filtered = allTherapies.filter((therapy) => 
        recommendedNames.includes(therapy.name)
      );
      setFilteredTherapies(filtered);
    }
  }, [result, allTherapies]);

  const handleClick = async () => {
    if (!symptoms || !age || !gender) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);
    setError("");
    setFilteredTherapies([]);

    const payload = { symptoms, age, gender };

    try {
      const res = await axios.post("/api/gemini-generate", payload);
      console.log("Success!", res.data);
      setResult(res.data);
    } catch (err) {
      console.error("Error calling API", err);
      setError("Failed to get consultation. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSymptoms("");
    setAge("");
    setGender("");
    setResult(null);
    setError("");
    setFilteredTherapies([]);
  };

  return (
    <div 
      className="min-h-screen p-4"
      style={{
        background: 'linear-gradient(135deg, #f7f3e9 0%, #e8dcc0 30%, #d4e7d4 70%, #f9f6ea 100%)'
      }}
    >
      {/* Header */}
      <div className="w-full h-1" 
           style={{ background: 'linear-gradient(90deg, #d4af37, #6b8e23, #8b4513)' }}></div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 pt-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div 
              className="p-3 rounded-full"
              style={{ background: 'linear-gradient(45deg, #d4af37, #f4e6a1)' }}
            >
              <div className="w-8 h-8 rounded-full bg-white"></div>
            </div>
            <h1 
              className="text-4xl font-bold"
              style={{ 
                color: '#2d5016',
                textShadow: '2px 2px 4px rgba(212, 175, 55, 0.3)'
              }}
            >
              AI Ayurvedic Consultation
            </h1>
          </div>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ color: '#2d5016' }}
          >
            Get personalized Ayurvedic therapy recommendations powered by ancient wisdom and modern AI
          </p>
          <div 
            className="w-32 h-1 mx-auto mt-4"
            style={{ background: 'linear-gradient(90deg, #d4af37, #6b8e23)' }}
          ></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Input Form */}
          <div 
            className="shadow-2xl rounded-2xl p-8"
            style={{
              background: 'linear-gradient(145deg, #fdfcf7 0%, #f9f6ea 100%)',
              border: '2px solid #d4af37'
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div 
                className="w-8 h-8 rounded-full"
                style={{ background: '#d4af37' }}
              ></div>
              <h2 
                className="text-2xl font-semibold"
                style={{ color: '#2d5016' }}
              >
                Patient Assessment
              </h2>
            </div>
            
            <div className="space-y-6">
              {/* Symptoms Input */}
              <div className="relative">
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ color: '#2d5016' }}
                >
                  <div className="w-4 h-4 inline-block mr-1 rounded bg-red-500"></div>
                  Symptoms & Health Concerns
                </label>
                <textarea
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  placeholder="Describe your symptoms, health concerns, and what you're experiencing (e.g., headache, digestive issues, stress, fatigue...)"
                  rows={4}
                  className="w-full p-4 border-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-opacity-50 transition-all duration-300"
                  style={{
                    borderColor: '#d4af37',
                    background: '#fdfcf7',
                    color: '#2d5016'
                  }}
                />
              </div>

              {/* Gender Selection */}
              <div className="relative">
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ color: '#2d5016' }}
                >
                  <div className="w-4 h-4 inline-block mr-1 rounded bg-blue-500"></div>
                  Gender
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {['Male', 'Female'].map((genderOption) => (
                    <button
                      key={genderOption}
                      type="button"
                      onClick={() => setGender(genderOption)}
                      className={`p-3 rounded-xl border-2 transition-all duration-300 font-medium hover:scale-105 ${
                        gender === genderOption
                          ? 'shadow-lg'
                          : ''
                      }`}
                      style={{
                        borderColor: gender === genderOption ? '#6b8e23' : '#d4af37',
                        background: gender === genderOption 
                          ? 'linear-gradient(45deg, #6b8e23, #8fbc8f)'
                          : '#fdfcf7',
                        color: gender === genderOption ? 'white' : '#2d5016'
                      }}
                    >
                      {genderOption}
                    </button>
                  ))}
                </div>
              </div>

              {/* Age Input */}
              <div className="relative">
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ color: '#2d5016' }}
                >
                  <div className="w-4 h-4 inline-block mr-1 rounded bg-purple-500"></div>
                  Age
                </label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Enter your age"
                  min="1"
                  max="120"
                  className="w-full p-4 border-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-opacity-50 transition-all duration-300"
                  style={{
                    borderColor: '#8b4513',
                    background: '#fdfcf7',
                    color: '#2d5016'
                  }}
                />
              </div>

              {/* Error Message */}
              {error && (
                <div 
                  className="flex items-center gap-2 p-4 rounded-xl border-2"
                  style={{
                    background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.05))',
                    borderColor: '#ef4444',
                    color: '#dc2626'
                  }}
                >
                  <div className="w-5 h-5 rounded-full bg-red-500"></div>
                  <span className="font-medium">{error}</span>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  onClick={handleClick}
                  disabled={loading}
                  className="flex-1 font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:scale-105 disabled:hover:scale-100"
                  style={{
                    background: loading 
                      ? 'linear-gradient(45deg, #999, #ccc)'
                      : 'linear-gradient(45deg, #d4af37, #f4e6a1)',
                    color: loading ? '#666' : '#2d5016',
                    border: '2px solid #2d5016'
                  }}
                >
                  {loading ? (
                    <>
                      <div 
                        className="w-5 h-5 border-2 border-t-transparent rounded-full animate-spin"
                        style={{ borderColor: '#666' }}
                      ></div>
                      Getting Consultation...
                    </>
                  ) : (
                    <>
                      <div className="w-5 h-5 rounded bg-white"></div>
                      Get AI Consultation
                    </>
                  )}
                </button>

                {result && (
                  <button
                    onClick={resetForm}
                    className="px-6 py-4 border-2 font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                    style={{
                      borderColor: '#6b8e23',
                      color: '#2d5016',
                      background: '#fdfcf7'
                    }}
                  >
                    Reset
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Results Display */}
          {result && (
            <div 
              className="shadow-2xl rounded-2xl p-8"
              style={{
                background: 'linear-gradient(145deg, #fdfcf7 0%, #f9f6ea 100%)',
                border: '2px solid #6b8e23'
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div 
                  className="p-2 rounded-full"
                  style={{ background: '#22c55e' }}
                >
                  <div className="w-6 h-6 rounded-full bg-white"></div>
                </div>
                <h2 
                  className="text-2xl font-semibold"
                  style={{ color: '#2d5016' }}
                >
                  Consultation Results
                </h2>
              </div>

              <div className="space-y-6">
                {/* Patient Summary */}
                <div 
                  className="p-6 rounded-xl border-2"
                  style={{
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05))',
                    borderColor: 'rgba(59, 130, 246, 0.3)'
                  }}
                >
                  <h3 
                    className="font-bold mb-3 text-lg"
                    style={{ color: '#2d5016' }}
                  >
                    Patient Assessment
                  </h3>
                  <p 
                    className="leading-relaxed"
                    style={{ color: '#2d5016' }}
                  >
                    {result.patientSummary}
                  </p>
                </div>

                {/* Recommended Therapies Summary */}
                <div 
                  className="p-6 rounded-xl border-2"
                  style={{
                    background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(34, 197, 94, 0.05))',
                    borderColor: 'rgba(34, 197, 94, 0.3)'
                  }}
                >
                  <h3 
                    className="font-bold mb-4 text-lg"
                    style={{ color: '#2d5016' }}
                  >
                    Recommended Therapies
                  </h3>
                  <div className="grid gap-3">
                    {result.recommendedTherapies?.map((therapy: any, index: number) => (
                      <div 
                        key={index}
                        className="flex items-center gap-3 p-4 rounded-lg border-2"
                        style={{
                          background: 'rgba(255, 255, 255, 0.7)',
                          borderColor: 'rgba(34, 197, 94, 0.3)'
                        }}
                      >
                        <div 
                          className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white"
                          style={{ background: '#22c55e' }}
                        >
                          {index + 1}
                        </div>
                        <span 
                          className="font-semibold"
                          style={{ color: '#2d5016' }}
                        >
                          {therapy.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Disclaimer */}
                <div 
                  className="p-4 rounded-xl border-2"
                  style={{
                    background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.05))',
                    borderColor: 'rgba(245, 158, 11, 0.3)',
                    color: '#2d5016'
                  }}
                >
                  <p className="text-sm">
                    <strong>Disclaimer:</strong> This AI consultation is for educational purposes only. 
                    Please consult with a qualified Ayurvedic practitioner for proper diagnosis and treatment.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Detailed Therapy Cards Section */}
        {filteredTherapies.length > 0 && (
          <div 
            className="shadow-2xl rounded-2xl p-8"
            style={{
              background: 'linear-gradient(145deg, #fdfcf7 0%, #f9f6ea 100%)',
              border: '2px solid #8b4513'
            }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div 
                className="p-2 rounded-full"
                style={{ background: '#8b4513' }}
              >
                <div className="w-6 h-6 rounded bg-white"></div>
              </div>
              <h2 
                className="text-3xl font-bold"
                style={{ color: '#2d5016' }}
              >
                Detailed Therapy Information
              </h2>
            </div>
            
            {therapiesLoading ? (
              <div className="flex items-center justify-center py-12">
                <div 
                  className="w-8 h-8 border-4 border-t-transparent rounded-full animate-spin mr-3"
                  style={{ borderColor: '#8b4513' }}
                ></div>
                <span style={{ color: '#2d5016' }}>Loading therapy details...</span>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center">
                {filteredTherapies.map((therapy) => (
                  <Card 
                    key={therapy.id}
                    name={therapy.name}
                    description={therapy.description}
                    durationMinutes={`${therapy.duration} minutes`}
                    image={therapy.image || "/default-therapy-image.jpg"}
                    category={therapy.category || "Ayurvedic Therapy"}
                    benefits={therapy.benefits || "Promotes healing and wellness"}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-12 pb-8">
          <div 
            className="max-w-md mx-auto p-4 rounded-xl"
            style={{
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.08), rgba(107, 142, 35, 0.08))',
              border: '1px solid rgba(212, 175, 55, 0.3)'
            }}
          >
            <p 
              className="font-medium italic"
              style={{ color: '#2d5016' }}
            >
              "AI-powered wisdom meets ancient healing traditions"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
