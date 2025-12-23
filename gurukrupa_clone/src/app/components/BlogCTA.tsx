export default function BlogCTA() {
  return (
    <section
      className="mt-24 bg-gradient-to-r from-red-600 to-orange-500
                 rounded-3xl p-12 text-center text-white"
      data-aos="zoom-in"
    >
      <h3 className="text-3xl font-bold mb-4">
        Planning an Event?
      </h3>

      <p className="max-w-xl mx-auto mb-8 text-white/90">
        Let Guru Krupa Caterers handle the food while you enjoy your celebration.
      </p>

      <div className="flex justify-center gap-4 flex-wrap">
        <a
          href="#contact"
          className="bg-white text-red-600 px-7 py-3 rounded-xl
                     font-semibold hover:bg-gray-100 transition"
        >
          Get In Touch
        </a>

        <a
          href="tel:+919876543210"
          className="border border-white px-7 py-3 rounded-xl
                     font-semibold hover:bg-white hover:text-red-600 transition"
        >
          📞 Call Now
        </a>
      </div>
    </section>
  );
}
