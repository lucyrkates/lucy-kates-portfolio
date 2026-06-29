import Link from "next/link";

const imgLucyPhoto    = "https://www.figma.com/api/mcp/asset/79084d02-d640-488a-bd0a-2d4ab98fb716";
const imgWaveProjects = "https://www.figma.com/api/mcp/asset/25e63ecf-523e-4e6e-98a8-fc68ec71bd29";
const imgWaveAbout    = "https://www.figma.com/api/mcp/asset/9c15a0d8-c8e1-4e1b-a4d5-ae34aa44aba6";
const imgUnionBorder  = "https://www.figma.com/api/mcp/asset/5cd6e895-0496-4abe-aeaa-71692cf9c435";
const imgRelMap       = "https://www.figma.com/api/mcp/asset/65210a34-cded-4283-94c0-33ec477be7df";
const imgSalesPhone1  = "https://www.figma.com/api/mcp/asset/6ffcc478-12fb-4fd5-b45d-d315099b2297";
const imgSalesPhone2  = "https://www.figma.com/api/mcp/asset/e633bbda-1a33-4186-93e7-1b9cdb72773c";
const imgOutlookMock  = "https://www.figma.com/api/mcp/asset/924eed49-d9e2-43ea-bbb1-047020180110";
const imgTeamsLogo    = "https://www.figma.com/api/mcp/asset/36675377-ae2c-46dd-873c-9f6f70ed3aff";
const imgWordLogo     = "https://www.figma.com/api/mcp/asset/0fc1f34b-9128-4b96-a508-ba1249c2ba7b";
const imgOutlookIcon  = "https://www.figma.com/api/mcp/asset/6c06568b-9dd0-43e4-9938-3444af8fd8ca";
const imgBackpacking  = "https://www.figma.com/api/mcp/asset/81fb59e1-5bb1-40cf-b901-f3adad4ca4c1";
const imgEnchantments = "https://www.figma.com/api/mcp/asset/1c284681-4840-4aa0-a222-21b780e03d8c";
const imgBiking       = "https://www.figma.com/api/mcp/asset/9a3cc01a-771c-4056-b6bb-2e43610ffe59";
const imgBetaEntity   = "https://www.figma.com/api/mcp/asset/b846a55f-3958-410d-b443-b4f739b3d473";
const imgVector2      = "https://www.figma.com/api/mcp/asset/25c7090e-2b9b-4257-b118-3348a3ec2000";
const imgVector3      = "https://www.figma.com/api/mcp/asset/0d0ef811-e51b-428c-868d-a8b99cadda2e";

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
      <div style={{ height: 30, flex: 1 }}>
        <img src={wave} alt="" style={{ width: "100%", height: "100%", objectFit: "fill", display: "block" }} />
      </div>
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

        .v6-polaroid { background: white; border-radius: 4px; padding: 20px 16px 40px; box-shadow: -2px -2px 4px -4px rgba(0,0,0,0.25), 3px 2px 3.9px -2px rgba(0,0,0,0.2); width: 250px; }
        .v6-polaroid img { width: 100%; height: 251px; object-fit: cover; display: block; }

        .v6-dimlink { text-decoration: none; color: #0b4a52; opacity: 0.45; transition: opacity 0.15s; }
        .v6-dimlink:hover { opacity: 1; }

        @keyframes v6in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
        .v6a { animation: v6in 0.65s ease both; }
        .v6b { animation: v6in 0.65s ease 0.12s both; }
        .v6c { animation: v6in 0.65s ease 0.24s both; }
        .v6d { animation: v6in 0.65s ease 0.36s both; }
      `}</style>

      <nav className="v6-nav">
        <Link href="/v6" className="active">Concept 1</Link>
        <Link href="/v4">Concept 2</Link>
      </nav>

      <main style={{
        background: "#fafaf6",
        backgroundImage: "radial-gradient(circle, rgba(11,74,82,0.16) 1px, transparent 1px)",
        backgroundSize: "22px 22px",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        padding: "100px 40px",
      }}>
        <div style={{ width: 805, display: "flex", flexDirection: "column", gap: 48 }}>

          {/* Name — double layer */}
          <div className="v6a" style={{ textAlign: "center", position: "relative" }}>
            <h1 style={{
              fontFamily: LUCY_OUTLINE,
              fontSize: 113, fontWeight: "normal", lineHeight: "normal",
              letterSpacing: "-7.91px", color: "#ffa617",
              mixBlendMode: "multiply", textTransform: "uppercase",
              margin: 0, whiteSpace: "nowrap",
              position: "absolute", top: -5, left: "50%",
              transform: "translateX(-50%)", width: "100%",
              textAlign: "center", pointerEvents: "none",
            }}>Lucy Kates</h1>
            <h1 style={{
              fontFamily: LUCY_OUTLINE_BOLD,
              fontSize: 113, fontWeight: "normal", lineHeight: "normal",
              letterSpacing: "-7.91px", color: "#0b4a52",
              textTransform: "uppercase", textAlign: "center",
              margin: 0, whiteSpace: "nowrap", position: "relative",
            }}>Lucy Kates</h1>
          </div>

          {/* Bio row */}
          <div className="v6b" style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
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
            <div style={{ flexShrink: 0 }}>
              <div style={{ transform: "rotate(4deg)" }}>
                <div className="v6-polaroid">
                  <img src={imgLucyPhoto} alt="Lucy" style={{ height: 268 }} />
                  <p style={{ fontFamily: LUCY_FONT_BOLD, fontSize: 21, letterSpacing: "-1.47px", color: "#000", margin: "12px 0 0", lineHeight: "normal" }}>
                    me.
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
              <div style={{ display: "flex", gap: 16, alignItems: "flex-end" }}>

                {/* Relationship map sticker */}
                <a
                  href="https://www.linkedin.com/business/sales/blog/product-updates/powering-linkedin-with-sales-navigator-insights-and-ai-assisted-introductions"
                  target="_blank" rel="noopener noreferrer"
                  className="v6-proj-link"
                >
                  <div className="v6-sticker-img" style={{ height: 270, position: "relative", width: "100%" }}>
                    <div style={{ position: "absolute", left: 4, top: 28, transform: "rotate(2.8deg)", transformOrigin: "top left" }}>
                      <img src={imgUnionBorder} alt="" style={{ width: 380, height: 225, display: "block" }} />
                    </div>
                    <div style={{ position: "absolute", left: 14, top: 39, transform: "rotate(2.8deg)", transformOrigin: "top left" }}>
                      <img src={imgRelMap} alt="Relationship map" style={{ width: 357, height: 209, objectFit: "cover", display: "block" }} />
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                      <p style={{ fontFamily: LUCY_FONT_BOLD, fontSize: 20, letterSpacing: "-1.6px", margin: 0, lineHeight: 1 }}>Relationship map</p>
                      <ExternalLinkIcon />
                    </div>
                    <p style={{ fontFamily: LUCY_FONT, fontSize: 16, letterSpacing: "-0.48px", margin: 0, lineHeight: "normal", color: "#000" }}>Interactive map to help salespeople identify, organize, and act on the buying committee within a company.</p>
                  </div>
                </a>

                {/* Sales tool sticker — two phones */}
                <a
                  href="https://www.linkedin.com/business/sales/blog/product-updates/powering-linkedin-with-sales-navigator-insights-and-ai-assisted-introductions"
                  target="_blank" rel="noopener noreferrer"
                  className="v6-proj-link"
                >
                  <div className="v6-sticker-img v6-sticker-img-l" style={{ height: 270, position: "relative", width: "100%" }}>
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
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                      <p style={{ fontFamily: LUCY_FONT_BOLD, fontSize: 20, letterSpacing: "-1.6px", margin: 0, lineHeight: 1 }}>A sales tool on LinkedIn</p>
                      <ExternalLinkIcon />
                    </div>
                    <p style={{ fontFamily: LUCY_FONT, fontSize: 16, letterSpacing: "-0.48px", margin: 0, lineHeight: "normal", color: "#000" }}>Make it easier for sellers to research accounts without ever having to leave LinkedIn.</p>
                  </div>
                </a>
              </div>

              {/* Row 2 */}
              <div style={{ display: "flex", gap: 16, alignItems: "flex-end" }}>

                {/* Microsoft sticker */}
                <div className="v6-sticker">
                  <div className="v6-sticker-img" style={{ height: 270, position: "relative", width: "100%" }}>
                    <div style={{ position: "absolute", left: 16, top: 25, transform: "rotate(-1.63deg)", transformOrigin: "top left" }}>
                      <div style={{ border: "8px solid white", borderRadius: 6, boxShadow: "1px 1px 2px rgba(0,0,0,0.25)", overflow: "hidden", width: 355, height: 209, position: "relative" }}>
                        <img src={imgOutlookMock} alt="Microsoft LinkedIn integration" style={{
                          position: "absolute", height: "114.41%", left: "-9.81%", top: "-7.1%", width: "119.93%",
                        }} />
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <p style={{ fontFamily: LUCY_FONT_BOLD, fontSize: 20, letterSpacing: "-1.6px", margin: 0, lineHeight: "normal", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Microsoft &lt;&gt; LinkedIn integration</p>
                    <p style={{ fontFamily: LUCY_FONT, fontSize: 16, letterSpacing: "-0.48px", margin: 0, lineHeight: "normal", color: "#000" }}>A collaboration between LinkedIn and Microsoft bringing LinkedIn insights into Outlook and Teams.</p>
                  </div>
                </div>

                {/* Aura sticker — floating panels */}
                <div className="v6-proj-link" style={{ cursor: "default" }}>
                  <div className="v6-sticker-img v6-sticker-img-l" style={{ height: 270, position: "relative", width: "100%" }}>

                    {/* Teams panel */}
                    <div style={{ position: "absolute", left: 13.5, top: 20, transform: "rotate(-3.81deg)", transformOrigin: "top left" }}>
                      <div style={{ background: "white", border: "6px solid white", borderRadius: 5, overflow: "hidden", width: 161, boxShadow: PANEL_SHADOW }}>
                        <div style={PANEL_HEADER}>
                          <img src={imgTeamsLogo} alt="" style={{ width: 14, height: 14, objectFit: "contain" }} />
                          <span style={PANEL_LABEL}>Teams</span>
                        </div>
                        <div style={{ padding: 8, display: "flex", flexDirection: "column", gap: 5 }}>
                          <div style={{ display: "flex", justifyContent: "flex-end" }}>
                            <div style={{ background: "#5b5fc7", borderRadius: 5, padding: 3, maxWidth: 118 }}>
                              <p style={{ fontSize: 7, fontFamily: "SF Pro Text, system-ui, sans-serif", color: "white", margin: 0, lineHeight: 1.3 }}>Can you set up time with Antoine to discuss Project Hero?</p>
                            </div>
                          </div>
                          <div style={{ background: "#f0f0f0", borderRadius: 5, padding: 3, maxWidth: 118 }}>
                            <p style={{ fontSize: 7, fontFamily: "SF Pro Text, system-ui, sans-serif", color: "#242424", margin: 0, lineHeight: 1.3 }}>A meeting has been set for tomorrow at 9am with Antoine Marcel</p>
                          </div>
                        </div>
                        <div style={{ padding: "4px 7px" }}>
                          <div style={{ background: "white", border: "0.4px solid #e0e0e0", borderRadius: 5, padding: "3px 4px" }}>
                            <p style={{ fontSize: 7, fontFamily: "SF Pro Text, system-ui, sans-serif", color: "#808080", margin: 0 }}>Type a message</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Word panel */}
                    <div style={{ position: "absolute", left: 223.5, top: 24.39, background: "white", border: "6px solid white", borderRadius: 5, overflow: "hidden", width: 148.5, boxShadow: PANEL_SHADOW }}>
                      <div style={PANEL_HEADER}>
                        <img src={imgWordLogo} alt="" style={{ width: 13.3, height: 14.3, objectFit: "contain" }} />
                        <span style={PANEL_LABEL}>Word</span>
                      </div>
                      {/* Terrence Welch comment */}
                      <div style={{ padding: "4.95px", background: "white", display: "flex", gap: 3.3, alignItems: "flex-start" }}>
                        <div style={{ width: 9.9, height: 9.9, borderRadius: "50%", overflow: "hidden", flexShrink: 0 }}>
                          <img src={imgBetaEntity} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <p style={{ fontSize: 6.6, fontFamily: "SF Pro Text, system-ui, sans-serif", fontWeight: 600, color: "rgba(0,0,0,0.9)", margin: 0, letterSpacing: "-0.132px", lineHeight: 1.25 }}>Terrence Welch</p>
                          <p style={{ fontSize: 6.6, fontFamily: "SF Pro Text, system-ui, sans-serif", color: "rgba(0,0,0,0.9)", margin: "1.65px 0 0", lineHeight: 1.25 }}>
                            <span style={{ fontWeight: 700, color: "#0a66c2" }}>@Cosio</span>{`, Send me a summary of this document please.`}
                          </p>
                          <p style={{ fontSize: 4.95, fontFamily: "SF Pro Text, system-ui, sans-serif", color: "rgba(0,0,0,0.6)", margin: "1.65px 0 0", lineHeight: 1.25 }}>5/14/25 8:32 AM</p>
                        </div>
                      </div>
                      {/* Cosio reply */}
                      <div style={{ padding: "4.95px", background: "#f5f5f5", display: "flex", gap: 3.3, alignItems: "flex-start" }}>
                        <div style={{ width: 9.9, height: 9.9, position: "relative", flexShrink: 0 }}>
                          <img src={imgVector3} alt="" style={{ position: "absolute", width: "70.64%", height: "79.84%", left: 0, top: "10.3%", maxWidth: "none" }} />
                          <img src={imgVector2} alt="" style={{ position: "absolute", width: "70.91%", height: "23.95%", left: "28.1%", top: "38.3%", maxWidth: "none" }} />
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <p style={{ fontSize: 6.6, fontFamily: "SF Pro Text, system-ui, sans-serif", fontWeight: 600, color: "rgba(0,0,0,0.9)", margin: 0, letterSpacing: "-0.132px", lineHeight: 1.25 }}>Cosio</p>
                          <p style={{ fontSize: 6.6, fontFamily: "SF Pro Text, system-ui, sans-serif", color: "rgba(0,0,0,0.6)", margin: "1.65px 0 0", lineHeight: 1.25 }}>No problem. I&apos;ll email it to you shortly</p>
                          <p style={{ fontSize: 4.95, fontFamily: "SF Pro Text, system-ui, sans-serif", color: "rgba(0,0,0,0.6)", margin: "1.65px 0 0", lineHeight: 1.25 }}>5/14/25 8:33 AM</p>
                        </div>
                      </div>
                      {/* @mention input */}
                      <div style={{ padding: "3.3px 4.95px", background: "#f5f5f5" }}>
                        <div style={{ background: "white", border: "0.4px solid rgba(140,140,140,0.2)", borderRadius: 3.3, padding: "3.3px" }}>
                          <p style={{ fontSize: 4.95, fontFamily: "SF Pro Text, system-ui, sans-serif", color: "rgba(0,0,0,0.6)", margin: 0, lineHeight: 1.25 }}>@mention or reply</p>
                        </div>
                      </div>
                      {/* Blue selection indicator */}
                      <div style={{ position: "absolute", left: 0, top: 26.4, width: 1.65, height: 184.8, background: "#6b67da" }} />
                    </div>

                    {/* Outlook panel */}
                    <div style={{ position: "absolute", left: 123.5, top: 119, transform: "rotate(5.3deg)", transformOrigin: "top left" }}>
                      <div style={{ background: "white", border: "6px solid white", borderRadius: 5, overflow: "hidden", width: 149, boxShadow: PANEL_SHADOW }}>
                        <div style={PANEL_HEADER}>
                          <img src={imgOutlookIcon} alt="" style={{ width: 14, height: 14, objectFit: "contain" }} />
                          <span style={PANEL_LABEL}>Outlook</span>
                        </div>
                        <div style={{ padding: "5px 7px", borderBottom: "0.2px solid #e0e0e0" }}>
                          <p style={{ fontSize: 5.8, fontFamily: "SF Pro Text, system-ui, sans-serif", color: "rgba(0,0,0,0.6)", margin: 0 }}>To: <span style={{ background: "#f8f8f8", padding: "1px 3px", borderRadius: 2 }}>Cosio</span></p>
                        </div>
                        <div style={{ padding: "5px 7px", borderBottom: "0.2px solid #e0e0e0" }}>
                          <p style={{ fontSize: 5.8, fontFamily: "SF Pro Text, system-ui, sans-serif", color: "rgba(0,0,0,0.6)", margin: 0 }}>Subject: <span style={{ color: "rgba(0,0,0,0.9)" }}>FW: Project Hero Updates</span></p>
                        </div>
                        <div style={{ padding: "5px 7px" }}>
                          <p style={{ fontSize: 6, fontFamily: "SF Pro Text, system-ui, sans-serif", color: "#242424", margin: 0, lineHeight: 1.35 }}><strong style={{ color: "#0a66c2" }}>@Cosio,</strong> Can you summarize the email below and send it to <strong style={{ color: "#0a66c2" }}>@Antoine</strong></p>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <p style={{ fontFamily: LUCY_FONT_BOLD, fontSize: 20, letterSpacing: "-1.6px", margin: 0, lineHeight: "normal" }}>Project Aura</p>
                    <p style={{ fontFamily: LUCY_FONT, fontSize: 16, letterSpacing: "-0.48px", margin: 0, lineHeight: "normal", color: "#000" }}>A personal AI assistant for every member of the global workforce. Rethinking how we work with AI.</p>
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
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative" }}>
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
              <img src="/images/tape-01.png" alt="" style={{ position: "absolute", left: 55, top: -28, width: 130, pointerEvents: "none" }} />
              <img src="/images/tape-02.png" alt="" style={{ position: "absolute", left: 308, top: -26, width: 150, transform: "rotate(-1.33deg)", pointerEvents: "none" }} />
              <img src="/images/tape-03.png" alt="" style={{ position: "absolute", left: 612, top: -30, width: 130, transform: "rotate(3deg)", pointerEvents: "none" }} />
            </div>
          </div>

          {/* Footer */}
          <footer style={{ paddingTop: 56, display: "flex", gap: 20 }}>
            <a href="mailto:lucyrkates@gmail.com" className="v6-dimlink" style={{ fontFamily: LUCY_FONT, fontSize: 13, letterSpacing: "0.04em" }}>Reach out</a>
            <a href="https://lucyrkates.github.io/lucy-resume/" className="v6-dimlink" style={{ fontFamily: LUCY_FONT, fontSize: 13, letterSpacing: "0.04em" }}>Resume</a>
            <a href="https://www.linkedin.com/in/lucyrkates/" className="v6-dimlink" style={{ fontFamily: LUCY_FONT, fontSize: 13, letterSpacing: "0.04em" }}>LinkedIn</a>
          </footer>

        </div>
      </main>
    </>
  );
}
