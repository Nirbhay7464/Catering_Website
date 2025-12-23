"use client";

import Link from "next/link";
import { useState } from "react";
import { Utensils, Cake, Building2, TreePine, ChevronRight, X, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ================= TYPES ================= */
type Service = {
  title: string;
  desc: string;
  icon: React.ReactNode;
  menu: string[];
  color: string;
  lightBg: string;
};

/* ================= DATA ================= */
const SERVICE_LIST: Service[] = [
  {
    title: "Wedding Catering",
    desc: "Elegant menus & flawless service for your special day",
    icon: <Utensils className="w-8 h-8" />,
    menu: ["Welcome Drinks", "Starter Platter", "Paneer & Veg Curries", "Dal & Rice", "Live Dessert Counter"],
    color: "text-orange-600",
    lightBg: "bg-orange-50",
  },
  {
    title: "Birthday Parties",
    desc: "Fun, fresh & delicious food for all age groups",
    icon: <Cake className="w-8 h-8" />,
    menu: ["Chaat Counter", "Kids Special Burger/Pasta", "Mini Main Course", "Customized Dessert Jars"],
    color: "text-blue-600",
    lightBg: "bg-blue-50",
  },
  {
    title: "Corporate Events",
    desc: "Professional catering for meetings & conferences",
    icon: <Building2 className="w-8 h-8" />,
    menu: ["Continental Breakfast", "Working Lunch Buffet", "Evening High-Tea", "Live Pasta Counter"],
    color: "text-slate-600",
    lightBg: "bg-slate-100",
  },
  {
    title: "Outdoor Catering",
    desc: "Large-scale catering with perfect execution",
    icon: <TreePine className="w-8 h-8" />,
    menu: ["Live Dosa & Pav Bhaji", "Bulk Buffet Setup", "Traditional Maharashtrian Menu", "Live BBQ"],
    color: "text-emerald-600",
    lightBg: "bg-emerald-50",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState<Service | null>(null);

  return (
    <main className="bg-white">
      <section className="relative pt-32 lg:pt-44 pb-32 bg-[#fcfcfc] overflow-hidden">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* Heading */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-12 bg-orange-500" />
              <p className="text-orange-600 font-black text-xs uppercase tracking-[0.3em]">
                Our Expertise
              </p>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-[#0b1d39] tracking-tighter leading-none">
              What We <br /> <span className="text-orange-500">Specialize</span> In
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICE_LIST.map((service) => (
              <motion.div
                key={service.title}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-[3rem] p-10 shadow-sm border border-slate-100 transition-all duration-500 relative overflow-hidden flex flex-col h-full"
              >
                {/* Icon Circle with dynamic background */}
                <div className={`w-20 h-20 rounded-[2rem] ${service.lightBg} ${service.color} flex items-center justify-center mb-8 
                               group-hover:bg-orange-600 group-hover:text-white transition-all duration-500 shadow-sm`}>
                  {service.icon}
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight">
                  {service.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-8 font-semibold flex-grow">
                  {service.desc}
                </p>

                <button
                  onClick={() => setActiveService(service)}
                  className="flex items-center gap-2 text-slate-900 font-black text-xs uppercase tracking-[0.2em] 
                               group-hover:text-orange-600 transition-colors duration-300"
                >
                  Explore Menu
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-orange-50 group-hover:translate-x-1 transition-all">
                    <ChevronRight size={16} />
                  </div>
                </button>

                {/* Corner Accent Decor */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-slate-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* MODERN WAVE DIVIDER */}
        <div className="absolute bottom-0 left-0 w-full rotate-180 leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[80px] fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.23,105.47,151,114.11,219,101.55,274.65,91.3,284,63.36,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* ================= MENU MODAL ================= */}
      <AnimatePresence>
        {activeService && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#0b1d39]/90 backdrop-blur-md" 
              onClick={() => setActiveService(null)}
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-[3.5rem] p-8 md:p-12 max-w-xl w-full shadow-2xl relative z-10 border border-white/20"
            >
              <button
                onClick={() => setActiveService(null)}
                className="absolute top-8 right-8 w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all shadow-sm"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-5 mb-10">
                <div className={`w-16 h-16 ${activeService.lightBg} ${activeService.color} rounded-2xl flex items-center justify-center shadow-sm`}>
                  {activeService.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-black text-slate-900 leading-none mb-2">
                    {activeService.title}
                  </h3>
                  <p className="text-orange-600 font-black text-[10px] uppercase tracking-[0.2em]">Sample Menu Highlights</p>
                </div>
              </div>

              <div className="space-y-3 mb-10">
                {activeService.menu.map((item) => (
                  <div key={item} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-orange-200 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                        <CheckCircle2 size={16} className="text-orange-500" />
                    </div>
                    <span className="font-bold text-slate-800 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/book-now"
                className="w-full bg-[#0b1d39] text-white py-6 rounded-[2rem] font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3
                           hover:bg-orange-600 transition-all shadow-2xl shadow-orange-600/20"
                onClick={() => setActiveService(null)}
              >
                Get a Quote
                <ChevronRight size={18} />
              </Link>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}