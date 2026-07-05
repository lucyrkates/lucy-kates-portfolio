"use client";
import { useEffect, useRef, useState } from "react";

export default function WaveDraw({ src }: { src: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setOn(true);
      return;
    }
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }),
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`v6-wave${on ? " on" : ""}`} style={{ height: 30, flex: 1 }}>
      <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "fill", display: "block" }} />
    </div>
  );
}
