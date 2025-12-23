"use client";

import { useEffect, type ReactNode } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 900,
      easing: "ease-out-cubic",
      offset: 120,
    });
  }, []);

  return <>{children}</>;
}
