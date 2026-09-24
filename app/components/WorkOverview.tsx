"use client";

import { useEffect, useRef, useState } from "react";
import { links } from "../content";
import { ExternalLink } from "./Icons";

export default function WorkOverview() {
  // The Figma embed grabs focus when it loads, which makes the browser jump
  // the page down to it. Only mount it once it's mostly on screen.
  const embedRef = useRef<HTMLDivElement>(null);
  const [showEmbed, setShowEmbed] = useState(false);

  useEffect(() => {
    const el = embedRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowEmbed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="work" id="work">
      <div className="work-inner">
        <div className="work-head">
          <h2>Work overview</h2>
          <ExternalLink className="figma-link" href={links.workFigma}>
            Open in Figma
          </ExternalLink>
        </div>
        <div className="embed" ref={embedRef}>
          {showEmbed && (
            <iframe
              title="Lucy Kates — Work Overview prototype"
              src={links.workEmbed}
              allowFullScreen
            />
          )}
        </div>
      </div>
    </section>
  );
}
