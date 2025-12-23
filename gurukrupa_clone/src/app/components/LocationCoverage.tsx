import Image from "next/image";
import Link from "next/link";

export default function LocationCoverage() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-gray-100 overflow-hidden">
      
      {/* Background Decorative Element */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-orange-100/30 blur-[100px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div data-aos="fade-right">
          <p className="text-red-600 font-bold mb-3 tracking-[0.2em] uppercase text-sm">
            We are ready at many locations
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b1d39] leading-tight">
            We are available now, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-500">
              covering your area
            </span>
          </h2>

          <p className="mt-6 text-gray-600 text-1xl leading-relaxed max-w-md">
            We provide professional catering services across the 
            <span className="font-bold text-gray-800"> Amravati district</span>, delivering hygienic, delicious food for weddings, corporate events, and celebrations.
          </p>
          
          <div className="mt-10">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-3
                         px-10 py-4 rounded-2xl font-bold
                         text-white
                         bg-gradient-to-r from-orange-600 to-orange-500
                         shadow-xl shadow-orange-600/20
                         hover:shadow-2xl hover:shadow-orange-600/40
                         hover:-translate-y-1
                         transition-all duration-300
                         overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative z-10">Get in Touch</span>
              <span className="relative z-10 text-xl transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

        {/* RIGHT MAP SECTION */}
        <div data-aos="fade-left" className="relative">
          <div className="relative w-full h-[450px] rounded-[2.5rem] bg-white p-3 shadow-2xl border border-white overflow-hidden">
            {/* Map Container */}
            <div className="w-full h-full rounded-[2rem] overflow-hidden border border-gray-100">
              <iframe
                title="Gurukrupa Samrat Catering Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119330.13374826139!2d77.68331398858286!3d20.930495819875133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a4a6db645885%3A0xe282565612140884!2sAmravati%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* FLOATING STATUS BADGE */}
            <div className="absolute top-8 right-8 z-20">
              <div className="bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg border border-white flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-xs font-bold text-[#0b1d39] uppercase tracking-wider">Active in Amravati</span>
              </div>
            </div>
          </div>

          {/* BOTTOM CAPTION */}
          <div className="mt-6 flex justify-center">
            <p className="text-sm font-medium text-gray-500 italic">
              *Serving a 100km radius from Amravati City center
            </p>
          </div>
        </div>
      </div>

      {/* ================= MODERN CURVE DIVIDER ================= */}
      <div className="absolute bottom-0 left-0 w-full leading-[0] z-20">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-[80px] fill-white"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.94,9.41,104.73,20.15,89.15,28.35,178.53,50.88,272.28,42.05,62.14-5.85,119.26-31.38,179.27-46.12,41.28-10.14,83.54-15,125.84-12.83,23.32,1.21,46.52,4,69.53,8.38V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.41,118.41,51.72,253.25,72.18,382.46,14.65,16.14-7.18,31.75-15.39,48.54-22.3V0Z"></path>
        </svg>
      </div>
    </section>
  );
}