"use client";

import { PhoneCall } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Stats() {
  return (
    // Added relative, overflow-hidden and pb-40 to accommodate the divider
    <section className="relative py-24 pb-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT IMAGE */}
        <div data-aos="fade-right" className="relative">
          <div className="relative w-full h-[520px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-gray-50">
            <Image
              src="/images/caterers.png" 
              alt="Delicious Catering"
              fill
              className="object-cover transition-transform duration-1000 hover:scale-110"
            />
            {/* Soft overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div data-aos="fade-left">
          <p
            data-aos="fade-up"
            className="text-orange-600 font-bold mb-3 tracking-[0.2em] uppercase text-sm"
          >
            Gurukrupa Caterers
          </p>

          <h2
            data-aos="fade-up"
            data-aos-delay="120"
            className="text-4xl md:text-5xl font-extrabold text-[#0b1d39] leading-tight mb-8"
          >
            Delicious Moments, <br />
            <span className="text-orange-600 text-3xl md:text-4xl">Expertly Catered.</span>
          </h2>

          {/* STATS GRID */}
          <div className="grid grid-cols-2 gap-8 mb-12">
            <AnimatedStat value={12} suffix="+" label="Years in business" index={0} />
            <AnimatedStat value={500} suffix="+" label="Successful Events" index={1} />
            <AnimatedStat value={25} suffix="+" label="Our Chefs" index={2} />
            <AnimatedStat value={150} suffix="+" label="Return Customers" index={3} />
          </div>

          {/* CTA BUTTONS - Updated to Orange Theme */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex flex-wrap gap-5"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3
                         px-8 py-4 rounded-xl font-bold
                         text-white
                         bg-gradient-to-r from-orange-600 to-orange-500
                         shadow-lg shadow-orange-600/30
                         hover:shadow-xl hover:shadow-orange-600/40
                         hover:-translate-y-1
                         transition-all duration-300
                         overflow-hidden"
            >
              <span className="relative z-10">Get In Touch</span>
              <span className="relative z-10 text-xl transition-transform group-hover:translate-x-1">→</span>
            </a>

            <a
              href="tel:+919223397765"
              className="inline-flex items-center gap-3
                         bg-gray-100 text-[#0b1d39]
                         px-8 py-4 rounded-xl font-bold
                         hover:bg-[#0b1d39] hover:text-white
                         transition-all duration-300 border border-gray-200"
            >
              <PhoneCall className="w-5 h-5 text-orange-600" />
              +91 922 3397 765
            </a>
          </div>
        </div>
      </div>

      {/* ================= MODERN CURVED BOTTOM DIVIDER ================= */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-[80px] md:h-[120px] fill-gray-50"
        >
          {/* Layer 1: Subtle shadow layer */}
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          {/* Layer 2: Main clean wave */}
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.41,118.41,51.72,253.25,72.18,382.46,14.65,16.14-7.18,31.75-15.39,48.54-22.3V0Z"></path>
        </svg>
      </div>
    </section>
  );
}

/* 🔢 ANIMATED STAT (Enhanced Styling) */
function AnimatedStat({ value, suffix = "", label, index }: { value: number; suffix?: string; label: string; index: number; }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true;
        startCount();
      }
    }, { threshold: 0.4 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const startCount = () => {
    let current = 0;
    const duration = 2000;
    const step = Math.max(1, Math.floor(value / (duration / 16)));
    const timer = setInterval(() => {
      current += step;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 16);
  };

  return (
    <div ref={ref} data-aos="fade-up" data-aos-delay={index * 120}>
      <h3 className="text-4xl md:text-5xl font-black text-orange-600">
        {count}{suffix}
      </h3>
      <p className="text-[#0b1d39] font-bold mt-1 text-sm uppercase tracking-wider">{label}</p>
    </div>
  );
}