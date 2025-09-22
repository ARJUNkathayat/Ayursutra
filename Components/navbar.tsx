"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import GoogleTranslate from "./GoogleTranslate";

export default function Navbar() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (path: string) => {
    console.log("Navigating to:", path); // Add this to debug
    router.push(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className="w-full py-4 px-6 flex justify-between items-center fixed top-0 z-50 shadow-lg"
        style={{
          background: "rgba(253, 252, 247, 0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: "2px solid rgba(212, 175, 55, 0.3)",
        }}
      >
        {/* Logo Section */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => handleNavigation("/selectTherapy")}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg"
            style={{
              background: "linear-gradient(135deg, #d4af37, #f4e6a1)",
              color: "#2d5016",
            }}
          >
            AC
          </div>
          <div>
            <div className="font-bold text-xl" style={{ color: "#2d5016" }}>
              AyurvedaCare
            </div>
            <div className="text-xs font-medium" style={{ color: "#6b8e23" }}>
              Ancient Wisdom, Modern Healing
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6 items-center">
          {["/selectTherapy", "/allTherapies", "/dashboard/patient/1", "/about"].map(
            (path, idx) => (
              <button
                key={idx}
                type="button" // ADD THIS
                onClick={() => handleNavigation(path)}
                className="font-medium hover:underline transition-colors duration-300"
                style={{ color: "#2d5016" }}
              >
                {["Home", "Therapies", "Dashboard", "About"][idx]}
              </button>
            )
          )}

          {/* CTA Button */}
          <button
            type="button" // ADD THIS
            onClick={() => handleNavigation("/seeAllDoctors")}
            className="px-6 py-2 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
            style={{
              background: "linear-gradient(45deg, #6b8e23, #8fbc8f)",
              color: "white",
              border: "2px solid #2d5016",
            }}
          >
            See All Doctors
          </button>

          {/* Google Translate */}
          <GoogleTranslate />
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            type="button" // ADD THIS
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg shadow-md transition-all duration-300"
            style={{
              background: isMobileMenuOpen
                ? "linear-gradient(45deg, #6b8e23, #8fbc8f)"
                : "rgba(255, 255, 255, 0.8)",
              color: isMobileMenuOpen ? "white" : "#2d5016",
              border: "2px solid #d4af37",
            }}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <div
                className={`w-4 h-0.5 transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1" : ""
                }`}
                style={{ background: "currentColor" }}
              ></div>
              <div
                className={`w-4 h-0.5 mt-1 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
                style={{ background: "currentColor" }}
              ></div>
              <div
                className={`w-4 h-0.5 mt-1 transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
                style={{ background: "currentColor" }}
              ></div>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden flex justify-center items-start pt-20"
          style={{
            background: "rgba(45, 80, 22, 0.8)",
            backdropFilter: "blur(8px)",
          }}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="w-11/12 rounded-2xl shadow-2xl overflow-hidden"
            style={{
              background: "linear-gradient(145deg, #fdfcf7 0%, #f9f6ea 100%)",
              border: "2px solid #d4af37",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 space-y-4">
              {[
                { name: "Home", path: "/selectTherapy" },
                { name: "Therapies", path: "/allTherapies" },
                { name: "Practitioners", path: "/seeAllDoctors" }, // Fixed path
                { name: "Dashboard", path: "/dashboard/patient/1" },
                { name: "About", path: "/about" },
              ].map((item, idx) => (
                <button
                  key={idx}
                  type="button" // ADD THIS
                  onClick={() => handleNavigation(item.path)}
                  className="w-full text-left p-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                  style={{
                    color: "#2d5016",
                    background: "rgba(212, 175, 55, 0.1)",
                    border: "1px solid rgba(212, 175, 55, 0.3)",
                  }}
                >
                  {item.name}
                </button>
              ))}

              {/* Google Translate for Mobile */}
              <div className="flex justify-center py-4">
                <GoogleTranslate />
              </div>

              {/* Mobile CTA */}
              <button
                type="button" // ADD THIS
                onClick={() => handleNavigation("/patient-form")}
                className="w-full p-4 rounded-lg font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-300 mt-4"
                style={{
                  background: "linear-gradient(45deg, #6b8e23, #8fbc8f)",
                  color: "white",
                  border: "2px solid #2d5016",
                }}
              >
                Book Your Session
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Spacer for fixed header */}
      <div className="h-20"></div>
    </>
  );
}
