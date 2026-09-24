import { bio, jobs, links } from "../content";
import { ArrowDownIcon, ExternalLink } from "./Icons";

export default function Hero() {
  return (
    <section className="view v2">
      <div className="grain" />
      <div className="frame">
        <h1 className="name">Lucy Kates</h1>
        <div className="cards">
          <div className="card card-main">
            <p className="eyebrow">Overview</p>
            <div className="bio bio-multi">
              {bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="links">
              <a className="btn" href="#work">
                View work sample <ArrowDownIcon />
              </a>
              <ExternalLink className="link" href={links.resume}>
                Resume
              </ExternalLink>
            </div>
          </div>
          <div className="card card-side">
            <p className="eyebrow">Experience</p>
            {jobs.map((job) => (
              <div className="job" key={job.company}>
                <div className="job-head">
                  <span className="job-title">{job.company}</span>
                  <span className="job-date">{job.dates}</span>
                </div>
                <p className="job-desc">{job.roles.join(" · ")}</p>
              </div>
            ))}
            <ExternalLink className="link exp-more" href={links.linkedin}>
              View more on Linkedin
            </ExternalLink>
          </div>
        </div>
      </div>
    </section>
  );
}
