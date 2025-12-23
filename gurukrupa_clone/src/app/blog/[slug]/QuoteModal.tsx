"use client";

import { useState } from "react";

export default function QuoteModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 1. THE EYE-CATCHING BUTTON TRIGGER */}
      <button 
        onClick={() => setIsOpen(true)}
        className="group relative overflow-hidden bg-orange-600 px-8 py-4 rounded-2xl font-bold text-white transition-all duration-300 hover:bg-orange-700 hover:shadow-[0_0_20px_rgba(234,88,12,0.4)] active:scale-95"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          Get a Custom Quote
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </span>
        {/* Shimmer effect circle */}
        <div className="absolute inset-0 z-0 h-full w-full scale-0 rounded-2xl bg-white/20 transition-transform duration-500 group-hover:scale-150 group-hover:opacity-0" />
      </button>

      {/* 2. THE MODAL OVERLAY */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-[#0b1d39]/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* 3. THE MODAL BOX */}
          <div className="relative bg-white rounded-[2.5rem] overflow-hidden shadow-2xl max-w-lg w-full transform transition-all border border-gray-100 animate-in fade-in zoom-in duration-300">
            
            {/* Modal Header */}
            <div className="bg-[#0b1d39] p-8 text-white text-center relative">
              <h3 className="text-2xl font-bold">Request a Quote</h3>
              <p className="text-white/60 text-sm mt-2">Tell us about your event, and we'll handle the rest.</p>
              
              {/* Close Button */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Form Content */}
            <div className="p-8 space-y-5">
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition-all text-[#0b1d39]" 
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Event Type</label>
                  <select className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none text-[#0b1d39]">
                    <option>Wedding</option>
                    <option>Corporate</option>
                    <option>Reception</option>
                    <option>Birthday</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Guest Count</label>
                  <input 
                    type="number" 
                    placeholder="E.g. 150" 
                    className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none text-[#0b1d39]" 
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Event Date</label>
                <input 
                  type="date" 
                  className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none text-[#0b1d39]" 
                />
              </div>

              <button className="w-full bg-orange-600 text-white font-black py-5 rounded-2xl shadow-lg shadow-orange-200 hover:bg-orange-700 hover:-translate-y-1 active:scale-[0.98] transition-all mt-4 uppercase tracking-widest text-sm">
                Send My Request
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}