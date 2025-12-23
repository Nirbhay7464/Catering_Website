"use client";

import { useEffect, useRef, useState } from "react";

interface AnimateOnViewProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // 👈 allow delay in ms
}

export default function AnimateOnView({
  children,
  className = "",
  delay = 0,
}: AnimateOnViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }} // 👈 delay handled safely
      className={`${className} transition-all duration-700 ease-out ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6"
      }`}
    >
      {children}
    </div>
  );
}
