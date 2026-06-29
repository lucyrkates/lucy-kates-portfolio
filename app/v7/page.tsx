import Link from 'next/link';

export default function V7() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Chango&family=Cutive+Mono&family=Caveat&display=swap');

        .v7-body { background: #fafaf6; min-height: 100vh; }

        .v7 .container {
          max-width: 1024px;
          margin: 0 auto;
          padding: 100px 24px 80px;
          display: flex;
          flex-direction: column;
          gap: 40px;
          container-type: inline-size;
        }

        .v7 .date {
          font-family: 'Caveat', cursive;
          font-size: 14px;
          letter-spacing: -0.24px;
          text-align: right;
          margin-bottom: -16px;
        }

        .v7 .name-row {
          display: flex;
          align-items: center;
          width: 100%;
          font-size: min(92px, 11.5cqi);
        }

        .v7 .lu-group {
          flex: 1 0 0;
          min-width: 0;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          justify-content: flex-start;
          padding-top: 0.087em;
        }

        .v7 .u-row {
          display: flex;
          align-items: flex-end;
          width: 100%;
          padding-left: 0.5em;
          margin-bottom: -0.4325em;
        }

        .v7 .u-cap-left  { width: 0.2897em; height: 0.4325em; flex-shrink: 0; display: block; }
        .v7 .u-cap-right { width: 0.2897em; height: 0.4325em; display: block; }
        .v7 .u-cap-right-wrap { flex-shrink: 0; transform: scaleY(-1) rotate(180deg); }

        .v7 .l-row {
          display: flex;
          align-items: flex-end;
          width: 100%;
        }

        .v7 .l-cap-left  { width: 0.4878em; height: 0.7040em; flex-shrink: 0; display: block; }
        .v7 .l-cap-right { width: 0.2513em; height: 0.1755em; flex-shrink: 0; display: block; }

        .v7 .te-group {
          flex: 1 0 0;
          min-width: 0;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          justify-content: flex-start;
          padding-top: 0.087em;
        }

        .v7 .t-row {
          display: flex;
          align-items: flex-start;
          width: 100%;
          margin-bottom: -0.4473em;
        }

        .v7 .t-cap-left  { width: 0.6399em; height: 0.7040em; flex-shrink: 0; display: block; }
        .v7 .t-cap-right { width: 0.0738em; height: 0.1830em; flex-shrink: 0; display: block; }

        .v7 .e-row {
          display: flex;
          align-items: center;
          width: 100%;
          padding-left: 0.6710em;
        }

        .v7 .e-cap-left  { width: 0.3112em; height: 0.4473em; flex-shrink: 0; display: block; }
        .v7 .e-cap-right { width: 0.1112em; height: 0.4473em; flex-shrink: 0; display: block; }

        .v7 .stretch {
          flex: 1 0 0;
          min-width: 1px;
          position: relative;
        }
        .v7 .stretch img {
          position: absolute;
          top: 0; right: 0; bottom: 0; left: 0;
          width: 100%;
          height: 100%;
          max-width: none;
          display: block;
        }
        .v7 .u-stretch { height: 0.1463em; }
        .v7 .l-stretch { height: 0.1759em; }
        .v7 .t-stretch { height: 0.1834em; }
        .v7 .e-stretch { height: 0.4473em; }

        .v7 .letter {
          font-family: 'Chango', cursive;
          font-size: 1em;
          color: #0b4a52;
          line-height: 1;
          white-space: nowrap;
          flex-shrink: 0;
          display: block;
        }

        .v7 .name-space {
          width: 0.348em;
          flex-shrink: 0;
        }

        .v7 .tagline {
          font-family: 'Chango', cursive;
          font-size: min(40px, 5cqi);
          color: transparent;
          -webkit-text-stroke: 1.5px #0b4a52;
          text-transform: uppercase;
          line-height: 1.05;
          margin-top: 4px;
        }

        .v7 .tagline-line2 {
          display: flex;
          align-items: flex-end;
          gap: 0.6em;
        }

        .v7 .content-row {
          display: flex;
          gap: 24px;
          align-items: flex-start;
        }

        .v7 .content-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .v7 .bio {
          font-family: 'Cutive Mono', monospace;
          font-size: 18px;
          line-height: 1.6;
          letter-spacing: -0.4px;
          color: #000;
        }

        .v7 .photo-card {
          border: 3px solid #acc4df;
          border-radius: 8px;
          padding: 12px;
          width: 200px;
          height: 256px;
          flex-shrink: 0;
        }
        .v7 .photo-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 4px;
          display: block;
        }

        @media (max-width: 600px) {
          .v7 .content-row { flex-direction: column-reverse; }
          .v7 .photo-card { width: 100%; height: auto; aspect-ratio: 3 / 4; }
        }

        .v7 .divider {
          width: 100%;
          height: 20px;
          background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='20'><path d='M0 10 C7 3 13 3 20 10 C27 17 33 17 40 10' stroke='%23F47A3A' stroke-width='2.5' fill='none' stroke-linecap='round'/></svg>");
          background-repeat: repeat-x;
          background-position: 0 0;
        }

        .v7 .projects-label {
          font-family: 'Caveat', cursive;
          font-size: 20px;
          letter-spacing: -0.4px;
          text-transform: uppercase;
          margin-bottom: 11px;
        }

        .v7 .projects-grid { display: flex; gap: 20px; }
        .v7 .project-card { flex: 1; }

        .v7 .project-thumb {
          height: 168px;
          border: 1px solid #000;
          border-radius: 24px;
          margin-bottom: 9px;
        }

        .v7 .project-name {
          font-family: 'Cutive Mono', monospace;
          font-size: 14px;
          letter-spacing: -0.28px;
        }

        .v7-nav {
          position: fixed;
          top: 20px;
          right: 24px;
          z-index: 20;
          display: flex;
          gap: 18px;
          font-family: 'Caveat', cursive;
        }
        .v7-nav a {
          font-size: 15px;
          color: #1a1a1a;
          text-decoration: none;
          opacity: 0.32;
          transition: opacity 0.15s;
        }
        .v7-nav a:hover { opacity: 0.75; }
        .v7-nav a.active { opacity: 0.85; font-weight: 700; text-decoration: underline; text-underline-offset: 4px; }
      `}</style>

      <nav className="v7-nav">
        <Link href="/v2">Basic</Link>
        <Link href="/v6">Journal</Link>
        <Link href="/v7" className="active">Playful</Link>
        <Link href="/v4">V4</Link>
      </nav>

      <div className="v7-body v7">
        <div className="container">
          <p className="date">Friday, June 12th</p>

          {/* NAME */}
          <div className="name-row" aria-label="Lucy Kates">

            {/* LU group */}
            <div className="lu-group">
              <div className="u-row">
                <img className="u-cap-left" src="/images/letters/u-cap-left.svg" alt="" />
                <div className="stretch u-stretch"><img src="/images/letters/u-stretch.svg" alt="" /></div>
                <div className="u-cap-right-wrap">
                  <img className="u-cap-right" src="/images/letters/u-cap-right.svg" alt="" />
                </div>
              </div>
              <div className="l-row">
                <img className="l-cap-left" src="/images/letters/l-cap-left.svg" alt="" />
                <div className="stretch l-stretch"><img src="/images/letters/l-stretch.svg" alt="" /></div>
                <img className="l-cap-right" src="/images/letters/l-cap-right.svg" alt="" />
              </div>
            </div>

            <span className="letter">C</span>
            <span className="letter">Y</span>
            <span className="name-space" />
            <span className="letter">K</span>
            <span className="letter">A</span>

            {/* TE group */}
            <div className="te-group">
              <div className="t-row">
                <img className="t-cap-left" src="/images/letters/t-cap-left.svg" alt="" />
                <div className="stretch t-stretch"><img src="/images/letters/t-stretch.svg" alt="" /></div>
                <img className="t-cap-right" src="/images/letters/t-cap-right.svg" alt="" />
              </div>
              <div className="e-row">
                <img className="e-cap-left" src="/images/letters/e-cap-left.svg" alt="" />
                <div className="stretch e-stretch"><img src="/images/letters/e-stretch.svg" alt="" /></div>
                <img className="e-cap-right" src="/images/letters/e-cap-right.svg" alt="" />
              </div>
            </div>

            <span className="letter">S</span>
          </div>

          {/* CONTENT ROW: tagline + bio (left) · photo (right) */}
          <div className="content-row">
            <div className="content-left">
              <div className="tagline">
                <div>PRODUCT DESIGNER BASED</div>
                <div className="tagline-line2">
                  <span style={{ whiteSpace: 'nowrap' }}>IN</span>
                  <span style={{ whiteSpace: 'nowrap' }}>BERKELEY</span>
                </div>
              </div>
              <p className="bio">6+ years across enterprise and consumer platforms. Currently leading design for credibility features on the LinkedIn profile, with past experience in enterprise SaaS and AI products. Brings systems thinking to ambiguous problems and cares deeply about equitable, human-centered design.</p>
            </div>
            <div className="photo-card">
              <img src="/images/lucy.jpg" alt="Lucy Kates" />
            </div>
          </div>

          {/* DIVIDER */}
          <div className="divider" />

          {/* PROJECTS */}
          <div>
            <p className="projects-label">Projects</p>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-thumb" />
                <p className="project-name">Relationship map</p>
              </div>
              <div className="project-card">
                <div className="project-thumb" />
                <p className="project-name">Project Aura</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
