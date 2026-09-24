import { links } from "../content";
import { ExternalLink } from "./Icons";

export default function WorkOverview() {
  return (
    <section className="work" id="work">
      <div className="work-inner">
        <div className="work-head">
          <h2>Work overview</h2>
          <ExternalLink className="figma-link" href={links.workFigma}>
            Open in Figma
          </ExternalLink>
        </div>
        <div className="embed">
          <iframe
            title="Lucy Kates — Work Overview prototype"
            src={links.workEmbed}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
