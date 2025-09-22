"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PatientLogin from "@/Components/PatientLogin";

export default function PatientForm() {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [medicalHistory, setMedicalHistory] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showLogin, setShowLogin] = useState(false); // Changed from 'page' to 'showLogin' for clarity

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const body = {
      firstName,
      lastName,
      phoneNumber,
      age: Number(age),
      gender,
      medicalHistory,
      password,
    };

    try {
      const res = await fetch("/api/patient", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      if (data.success) {
        setMessage("Registration successful! Redirecting...");

        setFirstName("");
        setLastName("");
        setPhoneNumber("");
        setAge("");
        setGender("");
        setMedicalHistory("");
        setPassword("");

        setTimeout(() => {
          router.push("/allTherapies");
        }, 1500);
      } else {
        setMessage("Error: " + data.error);
      }
    } catch (err) {
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        background: 'linear-gradient(135deg, #f7f3e9 0%, #e8dcc0 50%, #d4e7d4 100%)'
      }}
    >
    
      <div className="absolute top-0 left-0 w-full h-1" 
           style={{ background: 'linear-gradient(90deg, #d4af37, #6b8e23, #8b4513)' }}></div>

      <div className="w-full max-w-md relative">
     
        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => setShowLogin(false)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
              !showLogin ? 'shadow-lg' : 'opacity-70'
            }`}
            style={{
              background: !showLogin 
                ? 'linear-gradient(45deg, #d4af37, #f4e6a1)' 
                : 'linear-gradient(45deg, #f9f6ea, #e8dcc0)',
              color: '#2d5016',
              border: `2px solid ${!showLogin ? '#2d5016' : 'rgba(45, 80, 22, 0.3)'}`
            }}
          >
            Register
          </button>
          
          <button
            onClick={() => setShowLogin(true)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
              showLogin ? 'shadow-lg' : 'opacity-70'
            }`}
            style={{
              background: showLogin 
                ? 'linear-gradient(45deg, #6b8e23, #8fbc8f)' 
                : 'linear-gradient(45deg, #f9f6ea, #e8dcc0)',
              color: showLogin ? 'white' : '#2d5016',
              border: `2px solid ${showLogin ? '#2d5016' : 'rgba(45, 80, 22, 0.3)'}`
            }}
          >
            Login
          </button>
        </div>

        {!showLogin ? (
          /* Registration Form */
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
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{ 
                  background: '#2d5016',
                  color: 'white'
                }}
              >
                <div className="w-8 h-8 rounded bg-white"></div>
              </div>
              <h2 
                className="text-3xl font-bold"
                style={{ color: '#2d5016' }}
              >
                Join AyurvedaCare
              </h2>
              <p 
                className="mt-2 font-medium"
                style={{ color: '#2d5016' }}
              >
                Begin your wellness journey with us
              </p>
            </div>

            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
           
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label 
                      className="block text-sm font-semibold mb-2"
                      style={{ color: '#2d5016' }}
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter first name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full p-3 rounded-lg border-2 focus:outline-none focus:ring-4 focus:ring-opacity-50 transition-all duration-300"
                      style={{
                        borderColor: '#d4af37',
                        background: '#fdfcf7',
                        color: '#2d5016'
                      }}
                      required
                    />
                  </div>
                  <div>
                    <label 
                      className="block text-sm font-semibold mb-2"
                      style={{ color: '#2d5016' }}
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full p-3 rounded-lg border-2 focus:outline-none focus:ring-4 focus:ring-opacity-50 transition-all duration-300"
                      style={{
                        borderColor: '#d4af37',
                        background: '#fdfcf7',
                        color: '#2d5016'
                      }}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label 
                    className="block text-sm font-semibold mb-2"
                    style={{ color: '#2d5016' }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full p-3 rounded-lg border-2 focus:outline-none focus:ring-4 focus:ring-opacity-50 transition-all duration-300"
                    style={{
                      borderColor: '#6b8e23',
                      background: '#fdfcf7',
                      color: '#2d5016'
                    }}
                    required
                  />
                </div>

                {/* Password */}
                <div>
                  <label 
                    className="block text-sm font-semibold mb-2"
                    style={{ color: '#2d5016' }}
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Create a secure password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 rounded-lg border-2 focus:outline-none focus:ring-4 focus:ring-opacity-50 transition-all duration-300"
                    style={{
                      borderColor: '#8b4513',
                      background: '#fdfcf7',
                      color: '#2d5016'
                    }}
                    required
                  />
                </div>

                {/* Age and Gender */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label 
                      className="block text-sm font-semibold mb-2"
                      style={{ color: '#2d5016' }}
                    >
                      Age
                    </label>
                    <input
                      type="number"
                      placeholder="Age"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="w-full p-3 rounded-lg border-2 focus:outline-none focus:ring-4 focus:ring-opacity-50 transition-all duration-300"
                      style={{
                        borderColor: '#d4af37',
                        background: '#fdfcf7',
                        color: '#2d5016'
                      }}
                      required
                      min="1"
                      max="120"
                    />
                  </div>
                  <div>
                    <label 
                      className="block text-sm font-semibold mb-2"
                      style={{ color: '#2d5016' }}
                    >
                      Gender
                    </label>
                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      className="w-full p-3 rounded-lg border-2 focus:outline-none focus:ring-4 focus:ring-opacity-50 transition-all duration-300"
                      style={{
                        borderColor: '#6b8e23',
                        background: '#fdfcf7',
                        color: '#2d5016'
                      }}
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Medical History */}
                <div>
                  <label 
                    className="block text-sm font-semibold mb-2"
                    style={{ color: '#2d5016' }}
                  >
                    Medical History (Optional)
                  </label>
                  <textarea
                    placeholder="Please share any relevant medical history or health conditions..."
                    value={medicalHistory}
                    onChange={(e) => setMedicalHistory(e.target.value)}
                    rows={3}
                    className="w-full p-3 rounded-lg border-2 focus:outline-none focus:ring-4 focus:ring-opacity-50 transition-all duration-300 resize-none"
                    style={{
                      borderColor: '#8b4513',
                      background: '#fdfcf7',
                      color: '#2d5016'
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-lg font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-300 mt-6"
                  style={{
                    background: 'linear-gradient(45deg, #d4af37, #f4e6a1)',
                    color: '#2d5016',
                    border: '2px solid #2d5016'
                  }}
                >
                  Begin Your Wellness Journey
                </button>
              </form>

              {/* Message Display */}
              {message && (
                <div 
                  className="mt-6 p-4 rounded-lg text-center font-medium"
                  style={{
                    background: message.includes('Error') || message.includes('wrong')
                      ? 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.05))'
                      : 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(34, 197, 94, 0.05))',
                    border: `2px solid ${message.includes('Error') || message.includes('wrong') ? '#ef4444' : '#22c55e'}`,
                    color: message.includes('Error') || message.includes('wrong') ? '#dc2626' : '#16a34a'
                  }}
                >
                  {message}
                </div>
              )}
            </div>
          </div>
        ) : (
          /* Login Component */
          <PatientLogin />
        )}

        {/* Footer */}
        <div className="text-center mt-8">
          <div 
            className="max-w-sm mx-auto p-4 rounded-xl"
            style={{
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.08), rgba(107, 142, 35, 0.08))',
              border: '1px solid rgba(212, 175, 55, 0.3)'
            }}
          >
            <p 
              className="text-sm font-medium italic"
              style={{ color: '#2d5016' }}
            >
              "Your wellness journey starts here"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
