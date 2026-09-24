import { bio, jobs, links } from "../content";
import { ArrowDownIcon, ExternalLink } from "./Icons";
import { delay } from "./reveal";

export default function Hero() {
  return (
    <section className="view v2">
      <div className="grain" />
      <div className="frame">
        <h1 className="name reveal">Lucy Kates</h1>
        <div className="cards">
          <div className="card card-main reveal" style={delay(120)}>
            <p className="eyebrow reveal" style={delay(320)}>
              Overview
            </p>
            <div className="bio bio-multi">
              {bio.map((paragraph, i) => (
                <p className="reveal" style={delay(400 + i * 70)} key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="links reveal" style={delay(400 + bio.length * 70 + 40)}>
              <a className="btn" href="#work">
                View work sample <ArrowDownIcon />
              </a>
              <ExternalLink className="link" href={links.resume}>
                Resume
              </ExternalLink>
            </div>
          </div>
          <div className="card card-side reveal" style={delay(200)}>
            <p className="eyebrow reveal" style={delay(400)}>
              Experience
            </p>
            {jobs.map((job, i) => (
              <div className="job reveal" style={delay(480 + i * 80)} key={job.company}>
                <div className="job-head">
                  <span className="job-title">{job.company}</span>
                  <span className="job-date">{job.dates}</span>
                </div>
                <p className="job-desc">{job.roles.join(" · ")}</p>
              </div>
            ))}
            <div className="exp-more reveal" style={delay(480 + jobs.length * 80 + 40)}>
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
