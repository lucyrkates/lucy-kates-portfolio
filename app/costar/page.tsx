import type { Metadata } from "next";
import { costarBio } from "../content";
import Hero from "../components/Hero";
import WorkOverview from "../components/WorkOverview";

// Tailored for the Co–Star Senior Product Designer application.
// Kept out of search results; share the link directly.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function CoStar() {
  return (
    <>
      <Hero bio={costarBio} />
      <WorkOverview />
    </>
  );
}
