"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSWrapper({ children }) {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return children;
}
