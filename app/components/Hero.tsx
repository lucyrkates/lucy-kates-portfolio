import { bio, jobs, links } from "../content";
import { ArrowDownIcon, ExternalLink } from "./Icons";
import { delay } from "./reveal";

export default function Hero() {
  return (
    <section className="view v2">
      <div className="grain reveal" style={delay(250)} />
      <div className="frame">
        <h1 className="name reveal" style={delay(0)}>Lucy Kates</h1>
        <div className="cards">
          <div className="card card-main reveal" style={delay(450)}>
            <p className="eyebrow reveal" style={delay(700)}>
              Overview
            </p>
            <div className="bio bio-multi">
              {bio.map((paragraph, i) => (
                <p className="reveal" style={delay(760 + i * 60)} key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="links reveal" style={delay(760 + bio.length * 60)}>
              <a className="btn" href="#work">
                View work sample <ArrowDownIcon />
              </a>
              <ExternalLink className="link" href={links.resume}>
                Resume
              </ExternalLink>
            </div>
          </div>
          <div className="card card-side reveal" style={delay(520)}>
            <p className="eyebrow reveal" style={delay(740)}>
              Experience
            </p>
            {jobs.map((job, i) => (
              <div className="job reveal" style={delay(800 + i * 60)} key={job.company}>
                <div className="job-head">
                  <span className="job-title">{job.company}</span>
                  <span className="job-date">{job.dates}</span>
                </div>
                <p className="job-desc">{job.roles.join(" · ")}</p>
              </div>
            ))}
            <div className="exp-more reveal" style={delay(800 + jobs.length * 60)}>
              <ExternalLink className="link" href={links.linkedin}>
                View more on Linkedin
              </ExternalLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
