"use client";

import Image from "next/image";
import AnimateOnView from "./AnimateOnView";
import { PhoneCall, ArrowRight } from "lucide-react";

const galleryImages = [
  { src: "/images/wedding.png", title: "Wedding Catering" },
  { src: "/images/birthday.png", title: "Birthday Celebrations" },
  { src: "/images/corporate.png", title: "Corporate Events" },
  { src: "/images/luxurybuffet.png", title: "Luxury Buffet Setup" },
  { src: "/images/outdoor.png", title: "Outdoor Catering" },
  { src: "/images/dessert.png", title: "Dessert Counters" },
];

export default function Gallery() {
  return (
    <section className="relative pt-24 md:pt-32 pb-36 md:pb-48 bg-[#0b1d39] text-white overflow-hidden">


      {/* ===== TOP DIVIDER ===== */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          className="block w-full h-[28px] md:h-[60px]"
        >
          <path
            fill="white"
            fillOpacity="1"
            d="M0,32L60,37.3C120,43,240,53,360,48C480,43,600,21,720,16C840,11,960,21,1080,32C1200,43,1320,53,1380,58.7L1440,64L1440,0L0,0Z"
          />
        </svg>
      </div>


      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-10">

        {/* ===== HEADING ===== */}
        <AnimateOnView>
          <div className="text-center mb-10 md:mb-16">
            <p className="text-orange-500 font-bold mb-2 md:mb-3 tracking-[0.2em] uppercase text-[10px] md:text-sm">Visual Journey</p>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Our Gallery</h2>
            <div className="w-16 md:w-24 h-1 bg-orange-500 mx-auto rounded-full mb-6" />
            <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
              A glimpse of our delicious moments & beautifully served events that define excellence.
            </p>
          </div>
        </AnimateOnView>

        {/* ===== GALLERY GRID - Balanced for Mobile ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryImages.map((item, i) => (
            <AnimateOnView key={item.title}>
              <GalleryCard item={item} index={i} />
            </AnimateOnView>
          ))}
        </div>

        {/* ===== CTA ===== */}
        <AnimateOnView>
          <div className="mt-12 md:mt-20 flex flex-col items-center gap-6">
            <div className="flex flex-wrap justify-center gap-5">
              <a
                href="#contact"
                className="group relative flex items-center gap-3 bg-gradient-to-r from-orange-600 to-orange-500 
                           text-white px-8 md:px-10 py-4 rounded-2xl font-bold
                           shadow-xl shadow-orange-600/20
                           hover:shadow-orange-600/40
                           hover:-translate-y-1
                           transition-all duration-300 text-sm md:text-base"
              >
                <PhoneCall className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Plan Your Event
                <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
            </div>
          </div>
        </AnimateOnView>
      </div>

      {/* ===== BOTTOM DIVIDER ===== */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="block w-full h-[48px] md:h-[120px]"
        >
          <path
            fill="white"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L0,120Z"
          />
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />

        </svg>
      </div>

    </section>
  );
}

function GalleryCard({ item, index }: { item: { src: string; title: string }; index: number }) {
  return (
    <div
      className="group relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-gray-900 border border-white/10 shadow-xl transition-all duration-500 cursor-pointer"
    >
      {/* Reduced height on mobile for better scrolling */}
      <div className="relative h-60 md:h-72 w-full">
        <Image
          src={item.src}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d39] via-transparent to-transparent opacity-90" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <h3 className="text-lg md:text-xl font-bold group-hover:text-orange-400 transition-colors">
          {item.title}
        </h3>
      </div>

      <div className="absolute inset-0 border-2 border-orange-500/0 group-hover:border-orange-500/50 rounded-[1.5rem] md:rounded-[2rem] transition-all duration-500 pointer-events-none" />
    </div>
  );
}