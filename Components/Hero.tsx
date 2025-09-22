"use client"
import gsap from "gsap";
import { useRef,useEffect,useState } from "react";

export default function Hero() {
  const ref = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([".hero-title", ".hero-sub", ".hero-buttons", ".hero-stats"], {
        y: 80,
        opacity: 0
      });
      gsap.set(".floating-element", { scale: 0, rotation: -180 });
      gsap.set(".mockup-container", { x: 100, opacity: 0 });

      // Main timeline
      const tl = gsap.timeline({
        onComplete: () => setIsLoaded(true)
      });

      // Animated entrance sequence
      tl.to(".hero-title", {
        y: 0,
        opacity: 1,
        duration: 1.4,
        ease: "power3.out",
        stagger: 0.1,
      })
      .to(".hero-sub", {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
      }, "-=0.8")
      .to(".hero-buttons", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)",
      }, "-=0.6")
      .to(".hero-stats", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
      }, "-=0.4")
      .to(".floating-element", {
        scale: 1,
        rotation: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.5)",
        stagger: 0.2,
      }, "-=1")
      .to(".mockup-container", {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
      }, "-=0.8");

      // Continuous floating animations
      gsap.to(".floating-herb-1", {
        y: -25,
        x: 15,
        rotation: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 4,
      });

      gsap.to(".floating-herb-2", {
        y: -20,
        x: -10,
        rotation: -3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 3.5,
        delay: 1,
      });

      gsap.to(".floating-herb-3", {
        y: -15,
        x: 8,
        rotation: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 5,
        delay: 2,
      });

      // Mockup breathing effect
      gsap.to(".mockup-content", {
        scale: 1.02,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 3,
      });

    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={ref} 
      className="min-h-screen flex items-center pt-28 px-6 md:px-24 bg-gradient-to-br from-amber-50 via-emerald-50 to-teal-50 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200 rounded-full blur-3xl"></div>
        <div className="absolute top-60 right-20 w-40 h-40 bg-amber-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-1/3 w-36 h-36 bg-teal-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl z-10">
        <div className="relative">
          {/* Enhanced Floating Elements */}
          <div className="floating-element floating-herb-1 absolute -left-8 -top-4 w-20 h-20">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
            </div>
          </div>

          <div className="floating-element floating-herb-2 absolute -right-6 top-12 w-16 h-16">
            <div className="w-full h-full rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg rotate-12">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
              </svg>
            </div>
          </div>

          <div className="floating-element floating-herb-3 absolute left-1/2 -top-8 w-12 h-12">
            <div className="w-full h-full rounded-lg bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center shadow-lg -rotate-6">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>

          {/* Enhanced Title */}
          <h1 className="hero-title text-5xl md:text-7xl font-black leading-tight bg-gradient-to-r from-gray-900 via-emerald-800 to-teal-700 bg-clip-text text-transparent">
            Personalized
            <br />
            <span className="relative">
              Panchakarma
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full transform origin-left scale-x-0 animate-pulse"></div>
            </span>
            <br />
            <span className="text-emerald-700">Therapy Booking</span>
          </h1>

          {/* Enhanced Subtitle */}
          <div className="hero-sub mt-6 space-y-2">
            <p className="text-xl text-gray-700 max-w-2xl leading-relaxed">
              Book authentic Panchakarma treatments, track your recovery, and let experienced 
              <span className="font-semibold text-emerald-700"> Ayurvedic practitioners</span> guide your healing journey.
            </p>
            
            {/* Trust Indicators */}
            <div className="hero-stats flex flex-wrap gap-6 mt-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>500+ Certified Practitioners</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span>10,000+ Successful Treatments</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span>98% Recovery Rate</span>
              </div>
            </div>
          </div>

          {/* Enhanced Buttons */}
          <div className="hero-buttons mt-10 flex flex-col sm:flex-row gap-4 items-start">
            <button className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 overflow-hidden">
              <span className="relative z-10">Book Your Therapy</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
            
            <button className="group px-6 py-4 rounded-xl bg-white/80 backdrop-blur-sm border border-white/50 text-gray-700 font-medium hover:bg-white transition-all duration-300 hover:shadow-lg">
              <span className="flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mockup */}
      <div className="mockup-container hidden lg:block ml-auto w-[480px] h-[380px] relative">
        <div className="mockup-content absolute inset-0 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 p-8 shadow-2xl">
          <div className="w-full h-full rounded-2xl bg-gradient-to-b from-white/80 to-emerald-50/80 p-6 relative overflow-hidden">
            
            {/* Mockup Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="text-xs text-gray-500">Panchakarma App</div>
            </div>

            {/* Mockup Content */}
            <div className="space-y-4">
              <div className="h-20 rounded-xl bg-gradient-to-r from-emerald-100 to-teal-100 p-4 flex items-center justify-between">
                <div>
                  <div className="w-20 h-3 bg-emerald-300 rounded mb-2"></div>
                  <div className="w-16 h-2 bg-emerald-200 rounded"></div>
                </div>
                <div className="w-12 h-12 bg-emerald-400 rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="h-16 rounded-lg bg-amber-100 p-3">
                  <div className="w-full h-2 bg-amber-300 rounded mb-2"></div>
                  <div className="w-3/4 h-2 bg-amber-200 rounded"></div>
                </div>
                <div className="h-16 rounded-lg bg-teal-100 p-3">
                  <div className="w-full h-2 bg-teal-300 rounded mb-2"></div>
                  <div className="w-2/3 h-2 bg-teal-200 rounded"></div>
                </div>
              </div>
              
              <div className="h-12 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-500 flex items-center justify-center">
                <div className="w-6 h-2 bg-white/80 rounded"></div>
              </div>
            </div>

            {/* Floating particles in mockup */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-8 left-6 w-1 h-1 bg-amber-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
