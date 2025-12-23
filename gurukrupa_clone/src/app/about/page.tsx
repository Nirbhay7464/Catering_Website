"use client";

import Image from "next/image";
import Counter from "@/component/counter";
import ServicesCTA from "@/component/CTASection";
import AnimateOnView from "../components/AnimateOnView"; 

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* ================= HERO / INTRO ================= */}
      <section className="relative pt-32 lg:pt-40 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* TEXT CONTENT */}
          <div className="space-y-6">
            <AnimateOnView>
              <p className="text-orange-600 font-bold tracking-[0.2em] uppercase text-sm">
                About Us
              </p>
              <h1 className="text-4xl md:text-6xl font-black text-[#0b1d39] leading-tight">
                Gurukrupa Samrat <br /> 
                <span className="text-orange-500">Catering Services</span>
              </h1>
              <div className="w-20 h-1.5 bg-orange-500 rounded-full my-6" />
            </AnimateOnView>

            <AnimateOnView delay={200}>
              <p className="text-gray-600 leading-relaxed text-lg font-medium">
                Gurukrupa Samrat Catering Services is a trusted and well-established
                name in premium catering, known for exceptional food quality,
                professional service, and flawless execution in Amravati.
              </p>
            </AnimateOnView>

            <AnimateOnView delay={300}>
              <div className="space-y-4 text-gray-500">
                <p className="leading-relaxed">
                  From intimate family gatherings to grand wedding celebrations and
                  large-scale corporate events, we specialize in crafting customized
                  menus that reflect taste, tradition, and innovation.
                </p>
                <p className="leading-relaxed">
                  Our experienced chefs, well-trained staff, and carefully curated
                  ingredients ensure every dish is served fresh, hygienic, and full
                  of flavor — creating memorable experiences your guests will talk
                  about long after the event ends.
                </p>
              </div>
            </AnimateOnView>
          </div>

          {/* IMAGE WITH PREMIUM FRAME */}
          <AnimateOnView delay={400} className="relative">
            <div className="absolute -inset-4 bg-orange-100 rounded-[3rem] -rotate-3 -z-10" />
            <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white group">
              <Image
                src="/images/about.jpg"
                alt="Premium Catering Setup"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d39]/40 to-transparent" />
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* ================= STATS / COUNTERS ================= */}
      <section className="relative py-24 bg-[#0b1d39] text-white overflow-hidden">
        {/* Top Curve Divider */}
        <div className="absolute top-0 left-0 w-full rotate-180 leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.23,105.47,151,114.11,219,101.55,274.65,91.3,284,63.36,321.39,56.44Z"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10 py-12">
          <Stat label="Years of Experience">
            <Counter end={12} suffix="+" />
          </Stat>
          <Stat label="Events Catered">
            <Counter end={500} suffix="+" />
          </Stat>
          <Stat label="Happy Clients">
            <Counter end={1000} suffix="+" />
          </Stat>
          <Stat label="Cities Served">
            <Counter end={10} suffix="+" />
          </Stat>
        </div>

        {/* Bottom Curve Divider */}
        <div className="absolute bottom-0 left-0 w-full leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.23,105.47,151,114.11,219,101.55,274.65,91.3,284,63.36,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* ================= DETAILED STORY ================= */}
      <section className="py-32 bg-gray-50/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimateOnView>
            <h2 className="text-3xl md:text-5xl font-black text-[#0b1d39] mb-8 leading-tight">
              Serving Excellence, <span className="text-orange-500">One Event</span> at a Time
            </h2>
          </AnimateOnView>

          <AnimateOnView delay={200} className="space-y-8 text-gray-600 text-lg leading-relaxed">
            <p>
              Over the years, Gurukrupa Samrat Catering Services has built a strong
              reputation for reliability, taste consistency, and customer
              satisfaction. Our approach combines traditional Indian flavors with
              modern presentation and efficient service.
            </p>

            {/* Mission & Vision Cards */}
            <div className="grid md:grid-cols-2 gap-8 text-left py-8">
              <div className="p-10 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 text-orange-600 font-bold">01</div>
                <h4 className="font-black text-[#0b1d39] mb-3 text-xl uppercase tracking-tight">Our Mission</h4>
                <p className="text-sm leading-relaxed">To make every celebration stress-free, joyful, and unforgettable through the power of great food.</p>
              </div>
              <div className="p-10 bg-[#0b1d39] text-white rounded-[2.5rem] shadow-xl shadow-blue-900/20">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-orange-500 font-bold">02</div>
                <h4 className="font-black text-orange-500 mb-3 text-xl uppercase tracking-tight">Our Vision</h4>
                <p className="text-sm text-gray-300 leading-relaxed">To be Amravati's leading choice for premium events, delivering perfection in every plate.</p>
              </div>
            </div>

            <p>
              Whether it's a lavish wedding buffet, a corporate luncheon, or an
              outdoor catering setup, we take complete responsibility — from menu
              planning and food preparation to service execution and hygiene
              standards.
            </p>
          </AnimateOnView>
        </div>
      </section>

      <ServicesCTA />
    </main>
  );
}

/* ================= STAT CARD COMPONENT ================= */
function Stat({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="group relative bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/10 shadow-2xl hover:bg-white transition-all duration-500">
      <div className="text-5xl font-black text-orange-500 group-hover:scale-110 transition-transform duration-500">
        {children}
      </div>
      <p className="mt-4 text-[10px] text-gray-400 group-hover:text-gray-600 font-black uppercase tracking-[0.2em]">
        {label}
      </p>
    </div>
  );
}