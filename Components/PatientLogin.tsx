import { useState } from "react";
import { useRouter } from "next/navigation";
import { cookies } from "next/headers";
import { Jwt } from "jsonwebtoken";

export default function PatientLogin() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const body = {
      phoneNumber,
      password,
    };

    try {
      const res = await fetch("/api/auth/patient", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      
      if (data.success) {
        setMessage("Login successful! Redirecting...");
        
        setTimeout(() => {
          router.push(`/dashboard/patient/${data?.data?.id}`);
         }, 1500);
      } else {
        setMessage("Error: " + data.error);
      }
    } catch (err) {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="shadow-2xl rounded-2xl overflow-hidden"
      style={{
        background: 'linear-gradient(145deg, #fdfcf7 0%, #f9f6ea 100%)',
        border: '2px solid #6b8e23'
      }}
    >
      {/* Header Section */}
      <div 
        className="p-8 text-center"
        style={{
          background: 'linear-gradient(135deg, #6b8e23, #8fbc8f)'
        }}
      >
        <div 
          className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
          style={{ 
            background: 'white',
            color: '#2d5016'
          }}
        >
          <div className="w-8 h-8 rounded-full border-2 border-current"></div>
        </div>
        <h2 
          className="text-3xl font-bold text-white"
        >
          Welcome Back
        </h2>
        <p 
          className="mt-2 font-medium text-white opacity-90"
        >
          Continue your wellness journey
        </p>
      </div>

      {/* Form Section */}
      <div className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Phone Number Field */}
          <div>
            <label 
              className="block text-sm font-semibold mb-2"
              style={{ color: '#2d5016' }}
            >
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter your registered phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full p-4 rounded-lg border-2 focus:outline-none focus:ring-4 focus:ring-opacity-50 transition-all duration-300"
              style={{
                borderColor: '#6b8e23',
                background: '#fdfcf7',
                color: '#2d5016'
              }}
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label 
              className="block text-sm font-semibold mb-2"
              style={{ color: '#2d5016' }}
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 rounded-lg border-2 focus:outline-none focus:ring-4 focus:ring-opacity-50 transition-all duration-300"
              style={{
                borderColor: '#8b4513',
                background: '#fdfcf7',
                color: '#2d5016'
              }}
              required
            />
          </div>

          {/* Forgot Password Link */}
          <div className="text-right">
            <a 
              href="/forgot-password"
              className="text-sm font-medium hover:underline transition-colors duration-300"
              style={{ color: '#6b8e23' }}
            >
              Forgot your password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 px-6 rounded-lg font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-300 disabled:transform-none disabled:opacity-50"
            style={{
              background: loading 
                ? 'linear-gradient(45deg, #999, #ccc)'
                : 'linear-gradient(45deg, #6b8e23, #8fbc8f)',
              color: 'white',
              border: '2px solid #2d5016'
            }}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <div 
                  className="w-5 h-5 border-2 border-t-transparent rounded-full animate-spin mr-3"
                  style={{ borderColor: 'white' }}
                ></div>
                Signing In...
              </span>
            ) : (
              'Sign In to Your Account'
            )}
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

        {/* Additional Options */}
        <div className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(107, 142, 35, 0.2)' }}>
          <div className="text-center">
            <p 
              className="text-sm"
              style={{ color: '#2d5016' }}
            >
              Having trouble accessing your account?
            </p>
            <div className="mt-3 space-x-4">
              <a 
                href="/contact"
                className="text-sm font-medium hover:underline transition-colors duration-300"
                style={{ color: '#6b8e23' }}
              >
                Contact Support
              </a>
              <span style={{ color: '#2d5016' }}>•</span>
              <a 
                href="/help"
                className="text-sm font-medium hover:underline transition-colors duration-300"
                style={{ color: '#8b4513' }}
              >
                Get Help
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Security Note */}
      <div 
        className="px-8 pb-6"
      >
        <div 
          className="p-3 rounded-lg text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(107, 142, 35, 0.08), rgba(107, 142, 35, 0.03))',
            border: '1px solid rgba(107, 142, 35, 0.2)'
          }}
        >
          <p 
            className="text-xs font-medium"
            style={{ color: '#2d5016' }}
          >
            Your privacy and security are our priority. We use secure encryption to protect your data.
          </p>
        </div>
      </div>
    </div>
  );
}
