import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, Instagram, Facebook, Twitter, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#0b1d39] text-gray-400 overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/5 rounded-full blur-[100px] -mr-48 -mt-48" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="grid gap-12 lg:grid-cols-12 mb-16">
          
          {/* BRAND STORY (4 Cols) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 relative bg-white rounded-2xl p-2 shadow-xl">
                <Image
                  src="/images/logo.png"
                  alt="Guru Krupa Caterers Logo"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white leading-none">
                  Gurukrupa <span className="text-orange-500 block text-lg font-bold">Samrat Catering</span>
                </h3>
              </div>
            </div>

            <p className="text-base leading-relaxed max-w-sm">
              Amravati&apos;s premier culinary destination. We transform events into 
              royal experiences with authentic flavors and impeccable hospitality 
              since 2012.
            </p>

            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* QUICK EXPLORE (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">
              Explore
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              {['About Us', 'Services', 'Packages', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase().replace(' ', '-')}`} 
                    className="hover:text-orange-500 transition-colors flex items-center group"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CUISINES (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">
              Our Specialties
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              {['North Indian', 'Chinese Fusion', 'Live Counters', 'Gourmet Desserts'].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-orange-500 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* NEWSLETTER / CONTACT (4 Cols) */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6">
                Direct Contact
              </h4>
              <div className="space-y-4">
                <a href="tel:+919876543210" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                    <Phone size={18} />
                  </div>
                  <span className="text-white font-bold">+91 98765 43210</span>
                </a>
                <a href="mailto:info@gurukrupa.com" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                    <Mail size={18} />
                  </div>
                  <span className="text-white font-bold">info@gurukrupa.com</span>
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Location</p>
              <p className="text-white text-sm flex items-start gap-2 leading-relaxed">
                <MapPin size={16} className="text-orange-500 shrink-0" />
                Main Branch, Amravati,<br /> Maharashtra - 444601
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600">
            © {new Date().getFullYear()} Guru Krupa Samrat Catering. Crafted for Excellence.
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
            <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}