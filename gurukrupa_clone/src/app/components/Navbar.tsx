"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

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

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled 
          ? "py-3 bg-white/80 backdrop-blur-lg shadow-lg border-b border-orange-100" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* ================= LOGO ================= */}
        <Link href="/" className="relative z-[110] group">
          <div className="bg-white p-2 rounded-2xl shadow-sm group-hover:shadow-md transition-all">
            <Image
              src="/images/logo.png"
              alt="Gurukrupa Samrat"
              width={200}
              height={100}
              priority
              className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </div>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden lg:flex items-center gap-1 bg-gray-100/50 backdrop-blur-sm p-1.5 rounded-2xl border border-white/20 shadow-sm">
          {NAV_LINKS.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                  active
                    ? "bg-white text-orange-600 shadow-sm scale-105"
                    : "text-[#0b1d39] hover:text-orange-600 hover:bg-white/50"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* ================= DESKTOP CTA ================= */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/book-now"
            className="group relative flex items-center gap-2 bg-[#0b1d39] text-white px-7 py-3 rounded-2xl font-bold overflow-hidden shadow-xl hover:shadow-orange-600/20 transition-all duration-300 hover:-translate-y-1"
          >
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <span className="relative z-10">Book Now</span>
            <ArrowRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* ================= MOBILE TOGGLE ================= */}
        <button
          className="lg:hidden relative z-[110] p-3 rounded-2xl bg-white shadow-md text-[#0b1d39] hover:text-orange-600 transition-colors"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
        </button>
      </div>

      {/* ================= MOBILE MENU (Full Screen Overlay) ================= */}
      <div 
        className={`lg:hidden fixed inset-0 bg-[#0b1d39] transition-all duration-500 ease-in-out z-[105] ${
          open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-8">
          {NAV_LINKS.map((item, idx) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`text-3xl font-black transition-all ${
                isActive(item.href) ? "text-orange-500 scale-110" : "text-white/70 hover:text-white"
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {item.label}
            </Link>
          ))}
          
          <Link
            href="/book-now"
            onClick={() => setOpen(false)}
            className="w-full text-center bg-orange-600 text-white py-5 rounded-3xl text-xl font-black shadow-2xl shadow-orange-600/30"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}