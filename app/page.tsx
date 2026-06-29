import { redirect } from "next/navigation";

export default function Home() {
  redirect("/v6");
}

function _OldHome() {
  return (
    <>
      <style>{`
        @keyframes v2in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes v2rule { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .v2a { animation: v2in 0.7s ease both; }
        .v2b { animation: v2in 0.7s ease 0.18s both; }
        .v2c { animation: v2in 0.7s ease 0.34s both; }
        .v2-rule { animation: v2rule 0.6s cubic-bezier(0.22,1,0.36,1) 0.12s both; transform-origin: left; }
        .v2-row:hover h2   { color: #0047FF; }
        .v2-row:hover .v2-num { color: #0047FF; opacity: 1 !important; }
        .v2-row:hover .v2-arr { transform: translateX(4px); color: #0047FF; }
        .v2-row h2, .v2-row .v2-num, .v2-row .v2-arr { transition: color 0.15s, transform 0.2s; }
        .v2-arr { display: inline-block; }
        a.v2-plain { text-decoration: none; color: inherit; display: block; }
        a.v2-dim { text-decoration: none; color: inherit; opacity: 0.4; transition: opacity 0.15s; }
        a.v2-dim:hover { opacity: 0.75; }
      `}</style>

      <main style={{
        minHeight: "100vh",
        background: "#FFFFFF",
        color: "#0A0A0A",
        fontFamily: "var(--font-inclusive-sans), sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 32px",
      }}>
        <div style={{ width: "100%", maxWidth: "600px" }}>

          {/* Name */}
          <div className="v2a" style={{ marginBottom: "24px" }}>
            <h1 style={{
              fontFamily: "var(--font-cabin), sans-serif",
              fontSize: "clamp(62px, 13vw, 92px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 0.88,
              color: "#0A0A0A",
            }}>
              Lucy<br />Kates
            </h1>
          </div>

          {/* Rule */}
          <div className="v2-rule" style={{
            width: "100%",
            height: "1px",
            background: "#0A0A0A",
            marginBottom: "28px",
          }} />

          {/* Role + bio */}
          <div className="v2b" style={{ marginBottom: "52px" }}>
            <p style={{
              fontFamily: "var(--font-cabin), sans-serif",
              fontWeight: 700,
              fontSize: "9.5px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              opacity: 0.35,
              marginBottom: "16px",
            }}>
              Senior Product Designer
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.72, opacity: 0.58 }}>
              Senior Product Designer with 6+ years across enterprise and consumer platforms.
              Currently leading design for credibility features on the LinkedIn profile, with past
              experience in enterprise SaaS and AI products. Brings systems thinking to ambiguous
              problems and cares deeply about equitable, human-centered design.
            </p>
          </div>

          {/* Work */}
          <div className="v2c">
            <div style={{
              paddingBottom: "12px",
              borderBottom: "1px solid rgba(10,10,10,0.08)",
            }}>
              <span style={{ fontFamily: "var(--font-cabin), sans-serif", fontWeight: 700, fontSize: "9px", letterSpacing: "0.26em", textTransform: "uppercase", opacity: 0.32 }}>
                Work
              </span>
            </div>

            <Link href="/relationship-map" className="v2-plain v2-row">
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "22px 0",
                borderBottom: "1px solid rgba(10,10,10,0.08)",
              }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "22px" }}>
                  <span className="v2-num" style={{ fontFamily: "var(--font-cabin), sans-serif", fontSize: "10px", fontWeight: 700, opacity: 0.22, letterSpacing: "0.06em" }}>
                    01
                  </span>
                  <div>
                    <h2 style={{ fontFamily: "var(--font-cabin), sans-serif", fontSize: "19px", fontWeight: 700, letterSpacing: "-0.01em", marginBottom: "3px" }}>
                      Relationship Map
                    </h2>
                    <p style={{ fontSize: "12px", opacity: 0.42 }}>LinkedIn Sales Navigator · 2022</p>
                  </div>
                </div>
                <span className="v2-arr" style={{ fontSize: "16px", color: "#0047FF", opacity: 0.65 }}>→</span>
              </div>
            </Link>

            {/* Links */}
            <div style={{ marginTop: "38px", display: "flex", gap: "20px" }}>
              <a href="mailto:lucyrkates@gmail.com" className="v2-dim" style={{ fontSize: "12px", letterSpacing: "0.04em" }}>Reach out</a>
              <a href="https://lucyrkates.github.io/lucy-resume/" className="v2-dim" style={{ fontSize: "12px", letterSpacing: "0.04em" }}>Resume</a>
              <a href="https://www.linkedin.com/in/lucyrkates/" className="v2-dim" style={{ fontSize: "12px", letterSpacing: "0.04em" }}>LinkedIn</a>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
