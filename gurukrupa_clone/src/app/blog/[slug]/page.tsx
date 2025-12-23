import Image from "next/image";
import { notFound } from "next/navigation";
import { blogs } from "@/app/data/blog";
import Link from "next/link";
import QuoteModal from "./QuoteModal";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return notFound();

  const relatedBlogs = blogs.filter((b) => b.slug !== blog.slug);

  return (
    <article className="bg-[#f8faff] min-h-screen pb-24">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[75vh] w-full">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
          priority
        />
        {/* Advanced Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-5xl mx-auto px-6 text-center text-white pb-20">
            <span className="bg-orange-600 px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
              {blog.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold mt-6 leading-tight drop-shadow-2xl">
              {blog.title}
            </h1>
            <p className="mt-6 text-xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
              {blog.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 -mt-24 relative z-20">
        
        {/* LEFT COLUMN: THE CONTENT */}
        <div className="lg:col-span-8 space-y-12">
          <div className="bg-white p-8 md:p-14 rounded-[2.5rem] shadow-2xl border border-blue-50/50">
            
            {/* 1. Introduction Section */}
            <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
              <h2 className="text-3xl font-bold text-[#0b1d39] mb-4">The Heart of Every Celebration</h2>
              <p className="leading-relaxed text-lg">
                At Guru Krupa Caterers, we believe that a well-crafted menu doesn't just feed guests; it creates memories that last a lifetime. 
                From the first appetizer to the final dessert, every bite tells a story of quality and passion. Whether it is a traditional 
                sit-down feast or a vibrant contemporary buffet, our mission is to provide a seamless service that allows you to be a 
                guest at your own event.
              </p>

              {/* 2. Pro Tip Card */}
              <div className="bg-orange-50 border-l-8 border-orange-500 p-8 rounded-2xl my-10 shadow-sm">
                <h3 className="font-bold text-xl text-orange-900 mb-2 flex items-center gap-2">
                  <span>💡</span> Expert Strategy
                </h3>
                <p className="text-orange-800 leading-relaxed italic">
                  "Always plan for a 10-15% buffer in your guest count. It is better to have surplus flavors than a shortage of smiles during high-energy festivities."
                </p>
              </div>

              {/* 3. DYNAMIC CONTENT POINTS SECTION */}
              <h2 className="text-3xl font-bold text-[#0b1d39] mt-12">Key Considerations for Excellence</h2>
              
              <div className="space-y-12 mt-8">
                {/* We map through the contentPoints from your blog.ts data file */}
                {blog.contentPoints?.map((point, index) => (
                  <div key={index} className="flex flex-col md:flex-row gap-8 items-start group">
                    {/* Dynamic Step Counter (01, 02, etc.) */}
                    <div className="w-16 h-16 bg-[#0b1d39] text-white flex items-center justify-center rounded-2xl text-2xl font-black shrink-0 shadow-lg group-hover:bg-orange-600 transition-all duration-300">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                        {point.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Fallback if no points are found */}
                {!blog.contentPoints && (
                  <p className="text-gray-400 italic">Expert insights for this category are being updated. Check back soon!</p>
                )}
              </div>
            </div>

            {/* CTA SECTION INSIDE CONTENT */}
            <div className="mt-16 bg-[#0b1d39] text-white p-10 rounded-[2rem] text-center relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full -mr-16 -mt-16 blur-2xl"></div>
               <h3 className="text-3xl font-bold mb-4 relative z-10">Planning Your Dream Celebration?</h3>
               <p className="text-white/70 mb-8 max-w-lg mx-auto relative z-10">
                 Let Guru Krupa Caterers bring the ultimate culinary experience to your special day.
               </p>
               <QuoteModal />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: SIDEBAR */}
        <aside className="lg:col-span-4 space-y-8">
          <div className="sticky top-24 space-y-8">
            
            {/* Dynamic Insights Card */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <h4 className="text-xl font-bold text-[#0b1d39] mb-6 border-b pb-4">Article Focus</h4>
              <ul className="space-y-4">
                {/* You can also pull these from your blog.ts if you add a 'tags' array */}
                {['Custom Menus', 'Hygiene Standards', 'Live Stations', 'Guest Care'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-600 text-sm">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Blogs Section */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <h4 className="text-xl font-bold text-[#0b1d39] mb-6">Continue Reading</h4>
              <div className="space-y-6">
                {relatedBlogs.slice(0, 3).map((item) => (
                  <Link key={item.slug} href={`/blog/${item.slug}`} className="flex gap-4 group">
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-md">
                      <Image 
                        src={item.image} 
                        alt={item.title} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-500" 
                      />
                    </div>
                    <p className="text-sm font-bold text-gray-800 leading-snug group-hover:text-orange-600 transition-colors line-clamp-2">
                      {item.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </section>
    </article>
  );
}