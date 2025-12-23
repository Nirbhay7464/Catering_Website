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
                <p>
                  From intimate family gatherings to grand wedding celebrations and
                  large-scale corporate events, we specialize in crafting customized
                  menus that reflect taste, tradition, and innovation.
                </p>
                <p>
                  Our experienced chefs, well-trained staff, and carefully curated
                  ingredients ensure every dish is served fresh, hygienic, and full
                  of flavor.
                </p>
              </div>
            </AnimateOnView>
          </div>

          {/* IMAGE */}
          <AnimateOnView delay={400} className="relative">
            <div className="absolute -inset-4 bg-orange-100 rounded-[3rem] -rotate-3 -z-10" />
            <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white group">
              <Image
                src="/images/about.jpg"
                alt="Premium Catering Setup"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d39]/40 to-transparent" />
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="relative py-24 bg-[#0b1d39] text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <Stat label="Years of Experience"><Counter end={12} suffix="+" /></Stat>
          <Stat label="Events Catered"><Counter end={500} suffix="+" /></Stat>
          <Stat label="Happy Clients"><Counter end={1000} suffix="+" /></Stat>
          <Stat label="Cities Served"><Counter end={10} suffix="+" /></Stat>
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section className="py-32 bg-gray-50/50">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <AnimateOnView>
            <h2 className="text-3xl md:text-5xl font-black text-[#0b1d39]">
              Serving Excellence, <span className="text-orange-500">One Event</span> at a Time
            </h2>
          </AnimateOnView>

          <AnimateOnView delay={200}>
            <p className="text-gray-600 text-lg">
              Over the years, we have built a strong reputation for reliability,
              taste consistency, and customer satisfaction.
            </p>
          </AnimateOnView>
        </div>
      </section>

      <ServicesCTA />
    </main>
  );
}

/* ================= STAT CARD ================= */
function Stat({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="bg-white/5 rounded-[2.5rem] p-10 border border-white/10 text-center">
      <div className="text-5xl font-black text-orange-500">{children}</div>
      <p className="mt-4 text-[10px] text-gray-400 font-black uppercase tracking-[0.2em]">
        {label}
      </p>
    </div>
  );
}
