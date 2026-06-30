import Link from "next/link";

const imgPhotoOfLucy = "https://www.figma.com/api/mcp/asset/38812c1c-69e1-471c-b46c-2874dd4a0cf4";
const imgWave = "https://www.figma.com/api/mcp/asset/f78601c8-43c1-4593-b28b-c8ab65de1e28";
const imgSalesTool = "https://www.figma.com/api/mcp/asset/691de2f8-7bef-4008-befd-6512dbbdcc31";
const imgRelationshipMap = "https://www.figma.com/api/mcp/asset/b8cabf67-f497-4bb0-8b66-992a4dfb29f6";
const imgMicrosoftLinkedIn = "https://www.figma.com/api/mcp/asset/82be2ed0-767f-4bc6-a946-81cc78f83f3d";
const imgBackpacking = "https://www.figma.com/api/mcp/asset/b5abb74e-3ee2-4dfa-91fe-1e735926960d";
const imgEnchantments = "https://www.figma.com/api/mcp/asset/d880de9e-0311-4a71-9bc9-c11d2a416d79";
const imgBiking = "https://www.figma.com/api/mcp/asset/2cbdd2cf-6d2c-4b78-b7f3-b24c52a7de52";

const INRIA = "var(--font-inria-sans), serif";

const CARD_TITLE: React.CSSProperties = {
  fontFamily: INRIA,
  fontWeight: 700,
  fontSize: 20,
  color: "#000",
  letterSpacing: "-0.1px",
  lineHeight: 1.45,
  margin: "0 0 6px",
};

const CARD_DESC: React.CSSProperties = {
  fontFamily: INRIA,
  fontWeight: 400,
  fontSize: 16,
  color: "rgba(0,0,0,0.55)",
  lineHeight: 1.2,
  margin: 0,
};

export default function V4() {
  return (
    <>
      <style>{`
        @font-face { font-family: 'Quiny'; src: url('/fonts/quiny.ttf') format('truetype'); font-weight: normal; font-style: normal; }
        @import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');

        .v4-nav { position: fixed; top: 20px; right: 24px; z-index: 20; display: flex; gap: 6px; font-family: var(--font-inria-sans), serif; }
        .v4-nav a { font-size: 14px; color: #0A0A0A; text-decoration: none; padding: 5px 14px; border-radius: 100px; border: 1px solid rgba(10,10,10,0.18); opacity: 0.5; transition: opacity 0.15s, background 0.15s, color 0.15s; display: inline-flex; align-items: center; justify-content: center; }
        .v4-nav a:hover { opacity: 0.75; }
        .v4-nav a.active { background: #0A0A0A; color: #fff; border-color: transparent; opacity: 1; }

        .v4-card { background: #fff; border: 1px solid #dfdfdf; border-radius: 16px; overflow: hidden; padding: 4px; flex: 1; min-width: 0; transition: box-shadow 0.2s; }
        .v4-card:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
        .v4-card-img { height: 250px; border-radius: 12px; overflow: hidden; border: 1px solid rgba(0,0,0,0.1); position: relative; }
        .v4-card-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .v4-card-body { padding: 12px; }
        .v4-card-link { text-decoration: none; color: inherit; display: block; }
        .v4-card-title-row { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
        .v4-coming-soon { display: inline-block; font-family: var(--font-inria-sans), serif; font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(0,0,0,0.45); border: 1px solid rgba(0,0,0,0.18); border-radius: 4px; padding: 2px 7px; flex-shrink: 0; }

        .v4-polaroid { background: white; border-radius: 4px; padding: 20px 16px 40px; box-shadow: -2px -2px 4px -4px rgba(0,0,0,0.25), 3px 2px 3.9px -2px rgba(0,0,0,0.2); width: 250px; }
        .v4-polaroid img { width: 100%; height: 251px; object-fit: cover; display: block; }

        .v4-link { text-decoration: none; color: inherit; opacity: 0.45; transition: opacity 0.15s; }
        .v4-link:hover { opacity: 1; }

        @keyframes v4in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
        .v4a { animation: v4in 0.65s ease both; }
        .v4b { animation: v4in 0.65s ease 0.14s both; }
        .v4c { animation: v4in 0.65s ease 0.28s both; }

        @media (max-width: 680px) {
          .v4-hero { padding: 72px 24px 32px !important; }
          .v4-hero h1 { white-space: normal !important; }
          .v4-bio-wrap { padding: 0 24px !important; }
          .v4-bio-inner { flex-direction: column !important; align-items: flex-start !important; }
          .v4-projects { padding: 32px 24px 24px !important; }
          .v4-interests-wrap { padding: 48px 24px !important; }
          .v4-polaroids-wrap { padding: 0 24px 48px !important; }
          .v4-card-row { flex-direction: column !important; }
          .v4-polaroid-row { flex-direction: column !important; align-items: center !important; gap: 40px !important; }
          .v4-tape { display: none !important; }
          .v4-footer { padding: 48px 24px !important; }
        }
      `}</style>

      <nav className="v4-nav">
        <Link href="/v6">Concept 1</Link>
        <Link href="/v4" className="active">Concept 2</Link>
      </nav>

      <main style={{ background: "#fdfbf3", color: "#0A0A0A" }}>

        {/* Hero */}
        <header className="v4a v4-hero" style={{ textAlign: "center", padding: "80px 120px 40px" }}>
          <h1 style={{
            fontFamily: "'Quiny', sans-serif",
            fontWeight: 400,
            fontSize: "min(247px, 19.3vw)",
            lineHeight: 0.81,
            letterSpacing: "-4.94px",
            color: "#ee8142",
            margin: 0,
            whiteSpace: "nowrap",
          }}>
            Lucy Kates
          </h1>
        </header>

        {/* Feature: photo + tagline + bio */}
        <div className="v4b v4-bio-wrap" style={{ display: "flex", justifyContent: "center", padding: "0 120px" }}>
          <div className="v4-bio-inner" style={{ display: "flex", gap: 48, alignItems: "center", maxWidth: 800, width: "100%" }}>
            <div style={{ flexShrink: 0, padding: "24px 0" }}>
              <img
                src={imgPhotoOfLucy}
                alt="Lucy Kates"
                style={{ width: 200, height: 194, objectFit: "cover", borderRadius: 24, display: "block" }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <h2 style={{
                fontFamily: INRIA,
                fontWeight: 700,
                fontSize: 36,
                lineHeight: 1.16,
                letterSpacing: "-1.08px",
                color: "#000",
                margin: 0,
              }}>
                Designer, equity champion, hiker, cereal-lover, runner.
              </h2>
              <p style={{
                fontFamily: INRIA,
                fontWeight: 400,
                fontSize: 20,
                lineHeight: 1.45,
                letterSpacing: "-0.1px",
                color: "rgba(0,0,0,0.55)",
                margin: 0,
              }}>
                Hello. I am a senior product designer passionate about using design as a tool to create positive change in the world. Currently at LinkedIn
              </p>
            </div>
          </div>
        </div>

        {/* Projects (wave divider lives here) */}
        <section className="v4c v4-projects" style={{ padding: "32px 80px 24px", display: "flex", flexDirection: "column", gap: 24, alignItems: "center" }}>

          {/* Wavy divider + title grouped so wave sits close to title */}
          <div style={{ maxWidth: 800, width: "100%", display: "flex", flexDirection: "column", gap: 32 }}>
            <div style={{ height: 30 }}>
              <img src={imgWave} alt="" style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "left" }} />
            </div>
            <h2 style={{
              fontFamily: INRIA,
              fontWeight: 700,
              fontSize: 32,
              lineHeight: 1.16,
              letterSpacing: "-0.96px",
              color: "#000",
              margin: 0,
              whiteSpace: "nowrap",
            }}>
              Projects
            </h2>
          </div>

          {/* Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 800, width: "100%" }}>

            {/* Row 1 */}
            <div className="v4-card-row" style={{ display: "flex", gap: 24 }}>
              <div className="v4-card">
                <div className="v4-card-img">
                  <img src="/images/aura.png" alt="Project Aura" />
                </div>
                <div className="v4-card-body">
                  <div className="v4-card-title-row">
                    <p style={{...CARD_TITLE, margin: 0}}>Project Aura</p>
                    <span className="v4-coming-soon">Coming soon</span>
                  </div>
                  <p style={CARD_DESC}>A personal AI assistant for every member of the global workforce. Rethinking how we work with AI</p>
                </div>
              </div>

              <a href="https://www.linkedin.com/business/sales/blog/product-updates/powering-linkedin-with-sales-navigator-insights-and-ai-assisted-introductions" target="_blank" rel="noopener noreferrer" className="v4-card v4-card-link">
                <div className="v4-card-img">
                  <img src={imgSalesTool} alt="A sales tool on LinkedIn" />
                </div>
                <div className="v4-card-body">
                  <p style={CARD_TITLE}>A sales tool on LinkedIn</p>
                  <p style={CARD_DESC}>Make it easier for sellers to research accounts without ever having to leave LinkedIn</p>
                </div>
              </a>
            </div>

            {/* Row 2 */}
            <div className="v4-card-row" style={{ display: "flex", gap: 24 }}>
              <a href="https://www.linkedin.com/business/sales/blog/product-updates/powering-linkedin-with-sales-navigator-insights-and-ai-assisted-introductions" target="_blank" rel="noopener noreferrer" className="v4-card v4-card-link">
                <div className="v4-card-img">
                  <img src={imgRelationshipMap} alt="Relationship map" />
                </div>
                <div className="v4-card-body">
                  <p style={CARD_TITLE}>Relationship map</p>
                  <p style={CARD_DESC}>Interactive map to help salespeople identify, organize, and act on the buying committee within a company</p>
                </div>
              </a>

              <div className="v4-card">
                <div className="v4-card-img">
                  <img src={imgMicrosoftLinkedIn} alt="Microsoft LinkedIn integration" />
                </div>
                <div className="v4-card-body">
                  <div className="v4-card-title-row">
                    <p style={{...CARD_TITLE, margin: 0}}>Microsoft &lt;&gt; LinkedIn integration</p>
                    <span className="v4-coming-soon">Coming soon</span>
                  </div>
                  <p style={CARD_DESC}>A collaboration between LinkedIn and Microsoft bringing LinkedIn insights into Outlook and Teams</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Interests */}
        <section>
          <div className="v4-interests-wrap" style={{ display: "flex", justifyContent: "center", padding: "48px 120px" }}>
            <div style={{ maxWidth: 800, width: "100%", display: "flex", flexDirection: "column", gap: 24 }}>
              <h2 style={{
                fontFamily: INRIA,
                fontWeight: 700,
                fontSize: 32,
                lineHeight: 1.16,
                letterSpacing: "-0.96px",
                color: "#000",
                margin: 0,
              }}>
                Interests and hobbies
              </h2>
              <p style={{ fontFamily: INRIA, fontSize: 20, lineHeight: 1.45, letterSpacing: "-0.1px", color: "rgba(0,0,0,0.9)", margin: 0 }}>
                I have been a product designer for 5 years. I care about how design can have positive impact in the world. I have both enterprise and consumer experience at companies like Uber and LinkedIn.
              </p>
              <p style={{ fontFamily: INRIA, fontSize: 20, lineHeight: 1.45, letterSpacing: "-0.1px", color: "rgba(0,0,0,0.9)", margin: 0 }}>
                Outside of work, I love to be outside! Whether it is hiking, running, biking, or going for a walk, I love being in nature.
              </p>
            </div>
          </div>

          {/* Polaroids */}
          <div className="v4-polaroids-wrap" style={{ display: "flex", justifyContent: "center", padding: "0 120px 48px" }}>
            <div className="v4-polaroid-row" style={{ maxWidth: 800, width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative" }}>
              <div style={{ transform: "rotate(1deg)" }}>
                <div className="v4-polaroid">
                  <img src={imgBackpacking} alt="Backpacking in Canada" />
                  <p style={{ fontFamily: "'Caveat', cursive", fontSize: 16, color: "#000", margin: "12px 0 0", lineHeight: 1.1, letterSpacing: "-0.4px" }}>
                    Backpacking in canada
                  </p>
                </div>
              </div>
              <div style={{ transform: "rotate(-1deg)" }}>
                <div className="v4-polaroid">
                  <img src={imgEnchantments} alt="Hiking The Enchantments" />
                  <p style={{ fontFamily: "'Caveat', cursive", fontSize: 16, color: "#000", margin: "12px 0 0", lineHeight: 1.1, letterSpacing: "-0.4px" }}>
                    Hiking The Enchantments w/pals
                  </p>
                </div>
              </div>
              <div style={{ transform: "rotate(4deg)" }}>
                <div className="v4-polaroid">
                  <img src={imgBiking} alt="Biking in my first triathlon" />
                  <p style={{ fontFamily: "'Caveat', cursive", fontSize: 16, color: "#000", margin: "12px 0 0", lineHeight: 1.1, letterSpacing: "-0.4px" }}>
                    Biking in my first triatholon
                  </p>
                </div>
              </div>

              <img src="/images/tape-01.png" alt="" className="v4-tape" style={{ position: "absolute", left: 55, top: -28, width: 130, pointerEvents: "none" }} />
              <img src="/images/tape-02.png" alt="" className="v4-tape" style={{ position: "absolute", left: 308, top: -26, width: 150, transform: "rotate(-1.33deg)", pointerEvents: "none" }} />
              <img src="/images/tape-03.png" alt="" className="v4-tape" style={{ position: "absolute", left: 612, top: -30, width: 130, transform: "rotate(3deg)", pointerEvents: "none" }} />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="v4-footer" style={{ padding: "56px 120px 56px" }}>
          <p style={{ fontFamily: INRIA, fontWeight: 700, fontSize: 16, color: "#000", margin: "0 0 16px" }}>
            Let&apos;s work together
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            <a href="mailto:lucyrkates@gmail.com" className="v4-link" style={{ fontFamily: INRIA, fontSize: 13, letterSpacing: "0.04em" }}>Reach out</a>
            <a href="https://lucyrkates.github.io/lucy-resume/" className="v4-link" style={{ fontFamily: INRIA, fontSize: 13, letterSpacing: "0.04em" }}>Resume</a>
            <a href="https://www.linkedin.com/in/lucyrkates/" className="v4-link" style={{ fontFamily: INRIA, fontSize: 13, letterSpacing: "0.04em" }}>LinkedIn</a>
          </div>
        </footer>

      </main>
    </>
  );
}
