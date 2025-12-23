"use client";

import Image from "next/image";
import ServicesCTA from "@/component/CTASection";
import { useInView } from "@/hooks/useInView";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const SERVICES = [
  {
    title: "Wedding Catering",
    category: "Royal Unions",
    desc: "Elegant, grand, and memorable wedding catering with customized menus and flawless service. We bring the 'Samrat' touch to your big day.",
    image: "/images/wedding.png",
    points: ["Traditional & Modern Menus", "Live Counters", "Premium Presentation", "Uniformed Staff"],
  },
  {
    title: "Birthday Parties",
    category: "Joyful Celebrations",
    desc: "Fun-filled birthday celebrations with kid-friendly and adult menus that everyone loves. From first birthdays to silver jubilees.",
    image: "/images/birthday.png",
    points: ["Kids Special Menu", "Theme-Based Setup", "Dessert Counters", "Popcorn & Candy Stalls"],
  },
  {
    title: "Corporate Events",
    category: "Professional Hosting",
    desc: "Professional catering solutions for meetings, conferences, and corporate celebrations. Precision timing with premium taste.",
    image: "/images/corporate.png",
    points: ["Breakfast & Lunch Buffets", "Live Counters", "Executive Packed Meals", "Tea/Coffee Service"],
  },
  {
    title: "Outdoor Catering",
    category: "Al Fresco Dining",
    desc: "Large-scale outdoor catering with powerful logistics and seamless execution. Perfect for farm parties and community festivals.",
    image: "/images/outdoor.png",
    points: ["Live BBQ & Buffets", "High Guest Capacity", "End-to-End Management", "Water & Cleanup Service"],
  },
];

export default function ServicesPage() {
  const hero = useInView();

  return (
    <main className="bg-white overflow-hidden">
      {/* ================= 1. CINEMATIC HERO ================= */}
      <section
        ref={hero.ref}
        className="relative w-full h-[85vh] flex items-center overflow-hidden"
      >
        <Image
          src="/images/services-hero.jpg"
          alt="Catering Services"
          fill
          priority
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1d39]/90 via-[#0b1d39]/60 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className={`transition-all duration-1000 delay-300 ${hero.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-600 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6">
              World Class Hospitality
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8">
              Exceptional <br /> <span className="text-orange-500 underline decoration-white/20 underline-offset-8">Experiences.</span>
            </h1>
            <p className="text-gray-200 text-lg md:text-xl max-w-xl leading-relaxed font-medium">
              We don&apos;t just serve food; we orchestrate culinary events that linger in the hearts of your guests long after the plates are cleared.
            </p>
          </div>
        </div>
      </section>

      {/* ================= 2. SERVICES SHOWCASE ================= */}
      <section className="py-32 bg-[#fcfcfc]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="space-y-40">
            {SERVICES.map((service, index) => (
              <div
                key={service.title}
                className={`flex flex-col gap-12 lg:gap-24 items-center ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                {/* IMAGE BLOCK WITH OVERLAP */}
                <div className="w-full lg:w-1/2 relative group">
                  {/* Decorative Box Behind */}
                  <div className={`absolute -inset-4 bg-orange-50 rounded-[3rem] -z-10 group-hover:scale-105 transition-transform duration-700 ${index % 2 !== 0 ? "rotate-2" : "-rotate-2"}`} />
                  
                  <div className="relative h-[400px] md:h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    {/* Category Overlay */}
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full shadow-lg">
                       <span className="text-xs font-black text-orange-600 uppercase tracking-widest">{service.category}</span>
                    </div>
                  </div>
                </div>

                {/* TEXT CONTENT */}
                <div className="w-full lg:w-1/2 space-y-8">
                  <div className="space-y-4">
                    <span className="text-orange-500 font-black text-5xl opacity">0{index + 1}</span>
                    <h2 className="text-4xl md:text-5xl font-black text-[#0b1d39] tracking-tight leading-none">
                      {service.title}
                    </h2>
                    <div className="w-16 h-1.5 bg-orange-500 rounded-full" />
                  </div>

                  <p className="text-gray-500 text-lg leading-relaxed font-medium">
                    {service.desc}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-3 group">
                        <div className="p-1 rounded-full bg-orange-100 group-hover:bg-orange-500 transition-colors">
                          <CheckCircle2 size={16} className="text-orange-600 group-hover:text-white" />
                        </div>
                        <span className="text-gray-700 font-bold text-sm tracking-wide">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-8">
                    <Link 
                      href="/book-now" 
                      className="inline-flex items-center gap-4 bg-[#0b1d39] text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl shadow-orange-600/10"
                    >
                      Enquire for {service.title}
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 3. FEATURE HIGHLIGHT ================= */}
      <section className="py-24 bg-[#0b1d39] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -mt-48 -mr-48" />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-white text-3xl md:text-5xl font-black mb-16">Why Guru Krupa Stands Out</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { t: "FSSAI Certified", d: "Highest safety & hygiene standards in the kitchen." },
              { t: "Live Chef Counters", d: "Theatrical cooking that engages your guests." },
              { t: "Bespoke Cutlery", d: "Premium bone china and designer serveware." }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-2xl bg-orange-500 flex items-center justify-center text-white font-black mb-6 mx-auto">
                  {i + 1}
                </div>
                <h4 className="text-white text-xl font-bold mb-3">{item.t}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 4. FINAL CTA ================= */}
      <ServicesCTA />
    </main>
  );
}