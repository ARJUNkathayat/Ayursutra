import Navbar from "@/Components/navbar"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div 
      className="min-h-screen"
      style={{
        background: 'linear-gradient(135deg, #f7f3e9 0%, #e8dcc0 30%, #d4e7d4 70%, #f9f6ea 100%)'
      }}
    >
      <Navbar/>
      <div className="w-full h-1" 
           style={{ background: 'linear-gradient(90deg, #d4af37, #6b8e23, #8b4513)' }}></div>

      <div className="text-center py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 
            className="text-5xl sm:text-6xl font-bold mb-6"
            style={{ 
              color: '#2d5016',
              textShadow: '2px 2px 4px rgba(212, 175, 55, 0.3)'
            }}
          >
            AyurvedaCare
          </h1>
          <p 
            className="text-xl sm:text-2xl font-medium mb-4"
            style={{ color: '#6b8e23' }}
          >
            Ancient Wisdom, Modern Healing
          </p>
          <div 
            className="w-32 h-1 mx-auto mb-8"
            style={{ background: 'linear-gradient(90deg, #d4af37, #6b8e23)' }}
          ></div>
          <p 
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: '#2d5016' }}
          >
            Discover personalized Ayurvedic treatments designed to restore balance, 
            promote wellness, and nurture your body's natural healing capabilities.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-12 px-6 pb-16">
        
        <div 
          className="shadow-2xl rounded-2xl overflow-hidden w-full max-w-md hover:scale-105 transition-all duration-300 group"
          style={{
            background: 'linear-gradient(145deg, #fdfcf7 0%, #f9f6ea 100%)',
            border: '2px solid #d4af37'
          }}
        >
          {/* Image Section */}
          <div className="h-64 w-full relative overflow-hidden">
            <Image
              src="https://plus.unsplash.com/premium_photo-1682098134401-61573db798a1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Ayurvedic Therapy Selection"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {/* Overlay */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              style={{
                background: 'linear-gradient(135deg, #d4af37, transparent)'
              }}
            ></div>
           
            <div 
              className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                background: 'linear-gradient(45deg, #d4af37, #f4e6a1)',
                color: '#2d5016'
              }}
            >
              Step 1
            </div>
          </div>

          <div className="p-8">
            <div className="text-center mb-6">
              <div 
                className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{ background: '#d4af37' }}
              >
                <div className="w-6 h-6 rounded bg-white"></div>
              </div>
              <h2 
                className="text-2xl font-bold mb-3"
                style={{ color: '#2d5016' }}
              >
                Explore Therapies
              </h2>
              <p 
                className="text-sm leading-relaxed"
                style={{ color: '#2d5016' }}
              >
                Discover our comprehensive range of traditional Ayurvedic treatments, 
                each carefully designed to address specific health concerns and promote holistic wellness.
              </p>
            </div>

            <div className="flex justify-center">
              <Link href="/allTherapies">
                <button 
                  className="px-8 py-3 rounded-xl font-bold shadow-lg transform hover:scale-105 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(45deg, #d4af37, #f4e6a1)',
                    color: '#2d5016',
                    border: '2px solid #2d5016'
                  }}
                >
                  Browse Therapies
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Card 2 - Health Assessment */}
        <div 
          className="shadow-2xl rounded-2xl overflow-hidden w-full max-w-md hover:scale-105 transition-all duration-300 group"
          style={{
            background: 'linear-gradient(145deg, #fdfcf7 0%, #f9f6ea 100%)',
            border: '2px solid #6b8e23'
          }}
        >
          {/* Image Section */}
          <div className="h-64 w-full relative overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Health Assessment Consultation"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {/* Overlay */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              style={{
                background: 'linear-gradient(135deg, #6b8e23, transparent)'
              }}
            ></div>
            {/* Badge */}
            <div 
              className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                background: 'linear-gradient(45deg, #6b8e23, #8fbc8f)',
                color: 'white'
              }}
            >
              Step 2
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            <div className="text-center mb-6">
              <div 
                className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{ background: '#6b8e23' }}
              >
                <div className="w-6 h-6 border-2 border-white rounded-full"></div>
              </div>
              <h2 
                className="text-2xl font-bold mb-3"
                style={{ color: '#2d5016' }}
              >
                Health Assessment
              </h2>
              <p 
                className="text-sm leading-relaxed"
                style={{ color: '#2d5016' }}
              >
                Share your health concerns and medical history with our experienced practitioners 
                to receive personalized therapy recommendations tailored to your unique needs.
              </p>
            </div>

            <div className="flex justify-center">
              <Link href="/health-assesment">
                <button 
                  className="px-8 py-3 rounded-xl font-bold shadow-lg transform hover:scale-105 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(45deg, #6b8e23, #8fbc8f)',
                    color: 'white',
                    border: '2px solid #2d5016'
                  }}
                >
                  Start Assessment
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div 
        className="py-16 px-6"
        style={{
          background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(107, 142, 35, 0.1))'
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 
            className="text-3xl font-bold mb-8"
            style={{ color: '#2d5016' }}
          >
            Why Choose AyurvedaCare?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Practitioners",
                description: "Certified Ayurvedic doctors with years of healing experience",
                color: "#d4af37"
              },
              {
                title: "Personalized Treatment",
                description: "Customized therapy plans based on your unique constitution",
                color: "#6b8e23"
              },
              {
                title: "Holistic Approach",
                description: "Complete wellness focusing on mind, body, and spirit harmony",
                color: "#8b4513"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl shadow-lg"
                style={{
                  background: 'rgba(255, 255, 255, 0.8)',
                  border: `2px solid ${feature.color}30`
                }}
              >
                <div 
                  className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ background: feature.color }}
                >
                  <div className="w-8 h-8 bg-white rounded"></div>
                </div>
                <h4 
                  className="text-xl font-bold mb-3"
                  style={{ color: '#2d5016' }}
                >
                  {feature.title}
                </h4>
                <p 
                  className="text-sm"
                  style={{ color: '#2d5016' }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h3 
            className="text-3xl font-bold mb-4"
            style={{ color: '#2d5016' }}
          >
            Ready to Begin Your Healing Journey?
          </h3>
          <p 
            className="text-lg mb-8"
            style={{ color: '#6b8e23' }}
          >
            Join thousands who have found balance and wellness through authentic Ayurvedic care.
          </p>
          <Link href="/patient-form">
            <button 
              className="px-10 py-4 rounded-xl font-bold text-lg shadow-xl transform hover:scale-105 transition-all duration-300"
              style={{
                background: 'linear-gradient(45deg, #2d5016, #4a6b2a)',
                color: 'white',
                border: '3px solid #d4af37'
              }}
            >
              Get Started Today
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
