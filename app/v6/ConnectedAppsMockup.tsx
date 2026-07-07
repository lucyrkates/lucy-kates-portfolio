"use client";
import { useState, useRef, useEffect } from "react";

type Offset = { x: number; y: number };

// Container: 340px tall, 100% wide.
// Phone (389×783, ratio 2.014:1): constrained by height (90% = 306px) → width ~152px regardless of card width.
// Icon positions: left/top as % of container dimensions, size as % of container width.
// Sticker padding: fixed px (NOT %) so it doesn't scale with parent.

const CONTAINER_H = 340;

const ICONS = [
  // Left column
  { src: "/images/ca-icon-github.png",   left: "1%",  top: "4%",  size: "16%", rotate: -7,  hoverRotate: -11 },
  { src: "/images/ca-icon-lovable.png",  left: "-1%", top: "32%", size: "16%", rotate: -4,  hoverRotate: -1  },
  { src: "/images/ca-icon-replit.png",   left: "1%",  top: "63%", size: "16%", rotate: -6,  hoverRotate: -9  },
  // Right column — sticking out past the phone's right edge
  { src: "/images/ca-icon-duolingo.png", left: "69%", top: "8%",  size: "16%", rotate: 10,  hoverRotate: 14  },
  { src: "/images/ca-icon-hubspot.png",  left: "68%", top: "30%", size: "16%", rotate: 6,   hoverRotate: 3   },
  { src: "/images/ca-icon-air.png",      left: "67%", top: "54%", size: "16%", rotate: 13,  hoverRotate: 10  },
];

// Same shadow as v6 polaroid stickers
const SHADOW      = "-2px -2px 4px -4px rgba(0,0,0,0.25), 3px 2px 3.9px -2px rgba(0,0,0,0.2)";
const SHADOW_LIFT = "0 3px 8px rgba(0,0,0,0.10)";

export default function ConnectedAppsMockup() {
  const [offsets, setOffsets] = useState<Offset[]>(ICONS.map(() => ({ x: 0, y: 0 })));
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [phoneHovered, setPhoneHovered] = useState(false);
  const drag = useRef<{
    idx: number; startX: number; startY: number; origX: number; origY: number;
  } | null>(null);

  useEffect(() => {
    function onMove(e: MouseEvent) {
      if (!drag.current) return;
      const { idx, startX, startY, origX, origY } = drag.current;
      setOffsets(prev =>
        prev.map((o, i) =>
          i === idx ? { x: origX + e.clientX - startX, y: origY + e.clientY - startY } : o
        )
      );
    }
    function onUp() { drag.current = null; setActiveIdx(null); }
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  function startDrag(e: React.MouseEvent, idx: number) {
    e.preventDefault();
    e.stopPropagation();
    drag.current = { idx, startX: e.clientX, startY: e.clientY, origX: offsets[idx].x, origY: offsets[idx].y };
    setActiveIdx(idx);
  }

  return (
    <div style={{ position: "relative", width: "100%", height: CONTAINER_H, overflow: "visible" }}>

      {/* Phone: wrapped in white sticker border matching the icon stickers */}
      <div
        onMouseEnter={() => setPhoneHovered(true)}
        onMouseLeave={() => setPhoneHovered(false)}
        style={{
          position: "absolute",
          height: "90%",
          left: "50%",
          top: "2%",
          transform: `translateX(-50%) translateY(${phoneHovered ? -6 : 0}px) rotate(${phoneHovered ? -1.5 : 0}deg)`,
          background: "white",
          padding: 5,
          borderRadius: 36,
          boxShadow: phoneHovered ? SHADOW_LIFT : SHADOW,
          zIndex: 5,
          display: "flex",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
      >
        <img
          src="/images/ca-phone-2.png"
          alt=""
          draggable={false}
          style={{ height: "100%", width: "auto", display: "block", borderRadius: 30 }}
        />
      </div>

      {/* Draggable sticker icons */}
      {ICONS.map((icon, i) => {
        const isActive = activeIdx === i;
        const isHovered = hoveredIdx === i && !isActive;
        const lifted = isActive || isHovered;
        return (
          <div
            key={i}
            onMouseDown={e => startDrag(e, i)}
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
            onClick={e => e.stopPropagation()}
            style={{
              position: "absolute",
              left: `calc(${icon.left} + ${offsets[i].x}px)`,
              top: `calc(${icon.top} + ${offsets[i].y}px)`,
              width: icon.size,
              // Fixed pixel padding — NOT percentage (% padding uses parent width, not self width)
              padding: 2,
              background: "white",
              borderRadius: 18,
              boxSizing: "border-box",
              boxShadow: lifted ? SHADOW_LIFT : SHADOW,
              cursor: isActive ? "grabbing" : "grab",
              userSelect: "none",
              zIndex: isActive ? 20 : isHovered ? 15 : 10,
              transform: `rotate(${isHovered ? icon.hoverRotate : icon.rotate}deg) translateY(${isHovered ? -6 : 0}px)`,
              transition: isActive ? "none" : "transform 0.2s ease, box-shadow 0.2s ease",
            }}
          >
            <img
              src={icon.src}
              alt=""
              draggable={false}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        );
      })}
    </div>
  );
}
