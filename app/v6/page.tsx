import Link from "next/link";
import ConnectedAppsMockup from "./ConnectedAppsMockup";
import HoverSticker from "./HoverSticker";
import WaveDraw from "./WaveDraw";

const imgLucyPhoto    = "/images/lucy-portrait.png";
const imgWaveProjects = "/images/wave-projects.svg";
const imgWaveAbout    = "/images/wave-about.svg";
const imgSalesPhone1  = "/images/sales-phone-1.png";
const imgSalesPhone2  = "/images/sales-phone-2.png";
const imgOutlookMock  = "/images/ms-outlook-mock.png";
const imgBackpacking  = "/images/photo-backpacking.png";
const imgEnchantments = "/images/photo-enchantments.png";
const imgBiking       = "/images/photo-biking.png";

const LUCY_OUTLINE_BOLD = "'LucyOutlineBold', sans-serif";
const LUCY_FONT_BOLD    = "'LucyFontBold', sans-serif";
const LUCY_OUTLINE      = "'LucyOutline', sans-serif";
const LUCY_FONT         = "'LucyFont', sans-serif";

const PANEL_SHADOW = "0px 0px 0.4px rgba(140,140,140,0.2), 2.2px 2.2px 7.9px rgba(0,0,0,0.3)";
const PANEL_HEADER: React.CSSProperties = {
  borderBottom: "0.4px solid rgba(140,140,140,0.2)",
  padding: "5px 7px",
  display: "flex",
  alignItems: "center",
  gap: 4,
};
const PANEL_LABEL: React.CSSProperties = {
  fontSize: 6.6,
  fontFamily: "SF Pro Text, system-ui, sans-serif",
  fontWeight: 600,
  color: "rgba(0,0,0,0.9)",
  letterSpacing: "-0.13px",
};

const ExternalLinkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    <path d="M6.5 3.5H3.5C2.94772 3.5 2.5 3.94772 2.5 4.5V12.5C2.5 13.0523 2.94772 13.5 3.5 13.5H11.5C12.0523 13.5 12.5 13.0523 12.5 12.5V9.5M9.5 2.5H13.5M13.5 2.5V6.5M13.5 2.5L7 9" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function StickerWord({ word, startDelay = 0 }: { word: string; startDelay?: number }) {
  return (
    <span style={{ display: "inline-block", whiteSpace: "nowrap" }}>
      {word.split("").map((ch, i) => (
        <span key={i} className="v6-letter" style={{
          animationDelay: `${startDelay + i * 0.07}s`,
          ["--r" as string]: `${(i % 2 === 0 ? 1 : -1) * (5 + (i % 3) * 2)}deg`,
        }}>
          <span className="v6-letter-back" aria-hidden="true">{ch}</span>
          <span className="v6-letter-front">{ch}</span>
        </span>
      ))}
    </span>
  );
}

function SectionHeading({ text, shadowColor, fontSize = 40, letterSpacing = "3.2px", shadowSize = 39, shadowSpacing = "3.12px", wave }: {
  text: string; shadowColor: string; fontSize?: number; letterSpacing?: string; shadowSize?: number; shadowSpacing?: string; wave: string;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, width: "100%" }}>
      <div style={{ position: "relative", flexShrink: 0 }}>
        <h2 style={{
          fontFamily: LUCY_OUTLINE_BOLD, fontSize: shadowSize, fontWeight: "normal",
          lineHeight: "normal", letterSpacing: shadowSpacing, color: shadowColor,
          textTransform: "uppercase", margin: 0, whiteSpace: "nowrap",
          mixBlendMode: "multiply", position: "absolute", top: 0, left: 0, pointerEvents: "none",
        }}>{text}</h2>
        <h2 style={{
          fontFamily: LUCY_OUTLINE, fontSize, fontWeight: "normal",
          lineHeight: "normal", letterSpacing, color: "#000",
          textTransform: "uppercase", margin: 0, whiteSpace: "nowrap", position: "relative",
        }}>{text}</h2>
      </div>
      <WaveDraw src={wave} />
    </div>
  );
}

export default function V6() {
  return (
    <>
      <style>{`
        @font-face { font-family: 'LucyOutlineBold'; src: url('/fonts/lucy-outline-bold.otf') format('opentype'); font-display: block; }
        @font-face { font-family: 'LucyFontBold';    src: url('/fonts/lucy-font-bold.otf')    format('opentype'); font-display: block; }
        @font-face { font-family: 'LucyOutline';     src: url('/fonts/lucy-outline.otf')      format('opentype'); font-display: block; }
        @font-face { font-family: 'LucyFont';        src: url('/fonts/lucy-font.otf')         format('opentype'); font-display: block; }

        .v6-nav { position: fixed; top: 20px; right: 24px; z-index: 20; display: flex; gap: 6px; font-family: var(--font-inria-sans), serif; }
        .v6-nav a { font-size: 14px; color: #0b4a52; text-decoration: none; padding: 5px 14px; border-radius: 100px; border: 1px solid rgba(11,74,82,0.25); opacity: 0.5; transition: opacity 0.15s, background 0.15s, color 0.15s; display: inline-flex; align-items: center; justify-content: center; }
        .v6-nav a:hover { opacity: 0.75; }
        .v6-nav a.active { background: #0b4a52; color: #fff; border-color: transparent; opacity: 1; }

        .v6-proj-link { text-decoration: none; color: inherit; display: flex; flex-direction: column; gap: 16px; flex: 1; min-width: 0; }
        .v6-sticker { flex: 1; display: flex; flex-direction: column; gap: 16px; min-width: 0; }
        .v6-sticker-img, .v6-sticker-img-l { transition: transform 0.2s ease, filter 0.2s ease; }
        .v6-sticker-img:hover { transform: rotate(2deg) translateY(-6px); filter: drop-shadow(0 6px 12px rgba(0,0,0,0.08)); }
        .v6-sticker-img-l:hover { transform: rotate(-2deg) translateY(-6px); filter: drop-shadow(0 6px 12px rgba(0,0,0,0.08)); }

        .v6-polaroid { background: white; border-radius: 4px; padding: 20px 16px 40px; box-shadow: -2px -2px 4px -4px rgba(0,0,0,0.25), 3px 2px 3.9px -2px rgba(0,0,0,0.2); width: 250px; transition: transform 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s ease; }
        .v6-polaroid img { width: 100%; height: 251px; object-fit: cover; display: block; }
        .v6-polaroid:hover { transform: translateY(-8px) scale(1.02); box-shadow: 0 18px 40px rgba(0,0,0,0.24); }

        .v6-letter { position: relative; display: inline-block; }
        .v6-letter-front { position: relative; display: inline-block; transition: transform 0.25s cubic-bezier(.34,1.56,.64,1); }
        .v6-letter-back { position: absolute; left: 0.05em; top: -0.05em; display: inline-block; color: #ffa617; font-family: 'LucyOutline', sans-serif; mix-blend-mode: multiply; pointer-events: none; transition: transform 0.25s cubic-bezier(.34,1.56,.64,1); }
        .v6-letter:hover .v6-letter-front { transform: translateY(-7px) rotate(var(--r)); }
        .v6-letter:hover .v6-letter-back { transform: translate(0.03em, -0.03em); color: #bde160; }

        @media (prefers-reduced-motion: no-preference) {
          .v6-letter { opacity: 0; animation: v6settle 0.7s cubic-bezier(.22,1,.36,1) both; }
          @keyframes v6settle {
            0%   { opacity: 0; transform: translateY(-44px) rotate(var(--r)) scale(1.14); }
            62%  { opacity: 1; transform: translateY(5px) rotate(calc(var(--r) * -0.25)) scale(0.99); }
            100% { opacity: 1; transform: none; }
          }
          .v6-wave img { clip-path: inset(-15% 100% -15% 0); transition: clip-path 1.2s ease 0.1s; }
          .v6-wave.on img { clip-path: inset(-15% -2% -15% 0); }
        }

        .v6-dimlink { text-decoration: none; color: #000; opacity: 0.45; transition: opacity 0.15s; }
        .v6-dimlink:hover { opacity: 1; }

        @keyframes v6in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
        .v6a { animation: v6in 0.65s ease both; }
        .v6b { animation: v6in 0.65s ease 0.12s both; }
        .v6c { animation: v6in 0.65s ease 0.24s both; }
        .v6d { animation: v6in 0.65s ease 0.36s both; }

        /* --- 860px: project rows go single-column before they get cramped --- */
        @media (max-width: 860px) {
          .v6-main { padding: 80px 28px 56px !important; }
          .v6-name h1 { font-size: clamp(64px, 13.5vw, 113px) !important; letter-spacing: clamp(-7.91px, -0.92vw, -4px) !important; }
          .v6-proj-row { flex-direction: column !important; align-items: stretch !important; gap: 32px !important; }
          /* Relationship map: image is 1.66:1; account for left:6 + right:22 inset and rotate */
          .v6-hs-relmap { height: auto !important; aspect-ratio: 3 / 2; }
          /* Two portrait phones: container needs enough height for 88% phone */
          .v6-hs-phones { height: auto !important; aspect-ratio: 4 / 3; }
          /* Outlook mock: image is 1.70:1 */
          .v6-hs-ms { height: auto !important; aspect-ratio: 16 / 10; }
        }

        /* --- 680px: bio and about stack; name wraps --- */
        @media (max-width: 680px) {
          .v6-main { padding: 72px 20px 48px !important; }
          .v6-name h1 { white-space: normal !important; text-align: center !important; }
          .v6-bio-row { flex-direction: column-reverse !important; align-items: center !important; }
          .v6-bio-polaroid { width: 100%; display: flex; justify-content: center; }
          .v6-polaroid-row { flex-direction: column !important; align-items: flex-start !important; gap: 48px !important; }
          .v6-polaroid-row > div:nth-child(2) { align-self: flex-end; }
          .v6-polaroid-row > div:nth-child(3) { align-self: center; }
          .v6-tape { display: none !important; }
        }

        /* --- 420px: tighten polaroids on very small screens --- */
        @media (max-width: 420px) {
          .v6-polaroid { width: 200px !important; }
          .v6-polaroid img { height: 200px !important; }
        }
      `}</style>

      <nav className="v6-nav">
        <Link href="/v6" className="active">Concept 1</Link>
        <Link href="/v8">Concept 3</Link>
      </nav>

      <main className="v6-main" style={{
        background: "#fafaf6",
        backgroundImage: "radial-gradient(circle, rgba(11,74,82,0.16) 1px, transparent 1px)",
        backgroundSize: "22px 22px",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        padding: "100px 40px",
      }}>
        <div style={{ maxWidth: 805, width: "100%", display: "flex", flexDirection: "column", gap: 48 }}>

          {/* Name — double layer, letters settle in like placed stickers */}
          <div className="v6-name" style={{ textAlign: "center", position: "relative" }}>
            <h1 style={{
              fontFamily: LUCY_OUTLINE_BOLD,
              fontSize: 113, fontWeight: "normal", lineHeight: "normal",
              letterSpacing: "-7.91px", color: "#0b4a52",
              textTransform: "uppercase", textAlign: "center",
              margin: 0, whiteSpace: "nowrap",
            }}>
              <StickerWord word="Lucy" startDelay={0.08} />{" "}
              <StickerWord word="Kates" startDelay={0.42} />
            </h1>
          </div>

          {/* Bio row */}
          <div className="v6b v6-bio-row" style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
              <h2 style={{
                fontFamily: LUCY_FONT_BOLD, fontSize: 40, fontWeight: "normal",
                lineHeight: "normal", letterSpacing: "-4px", color: "#000", margin: 0,
              }}>
                Designer, equity champion, hiker, cereal-lover, runner.
              </h2>
              <p style={{
                fontFamily: LUCY_FONT, fontSize: 26, lineHeight: "normal",
                letterSpacing: "-2.08px", color: "#000", margin: 0,
              }}>
                6+ years across enterprise and consumer platforms. Currently leading design for credibility features on the LinkedIn profile, with past experience in enterprise SaaS and AI products. Brings systems thinking to ambiguous problems and cares deeply about equitable, human-centered design.
              </p>
            </div>
            {/* Polaroid photo */}
            <div className="v6-bio-polaroid" style={{ flexShrink: 0 }}>
              <div style={{ transform: "rotate(4deg)" }}>
                <div className="v6-polaroid">
                  <img src={imgLucyPhoto} alt="Lucy" style={{ height: 268 }} />
                  <p style={{ fontFamily: LUCY_FONT_BOLD, fontSize: 21, letterSpacing: "-1.47px", color: "#000", margin: "12px 0 0", lineHeight: "normal" }}>
                    Lucy in a park
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="v6c" style={{ display: "flex", flexDirection: "column", gap: 24 }}>

            <SectionHeading
              text="Projects"
              shadowColor="#faa316"
              fontSize={40} letterSpacing="3.2px"
              shadowSize={39} shadowSpacing="3.12px"
              wave={imgWaveProjects}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

              {/* Row 1 */}
              <div className="v6-proj-row" style={{ display: "flex", gap: 16, alignItems: "flex-end" }}>

                {/* Relationship map sticker */}
                <a
                  href="https://www.linkedin.com/business/sales/blog/product-updates/powering-linkedin-with-sales-navigator-insights-and-ai-assisted-introductions"
                  target="_blank" rel="noopener noreferrer"
                  className="v6-proj-link"
                >
                  <HoverSticker hoverRotate={4} height={270} className="v6-hs-relmap">
                    <div style={{
                      position: "absolute", left: 6, top: 22, right: 22,
                      transform: "rotate(2.4deg)", transformOrigin: "top left",
                    }}>
                      <img src="/carousel/relationship-map.png" alt="Relationship map"
                        style={{ width: "100%", height: "auto", display: "block",
                          filter: "drop-shadow(2.5px 0 0 #fff) drop-shadow(-2.5px 0 0 #fff) drop-shadow(0 2.5px 0 #fff) drop-shadow(0 -2.5px 0 #fff) drop-shadow(0 6px 14px rgba(0,0,0,0.15))",
                        }} />
                    </div>
                  </HoverSticker>
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                      <p style={{ fontFamily: LUCY_FONT_BOLD, fontSize: 20, letterSpacing: "-1.6px", margin: 0, lineHeight: 1 }}>Relationship map</p>
                      <ExternalLinkIcon />
                    </div>
                    <p style={{ fontFamily: LUCY_FONT, fontSize: 16, letterSpacing: "-0.48px", margin: 0, lineHeight: "normal", color: "#000" }}>Interactive map to help salespeople identify, organize, and act on the buying committee within a company.</p>
                  </div>
                </a>

                {/* Connected apps */}
                <div className="v6-sticker">
                  <ConnectedAppsMockup />
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <a href="https://news.linkedin.com/2026/visibility-builds-credibility---the-tools-you-use-every-day--now" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", gap: 4 }}>
                      <p style={{ fontFamily: LUCY_FONT_BOLD, fontSize: 20, letterSpacing: "-1.6px", margin: 0, lineHeight: 1 }}>Connected apps</p>
                      <ExternalLinkIcon />
                    </a>
                    <p style={{ fontFamily: LUCY_FONT, fontSize: 16, letterSpacing: "-0.48px", margin: 0, lineHeight: "normal", color: "#000" }}>Connect the apps you use every day directly to your LinkedIn profile.</p>
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="v6-proj-row" style={{ display: "flex", gap: 16, alignItems: "flex-end" }}>

                {/* Sales tool sticker — two phones */}
                <a
                  href="https://www.linkedin.com/business/sales/blog/product-updates/powering-linkedin-with-sales-navigator-insights-and-ai-assisted-introductions"
                  target="_blank" rel="noopener noreferrer"
                  className="v6-proj-link"
                >
                  <HoverSticker hoverRotate={-3.5} height={270} className="v6-hs-phones">
                    <div style={{
                      position: "absolute", left: 19.5, top: 21.39,
                      width: 116, height: 240,
                      borderRadius: 18, border: "8px solid white",
                      boxShadow: "1px 1px 2px rgba(0,0,0,0.25)",
                      overflow: "hidden",
                    }}>
                      <img src={imgSalesPhone1} alt="" style={{
                        position: "absolute",
                        height: "100%", left: "-0.9%", top: "0.01%", width: "101.81%",
                        maxWidth: "none",
                      }} />
                    </div>
                    <div style={{ position: "absolute", left: 150, top: 16.42, display: "flex", alignItems: "center", justifyContent: "center", width: 130.9, height: 246.7 }}>
                      <div style={{ transform: "rotate(3.31deg)" }}>
                        <div style={{
                          width: 117.2, height: 240.3, position: "relative",
                          borderRadius: 17, border: "8px solid white",
                          boxShadow: "-1px 1px 2px rgba(0,0,0,0.25)",
                          overflow: "hidden",
                        }}>
                          <img src={imgSalesPhone2} alt="" style={{
                            position: "absolute",
                            height: "100%", left: "-0.43%", top: 0, width: "100.85%",
                            maxWidth: "none",
                          }} />
                        </div>
                      </div>
                    </div>
                  </HoverSticker>
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                      <p style={{ fontFamily: LUCY_FONT_BOLD, fontSize: 20, letterSpacing: "-1.6px", margin: 0, lineHeight: 1 }}>A sales tool on LinkedIn</p>
                      <ExternalLinkIcon />
                    </div>
                    <p style={{ fontFamily: LUCY_FONT, fontSize: 16, letterSpacing: "-0.48px", margin: 0, lineHeight: "normal", color: "#000" }}>Make it easier for sellers to research accounts without ever having to leave LinkedIn.</p>
                  </div>
                </a>

                {/* Microsoft sticker */}
                <div className="v6-sticker">
                  <HoverSticker hoverRotate={-2.5} height={270} className="v6-hs-ms">
                    <div style={{
                      position: "absolute", left: 4, top: 20, right: 4,
                      transform: "rotate(-1.63deg)", transformOrigin: "top center",
                      background: "white",
                      padding: 6,
                      borderRadius: 20,
                      boxShadow: "-2px -2px 4px -4px rgba(0,0,0,0.25), 3px 2px 3.9px -2px rgba(0,0,0,0.2)",
                    }}>
                      <img src={imgOutlookMock} alt="Microsoft LinkedIn integration"
                        style={{ width: "100%", height: "auto", display: "block", borderRadius: 14 }} />
                    </div>
                  </HoverSticker>
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <p style={{ fontFamily: LUCY_FONT_BOLD, fontSize: 20, letterSpacing: "-1.6px", margin: 0, lineHeight: "normal", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Microsoft &lt;&gt; LinkedIn integration</p>
                    <p style={{ fontFamily: LUCY_FONT, fontSize: 16, letterSpacing: "-0.48px", margin: 0, lineHeight: "normal", color: "#000" }}>A collaboration between LinkedIn and Microsoft bringing LinkedIn insights into Outlook and Teams.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Interests */}
          <div className="v6d" style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <SectionHeading
                text="About"
                shadowColor="#bde160"
                fontSize={36} letterSpacing="2.88px"
                shadowSize={35} shadowSpacing="2.8px"
                wave={imgWaveAbout}
              />
              <p style={{ fontFamily: LUCY_FONT, fontSize: 24, letterSpacing: "-1.92px", lineHeight: "normal", color: "#000", margin: 0 }}>
                I have been a product designer for 5 years. I care about how design can have positive impact in the world. I have both enterprise and consumer experience at companies like Uber and LinkedIn.
              </p>
              <p style={{ fontFamily: LUCY_FONT, fontSize: 24, letterSpacing: "-1.92px", lineHeight: "normal", color: "#000", margin: 0 }}>
                Outside of work, I love to be outside! Whether it is hiking, running, biking, or going for a walk, I love being in nature.
              </p>
            </div>

            {/* Polaroids */}
            <div className="v6-polaroid-row" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative" }}>
              <div style={{ transform: "rotate(1deg)" }}>
                <div className="v6-polaroid">
                  <img src={imgBackpacking} alt="Backpacking in Canada" />
                  <p style={{ fontFamily: LUCY_FONT_BOLD, fontSize: 21, letterSpacing: "-1.47px", color: "#000", margin: "12px 0 0", lineHeight: "normal" }}>Backpacking in canada</p>
                </div>
              </div>
              <div style={{ transform: "rotate(-1deg)" }}>
                <div className="v6-polaroid">
                  <img src={imgEnchantments} alt="Hiking The Enchantments" />
                  <p style={{ fontFamily: LUCY_FONT_BOLD, fontSize: 21, letterSpacing: "-1.47px", color: "#000", margin: "12px 0 0", lineHeight: "normal" }}>Hiking The Enchantments w/pals</p>
                </div>
              </div>
              <div style={{ transform: "rotate(4deg)" }}>
                <div className="v6-polaroid">
                  <img src={imgBiking} alt="Biking in my first triathlon" />
                  <p style={{ fontFamily: LUCY_FONT_BOLD, fontSize: 21, letterSpacing: "-1.47px", color: "#000", margin: "12px 0 0", lineHeight: "normal" }}>Biking in my first triatholon</p>
                </div>
              </div>
              <img src="/images/tape-01.png" alt="" className="v6-tape" style={{ position: "absolute", left: 55, top: -28, width: 130, pointerEvents: "none" }} />
              <img src="/images/tape-02.png" alt="" className="v6-tape" style={{ position: "absolute", left: 308, top: -26, width: 150, transform: "rotate(-1.33deg)", pointerEvents: "none" }} />
              <img src="/images/tape-03.png" alt="" className="v6-tape" style={{ position: "absolute", left: 612, top: -30, width: 130, transform: "rotate(3deg)", pointerEvents: "none" }} />
            </div>
          </div>

          {/* Footer */}
          <footer style={{ paddingTop: 56 }}>
            <p style={{ fontFamily: LUCY_FONT_BOLD, fontSize: 32, letterSpacing: "-2px", color: "#000", margin: "0 0 6px", lineHeight: "normal" }}>Reach out?</p>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <a href="mailto:lucyrkates@gmail.com" className="v6-dimlink" style={{ fontFamily: LUCY_FONT, fontSize: 20, letterSpacing: "0.04em" }}>Email</a>
              <span style={{ fontFamily: LUCY_FONT, fontSize: 20, opacity: 0.3 }}>•</span>
              <a href="https://www.linkedin.com/in/lucyrkates/" className="v6-dimlink" style={{ fontFamily: LUCY_FONT, fontSize: 20, letterSpacing: "0.04em" }}>LinkedIn</a>
              <span style={{ fontFamily: LUCY_FONT, fontSize: 20, opacity: 0.3 }}>•</span>
              <a href="https://lucyrkates.github.io/lucy-resume/" className="v6-dimlink" style={{ fontFamily: LUCY_FONT, fontSize: 20, letterSpacing: "0.04em" }}>Resume</a>
            </div>
          </footer>

        </div>
      </main>
    </>
  );
}
