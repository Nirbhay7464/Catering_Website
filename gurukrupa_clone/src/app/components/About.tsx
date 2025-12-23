import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="relative bg-white overflow-hidden pb-20">
      
      {/* ================= CONTENT ================= */}
      <div className="relative z-10 py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div data-aos="fade-right">
          <p className="text-orange-600 font-semibold mb-3 tracking-widest text-sm uppercase">
            About Us
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b1d39] leading-tight">
            About Gurukrupa Samrat <br />
            <span className="text-orange-600">Catering Services</span>
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed text-lg">
            Guru Krupa Caterers is a trusted name in premium catering services,
            delivering exceptional food experiences for weddings, parties,
            corporate events, and special occasions.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            With years of expertise, professional staff, and customized menus,
            we ensure every event is served with perfection, taste, and
            warm hospitality your guests will always remember.
          </p>

          {/* HIGHLIGHTS */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-bold text-[#0b1d39]">
            {[
              "Premium Quality Food",
              "Professional Staff",
              "Customized Menus",
              "On-time Service",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100">
                <span className="flex-shrink-0 h-6 w-6 bg-orange-100 flex items-center justify-center rounded-full">
                  <span className="h-2 w-2 bg-orange-600 rounded-full" />
                </span>
                {item}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10">
            <Link
              href="/about"
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
              <span className="absolute inset-0 bg-white/20 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700" />
              <span className="relative z-10">Read More</span>
              <span className="relative z-10 transition-transform group-hover:translate-x-1 text-xl">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          data-aos="fade-left"
          className="relative h-[480px] rounded-[2.5rem] overflow-hidden shadow-2xl group border-8 border-gray-50"
        >
          <Image
            src="/images/about.jpg"
            alt="Catering Service Setup"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d39]/40 to-transparent" />
          
        </div>
      </div>

      {/* ================= MODERN CURVED BOTTOM DIVIDER ================= */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-[60px] md:h-[100px] fill-gray-50"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.94,9.41,104.73,20.15,89.15,28.35,178.53,50.88,272.28,42.05,62.14-5.85,119.26-31.38,179.27-46.12,41.28-10.14,83.54-15,125.84-12.83,23.32,1.21,46.52,4,69.53,8.38V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.41,118.41,51.72,253.25,72.18,382.46,14.65,16.14-7.18,31.75-15.39,48.54-22.3V0Z"></path>
        </svg>
      </div>

    </section>
  );
}