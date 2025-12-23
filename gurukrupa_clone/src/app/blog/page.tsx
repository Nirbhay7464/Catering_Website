"use client";

import { motion } from "framer-motion";
import BlogCard from "../components/BlogCard";
import { blogs } from "../data/blog";

export default function BlogPage() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <BlogCard blog={blog} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
