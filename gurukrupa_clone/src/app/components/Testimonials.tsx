"use client";

import AnimateOnView from "./AnimateOnView";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Patil",
    location: "Amravati",
    feedback: "The food quality was outstanding and the service was extremely professional. Every guest appreciated the taste!",
    rating: 5,
  },
  {
    name: "Sneha Deshmukh",
    location: "Wedding Event",
    feedback: "Gurukrupa Samrat Catering made our wedding memorable. Perfect presentation and delicious food.",
    rating: 5,
  },
  {
    name: "Amit Kulkarni",
    location: "Corporate Event",
    feedback: "Highly reliable catering service. Clean setup, great taste and very polite staff.",
    rating: 4,
  },
  {
    name: "Neha Joshi",
    location: "Birthday Party",
    feedback: "Amazing dessert counters and excellent service. Guests were really impressed.",
    rating: 5,
  },
  {
    name: "Rohit Kale",
    location: "Outdoor Catering",
    feedback: "Very professional team. Everything was managed smoothly and food quality was top-notch.",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-[#f8fafc] overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <AnimateOnView>
        <div className="text-center mb-16 px-6 relative z-10">
          <p className="text-orange-500 font-bold tracking-[0.25em] uppercase text-xs mb-3">
            Customer Feedback
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b1d39] mb-4">
            Voices of Satisfaction
          </h2>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Join the hundreds of happy families and corporate clients who trust Gurukrupa Samrat for their special moments.
          </p>
        </div>
      </AnimateOnView>

      {/* Infinite Scroll Container */}
      <div className="relative w-full flex overflow-hidden">
        {/* We use three sets of items to ensure no gaps during animation */}
        <div className="flex gap-8 py-4 animate-testimonial-slide hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials, ...testimonials].map((item, i) => (
            <TestimonialCard key={i} item={item} />
          ))}
        </div>
        
        {/* Faded edges effect */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#f8fafc] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#f8fafc] to-transparent z-10 pointer-events-none" />
      </div>

      <style jsx>{`
        @keyframes testimonial-slide {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); }
        }
        .animate-testimonial-slide {
          animation: testimonial-slide 50s linear infinite;
        }
      `}</style>
    </section>
  );
}

function TestimonialCard({ item }: any) {
  return (
    <div
      className="group min-w-[320px] md:min-w-[400px] bg-white rounded-[2.5rem] p-8 md:p-10
                 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100
                 hover:border-orange-200 transition-all duration-500 hover:-translate-y-2
                 flex flex-col justify-between" // Added flex-col and justify-between
    >
      <div className="relative">
        <Quote className="absolute -top-4 -left-4 w-12 h-12 text-orange-500/10 group-hover:text-orange-500/20 transition-colors" />
        
        {/* Rating */}
        <div className="flex gap-1 mb-6">
          {Array.from({ length: 5 }).map((_, idx) => (
            <Star
              key={idx}
              className={`w-4 h-4 ${
                idx < item.rating 
                  ? "fill-orange-500 text-orange-500" 
                  : "fill-gray-200 text-gray-200"
              }`}
            />
          ))}
        </div>

        {/* Feedback */}
        <p className="text-[#0b1d39]/80 text-lg leading-relaxed italic mb-8 relative z-10">
          "{item.feedback}"
        </p>
      </div>

      {/* User Info - Now always pushed to the bottom */}
      <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
        <div className="relative">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 
                        flex items-center justify-center font-bold text-white text-xl shadow-lg shadow-orange-500/20">
            {item.name.charAt(0)}
          </div>
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-4 border-white rounded-full" />
        </div>

        <div>
          <p className="font-bold text-[#0b1d39] text-lg">
            {item.name}
          </p>
          <p className="text-sm font-medium text-orange-600/80 uppercase tracking-wider">
            {item.location}
          </p>
        </div>
      </div>
    </div>
  );
}