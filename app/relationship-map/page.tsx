import Link from "next/link";

const label: React.CSSProperties = {
  fontFamily: "var(--font-cabin), sans-serif",
  fontWeight: 700,
  fontSize: "9px",
  letterSpacing: "0.26em",
  textTransform: "uppercase",
  opacity: 0.32,
  color: "#0A0A0A",
  display: "block",
  marginBottom: "20px",
};

const rule: React.CSSProperties = {
  width: "100%",
  height: "1px",
  background: "rgba(10,10,10,0.08)",
  border: "none",
  margin: "0 0 20px 0",
};

const h2Style: React.CSSProperties = {
  fontFamily: "var(--font-cabin), sans-serif",
  fontWeight: 700,
  fontSize: "22px",
  letterSpacing: "-0.01em",
  lineHeight: 1.25,
  color: "#0A0A0A",
  marginBottom: "16px",
};

const body: React.CSSProperties = {
  fontFamily: "var(--font-inclusive-sans), sans-serif",
  fontSize: "15px",
  lineHeight: 1.72,
  color: "#0A0A0A",
  opacity: 0.58,
};

function EmbedPlaceholder() {
  return (
    <div style={{
      marginTop: "24px",
      background: "rgba(10,10,10,0.03)",
      borderRadius: "8px",
      height: "220px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <span style={{ ...label, marginBottom: 0, opacity: 0.2 }}>Interactive embed coming soon</span>
    </div>
  );
}

function RelationshipSketch() {
  return (
    <div style={{
      background: "#FFFFFF",
      borderRadius: "12px",
      border: "1px solid rgba(10,10,10,0.06)",
      overflow: "hidden",
      marginTop: "28px",
      marginBottom: "28px",
    }}>
      <svg viewBox="0 0 624 300" style={{ width: "100%", display: "block" }} xmlns="http://www.w3.org/2000/svg">
        <line x1="188" y1="100" x2="110" y2="182" stroke="black" strokeWidth="1.5" strokeOpacity="0.18" />
        <line x1="188" y1="100" x2="262" y2="182" stroke="black" strokeWidth="1.5" strokeOpacity="0.18" />
        <line x1="188" y1="100" x2="490" y2="182" stroke="black" strokeWidth="1.5" strokeOpacity="0.18" />
        <polygon points="107,179 113,179 110,187" fill="rgba(0,0,0,0.18)" />
        <polygon points="259,179 265,179 262,187" fill="rgba(0,0,0,0.18)" />
        <polygon points="487,179 493,179 490,187" fill="rgba(0,0,0,0.18)" />
        <circle cx="188" cy="62" r="37" fill="rgba(0,0,0,0.1)" />
        <text x="188" y="114" textAnchor="middle" fontSize="12" fill="#666" fontFamily="system-ui, sans-serif">VP of Product</text>
        <text x="256" y="58" fontSize="13" fill="#aaa" fontFamily="Georgia, serif" fontStyle="italic">Who is the VP of product??</text>
        <circle cx="110" cy="205" r="33" fill="#D4E8DC" />
        <text x="110" y="249" textAnchor="middle" fontSize="10" fill="#333" fontFamily="system-ui, sans-serif">Janice Fitzpatrick</text>
        <text x="110" y="262" textAnchor="middle" fontSize="9" fill="#888" fontFamily="system-ui, sans-serif">Sr. Director of Product</text>
        <circle cx="262" cy="205" r="33" fill="#DDD0E8" />
        <text x="262" y="249" textAnchor="middle" fontSize="10" fill="#333" fontFamily="system-ui, sans-serif">Samson Smith</text>
        <text x="262" y="262" textAnchor="middle" fontSize="9" fill="#888" fontFamily="system-ui, sans-serif">Director of Product</text>
        <circle cx="490" cy="205" r="33" fill="#D0DCE8" />
        <text x="490" y="249" textAnchor="middle" fontSize="10" fill="#333" fontFamily="system-ui, sans-serif">Leo Schwartz</text>
        <text x="490" y="262" textAnchor="middle" fontSize="9" fill="#888" fontFamily="system-ui, sans-serif">VP of operations</text>
        <text x="318" y="243" fontSize="13" fill="#aaa" fontFamily="Georgia, serif" fontStyle="italic">influences?</text>
      </svg>
    </div>
  );
}

function WorkflowCards() {
  return (
    <div style={{
      display: "flex",
      gap: "12px",
      overflowX: "auto",
      marginTop: "28px",
      marginLeft: "-32px",
      marginRight: "-32px",
      paddingLeft: "32px",
      paddingRight: "32px",
      paddingBottom: "8px",
    }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/work/rm/card-1.png" alt="Identify the buyers" style={{ flexShrink: 0, height: "260px", width: "auto", borderRadius: "10px" }} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/work/rm/card-2.png" alt="Create CRM records" style={{ flexShrink: 0, height: "260px", width: "auto", borderRadius: "10px" }} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/work/rm/card-3.png" alt="Visualize the relationships" style={{ flexShrink: 0, height: "260px", width: "auto", borderRadius: "10px" }} />
    </div>
  );
}

export default function RelationshipMap() {
  return (
    <>
      <style>{`
        @keyframes rmfade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes rmrule { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .rm-a { animation: rmfade 0.6s ease both; }
        .rm-b { animation: rmfade 0.6s ease 0.1s both; }
        .rm-c { animation: rmfade 0.6s ease 0.2s both; }
        .rm-rule { animation: rmrule 0.55s cubic-bezier(0.22,1,0.36,1) 0.08s both; transform-origin: left; }
        .rm-challenge:not(:last-child) { margin-bottom: 44px; padding-bottom: 44px; border-bottom: 1px solid rgba(10,10,10,0.06); }
        .rm-back { text-decoration: none; font-size: 12px; opacity: 0.38; color: #0A0A0A; transition: opacity 0.15s; letter-spacing: 0.04em; font-family: var(--font-inclusive-sans); }
        .rm-back:hover { opacity: 0.7; }
      `}</style>

      <main style={{
        minHeight: "100vh",
        background: "#FFFFFF",
        color: "#0A0A0A",
        fontFamily: "var(--font-inclusive-sans), sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "52px 32px 96px",
      }}>
        <div style={{ width: "100%", maxWidth: "600px" }}>

          {/* Back */}
          <div className="rm-a" style={{ marginBottom: "48px" }}>
            <Link href="/" className="rm-back">← Back</Link>
          </div>

          {/* Title */}
          <div className="rm-b" style={{ marginBottom: "22px" }}>
            <h1 style={{
              fontFamily: "var(--font-cabin), sans-serif",
              fontSize: "clamp(48px, 10vw, 64px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 0.92,
              color: "#0A0A0A",
              marginBottom: "22px",
            }}>
              Relationship Map
            </h1>
            <div className="rm-rule" style={{ width: "100%", height: "1px", background: "#0A0A0A", transformOrigin: "left" }} />
          </div>

          {/* Meta row */}
          <div className="rm-c" style={{ marginBottom: "32px" }}>
            <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", alignItems: "baseline", paddingTop: "4px" }}>
              <span style={{ fontSize: "12px", opacity: 0.42 }}>LinkedIn Sales Navigator · 2022–2023</span>
              <span style={{ fontSize: "12px", opacity: 0.25 }}>·</span>
              <span style={{ fontSize: "12px", opacity: 0.42 }}>Interaction design · 0-1 launch · Accessibility</span>
            </div>
          </div>

          {/* Overview */}
          <div className="rm-c" style={{ marginBottom: "64px" }}>
            <p style={{ ...body, opacity: 0.58 }}>
              I led the design of the Relationship Map, a 0 to 1 feature enabling sales people to
              map out relationships at a company. The relationship map is an interactive org charting
              product within Sales Navigator. It enables sellers to map out the buying committee and
              stay informed on key changes happening at the companies they care about.
            </p>
          </div>

          {/* Teammates */}
          <div style={{ marginBottom: "72px" }}>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", alignItems: "center" }}>
              {[
                { name: "Guillaume Dufor", role: "Product", color: "#DDD0E8" },
                { name: "Garris Shipon", role: "Engineering", color: "#D0DCE8" },
                { name: "Erin Sumpmann", role: "Product marketing", color: "#D4E8DC" },
              ].map((p) => (
                <div key={p.name} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ width: "26px", height: "26px", borderRadius: "50%", backgroundColor: p.color, flexShrink: 0 }} />
                  <div>
                    <p style={{ fontSize: "12px", lineHeight: 1.3, opacity: 0.7 }}>{p.name}</p>
                    <p style={{ fontSize: "10px", opacity: 0.38 }}>{p.role}</p>
                  </div>
                </div>
              ))}
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <div style={{ display: "flex" }}>
                  {["#F4A4A4", "#F4D4A4", "#A4C4F4"].map((c, i) => (
                    <div key={i} style={{ width: "26px", height: "26px", borderRadius: "50%", backgroundColor: c, border: "2px solid #fff", marginLeft: i > 0 ? "-6px" : "0" }} />
                  ))}
                </div>
                <span style={{ fontSize: "10px", opacity: 0.35 }}>+many more</span>
              </div>
            </div>
          </div>

          {/* ── Context ── */}
          <section style={{ marginBottom: "64px" }}>
            <hr style={rule} />
            <span style={label}>Context</span>
            <h2 style={h2Style}>Sellers need to know their buyers</h2>
            <p style={body}>
              When selling to a business, you're rarely just convincing one person — you need to
              figure out who all the key players are, build relationships with each of them, and
              keep up with any changes (like someone leaving or getting promoted) as the deal
              progresses.
            </p>
            <RelationshipSketch />
            <h2 style={{ ...h2Style, marginTop: "8px" }}>
              The problem: it's time consuming to know who is in which role at a company.
            </h2>
            <p style={body}>
              First, sales reps need to identify stakeholders on LinkedIn, then manually create a
              record for each in a separate tool (Excel, CRM...), and then visualize those
              relationships in PowerPoint, Lucid chart, or another tool entirely.
            </p>
            <WorkflowCards />
          </section>

          {/* ── The Goal ── */}
          <section style={{ marginBottom: "64px" }}>
            <hr style={rule} />
            <span style={label}>The Goal</span>
            <h2 style={h2Style}>
              Design an interactive org chart to help sellers identify who is who at an account
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                "Identify the decision makers, influencers, and champions at this account",
                "Manage relationships and build trust with the right people",
                "Stay informed throughout the sales cycle so I know how to act",
              ].map((item) => (
                <li key={item} style={{ display: "flex", gap: "16px", ...body }}>
                  <span style={{ opacity: 0.25, flexShrink: 0 }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* ── Research ── */}
          <section style={{ marginBottom: "64px" }}>
            <hr style={rule} />
            <span style={label}>Research</span>
            <h2 style={h2Style}>Different views for different use cases</h2>
            <p style={body}>
              We ran 2 rounds of research testing the relationship map. People preferred a list view
              for staying informed and the map view for mapping relationships. Key learning: this is a
              new interaction pattern and we needed to make it obvious how to create relationships.
            </p>
          </section>

          {/* ── Design Challenges ── */}
          <section style={{ marginBottom: "64px" }}>
            <hr style={rule} />
            <span style={label}>Design Challenges</span>
            <h2 style={{ ...h2Style, marginBottom: "40px" }}>Four problems that shaped the design</h2>

            <div>
              {[
                {
                  n: "01",
                  heading: "How to form relationships through a visual org chart?",
                  body: "There was no existing design to build from, so I started by exploring the full space of possibilities — freeform canvas layouts, list-based structures, and grid-based systems. I landed on a grid-based drag-and-drop model because snapping to a grid made the interaction feel predictable and forgiving. Users always knew where something would land, which reduced cognitive load and made hierarchy readable at a glance rather than approximate.",
                  embed: true,
                },
                {
                  n: "02",
                  heading: "Drag and drop",
                  body: "This was the hardest problem on the project. Drag-and-drop sounds simple until you're designing every state: How do you move someone from one branch to another? How do you reorder within the same level? How do people create hierarchies — and undo mistakes? I designed for all of these states, including empty states, hover states, drop targets, and error handling, each with its own logic and visual treatment.\n\nOne unique takeaway: the weight of the card played a role in how valuable it seemed. Cards that dragged very easily seemed lighter, and cards with a bit of delay felt more substantial.",
                  embed: true,
                },
                {
                  n: "03",
                  heading: "Low usability on small screens",
                  body: "The cards are big. On smaller screens, you can only see a couple at once. I brainstormed several approaches: collapsing the quick-add sidebar, expanding to full screen, zooming in and out, and simplifying the lead card UI. I mapped the trade-offs around what the most important pieces of information actually were.",
                  embed: true,
                },
                {
                  n: "04",
                  heading: "Designing a two-view system from a single source of truth",
                  body: "Relationship Map has two distinct views: a map view — the interactive, visual org chart — and a list view where sellers track and manage accounts. Both pull from the same underlying data, but serve different mental modes: map view for understanding relationships spatially, list view for scanning and managing efficiently.\n\nThe challenge was that list view could surface all available data fields, while map view was constrained to individual person cards. This forced deliberate decisions about information hierarchy — what a seller absolutely needs at a glance in the map, versus what can live in the list.",
                  embed: false,
                },
              ].map((item) => (
                <div key={item.n} className="rm-challenge">
                  <div style={{ display: "flex", gap: "20px", alignItems: "baseline", marginBottom: "10px" }}>
                    <span style={{ fontFamily: "var(--font-cabin), sans-serif", fontWeight: 700, fontSize: "10px", opacity: 0.22, letterSpacing: "0.06em", flexShrink: 0 }}>
                      {item.n}
                    </span>
                    <h3 style={{
                      fontFamily: "var(--font-cabin), sans-serif",
                      fontWeight: 700,
                      fontSize: "17px",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.3,
                      color: "#0A0A0A",
                    }}>
                      {item.heading}
                    </h3>
                  </div>
                  <div style={{ paddingLeft: "30px" }}>
                    {item.body.split("\n\n").map((para, i) => (
                      <p key={i} style={{ ...body, marginBottom: i < item.body.split("\n\n").length - 1 ? "14px" : "0" }}>{para}</p>
                    ))}
                    {item.embed && <EmbedPlaceholder />}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Final Solution ── */}
          <section style={{ marginBottom: "64px" }}>
            <hr style={rule} />
            <span style={label}>Final Solution</span>
            <h2 style={h2Style}>The shipped product</h2>
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, borderRadius: "10px", overflow: "hidden", background: "rgba(10,10,10,0.03)" }}>
              <iframe
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                src="https://www.youtube.com/embed/bfbSrFLxbnk"
                title="Relationship Map"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </section>

          {/* ── Impact ── */}
          <section>
            <hr style={rule} />
            <span style={label}>Impact</span>
            <h2 style={h2Style}>
              One of the most anticipated Sales Navigator releases of the year
            </h2>
            <p style={{ ...body, marginBottom: "32px" }}>
              Relationship Map launched in November 2023 after a beta with real customers. The beta
              ran April through September 2023, giving the team time to incorporate learnings from
              real users before the GA launch.
            </p>
            <blockquote style={{
              margin: 0,
              paddingLeft: "20px",
              borderLeft: "2px solid #0047FF",
              fontStyle: "italic",
              fontSize: "17px",
              lineHeight: 1.65,
              color: "#0A0A0A",
              opacity: 0.72,
            }}>
              "A real replacement for our spreadsheets — not just a nicer version of what existed,
              but something that finally fit how we actually worked."
            </blockquote>
          </section>

        </div>
      </main>
    </>
  );
}
