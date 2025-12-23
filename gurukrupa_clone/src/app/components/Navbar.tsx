"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled 
          ? "py-3 bg-white/80 backdrop-blur-lg shadow-sm border-b border-orange-100" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* ================= LOGO ================= */}
        <Link href="/" className="relative z-[110] group">
          <div className="bg-white p-2 rounded-xl shadow-sm border border-orange-50 group-hover:shadow-md transition-all">
            <Image
              src="/images/logo.png"
              alt="Gurukrupa Samrat"
              width={160}
              height={80}
              priority
              className="h-9 md:h-11 w-auto object-contain"
            />
          </div>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/40 backdrop-blur-md p-1.5 rounded-2xl border border-white/20 shadow-sm">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${
                isActive(item.href)
                  ? "bg-white text-orange-600 shadow-sm"
                  : "text-[#0b1d39] hover:text-orange-600 hover:bg-white/50"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* ================= DESKTOP CTA ================= */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/contact"
            className="group relative flex items-center gap-2 bg-[#0b1d39] text-white px-6 py-2.5 rounded-xl font-bold overflow-hidden shadow-lg transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Book Now</span>
            <ArrowRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* ================= MOBILE TOGGLE ================= */}
        <button
          className="lg:hidden relative z-[120] p-2.5 rounded-xl bg-white shadow-md text-[#0b1d39] border border-orange-50 active:scale-90 transition-transform"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ================= MOBILE SIDEBAR ================= */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="lg:hidden fixed inset-0 bg-[#0b1d39]/40 backdrop-blur-[4px] z-[105]"
            />

            {/* Sidebar Content */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="lg:hidden fixed top-0 right-0 h-[100dvh] w-[80%] max-w-[320px] bg-white/90 backdrop-blur-2xl border-l border-white/40 shadow-2xl z-[110] flex flex-col"
            >
              {/* Sidebar Header */}
              <div className="p-6 flex items-center justify-between border-b border-gray-100">
                <Image src="/images/logo.png" alt="Logo" width={100} height={50} className="h-8 w-auto" />
                <button 
                  onClick={() => setOpen(false)} 
                  className="p-2 bg-gray-50 rounded-lg text-gray-400 hover:text-orange-500 transition-colors"
                >
                  <X size={20}/>
                </button>
              </div>

              <div className="p-6 flex flex-col h-full">
                <p className="text-[10px] font-black uppercase tracking-widest text-orange-500 mb-6">Navigation Menu</p>
                
                <nav className="flex flex-col space-y-1">
                  {NAV_LINKS.map((item, idx) => (
                    <motion.div
                      key={item.href}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`flex items-center justify-between px-4 py-3.5 rounded-xl font-bold transition-all text-sm ${
                          isActive(item.href) 
                            ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20" 
                            : "text-slate-600 hover:bg-gray-50 hover:text-orange-600"
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive(item.href) && <motion.div layoutId="dot" className="w-1.5 h-1.5 bg-white rounded-full" />}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Sidebar Footer */}
                <div className="mt-auto pt-8 border-t border-gray-50">
                  <p className="text-[10px] text-gray-400 text-center mb-4 uppercase tracking-tighter">
                    Premium Catering Services
                  </p>
                  <Link
                    href="/book-now"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-3 w-full bg-[#0b1d39] text-white py-4 rounded-2xl text-sm font-black shadow-xl active:scale-95 transition-all hover:bg-orange-600"
                  >
                    <span>Book Your Event</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}