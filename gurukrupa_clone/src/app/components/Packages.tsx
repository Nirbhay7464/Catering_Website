import PackageCard from "./PackageCard";
import { packages } from "../data/packages";

export default function Packages() {
  return (
    // Increased bottom padding to pb-40 to prevent divider overlap
    <section id="packages" className="relative pt-24 pb-40 bg-gray-50 overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-orange-100/40 via-transparent to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div data-aos="fade-down" className="text-center mb-16">
          <p className="text-orange-600 font-bold mb-3 tracking-[0.2em] uppercase text-sm">
            Pricing Plans
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b1d39]">
            Our Catering Packages
          </h2>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid gap-8 md:grid-cols-3 items-center">
          {packages.map((pkg, index) => (
            <PackageCard key={pkg.title} {...pkg} index={index} />
          ))}
        </div>
      </div>

      {/* ================= MODERN WAVE DIVIDER ================= */}
      {/* Pointer-events-none ensures the divider doesn't block button clicks */}
      <div className="absolute bottom-0 left-0 w-full leading-[0] z-20 pointer-events-none">
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