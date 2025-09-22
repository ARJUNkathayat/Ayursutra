"use client"
"use client"
import React from "react";

const AyurSutraLandingPageImproved = () => {
  const therapies = [
    {
      title: "Vaman Karma",
      desc: "Therapeutic vomiting eliminates vitiated Kapha dosha to enhance digestion and strengthen immunity. It detoxifies the lungs and stomach, providing relief from respiratory conditions and allergies.",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=870&auto=format&fit=crop",
      gradient: "from-amber-400 via-yellow-500 to-amber-600",
      bgColor: "bg-amber-50",
      textColor: "text-amber-800"
    },
    {
      title: "Virechan Karma", 
      desc: "A medicated purgation therapy to cleanse excess Pitta from the liver and intestines. Known for alleviating ulcers, jaundice, acidity, and improving liver function effectively.",
      image: "https://images.unsplash.com/photo-1509537269536-fd239b71603a?q=80&w=870&auto=format&fit=crop",
      gradient: "from-yellow-400 via-amber-500 to-yellow-600",
      bgColor: "bg-yellow-50", 
      textColor: "text-yellow-800"
    },
    {
      title: "Basti",
      desc: "Herbal enema therapy that cleanses the colon, supports nervous system health, balances Vata dosha, and relieves constipation, back pain, and joint stiffness.",
      image: "https://images.unsplash.com/photo-1590716033627-82c9fa549980?q=80&w=870&auto=format&fit=crop",
      gradient: "from-green-400 via-emerald-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-800"
    },
    {
      title: "Nasya",
      desc: "Nasal administration of herbal oils to clear sinuses, strengthen nasal passages, and treat sinusitis, headaches, migraines, and allergies effectively.",
      image: "https://images.unsplash.com/photo-1475632663836-c6a36ae08111?q=80&w=870&auto=format&fit=crop", 
      gradient: "from-emerald-400 via-green-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-800"
    },
    {
      title: "Rakta Moksha",
      desc: "Blood detoxification therapy to purify blood and improve circulation. Beneficial in treating skin diseases, blood disorders, and promoting overall cardiovascular health.",
      image: "https://images.unsplash.com/photo-1602936851942-d0a9f0b6b1a1?q=80&w=870&auto=format&fit=crop",
      gradient: "from-orange-400 via-amber-500 to-orange-600", 
      bgColor: "bg-orange-50",
      textColor: "text-orange-800"
    },
  ];

  return (
    <div className="font-sans bg-gradient-to-b from-amber-50 via-yellow-50 to-green-50 text-green-900 min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[95vh] flex justify-center items-center">
        <img
          src="https://patanjaliwellness.com/assets/images/panchakarma-hero.jpg"
          alt="Panchakarma Therapy"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 via-amber-900/60 to-green-900/80"></div>
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <h1 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-300 drop-shadow-2xl leading-tight animate-pulse">
            AyurSutra Panchakarma
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-200 mt-4 drop-shadow-lg">
            Healing Therapy
          </h2>
          <p className="mt-8 text-xl md:text-2xl text-amber-100 drop-shadow-md max-w-3xl mx-auto leading-relaxed">
            Restore balance and vitality with ancient Ayurvedic Panchakarma treatments that detoxify and rejuvenate your mind, body, and spirit through time-honored healing practices.
          </p>
          <div className="mt-12 space-x-4">
            <button
              onClick={() => window.location.href = "/patient-form"}
              className="px-12 py-4 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 text-green-900 font-bold rounded-full shadow-2xl hover:scale-110 hover:shadow-amber-500/50 transform transition duration-300 text-lg"
            >
              Book Your Session
            </button>
            <button className="px-12 py-4 border-2 border-amber-400 text-amber-200 font-semibold rounded-full hover:bg-amber-400 hover:text-green-900 transition duration-300 text-lg">
              Learn More
            </button>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-20 animate-bounce delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full opacity-20 animate-bounce delay-500"></div>
      </section>

      {/* Elegant Wave Divider */}
      <div className="relative">
        <svg className="w-full h-20 text-amber-50" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      {/* About Panchakarma Section */}
      <section className="bg-gradient-to-r from-amber-50 to-yellow-50 py-24">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 max-w-7xl">
          <div className="lg:w-1/2">
            <img
              src="https://patanjaliwellness.com/assets/images/panchakarma-about.jpg"
              alt="About Panchakarma"
              className="rounded-3xl shadow-2xl w-full object-cover hover:scale-105 transition-transform duration-500 border-4 border-amber-200"
            />
          </div>
          <div className="lg:w-1/2 space-y-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mr-4"></div>
              <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-emerald-700">
                About Panchakarma
              </h2>
            </div>
            <p className="text-green-800 text-xl leading-relaxed">
              Panchakarma is a **powerful Ayurvedic detoxification treatment** uniquely designed to cleanse accumulated toxins, kindle your digestive force (Agni), and restore natural balance.
            </p>
            <p className="text-green-700 text-lg leading-relaxed">
              Experience a harmonious sequence of therapies including medicated oils, therapeutic steam, and specialized cleansing treatments that rejuvenate mind, body, and spirit through ancient wisdom.
            </p>
            <div className="pt-4">
              <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
                Discover Benefits
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Three Core Stages */}
      <section className="bg-gradient-to-b from-green-50 to-emerald-50 py-24 px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-emerald-700 mb-4">
            The Three Sacred Stages
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl grid md:grid-cols-3 gap-12">
          {[
            { 
              title: "Purvakarma", 
              desc: "Preparatory rituals including Snehana (oil massage), Abhyanga, and Swedana (herbal steam) to soften toxins and prepare the body for deep cleansing.", 
              color: "from-amber-600 to-yellow-600",
              icon: "🌿"
            },
            { 
              title: "Pradhankarma", 
              desc: "Main cleansing therapies like Vamana, Virechana, Basti, Nasya, and Rakta Moksha for complete detoxification and system purification.", 
              color: "from-green-600 to-emerald-600",
              icon: "🧘"
            },
            { 
              title: "Paschatkarma", 
              desc: "Post-treatment rejuvenation with specialized diet, lifestyle guidance, and herbal tonics to rebuild strength and maintain optimal balance.", 
              color: "from-orange-600 to-amber-600",
              icon: "✨"
            }
          ].map((stage, i) => (
            <div key={i} className="group">
              <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 border-t-4 border-amber-400">
                <div className="text-4xl mb-6 text-center">{stage.icon}</div>
                <h3 className={`text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${stage.color} text-center`}>
                  {stage.title}
                </h3>
                <p className="text-green-800 text-center leading-relaxed">{stage.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Five Therapies Section */}
      <section className="container mx-auto px-6 py-24 max-w-7xl space-y-24">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-emerald-700 mb-4">
            The Five Sacred Karmas
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto mb-6"></div>
          <p className="text-green-700 text-xl max-w-3xl mx-auto">
            Each therapy is carefully designed to address specific imbalances and restore harmony
          </p>
        </div>

        {therapies.map(({ title, desc, image, gradient, bgColor, textColor }, i) => (
          <div
            key={i}
            className={`flex flex-col lg:flex-row ${i % 2 === 1 ? "lg:flex-row-reverse" : ""} rounded-3xl shadow-2xl overflow-hidden hover:shadow-amber-500/20 transition-all duration-500 group`}
          >
            {/* Image */}
            <div className="lg:w-1/2 relative overflow-hidden">
              <img
                src={image}
                alt={title}
                className="object-cover w-full h-80 lg:h-full transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-amber-900/30"></div>
              <div className="absolute bottom-4 left-4 lg:hidden">
                <span className="bg-white/90 text-green-800 px-4 py-2 rounded-full font-semibold">
                  {title}
                </span>
              </div>
            </div>
            
            {/* Content */}
            <div className={`lg:w-1/2 p-12 flex flex-col justify-center ${bgColor} relative`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-200/20 to-transparent rounded-bl-full"></div>
              
              <h3 className={`text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>
                {title}
              </h3>
              
              <p className={`${textColor} text-lg leading-relaxed mb-8`}>
                {desc}
              </p>
              
              <div className="space-y-4">
                <button
                  className={`px-8 py-4 rounded-full font-semibold shadow-lg text-white bg-gradient-to-r ${gradient} hover:scale-105 transform transition-all duration-300 hover:shadow-xl`}
                >
                  Learn More About {title}
                </button>
                <div className="flex items-center space-x-4 text-sm">
                  <span className={`${textColor} opacity-75`}>✓ Traditional Ayurvedic Method</span>
                  <span className={`${textColor} opacity-75`}>✓ Personalized Treatment</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action Footer */}
      <section className="bg-gradient-to-r from-green-800 via-emerald-700 to-green-800 py-20 text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-200 mb-6">
            Begin Your Healing Journey Today
          </h2>
          <p className="text-xl text-green-100 mb-10 leading-relaxed">
            Experience the transformative power of authentic Panchakarma therapy guided by experienced practitioners
          </p>
          <div className="space-x-6">
            <button
              onClick={() => window.location.href = "/patient-form"}
              className="px-12 py-4 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 text-green-900 font-bold rounded-full shadow-2xl hover:scale-110 transform transition duration-300 text-lg"
            >
              Schedule Consultation
            </button>
            <button className="px-12 py-4 border-2 border-amber-400 text-amber-200 font-semibold rounded-full hover:bg-amber-400 hover:text-green-900 transition duration-300 text-lg">
              Call Us Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AyurSutraLandingPageImproved;
