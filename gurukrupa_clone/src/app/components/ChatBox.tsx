"use client";

import { useState } from "react";
import { ChefHat, X, Phone, Calendar, Package, ArrowRight, Utensils } from "lucide-react";
import Link from "next/link";

export default function ChatBot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button - Slightly smaller */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50
                   w-14 h-14 rounded-2xl
                   bg-[#ff5a1f] text-white
                   flex items-center justify-center
                   shadow-lg hover:scale-110
                   transition-all duration-200 active:scale-95"
      >
        <ChefHat className="w-7 h-7" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border-2 border-[#ff5a1f]"></span>
        </span>
      </button>

      {/* Optimized Chat Window */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50
                     w-[320px] max-h-[500px]
                     bg-white rounded-3xl
                     shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] border border-gray-100 
                     overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        >
          {/* Header - Compact */}
          <div className="flex items-center justify-between
                          bg-[#0b1d39] px-4 py-4 text-white">
            <div className="flex items-center gap-3">
              <div className="bg-orange-500 p-1.5 rounded-lg">
                <Utensils className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-sm leading-none">GuruKrupa Catering Assistant</p>
                <p className="text-[9px] text-green-400 font-bold uppercase mt-1">Online</p>
              </div>
            </div>
            {/* High-Responsiveness Close Button */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
              }} 
              className="hover:bg-white/10 p-1.5 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Body - Tighter Spacing */}
          <div className="p-4 space-y-3 text-[13px] text-gray-700">
  <div className="bg-[#fdf2f0] border-l-4 border-orange-500 rounded-r-2xl p-4 shadow-sm">
     <p className="font-bold text-[#0b1d39] mb-1">Make your event memorable! ✨</p>
     <p className="text-gray-600 leading-relaxed">
      Every great story starts with a legendary meal. Let's plan yours!
     </p>
  </div>

            <div className="grid gap-2">
              <a href="tel:+919876543210" className="flex items-center justify-between bg-[#ff5a1f] text-white px-4 py-3 rounded-xl font-bold hover:bg-orange-600 transition text-xs">
                <span>📞 Call Specialist</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a href="https://wa.me/919876543210" target="_blank" className="flex items-center justify-between bg-white border border-gray-200 text-gray-700 px-4 py-3 rounded-xl font-bold hover:bg-gray-50 transition text-xs">
                <span className="flex items-center gap-2"><ArrowRight className="w-3.5 h-3.5 text-green-500" /> WhatsApp</span>
              </a>

              <Link href="/book-now" className="flex items-center justify-between bg-white border border-gray-200 text-gray-700 px-4 py-3 rounded-xl font-bold hover:bg-gray-50 transition text-xs">
                <span className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5 text-blue-500" /> Book Event</span>
              </Link>

              <Link href="/packages" className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl border border-dashed border-gray-300 hover:border-orange-300 transition group">
                <Package className="w-4 h-4 text-gray-400 group-hover:text-orange-500" />
                <span className="font-bold text-xs">Menu Packages</span>
              </Link>
            </div>
          </div>

          <div className="text-center text-[9px] text-gray-400 py-3 bg-gray-50 border-t">
            Gurukrupa Samrat Catering Services • Since 1998
          </div>
        </div>
      )}
    </>
  );
}