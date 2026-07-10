"use client";
import { useState } from "react";

const LUCY_FONT_BOLD = "'LucyFontBold', sans-serif";
const LUCY_FONT = "'LucyFont', sans-serif";

type PhotoKey = "default" | "equity" | "hike" | "run" | "cereal";

const PHOTOS: { key: PhotoKey; src: string; cap: string; capSize?: number; fan: { r: number; x: number; y: number } }[] = [
  { key: "cereal",  src: "/images/profile/cereal.jpg",  cap: "cereal in the woods",        fan: { r: -9, x: -20, y: 2 } },
  { key: "run",     src: "/images/profile/run.jpg",     cap: "(post) run",                 fan: { r: 8,  x: 18,  y: 8 } },
  { key: "hike",    src: "/images/profile/hike.jpg",    cap: "On a hike",                  fan: { r: -4, x: -6,  y: -8 } },
  { key: "equity",  src: "/images/profile/equity.jpg",  cap: "Leading an equity workshop", capSize: 18, fan: { r: 6,  x: 12,  y: -2 } },
  { key: "default", src: "/images/profile/default.jpg", cap: "Lucy in a park",             fan: { r: -6, x: -12, y: 6 } },
];

const WORDS: { text: string; photo: PhotoKey }[] = [
  { text: "Designer",        photo: "default" },
  { text: "equity champion", photo: "equity" },
  { text: "hiker",           photo: "hike" },
  { text: "cereal-lover",    photo: "cereal" },
  { text: "runner",          photo: "run" },
];

const CYCLE: PhotoKey[] = ["default", "equity", "hike", "cereal", "run"];

export default function BioRow() {
  const [active, setActive] = useState<PhotoKey>("default");

  function advance() {
    setActive(prev => CYCLE[(CYCLE.indexOf(prev) + 1) % CYCLE.length]);
  }

  return (
    <div className="v6b v6-bio-row" style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
        <h2
          className="v6-tagline"
          onMouseLeave={() => setActive("default")}
          style={{
            fontFamily: LUCY_FONT_BOLD, fontSize: 40, fontWeight: "normal",
            lineHeight: "normal", letterSpacing: "-4px", margin: 0,
          }}
        >
          {WORDS.map((w, i) => (
            <span key={w.text}>
              <span
                className="v6-hov"
                onMouseEnter={() => setActive(w.photo)}
              >
                {w.text}
              </span>
              {i < WORDS.length - 1 ? ", " : "."}
            </span>
          ))}
        </h2>
        <p style={{
          fontFamily: LUCY_FONT, fontSize: 26, lineHeight: "normal",
          letterSpacing: "-2.08px", color: "#000", margin: 0,
        }}>
          Designer with 6+ years of experience, currently leading design for credibility on the LinkedIn profile. I have an instinct for systems thinking and distilling the core problem worth solving. I'm motivated by inclusive design and designing at the margins, and I bring curiosity, humor, and a passion to do good to my work.
        </p>
      </div>

      {/* Polaroid pile — the active word's photo shuffles to the front */}
      <div className="v6-bio-polaroid" style={{ flexShrink: 0 }}>
        <div
          role="button"
          tabIndex={0}
          aria-label="Show next photo"
          onClick={advance}
          onKeyDown={e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); advance(); } }}
          className="v6-pile"
          style={{ position: "relative", width: 282, height: 396, cursor: "pointer" }}
        >
          {PHOTOS.map((p, i) => {
            const isActive = p.key === active;
            return (
              <div
                key={p.key}
                className="v6-polaroid"
                style={{
                  position: "absolute", left: 16, top: 4,
                  zIndex: isActive ? 10 : i,
                  transform: isActive
                    ? "rotate(4deg) translate(0px, 0px)"
                    : `rotate(${p.fan.r}deg) translate(${p.fan.x}px, ${p.fan.y}px)`,
                  transition: "transform 0.5s cubic-bezier(.22,1,.36,1), box-shadow 0.35s ease",
                }}
              >
                <img src={p.src} alt={p.cap} style={{ height: 268, objectPosition: "50% 30%" }} />
                <p style={{ fontFamily: LUCY_FONT_BOLD, fontSize: p.capSize ?? 21, letterSpacing: p.capSize ? "-0.6px" : "-1.47px", color: "#000", margin: "12px 0 0", lineHeight: p.capSize ? 1.05 : "normal", whiteSpace: p.capSize ? "normal" : "nowrap", overflow: "hidden", textOverflow: p.capSize ? undefined : "ellipsis" }}>
                  {p.cap}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
