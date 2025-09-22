import Navbar from "@/Components/navbar"
export default function About() {
  return (
    <div 
      className="min-h-screen"
      style={{
        background: 'linear-gradient(135deg, #f7f3e9 0%, #e8dcc0 50%, #d4e7d4 100%)'
      }}
    >
     
      <div className="w-full h-1" 
           style={{ background: 'linear-gradient(90deg, #d4af37, #6b8e23, #8b4513)' }}></div>
             <Navbar/>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
      
        
        <div className="text-center">
          <h1 
            className="text-4xl sm:text-5xl font-bold mb-6"
            style={{ 
              color: '#2d5016',
              textShadow: '2px 2px 4px rgba(212, 175, 55, 0.3)'
            }}
          >
            About AyurvedaCare
          </h1>
          <div 
            className="w-32 h-1 mx-auto mb-8"
            style={{ background: 'linear-gradient(90deg, #d4af37, #6b8e23)' }}
          ></div>
          <p 
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: '#2d5016' }}
          >
            Bridging ancient Ayurvedic wisdom with modern healthcare technology to provide 
            personalized, holistic healing experiences for complete mind-body-spirit wellness.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <div 
            className="shadow-2xl rounded-2xl p-8"
            style={{
              background: 'linear-gradient(145deg, #fdfcf7 0%, #f9f6ea 100%)',
              border: '2px solid #d4af37'
            }}
          >
            <div className="text-center mb-6">
              <div 
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{ background: '#d4af37' }}
              >
                <div className="w-8 h-8 rounded bg-white"></div>
              </div>
              <h2 
                className="text-2xl font-bold"
                style={{ color: '#2d5016' }}
              >
                Our Mission
              </h2>
            </div>
            <p 
              className="text-lg leading-relaxed text-center"
              style={{ color: '#2d5016' }}
            >
              To make authentic Ayurvedic healing accessible to everyone by combining 
              time-tested traditional practices with modern convenience and personalized care.
            </p>
          </div>

          {/* Vision */}
          <div 
            className="shadow-2xl rounded-2xl p-8"
            style={{
              background: 'linear-gradient(145deg, #fdfcf7 0%, #f9f6ea 100%)',
              border: '2px solid #6b8e23'
            }}
          >
            <div className="text-center mb-6">
              <div 
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{ background: '#6b8e23' }}
              >
                <div className="w-8 h-8 border-2 border-white rounded-full"></div>
              </div>
              <h2 
                className="text-2xl font-bold"
                style={{ color: '#2d5016' }}
              >
                Our Vision
              </h2>
            </div>
            <p 
              className="text-lg leading-relaxed text-center"
              style={{ color: '#2d5016' }}
            >
              To become the leading platform for holistic wellness, where ancient wisdom 
              meets modern technology to heal and nurture lives across the globe.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div 
          className="shadow-2xl rounded-2xl p-8 sm:p-12"
          style={{
            background: 'linear-gradient(145deg, #fdfcf7 0%, #f9f6ea 100%)',
            border: '2px solid #8b4513'
          }}
        >
          <div className="text-center mb-8">
            <h2 
              className="text-3xl font-bold mb-4"
              style={{ color: '#2d5016' }}
            >
              Our Story
            </h2>
            <div 
              className="w-24 h-1 mx-auto"
              style={{ background: '#8b4513' }}
            ></div>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <p 
              className="text-lg leading-relaxed"
              style={{ color: '#2d5016' }}
            >
              Founded by a team of passionate healthcare professionals and Ayurvedic practitioners, 
              AyurvedaCare was born from the belief that everyone deserves access to natural, 
              holistic healing methods that have been proven effective for over 5,000 years.
            </p>
            <p 
              className="text-lg leading-relaxed"
              style={{ color: '#2d5016' }}
            >
              Our journey began when we witnessed the transformative power of Ayurveda in healing 
              not just symptoms, but addressing root causes of health imbalances. We recognized 
              the need to make these ancient practices more accessible in our modern, fast-paced world.
            </p>
            <p 
              className="text-lg leading-relaxed"
              style={{ color: '#2d5016' }}
            >
              Today, we proudly serve thousands of individuals on their wellness journeys, 
              connecting them with certified Ayurvedic practitioners who provide personalized 
              treatment plans designed to restore balance and promote lasting health.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div>
          <div className="text-center mb-12">
            <h2 
              className="text-3xl font-bold mb-4"
              style={{ color: '#2d5016' }}
            >
              Our Core Values
            </h2>
            <div 
              className="w-24 h-1 mx-auto"
              style={{ background: 'linear-gradient(90deg, #d4af37, #6b8e23)' }}
            ></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Authenticity",
                description: "We honor traditional Ayurvedic principles and practices",
                color: "#d4af37"
              },
              {
                title: "Compassion",
                description: "Every interaction is guided by empathy and care",
                color: "#6b8e23"
              },
              {
                title: "Excellence",
                description: "We maintain the highest standards in all our services",
                color: "#8b4513"
              },
              {
                title: "Innovation",
                description: "We embrace technology to enhance healing experiences",
                color: "#d4af37"
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl shadow-lg text-center hover:scale-105 transition-transform duration-300"
                style={{
                  background: 'rgba(255, 255, 255, 0.8)',
                  border: `2px solid ${value.color}30`
                }}
              >
                <div 
                  className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ background: value.color }}
                >
                  <div className="w-6 h-6 bg-white rounded"></div>
                </div>
                <h3 
                  className="text-xl font-bold mb-3"
                  style={{ color: '#2d5016' }}
                >
                  {value.title}
                </h3>
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: '#2d5016' }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div 
          className="shadow-2xl rounded-2xl p-8 sm:p-12"
          style={{
            background: 'linear-gradient(145deg, #fdfcf7 0%, #f9f6ea 100%)',
            border: '2px solid #6b8e23'
          }}
        >
          <div className="text-center mb-8">
            <h2 
              className="text-3xl font-bold mb-4"
              style={{ color: '#2d5016' }}
            >
              Our Commitment
            </h2>
            <div 
              className="w-24 h-1 mx-auto"
              style={{ background: '#6b8e23' }}
            ></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {[
                {
                  stat: "500+",
                  label: "Happy Patients",
                  color: "#d4af37"
                },
                {
                  stat: "50+",
                  label: "Certified Practitioners",
                  color: "#6b8e23"
                },
                {
                  stat: "25+",
                  label: "Therapy Types",
                  color: "#8b4513"
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div 
                    className="text-4xl font-bold mb-2"
                    style={{ color: item.color }}
                  >
                    {item.stat}
                  </div>
                  <div 
                    className="text-lg font-semibold"
                    style={{ color: '#2d5016' }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <p 
              className="text-lg leading-relaxed text-center"
              style={{ color: '#2d5016' }}
            >
              We are committed to maintaining the highest standards of care while making 
              Ayurvedic healing accessible, convenient, and personalized for each individual's 
              unique constitution and health needs.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div 
            className="max-w-2xl mx-auto p-8 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(107, 142, 35, 0.1))',
              border: '2px solid rgba(212, 175, 55, 0.3)'
            }}
          >
            <h3 
              className="text-2xl font-bold mb-4"
              style={{ color: '#2d5016' }}
            >
              Ready to Begin Your Wellness Journey?
            </h3>
            <p 
              className="text-lg mb-6"
              style={{ color: '#2d5016' }}
            >
              Join our community of wellness seekers and discover the transformative 
              power of authentic Ayurvedic healing.
            </p>
        
          </div>
        </div>
      </div>
    </div>
  )
}
