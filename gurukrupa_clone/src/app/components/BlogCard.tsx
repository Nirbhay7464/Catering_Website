"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, Clock } from "lucide-react";

interface Blog {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
}

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <div className="group bg-white rounded-[2.5rem] p-4 shadow-sm hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 border border-gray-100 flex flex-col h-full">
      
      {/* 1. IMAGE CONTAINER */}
      <div className="relative h-64 w-full rounded-[2rem] overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Glassmorphism Category Badge */}
        <div className="absolute top-4 left-4 backdrop-blur-md bg-white/20 border border-white/30 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl shadow-lg">
          {blog.category}
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d39]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
           <span className="text-white text-xs font-bold flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
             <Clock size={14} className="text-orange-500" /> 5 Min Read
           </span>
        </div>
      </div>

      {/* 2. CONTENT AREA */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
          <Calendar size={12} className="text-orange-500" />
          {blog.date}
        </div>

        <h3 className="text-2xl font-black text-[#0b1d39] mb-4 leading-tight group-hover:text-orange-600 transition-colors line-clamp-2">
          {blog.title}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-3 font-medium">
          {blog.excerpt}
        </p>

        {/* 3. INTERACTIVE FOOTER */}
        <div className="mt-auto pt-6 border-t border-gray-50">
          <Link
            href={`/blog/${blog.slug}`}
            className="flex items-center justify-between group/link"
          >
            <span className="text-[#0b1d39] font-black text-xs uppercase tracking-widest group-hover/link:text-orange-600 transition-colors">
              Explore Story
            </span>
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#0b1d39] group-hover/link:bg-orange-500 group-hover/link:text-white transition-all">
              <ArrowRight size={18} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}