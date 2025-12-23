import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    // Added pt-32 lg:pt-40 to prevent content from hiding behind the fixed navbar
    <section className="relative min-h-screen flex items-center pt-32 lg:pt-40 pb-20 overflow-hidden bg-black">

      {/* ================= BACKGROUND IMAGE ================= */}
      <Image
        src="/images/buffet.png"
        alt="Luxury Catering Buffet"
        fill
        priority
        className="object-cover scale-110 opacity-60" // Reduced opacity for better text contrast
      />

      {/* ================= OVERLAY ================= */}
      {/* Enhanced gradient: Darker at the top to make the white navbar text pop, 
          and darker on the left to make the heading readable */}
      <div className="absolute inset-0 bg-gradient-to-br
                      from-black/90 via-black/60 to-transparent" />

      {/* Decorative Glow */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px]
                      bg-orange-600/20 rounded-full blur-3xl" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6
                      grid lg:grid-cols-2 gap-12 items-center">

        {/* -------- LEFT CONTENT -------- */}
        <div className="text-left">

          {/* Badge */}
          <span
            data-aos="fade-right"
            className="inline-flex items-center gap-2
                       px-4 py-1.5 rounded-full
                       bg-orange-600/20 border border-orange-500/30 text-orange-400
                       text-sm font-bold tracking-wide uppercase"
          >
            🍽️ Gurukrupa Samrat Catering Services
          </span>

          {/* Heading */}
          <h1
            data-aos="fade-right"
            data-aos-delay="150"
            className="mt-6 text-5xl md:text-7xl font-black
                       text-white leading-[1.1]"
          >
            Premium Catering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">
              For Every Celebration
            </span>
          </h1>

          {/* Subtext */}
          <p
            data-aos="fade-right"
            data-aos-delay="300"
            className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed"
          >
            Weddings, corporate events, outdoor catering & parties —
            serving unforgettable taste with flawless execution in Amravati.
          </p>

          {/* Trust Indicators */}
          <div
            data-aos="fade-right"
            data-aos-delay="450"
            className="mt-8 flex flex-wrap gap-3 text-sm"
          >
            {["12+ Years Experience", "500+ Events Served", "Trusted by Families"].map((text) => (
              <span key={text} className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-gray-200 backdrop-blur-md">
                {text}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            data-aos="fade-right"
            data-aos-delay="500"
            className="mt-10 flex flex-wrap gap-5"
          >
            <Link
              href="/book-now"
              className="group relative inline-flex items-center gap-3
                         px-10 py-5 rounded-2xl font-bold text-white
                         bg-gradient-to-r from-orange-600 to-orange-500
                         shadow-2xl shadow-orange-600/40
                         hover:shadow-orange-600/60
                         hover:-translate-y-1 transition-all duration-300
                         overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/20
                               translate-x-[-120%]
                               group-hover:translate-x-[120%]
                               transition-transform duration-700" />
              <span className="relative z-10">Book Now</span>
              <span className="relative z-10 transition-transform group-hover:translate-x-1 font-light">
                →
              </span>
            </Link>

            <Link
              href="/packages"
              className="inline-flex items-center gap-2
                         px-10 py-5 rounded-2xl font-bold
                         bg-white/10 backdrop-blur-md border border-white/20 text-white
                         hover:bg-white hover:text-black
                         hover:-translate-y-1 transition-all duration-300"
            >
              View Packages
            </Link>
          </div>
        </div>

        {/* -------- RIGHT VISUAL CARD -------- */}
        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="hidden lg:block relative"
        >
          {/* Subtle spinning border effect around image */}
          <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/30 to-transparent rounded-[3rem] blur-2xl animate-pulse" />
          
          <div className="relative bg-white/5 backdrop-blur-2xl
                          rounded-[2.5rem] p-4 shadow-2xl
                          border border-white/10">

            <Image
              src="/images/buffet.png"
              alt="Catering Setup"
              width={600}
              height={450}
              className="rounded-[2rem] object-cover"
            />

            <div className="absolute -bottom-8 -left-8 bg-white
                            px-8 py-5 rounded-3xl shadow-2xl border-t-4 border-orange-500">
              <p className="font-black text-[#0b1d39] text-lg">
                Taste • Quality • Service
              </p>
              <p className="text-sm text-gray-500 font-semibold italic">
                Serving Amravati & nearby areas
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* PREMIUM BOTTOM TRANSITION */}
      <div className="absolute bottom-0 left-0 w-full h-48 pointer-events-none overflow-hidden">
        {/* Fades the black hero into the white section below */}
        <div
          className="absolute inset-0
                     bg-gradient-to-b
                     from-transparent
                     via-black/20
                     to-white"
        />
      </div>
    </section>
  );
}