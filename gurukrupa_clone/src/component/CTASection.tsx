import Link from "next/link";

export default function ServicesCTA() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="relative rounded-3xl overflow-hidden
                     bg-gradient-to-r from-orange-600 to-red-600
                     shadow-2xl"
        >
          {/* soft glow */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

          <div className="relative p-12 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Planning an Event?
            </h2>

            <p className="text-white/90 max-w-3xl mx-auto mb-8 text-lg">
              From intimate celebrations to grand occasions, let{" "}
              <span className="font-semibold">
                Gurukrupa Samrat Catering Services
              </span>{" "}
              handle everything — food, presentation, and flawless execution.
            </p>

            <Link
  href="/contact"
  className="group relative inline-flex items-center gap-3
             bg-white text-orange-600
             px-10 py-4 rounded-full font-semibold text-lg
             shadow-xl shadow-orange-600/20
             hover:shadow-2xl hover:shadow-orange-600/30
             hover:-translate-y-1
             active:translate-y-0
             transition-all duration-300
             overflow-hidden"
>
  {/* SHINE EFFECT */}
  <span
    className="pointer-events-none absolute inset-0
               bg-orange-500/10
               translate-x-[-120%]
               group-hover:translate-x-[120%]
               transition-transform duration-700 ease-out"
  />

  <span className="relative z-10">Get a Custom Quote</span>

  <span
    className="relative z-10
               transition-transform duration-300
               group-hover:translate-x-1"
  >
    →
  </span>
</Link>

          </div>
        </div>
      </div>
    </section>
  );
}
