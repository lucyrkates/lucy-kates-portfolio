"use client";

import { useEffect } from "react";

// Starts the entrance animation (adds html.ready) once the fonts the hero
// uses have loaded, so text never re-wraps mid-animation. Falls back after 2.5s.
export default function EntranceGate() {
  useEffect(() => {
    const go = () => document.documentElement.classList.add("ready");
    const fallback = setTimeout(go, 2500);
    Promise.all([
      document.fonts.load('400 16px "IBM Plex Mono"'),
      document.fonts.load('400 14px "Cabin"'),
      document.fonts.load('700 32px "Cabin"'),
    ]).then(go, go);
    return () => clearTimeout(fallback);
  }, []);
  return null;
}
