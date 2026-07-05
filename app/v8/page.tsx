"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ---------------------------------------------------------------------------
   CONCEPT 3 — "The Field Journal"
   An elevated take on Concept 1: same craft DNA (hand-lettered type, tape,
   stickers, polaroids) art-directed like a printed field journal — paper
   grain, drifting topographic contours, ink stamps, and orchestrated motion.
--------------------------------------------------------------------------- */

const imgSalesPhone1 = "https://www.figma.com/api/mcp/asset/6ffcc478-12fb-4fd5-b45d-d315099b2297";
const imgSalesPhone2 = "https://www.figma.com/api/mcp/asset/e633bbda-1a33-4186-93e7-1b9cdb72773c";
const imgRelMap      = "https://www.figma.com/api/mcp/asset/65210a34-cded-4283-94c0-33ec477be7df";
const imgBackpacking = "https://www.figma.com/api/mcp/asset/81fb59e1-5bb1-40cf-b901-f3adad4ca4c1";
const imgEnchantments = "https://www.figma.com/api/mcp/asset/1c284681-4840-4aa0-a222-21b780e03d8c";
const imgBiking      = "https://www.figma.com/api/mcp/asset/9a3cc01a-771c-4056-b6bb-2e43610ffe59";

// Project images as die-cut journal stickers (Concept-1 style): a white
// outline hugging each silhouette, pasted straight onto the page. Set to
// false to revert to the white-mat + photo-corner plates.
const STICKER_PLATES = true;
const STICKER_OUTLINE =
  "drop-shadow(2.5px 0 0 #fff) drop-shadow(-2.5px 0 0 #fff) drop-shadow(0 2.5px 0 #fff) drop-shadow(0 -2.5px 0 #fff) drop-shadow(0 8px 14px rgba(11,74,82,0.26))";

const OUTLINE_BOLD = "'LucyOutlineBold', sans-serif";
const OUTLINE      = "'LucyOutline', sans-serif";
const HAND_BOLD    = "'LucyFontBold', sans-serif";
const CAVEAT       = "'CaveatLocal', cursive";
const BODY         = "var(--font-inria-sans), sans-serif";

/* ------------------------------- Topo lines ------------------------------ */
/* Contours are generated with a seeded PRNG (deterministic, so SSR and the
   client render identical markup): each ring wanders with its own harmonic
   wobble and uneven spacing, index contours run heavier every 4th line, and
   a small secondary peak plus survey marks sell the map. */

function mulberry32(seed: number) {
  return function () {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function contourRings(rnd: () => number, count: number, startBase: number, stretch: number) {
  // low-order harmonics shape the landform; the high-frequency one adds the
  // fine hand-wavering of a plotted contour line
  const harmonics = [
    ...Array.from({ length: 3 }, () => ({
      n: 2 + Math.floor(rnd() * 4),
      a: 0.05 + rnd() * 0.07,
      p: rnd() * Math.PI * 2,
      d: (rnd() - 0.5) * 0.28,
    })),
    { n: 9 + Math.floor(rnd() * 6), a: 0.012 + rnd() * 0.018, p: rnd() * Math.PI * 2, d: (rnd() - 0.5) * 0.3 },
  ];
  const rings: { d: string; index: boolean }[] = [];
  let base = startBase;
  for (let k = 0; k < count; k++) {
    const pts: string[] = [];
    const N = 170;
    for (let t = 0; t <= N; t++) {
      const th = (t / N) * Math.PI * 2;
      let r = 1;
      for (const h of harmonics) r += h.a * Math.sin(h.n * th + h.p + h.d * k);
      pts.push(`${t === 0 ? "M" : "L"}${(Math.cos(th) * base * r * stretch).toFixed(1)} ${(Math.sin(th) * base * r).toFixed(1)}`);
    }
    rings.push({ d: pts.join(" ") + " Z", index: k % 4 === 2 });
    // uneven spacing that widens with radius, so per-ring wobble drift can
    // never close the gap between neighbours (rings must not cross)
    base += base * 0.06 + 7 + rnd() * 14;
  }
  return rings;
}

function Topo({ seed = 7, stroke, opacity, className = "" }: {
  seed?: number; stroke: string; opacity: number; className?: string;
}) {
  const rnd = mulberry32(seed);
  // one system per placement: the innermost tiny ring IS the peak, and rings
  // only ever nest, so contours never cross — sections use a single Topo each
  const rings = contourRings(rnd, 18, 10 + rnd() * 8, 1.3);
  const pos = { x: (rnd() - 0.5) * 300, y: (rnd() - 0.5) * 200 };
  const rot = (rnd() - 0.5) * 60;
  const specks = Array.from({ length: 14 }, () => ({
    x: (rnd() - 0.5) * 720, y: (rnd() - 0.5) * 520, r: 0.7 + rnd() * 0.8,
  }));
  const crosses = Array.from({ length: 2 }, () => ({
    x: (rnd() - 0.5) * 640, y: (rnd() - 0.5) * 460,
  }));
  return (
    <svg viewBox="-400 -300 800 600" className={className} aria-hidden="true"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible", pointerEvents: "none" }}>
      <g transform={`translate(${pos.x} ${pos.y}) rotate(${rot})`}>
        {rings.map((ring, i) => (
          <path key={i} d={ring.d} fill="none" stroke={stroke}
            strokeWidth={ring.index ? 1.7 : 0.8} opacity={ring.index ? opacity * 1.5 : opacity}
            vectorEffect="non-scaling-stroke" />
        ))}
      </g>
      {specks.map((s, i) => (
        <circle key={i} cx={s.x} cy={s.y} r={s.r} fill={stroke} opacity={opacity * 1.2} />
      ))}
      {crosses.map((c, i) => (
        <path key={i} d={`M${c.x - 7} ${c.y} H${c.x + 7} M${c.x} ${c.y - 7} V${c.y + 7}`}
          stroke={stroke} strokeWidth={1.2} opacity={opacity * 1.8} vectorEffect="non-scaling-stroke" />
      ))}
    </svg>
  );
}

/* --------------------------- Section heading ----------------------------- */

function JournalHeading({ text, back, front, waveColor }: {
  text: string; back: string; front: string; waveColor: string;
}) {
  return (
    <div className="c3-reveal" style={{ display: "flex", alignItems: "center", gap: 18, width: "100%" }}>
      <div style={{ position: "relative", flexShrink: 0 }}>
        <h2 aria-hidden="true" style={{
          fontFamily: OUTLINE, fontSize: "clamp(34px, 5vw, 44px)", fontWeight: "normal",
          letterSpacing: "0.08em", color: back, textTransform: "uppercase", margin: 0,
          whiteSpace: "nowrap", mixBlendMode: "multiply",
          position: "absolute", top: 4, left: 5, pointerEvents: "none",
        }}>{text}</h2>
        <h2 style={{
          fontFamily: OUTLINE_BOLD, fontSize: "clamp(34px, 5vw, 44px)", fontWeight: "normal",
          letterSpacing: "0.08em", color: front, textTransform: "uppercase", margin: 0,
          whiteSpace: "nowrap", position: "relative",
        }}>{text}</h2>
      </div>
      <svg className="c3-wave" viewBox="0 0 400 24" preserveAspectRatio="none" aria-hidden="true"
        style={{ flex: 1, height: 24, minWidth: 40 }}>
        <path pathLength={1}
          d="M0 12 Q 12.5 0 25 12 T 50 12 T 75 12 T 100 12 T 125 12 T 150 12 T 175 12 T 200 12 T 225 12 T 250 12 T 275 12 T 300 12 T 325 12 T 350 12 T 375 12 T 400 12"
          fill="none" stroke={waveColor} strokeWidth={2.5} strokeLinecap="round" />
      </svg>
    </div>
  );
}

/* ------------------------------- Tilt plate ------------------------------ */

function PhotoCorner({ rotate, style }: { rotate: number; style: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 30 30" width="26" height="26" aria-hidden="true"
      style={{ position: "absolute", transform: `rotate(${rotate}deg)`, filter: "drop-shadow(0 1px 1.5px rgba(0,0,0,0.18))", ...style }}>
      <path d="M0 0 H30 L0 30 Z" fill="#0B4A52" />
    </svg>
  );
}

function TiltPlate({ children, rotate = 0, bare = false }: {
  children: React.ReactNode; rotate?: number; bare?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ rx: 0, ry: 0 });

  function onMove(e: React.PointerEvent) {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setT({ rx: py * -7, ry: px * 9 });
  }

  return (
    <div style={{ perspective: 900 }}>
      <div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={() => setT({ rx: 0, ry: 0 })}
        className={bare ? "c3-plate-bare" : "c3-plate"}
        style={{
          transform: `rotate(${rotate}deg) rotateX(${t.rx}deg) rotateY(${t.ry}deg)`,
          transition: t.rx === 0 && t.ry === 0 ? "transform 0.5s cubic-bezier(.22,1,.36,1)" : "transform 0.08s linear",
        }}
      >
        {children}
        {!bare && (
          <>
            <PhotoCorner rotate={0}   style={{ left: 5, top: 5 }} />
            <PhotoCorner rotate={90}  style={{ right: 5, top: 5 }} />
            <PhotoCorner rotate={180} style={{ right: 5, bottom: 5 }} />
            <PhotoCorner rotate={270} style={{ left: 5, bottom: 5 }} />
          </>
        )}
      </div>
    </div>
  );
}

/* ----------------------- Draggable sticker cluster ----------------------- */

type Offset = { x: number; y: number };

const STICKERS = [
  { src: "/images/ca-icon-github.png",   left: "4%",  top: "6%",  size: "15%", rotate: -8 },
  { src: "/images/ca-icon-lovable.png",  left: "1%",  top: "42%", size: "15%", rotate: -3 },
  { src: "/images/ca-icon-replit.png",   left: "8%",  top: "74%", size: "15%", rotate: -7 },
  { src: "/images/ca-icon-duolingo.png", left: "80%", top: "5%",  size: "15%", rotate: 9  },
  { src: "/images/ca-icon-hubspot.png",  left: "77%", top: "40%", size: "15%", rotate: 5  },
  { src: "/images/ca-icon-air.png",      left: "81%", top: "72%", size: "15%", rotate: 12 },
];

function StickerField() {
  const [offsets, setOffsets] = useState<Offset[]>(STICKERS.map(() => ({ x: 0, y: 0 })));
  const [active, setActive] = useState<number | null>(null);
  const drag = useRef<{ idx: number; startX: number; startY: number; origX: number; origY: number } | null>(null);

  useEffect(() => {
    function onMove(e: PointerEvent) {
      if (!drag.current) return;
      const { idx, startX, startY, origX, origY } = drag.current;
      setOffsets(prev => prev.map((o, i) =>
        i === idx ? { x: origX + e.clientX - startX, y: origY + e.clientY - startY } : o
      ));
    }
    function onUp() { drag.current = null; setActive(null); }
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  function start(e: React.PointerEvent, idx: number) {
    e.preventDefault();
    drag.current = { idx, startX: e.clientX, startY: e.clientY, origX: offsets[idx].x, origY: offsets[idx].y };
    setActive(idx);
  }

  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "5 / 4", overflow: "visible" }}>
      <div style={{
        position: "absolute", height: "96%", left: "50%", top: "2%", transform: "translateX(-50%)",
        background: "white", padding: 5, borderRadius: 26,
        boxShadow: "-2px -2px 4px -4px rgba(0,0,0,0.25), 3px 2px 6px -2px rgba(0,0,0,0.22)",
        display: "flex", zIndex: 4,
      }}>
        <img src="/images/ca-phone-2.png" alt="Connected apps on a LinkedIn profile" draggable={false}
          style={{ height: "100%", width: "auto", display: "block", borderRadius: 22 }} />
      </div>
      {STICKERS.map((s, i) => (
        <div key={i}
          onPointerDown={e => start(e, i)}
          className={active === i ? "" : "c3-sticker"}
          style={{
            position: "absolute",
            left: `calc(${s.left} + ${offsets[i].x}px)`,
            top: `calc(${s.top} + ${offsets[i].y}px)`,
            width: s.size, padding: 3, background: "white", borderRadius: "22%",
            boxSizing: "border-box", touchAction: "none",
            boxShadow: active === i
              ? "0 8px 18px rgba(11,74,82,0.25)"
              : "-2px -2px 4px -4px rgba(0,0,0,0.25), 3px 2px 5px -2px rgba(0,0,0,0.2)",
            cursor: active === i ? "grabbing" : "grab",
            userSelect: "none",
            zIndex: active === i ? 20 : 10,
            transform: `rotate(${s.rotate}deg) ${active === i ? "scale(1.1)" : ""}`,
            transition: active === i ? "none" : "transform 0.25s ease, box-shadow 0.25s ease",
          }}>
          <img src={s.src} alt="" draggable={false} style={{ width: "100%", height: "auto", display: "block", borderRadius: "18%" }} />
        </div>
      ))}
    </div>
  );
}

/* ------------------------------ Sketch box ------------------------------- */
/* A hand-sketched rounded rectangle: one continuous wobbly stroke, drawn as
   an SVG path stretched to fit the label. */

function SketchBox({ children, stroke = "rgba(11,74,82,0.7)", style }: {
  children: React.ReactNode; stroke?: string; style?: React.CSSProperties;
}) {
  return (
    <span className="c3-stampbox" style={style}>
      <svg viewBox="0 0 120 36" preserveAspectRatio="none" aria-hidden="true">
        <path
          d="M11 3.2 C 28 1.9, 52 3.6, 76 2.7 C 90 2.3, 106 2.1, 111.5 4.8 C 116.2 7.2, 117.6 12.4, 117.1 18.2 C 116.7 24.1, 117.9 28.6, 113.4 31.4 C 108.6 34.3, 90 32.5, 70 33.3 C 50 34.1, 27 32.3, 15.5 32.9 C 8.8 33.2, 3.6 30.8, 3.1 24.9 C 2.7 19.4, 2.1 12.6, 3.8 8.3 C 5.2 4.7, 7.2 3.5, 11 3.2 Z"
          fill="none" stroke={stroke} strokeWidth={1.7} strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      {children}
    </span>
  );
}

/* ------------------------------ Trail stamp ------------------------------ */

function TrailStamp() {
  return (
    <div className="c3-stamp-spin" aria-hidden="true" style={{ width: 128, height: 128 }}>
      <svg viewBox="0 0 128 128" style={{ width: "100%", height: "100%" }}>
        <defs>
          <path id="c3-circ" d="M64,64 m-48,0 a48,48 0 1,1 96,0 a48,48 0 1,1 -96,0" />
        </defs>
        <circle cx="64" cy="64" r="62" fill="none" stroke="#0B4A52" strokeWidth="2" strokeDasharray="3 4" opacity="0.8" />
        <text style={{ fontFamily: HAND_BOLD, fontSize: 12.5, letterSpacing: 2.6, fill: "#0B4A52" }}>
          <textPath href="#c3-circ">DESIGNER ✦ HIKER ✦ RUNNER ✦ CEREAL LOVER </textPath>
        </text>
        <text x="64" y="72" textAnchor="middle" style={{ fontFamily: CAVEAT, fontSize: 26, fill: "#FFA617" }}>✦</text>
      </svg>
    </div>
  );
}

/* ------------------------------ Hero letters ----------------------------- */

function StickerWord({ word, startDelay = 0 }: { word: string; startDelay?: number }) {
  return (
    <span style={{ display: "inline-block", whiteSpace: "nowrap" }}>
      {word.split("").map((ch, i) => (
        <span key={i} className="c3-letter" style={{
          animationDelay: `${startDelay + i * 0.07}s`,
          ["--r" as string]: `${(i % 2 === 0 ? 1 : -1) * (5 + (i % 3) * 2)}deg`,
        }}>
          <span className="c3-letter-back" aria-hidden="true">{ch}</span>
          <span className="c3-letter-front">{ch}</span>
        </span>
      ))}
    </span>
  );
}

/* --------------------------------- Page ---------------------------------- */

const ENTRIES = [
  {
    n: "01",
    title: "Connected apps",
    note: "go on — drag the stickers",
    desc: "Connect the apps you use every day directly to your LinkedIn profile, so the work you do everywhere shows up in one place.",
    href: "https://news.linkedin.com/2026/visibility-builds-credibility---the-tools-you-use-every-day--now",
  },
  {
    n: "02",
    title: "Relationship map",
    note: null,
    desc: "An interactive map that helps salespeople identify, organize, and act on the buying committee within a company.",
    href: "https://www.linkedin.com/business/sales/blog/product-updates/powering-linkedin-with-sales-navigator-insights-and-ai-assisted-introductions",
  },
  {
    n: "03",
    title: "A sales tool on LinkedIn",
    note: null,
    desc: "Making it easier for sellers to research accounts without ever having to leave LinkedIn.",
    href: "https://www.linkedin.com/business/sales/blog/product-updates/powering-linkedin-with-sales-navigator-insights-and-ai-assisted-introductions",
  },
  {
    n: "04",
    title: "Microsoft <> LinkedIn",
    note: null,
    desc: "A collaboration between LinkedIn and Microsoft bringing LinkedIn insights into Outlook and Teams.",
    href: null,
  },
];

const MARQUEE = "DESIGNER ✦ EQUITY CHAMPION ✦ HIKER ✦ CEREAL-LOVER ✦ RUNNER ✦ BERKELEY, CA ✦ ";

export default function V8() {
  useEffect(() => {
    const els = document.querySelectorAll(".c3-reveal");
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("is-on"); io.unobserve(e.target); } }),
      { threshold: 0.18 }
    );
    els.forEach(el => {
      // reveal anything already in view right away; the observer handles the rest
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) el.classList.add("is-on");
      else io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @font-face { font-family: 'LucyOutlineBold'; src: url('/fonts/lucy-outline-bold.otf') format('opentype'); font-display: block; }
        @font-face { font-family: 'LucyOutline';     src: url('/fonts/lucy-outline.otf')      format('opentype'); font-display: block; }
        @font-face { font-family: 'LucyFontBold';    src: url('/fonts/lucy-font-bold.otf')    format('opentype'); font-display: block; }
        @font-face { font-family: 'LucyFont';        src: url('/fonts/lucy-font.otf')         format('opentype'); font-display: block; }
        @font-face { font-family: 'CaveatLocal';     src: url('/fonts/Caveat-Regular.ttf')    format('truetype'); font-display: swap; }
        @font-face { font-family: 'CaveatLocal';     src: url('/fonts/Caveat-Bold.ttf')       format('truetype'); font-weight: 700; font-display: swap; }

        .c3-root {
          --paper: #F5EFE2;
          --ink: #0B4A52;
          --pine: #07333B;
          --marigold: #FFA617;
          --moss: #BDE160;
          background: var(--paper);
          color: var(--ink);
          overflow-x: hidden;
        }

        /* ------- grain ------- */
        .c3-grain {
          position: fixed; inset: 0; z-index: 50; pointer-events: none;
          opacity: 0.055; mix-blend-mode: multiply;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='260'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='260' height='260' filter='url(%23n)'/%3E%3C/svg%3E");
        }

        /* ------- nav ------- */
        .c3-nav { position: fixed; top: 20px; right: 24px; z-index: 60; display: flex; gap: 6px; font-family: var(--font-inria-sans), sans-serif; }
        .c3-nav a { font-size: 14px; color: #0b4a52; text-decoration: none; padding: 5px 14px; border-radius: 100px; border: 1px solid rgba(11,74,82,0.25); opacity: 0.55; background: rgba(245,239,226,0.75); backdrop-filter: blur(4px); transition: opacity 0.15s, background 0.15s, color 0.15s; display: inline-flex; align-items: center; justify-content: center; }
        .c3-nav a:hover { opacity: 0.85; }
        .c3-nav a.active { background: #0b4a52; color: #F5EFE2; border-color: transparent; opacity: 1; }
        .c3-nav a:focus-visible { outline: 2px solid var(--marigold); outline-offset: 2px; opacity: 1; }

        /* ------- hero letters ------- */
        .c3-name { font-family: 'LucyOutlineBold', sans-serif; text-transform: uppercase; line-height: 0.92; font-size: clamp(76px, 14.5vw, 168px); letter-spacing: -0.055em; margin: 0; }
        .c3-letter { position: relative; display: inline-block; }
        .c3-letter-front { position: relative; color: var(--ink); transition: transform 0.25s cubic-bezier(.34,1.56,.64,1); display: inline-block; }
        .c3-letter-back { position: absolute; left: 0.045em; top: 0.05em; color: var(--marigold); font-family: 'LucyOutline', sans-serif; mix-blend-mode: multiply; pointer-events: none; transition: transform 0.25s cubic-bezier(.34,1.56,.64,1); display: inline-block; }
        .c3-letter:hover .c3-letter-front { transform: translateY(-7px) rotate(var(--r)); }
        .c3-letter:hover .c3-letter-back { transform: translate(0.04em, 0.06em); color: var(--moss); }

        @media (prefers-reduced-motion: no-preference) {
          .c3-letter { opacity: 0; animation: c3-settle 0.7s cubic-bezier(.22,1,.36,1) both; }
          @keyframes c3-settle {
            0%   { opacity: 0; transform: translateY(-44px) rotate(var(--r)) scale(1.14); }
            62%  { opacity: 1; transform: translateY(5px) rotate(calc(var(--r) * -0.25)) scale(0.99); }
            100% { opacity: 1; transform: none; }
          }
          .c3-fade-late { opacity: 0; animation: c3-fade 0.8s ease 1.15s both; }
          @keyframes c3-fade { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }

          .c3-reveal { opacity: 0; transform: translateY(28px) rotate(0.3deg); transition: opacity 0.7s ease, transform 0.7s cubic-bezier(.22,1,.36,1); }
          .c3-reveal.is-on { opacity: 1; transform: none; }

          .c3-wave path { stroke-dasharray: 1; stroke-dashoffset: 1; }
          .is-on .c3-wave path, .c3-reveal.is-on .c3-wave path { animation: c3-draw 1.2s ease 0.2s forwards; }
          @keyframes c3-draw { to { stroke-dashoffset: 0; } }

          .c3-topo-drift   { animation: c3-drift 70s ease-in-out infinite alternate; }
          .c3-topo-drift-2 { animation: c3-drift 90s ease-in-out infinite alternate-reverse; }
          @keyframes c3-drift { from { transform: translate(0,0) rotate(0deg); } to { transform: translate(-38px, 26px) rotate(2.5deg); } }

          .c3-stamp-spin { animation: c3-spin 26s linear infinite; }
          @keyframes c3-spin { to { transform: rotate(360deg); } }

          .c3-marquee-track { animation: c3-scroll 30s linear infinite; }
          .c3-marquee:hover .c3-marquee-track { animation-play-state: paused; }
          @keyframes c3-scroll { to { transform: translateX(-50%); } }

          .c3-star { animation: c3-twinkle 3.4s ease-in-out infinite; }
          @keyframes c3-twinkle { 0%, 100% { opacity: 0.15; } 50% { opacity: 0.75; } }
        }
        @media (prefers-reduced-motion: reduce) {
          .c3-marquee-track { transform: none; }
        }

        /* ------- marquee ------- */
        .c3-marquee { background: var(--marigold); transform: rotate(-1.1deg); width: 104vw; margin-left: -2vw; overflow: hidden; box-shadow: 0 3px 14px rgba(11,74,82,0.14); }
        .c3-marquee-track { display: flex; width: max-content; padding: 12px 0; }
        .c3-marquee-track span { font-family: 'LucyOutlineBold', sans-serif; font-size: 26px; letter-spacing: 0.12em; color: var(--ink); white-space: pre; text-transform: uppercase; }

        /* ------- plates ------- */
        .c3-plate { position: relative; background: #fff; padding: 14px; border-radius: 6px; box-shadow: -3px -3px 8px -6px rgba(0,0,0,0.25), 6px 8px 22px -6px rgba(11,74,82,0.28); transform-style: preserve-3d; }
        .c3-plate-bare { position: relative; transform-style: preserve-3d; }
        .c3-plate img { user-select: none; }
        .c3-sticker:hover { transform: rotate(0deg) translateY(-6px) !important; }

        .c3-entry { display: flex; gap: clamp(28px, 5vw, 64px); align-items: center; }
        .c3-entry.flip { flex-direction: row-reverse; }
        .c3-entry-copy { flex: 4; min-width: 0; }
        .c3-entry-plate { flex: 5; min-width: 0; }

        .c3-entry-link { color: var(--ink); font-family: var(--font-inria-sans), sans-serif; font-weight: 700; font-size: 17px; text-decoration: underline wavy var(--marigold) 2px; text-underline-offset: 6px; transition: text-decoration-color 0.2s; }
        .c3-entry-link:hover { text-decoration-color: var(--ink); }
        .c3-entry-link:focus-visible { outline: 2px solid var(--marigold); outline-offset: 3px; }

        .c3-stampbox { position: relative; display: inline-block; font-family: 'LucyFontBold', sans-serif; font-size: 15px; letter-spacing: 0.18em; color: var(--ink); padding: 5px 16px 3px; transform: rotate(-3deg); opacity: 0.9; }
        .c3-stampbox svg { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; pointer-events: none; }

        /* ------- photo mat ------- */
        .c3-photo-mat { background: white; padding: 14px 14px 52px; border-radius: 4px; box-shadow: -2px -2px 6px -4px rgba(0,0,0,0.25), 5px 6px 18px -4px rgba(11,74,82,0.25); transform: rotate(3deg); transition: transform 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s ease; position: relative; }
        .c3-photo-mat:hover { transform: rotate(0.5deg) translateY(-6px); box-shadow: 0 14px 30px rgba(11,74,82,0.22); }

        .c3-polaroid { background: white; border-radius: 4px; padding: 16px 14px 44px; box-shadow: 0 10px 26px rgba(0,0,0,0.35); width: 240px; transition: transform 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s ease; position: relative; }
        .c3-polaroid .c3-polaroid-photo { width: 100%; height: 228px; object-fit: cover; display: block; }
        .c3-polaroid:hover { transform: rotate(0deg) translateY(-8px) scale(1.02); box-shadow: 0 18px 40px rgba(0,0,0,0.45); }

        .c3-pill { font-family: var(--font-inria-sans), sans-serif; font-size: 16px; color: var(--paper); text-decoration: none; padding: 9px 22px; border-radius: 100px; border: 1.5px solid rgba(245,239,226,0.55); transition: background 0.2s, color 0.2s, transform 0.2s, border-color 0.2s; display: inline-flex; }
        .c3-pill:hover { background: var(--marigold); color: var(--pine); border-color: transparent; transform: translateY(-3px) rotate(-1.5deg); }
        .c3-pill:focus-visible { outline: 2px solid var(--moss); outline-offset: 3px; }

        /* ------- layout ------- */
        .c3-hero { position: relative; max-width: 1080px; margin: 0 auto; padding: 130px 40px 90px; display: flex; gap: 56px; align-items: center; }
        .c3-section { position: relative; max-width: 1080px; margin: 0 auto; padding: 40px 40px; display: flex; flex-direction: column; }

        @media (max-width: 860px) {
          .c3-hero { flex-direction: column; padding: 110px 24px 64px; gap: 44px; }
          .c3-section { padding: 32px 24px; }
          .c3-entry, .c3-entry.flip { flex-direction: column; align-items: stretch; gap: 22px; }
          .c3-marquee-track span { font-size: 20px; }
          .c3-polaroid-row { flex-direction: column !important; align-items: center !important; gap: 44px !important; }
          .c3-hero-right { align-self: center; }
        }
      `}</style>

      <div className="c3-grain" aria-hidden="true" />

      <nav className="c3-nav">
        <Link href="/v6">Concept 1</Link>
        <Link href="/v8" className="active">Concept 3</Link>
      </nav>

      <div className="c3-root">

        {/* ============================== HERO ============================== */}
        <header className="c3-hero">
          <div style={{ position: "absolute", left: -140, right: -140, top: -60, bottom: -40 }}>
            <Topo seed={7} stroke="#0B4A52" opacity={0.09} className="c3-topo-drift" />
          </div>

          <div style={{ flex: 1.4, minWidth: 0, position: "relative" }}>
            <p className="c3-fade-late" style={{
              fontFamily: CAVEAT, fontSize: 27, color: "rgba(11,74,82,0.85)",
              margin: "0 0 4px", transform: "rotate(-2deg)", transformOrigin: "left",
            }}>
              the field notes of —
            </p>

            <h1 className="c3-name">
              <StickerWord word="Lucy" startDelay={0.1} />
              <br />
              <span style={{ display: "inline-block", paddingLeft: "0.55em" }}>
                <StickerWord word="Kates" startDelay={0.42} />
              </span>
            </h1>

            <div className="c3-fade-late" style={{ display: "flex", alignItems: "flex-start", gap: 10, margin: "18px 0 0" }}>
              <svg width="46" height="40" viewBox="0 0 46 40" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: -8 }}>
                <path d="M42 36 C 30 34, 12 28, 8 8" stroke="#FFA617" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <path d="M3 14 L 8 6 L 14 12" stroke="#FFA617" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
              <p style={{
                fontFamily: CAVEAT, fontSize: 28, fontWeight: 700, color: "var(--ink)",
                margin: 0, transform: "rotate(-1.5deg)", lineHeight: 1.15,
              }}>
                senior product designer @ LinkedIn<br />
                <span style={{ fontWeight: 400, fontSize: 24, opacity: 0.8 }}>credibility &amp; profiles · Berkeley, CA</span>
              </p>
            </div>

            <p className="c3-fade-late" style={{
              fontFamily: BODY, fontSize: 18, lineHeight: 1.55, color: "rgba(11,74,82,0.82)",
              maxWidth: 470, margin: "26px 0 0",
            }}>
              6+ years across enterprise and consumer platforms. I bring systems
              thinking to ambiguous problems and care deeply about equitable,
              human-centered design.
            </p>
          </div>

          <div className="c3-hero-right" style={{ flexShrink: 0, position: "relative" }}>
            <div className="c3-photo-mat" style={{ width: 264 }}>
              <img src="/images/lucy.jpg" alt="Lucy Kates" style={{ width: "100%", height: 300, objectFit: "cover", objectPosition: "50% 20%", display: "block" }} />
              <p style={{ fontFamily: CAVEAT, fontSize: 26, color: "var(--ink)", margin: "10px 0 0", position: "absolute", bottom: 8, right: 18, transform: "rotate(-1.5deg)" }}>
                hi, it&rsquo;s me ☺
              </p>
              <img src="/images/tape-02.png" alt="" style={{ position: "absolute", top: -22, left: "50%", transform: "translateX(-50%) rotate(-3deg)", width: 130, pointerEvents: "none" }} />
            </div>
            <div style={{ position: "absolute", bottom: -52, left: -62 }}>
              <TrailStamp />
            </div>
          </div>
        </header>

        {/* ============================ MARQUEE ============================ */}
        <div className="c3-marquee" aria-hidden="true">
          <div className="c3-marquee-track">
            <span>{MARQUEE.repeat(3)}</span>
            <span>{MARQUEE.repeat(3)}</span>
          </div>
        </div>

        {/* ============================ TRAIL LOG =========================== */}
        <section className="c3-section" style={{ paddingTop: 90, gap: 64 }}>
          <JournalHeading text="The trail log" back="#FFA617" front="#0B4A52" waveColor="#FFA617" />

          {ENTRIES.map((entry, idx) => (
            <article key={entry.n} className={`c3-entry c3-reveal ${idx % 2 === 1 ? "flip" : ""}`}>
              <div className="c3-entry-copy">
                <SketchBox>Entry {entry.n}</SketchBox>
                <h3 style={{
                  fontFamily: HAND_BOLD, fontSize: "clamp(30px, 4vw, 38px)", fontWeight: "normal",
                  letterSpacing: "-0.06em", color: "var(--ink)", margin: "16px 0 10px", lineHeight: 1.05,
                }}>
                  {entry.title}
                </h3>
                <p style={{ fontFamily: BODY, fontSize: 17, lineHeight: 1.55, color: "rgba(11,74,82,0.8)", margin: "0 0 18px", maxWidth: 400 }}>
                  {entry.desc}
                </p>
                {entry.href ? (
                  <a className="c3-entry-link" href={entry.href} target="_blank" rel="noopener noreferrer">
                    Read the story ↗
                  </a>
                ) : (
                  <SketchBox stroke="rgba(255,166,23,0.9)" style={{ transform: "rotate(2deg)", color: "#c77d00" }}>
                    Coming soon
                  </SketchBox>
                )}
                {entry.note && (
                  <p style={{ fontFamily: CAVEAT, fontSize: 24, color: "rgba(11,74,82,0.7)", margin: "22px 0 0", transform: "rotate(-2deg)", transformOrigin: "left", display: "flex", alignItems: "flex-start", gap: 9 }}>
                    <svg width="30" height="26" viewBox="0 0 30 26" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }}>
                      <path d="M3 2.5 C 3.8 11.5, 8.5 18.6, 18.5 20.2 C 22 20.8, 25 20.4, 27.5 19.6"
                        stroke="rgba(11,74,82,0.7)" strokeWidth="2.2" strokeLinecap="round" fill="none" />
                      <path d="M22.5 14.5 L 28 19.4 L 21.8 22.6"
                        stroke="rgba(11,74,82,0.7)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                    {entry.note}
                  </p>
                )}
              </div>

              <div className="c3-entry-plate">
                {entry.n === "01" ? (
                  <StickerField />
                ) : entry.n === "03" ? (
                  STICKER_PLATES ? (
                    <TiltPlate rotate={-1.5} bare>
                      <div style={{ aspectRatio: "5 / 4", display: "flex", alignItems: "center", justifyContent: "center", gap: "6%" }}>
                        <img src={imgSalesPhone1} alt="Sales tool on LinkedIn, screen one" style={{ height: "88%", width: "auto", filter: STICKER_OUTLINE, transform: "rotate(-3.5deg)" }} />
                        <img src={imgSalesPhone2} alt="Sales tool on LinkedIn, screen two" style={{ height: "88%", width: "auto", filter: STICKER_OUTLINE, transform: "rotate(2.5deg)" }} />
                      </div>
                    </TiltPlate>
                  ) : (
                    <TiltPlate rotate={-1.2}>
                      <div style={{ position: "relative", aspectRatio: "5 / 4", background: "linear-gradient(150deg, #E7F0E4, #F3ECD8)", borderRadius: 3, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", gap: "5%" }}>
                        <img src={imgSalesPhone1} alt="Sales tool on LinkedIn, screen one" style={{ height: "82%", width: "auto", filter: "drop-shadow(0 10px 16px rgba(11,74,82,0.28))", transform: "rotate(-2.5deg)" }} />
                        <img src={imgSalesPhone2} alt="Sales tool on LinkedIn, screen two" style={{ height: "82%", width: "auto", filter: "drop-shadow(0 10px 16px rgba(11,74,82,0.28))", transform: "rotate(2deg)" }} />
                      </div>
                    </TiltPlate>
                  )
                ) : entry.n === "02" ? (
                  STICKER_PLATES ? (
                    <TiltPlate rotate={1.6} bare>
                      <img
                        src={imgRelMap}
                        alt={entry.title}
                        style={{ width: "94%", height: "auto", display: "block", margin: "0 auto", filter: STICKER_OUTLINE }}
                      />
                    </TiltPlate>
                  ) : (
                    <TiltPlate rotate={1.4}>
                      <div style={{ aspectRatio: "16 / 10", background: "linear-gradient(155deg, #E4EEF0, #F3ECD8)", borderRadius: 3, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <img
                          src={imgRelMap}
                          alt={entry.title}
                          style={{ width: "86%", height: "auto", display: "block", filter: "drop-shadow(0 10px 16px rgba(11,74,82,0.25))" }}
                        />
                      </div>
                    </TiltPlate>
                  )
                ) : (
                  STICKER_PLATES ? (
                    <TiltPlate rotate={-1.4} bare>
                      <div style={{
                        background: "#fff", padding: 7, borderRadius: 16,
                        boxShadow: "-2px -2px 4px -4px rgba(0,0,0,0.25), 4px 5px 12px -3px rgba(11,74,82,0.28)",
                      }}>
                        <img
                          src="/images/ms-outlook-mock.png"
                          alt={entry.title}
                          style={{ width: "100%", height: "auto", display: "block", borderRadius: 10 }}
                        />
                      </div>
                    </TiltPlate>
                  ) : (
                    <TiltPlate rotate={-1.2}>
                      <img
                        src="/images/ms-outlook-mock.png"
                        alt={entry.title}
                        style={{ width: "100%", height: "auto", display: "block", borderRadius: 3 }}
                      />
                    </TiltPlate>
                  )
                )}
              </div>
            </article>
          ))}
        </section>

        {/* ========================== OFF THE TRAIL ========================= */}
        <div style={{ position: "relative", marginTop: 110 }}>
          {/* torn paper edge */}
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" aria-hidden="true"
            style={{ display: "block", width: "100%", height: 54, marginBottom: -1 }}>
            <path d="M0 42 L38 30 L74 44 L120 24 L163 38 L214 20 L256 40 L305 26 L352 44 L398 18 L451 36 L502 24 L549 42 L601 22 L652 38 L699 26 L748 44 L801 20 L853 38 L903 28 L951 44 L1003 22 L1052 40 L1101 26 L1153 40 L1200 24 L1200 60 L0 60 Z"
              fill="#07333B" />
          </svg>

          <section style={{ background: "var(--pine)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", left: -120, right: -120, top: 40, bottom: 40 }}>
              <Topo seed={41} stroke="#BDE160" opacity={0.08} className="c3-topo-drift" />
            </div>

            {/* stars */}
            {[
              { l: "12%", t: 60,  d: 0 },   { l: "82%", t: 90,  d: 1.1 },
              { l: "46%", t: 40,  d: 2.2 }, { l: "68%", t: 170, d: 0.6 },
              { l: "24%", t: 200, d: 1.7 }, { l: "91%", t: 260, d: 2.8 },
            ].map((s, i) => (
              <span key={i} className="c3-star" aria-hidden="true" style={{
                position: "absolute", left: s.l, top: s.t, color: "var(--moss)",
                fontSize: 14, animationDelay: `${s.d}s`, opacity: 0.3,
              }}>✦</span>
            ))}

            <div className="c3-section" style={{ paddingTop: 74, paddingBottom: 90, gap: 36 }}>
              <JournalHeading text="Off the trail" back="#BDE160" front="#F5EFE2" waveColor="#BDE160" />

              <div className="c3-reveal" style={{ maxWidth: 640 }}>
                <p style={{ fontFamily: BODY, fontSize: 19, lineHeight: 1.6, color: "rgba(245,239,226,0.88)", margin: "0 0 16px" }}>
                  I have been a product designer for 5 years, with enterprise and
                  consumer experience at companies like Uber and LinkedIn. I care
                  about how design can have positive impact in the world.
                </p>
                <p style={{ fontFamily: BODY, fontSize: 19, lineHeight: 1.6, color: "rgba(245,239,226,0.88)", margin: 0 }}>
                  Outside of work, I love to be outside! Whether it is hiking,
                  running, biking, or going for a walk, I love being in nature.
                </p>
              </div>

              {/* polaroids */}
              <div className="c3-polaroid-row c3-reveal" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginTop: 26, position: "relative" }}>
                {[
                  { src: imgBackpacking, cap: "backpacking in Canada", r: -3 },
                  { src: imgEnchantments, cap: "the Enchantments w/ pals", r: 2, y: 26 },
                  { src: imgBiking, cap: "my first triathlon!", r: 4.5, y: 6 },
                ].map((p, i) => (
                  <div key={i} style={{ transform: `rotate(${p.r}deg) translateY(${p.y ?? 0}px)` }}>
                    <div className="c3-polaroid">
                      <img className="c3-polaroid-photo" src={p.src} alt={p.cap} />
                      <p style={{ fontFamily: CAVEAT, fontSize: 25, color: "#0B4A52", margin: "12px 0 0", lineHeight: 1 }}>{p.cap}</p>
                      <img src={i === 1 ? "/images/tape-02.png" : "/images/tape-01.png"} alt="" style={{
                        position: "absolute", top: -20, left: "50%", transform: `translateX(-50%) rotate(${-p.r}deg)`,
                        width: 118, pointerEvents: "none", opacity: 0.95,
                      }} />
                    </div>
                  </div>
                ))}
              </div>

              {/* footer */}
              <footer className="c3-reveal" style={{ marginTop: 90, textAlign: "center" }}>
                <div style={{ position: "relative", display: "inline-block" }}>
                  <p aria-hidden="true" style={{
                    fontFamily: OUTLINE, fontSize: "clamp(52px, 9vw, 96px)", letterSpacing: "0.02em",
                    color: "var(--marigold)", textTransform: "uppercase", margin: 0,
                    position: "absolute", top: 5, left: 6, pointerEvents: "none", whiteSpace: "nowrap",
                  }}>Say hello</p>
                  <p style={{
                    fontFamily: OUTLINE_BOLD, fontSize: "clamp(52px, 9vw, 96px)", letterSpacing: "0.02em",
                    color: "var(--paper)", textTransform: "uppercase", margin: 0, position: "relative", whiteSpace: "nowrap",
                  }}>Say hello</p>
                </div>
                <p style={{ fontFamily: CAVEAT, fontSize: 26, color: "rgba(245,239,226,0.75)", margin: "10px 0 30px", transform: "rotate(-1.2deg)" }}>
                  usually on a trail — email works best
                </p>
                <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                  <a className="c3-pill" href="mailto:lucyrkates@gmail.com">Email</a>
                  <a className="c3-pill" href="https://www.linkedin.com/in/lucyrkates/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a className="c3-pill" href="https://lucyrkates.github.io/lucy-resume/" target="_blank" rel="noopener noreferrer">Resume</a>
                </div>
                <p style={{ fontFamily: BODY, fontSize: 13, color: "rgba(245,239,226,0.45)", margin: "56px 0 0" }}>
                  © 2026 Lucy Kates — drawn, taped &amp; shipped by hand
                </p>
              </footer>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
