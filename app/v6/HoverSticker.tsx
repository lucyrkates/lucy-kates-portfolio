"use client";
import { useState } from "react";

export default function HoverSticker({
  hoverRotate,
  height,
  children,
}: {
  hoverRotate: number;
  height: number;
  children: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        height,
        position: "relative",
        width: "100%",
        transform: `rotate(${hovered ? hoverRotate : 0}deg) translateY(${hovered ? -6 : 0}px)`,
        filter: hovered ? "drop-shadow(0 3px 6px rgba(0,0,0,0.08))" : "none",
        transition: "transform 0.2s ease, filter 0.2s ease",
      }}
    >
      {children}
    </div>
  );
}
