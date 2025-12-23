"use client";

import React from "react";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We will contact you shortly 😊");
  };

  return (
    <section
      id="contact"
      className="relative py-24 pb-40 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10">

        {/* SECTION HEADER */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <p className="text-orange-600 font-bold mb-3 tracking-[0.2em] uppercase text-sm">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b1d39]">
            Contact Us
          </h2>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT INFO */}
          <div data-aos="fade-right" className="lg:sticky lg:top-24">
            <h3 className="text-3xl font-bold text-[#0b1d39] mb-6">
              Let’s Plan Something <span className="text-orange-600">Delicious</span> 🍽️
            </h3>

            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              From weddings to corporate events, Guru Krupa Caterers delivers
              unforgettable taste, premium service, and flawless execution.
            </p>

            <div className="space-y-6">
              {[
                { icon: <MapPin className="text-orange-600" />, text: "Amravati, Maharashtra" },
                { icon: <Phone className="text-orange-600" />, text: "+91 98765 43210" },
                { icon: <Mail className="text-orange-600" />, text: "gurukrupacaterers@gmail.com" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="font-semibold text-[#0b1d39]">{item.text}</span>
                </div>
              ))}
            </div>

            {/* TRUST TAGS */}
            <div className="mt-10 flex flex-wrap gap-3">
              {["12+ Years Experience", "500+ Events Served", "Trusted by Clients"].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-orange-50 text-orange-700 rounded-full text-xs font-bold uppercase tracking-wider border border-orange-100">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT FORM */}
          <div
            className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-gray-50 relative"
            data-aos="fade-left"
          >
             {/* Subtle corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-[100px] -z-10 opacity-50" />
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-[#0b1d39] mb-2 uppercase tracking-tight">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 text-black focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#0b1d39] mb-2 uppercase tracking-tight">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 text-black focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
                  required
                />
              </div>

              <button
                type="submit"
                className="group relative w-full inline-flex items-center justify-center gap-3
                           py-5 rounded-2xl font-bold text-lg
                           text-white
                           bg-gradient-to-r from-orange-600 to-orange-500
                           shadow-xl shadow-orange-600/30
                           hover:shadow-2xl hover:shadow-orange-600/40
                           hover:-translate-y-1
                           active:translate-y-0
                           transition-all duration-300
                           overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/20 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 ease-out" />
                <span className="relative z-10">Submit Enquiry</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-xs text-gray-400 text-center font-medium">
                We respect your privacy. No spam, guaranteed.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* ================= MODERN CURVED BOTTOM DIVIDER ================= */}
      {/* If your footer is dark/gray, change 'fill-white' to match footer background */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-[80px] md:h-[120px] fill-white" 
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.23,105.47,151,114.11,219,101.55,274.65,91.3,284,63.36,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}