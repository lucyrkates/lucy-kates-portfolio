# Portfolio Inspiration

## Sites

### [Wireframe Design Studio](https://www.wireframe.co/about) — James McDonald
Independent designer's studio site (Glasgow, Scotland). Built with Next.js App Router + React Server Components, Turbopack, deployed on Vercel with ISR. CSS Modules for styling, self-hosted display font + Inter for body text.

**What I like — the "sticker collage" section on the About page:**
- **Physical/scrapbook feel**: photos (baby photo, dog photo, mirror selfie, arcade video) are each wrapped in "physical" frames — an oval ring + oval frame layered on top of the photo, like a scrapbook or corkboard rather than a clean image grid.
- **Hand-drawn accents**: SVG squiggle arrows, curves, and an asterisk scattered around the collage, plus handwritten-style year labels ("1995", "2001") layered over the photos like marker doodles.
- **Mixed media, not just static images**: a looping autoplay video (arcade clip) sits in a card alongside the photos, plus vinyl record illustrations with sleeve art, and small brand-logo "stickers" (Figma, Apple logos) pinned in among the photos.
- **Loose, not gridded, layout**: everything is absolutely positioned inside one canvas container with slight CSS rotations/offsets, so it reads as scattered stickers on a desk rather than aligned UI elements.

**Takeaway for my portfolio**: could do a similar "sticker board" moment — mix of photos in playful frames, hand-drawn SVG doodles, maybe a short looping video clip, and slight rotation/offset instead of a grid to keep it feeling personal and physical rather than templated.

---

### [nayli.ai](https://nayli.ai/#/) — Nayli Naza
Senior product designer (leads design @ Venn Apps, London). No framework — hand-rolled vanilla HTML/CSS/JS SPA (hash-based routing, single JS data file as the "CMS"), hosted as a static site on Vercel.

**What I like:**
- **Custom handwritten font for the greeting**: "Hi, I'm NaYli" uses a self-hosted custom typeface (`nayliSans1`, woff2/woff) described in their CSS as "traced from a napkin" — one hand-drawn accent font used sparingly against a single monospace (Geist Mono) for everything else. Gives the greeting a personal, signed feel against an otherwise very systematic type system.
- **The stickers**: same collage/scrapbook idea as Wireframe (photo + text "cards" scattered on a stage), but here the pieces are actually **draggable** — built with Pointer Events (`pointerdown`/`pointermove`/`pointerup`), so a visitor can pick up and rearrange the stickers themselves. Positions reset on reload/navigation since the DOM gets rebuilt from a `render()` function.
- **Animation within the stickers**: one "piece" is a muted, autoplay, looping video (mirror selfie clip) embedded right in the collage alongside the static photo/text cards — motion mixed into an otherwise still layout, same trick as Wireframe's arcade clip.
- **The sidebar**: a persistent left nav with a timeline of projects grouped by year, filter tabs (all / projects / work / play), and a custom scroll cursor — native scrollbars are hidden and replaced with a small pixel-art mark whose position is calculated from scroll progress in JS, flipping direction depending on whether you're scrolling up or down. Two independent scroll cursors — one for the nav panel, one for the page.

**Takeaway for my portfolio**: 
- Consider one custom/handwritten typeface used sparingly (just for a greeting or signature moment) against a clean system font for everything else, rather than multiple decorative fonts.
- Making sticker/collage pieces actually draggable (not just decorative) could make the About section feel more playful and interactive.
- A custom scroll indicator in the nav sidebar is a nice small detail that reinforces a considered, non-templated feel.

---

### [lfs.gd](https://www.lfs.gd/) — Matt Sellers
Multidisciplinary software designer at Bentley Systems. Built with **Framer** (no-code visual builder, not hand-coded) — animations come from Framer's built-in appear/hover system (Framer Motion under the hood), hosted on Framer's own infrastructure.

**What I like — the interactive project previews (from the docufai case study):**
- **A real, functional input, not a screenshot**: the project preview recreates the actual product UI (an "Ask your documents anything" AI search bar, with an app icon, a PDF attachment chip, and a sample Q&A) as a genuinely clickable/typeable text input embedded in the page — you can click in and type, it's not a static image or video loop.
- **Interaction changes the whole frame, not just the input**: typing into the field triggers a bigger visual shift — the card gains a colorful animated rainbow-gradient border/glow around its edges, and an expand icon (arrow-in-circle, bottom left) appears, as if the card is "waking up" in response to being used. Before: plain white card, quiet. After: colorful gradient bleed, more UI surfaced.
- **A second hover state — a shape-morph reveal**: a plain rounded square with a curled/folded corner (like a blank sticky note) sits at rest; on hover it morphs into a fully designed card — a document icon with a folded page corner, a download button, and a "Read.cv ↗" link — appearing against a soft pink gradient background. The "before" state deliberately gives no hint of what's inside, so the hover payoff is a surprise.
- **Overall feel**: very visual and playful rather than a static case-study screenshot — the previews behave like tiny working prototypes of the product itself, with generous color/gradient use as the "reward" for interacting.

**Takeaway for my portfolio**: 
- Instead of static screenshots for case studies, consider embedding a small *working* piece of the real UI (an actual input, toggle, or button) so visitors can interact with a product detail directly on the portfolio page.
- Use a deliberate "quiet before / colorful+expanded after" contrast on hover or interaction — understated at rest, a burst of color/gradient and extra content on interaction — to make engagement feel rewarding.
- A shape/content "morph" reveal (blank shape → fully designed card) is a nice way to add surprise to a hover state instead of a simple fade or scale.

---

### [sarahchieng.com/projects](https://sarahchieng.com/projects) — Sarah Chieng
Built with Framer (no custom code), same as lfs.gd.

**What I like — the layout and navigation, simple and clean:**
- **One typeface throughout**: everything runs on Inter (Regular + Display + Variable) — no secondary/decorative font, which does a lot of the work of feeling calm rather than "designed."
- **Persistent nav with responsive variants, not a rebuilt mobile menu**: a single `Menu` component with explicit `Desktop` / `Tablet` / `Mobile` breakpoint variants, each with `Default` and `Selected` states (so the current page, e.g. "Projects," gets a distinct highlighted state), plus a dedicated `Hamburger Menu` that swaps in at mobile widths. It's `position: fixed`, staying in place while the page scrolls.
- **Minimal nav items**: Home, Projects, Blog, Art, Resume, plus a small row of social icons (Dribbble, Instagram, X) — a flat list, no dropdowns/nesting.
- **Projects as a plain vertical list, not a grid**: a repeated `Post` component (Photo + Title + Date) stacked in `flex-direction: column`, one after another — closer to a simple blog/log list than a card grid. Consistent row height + generous vertical spacing, no overlapping or competing elements.
- **Minimal color**: essentially black/white/greyscale, so project photos are the only color on the page.
- **Almost no motion**: only one appear-animation on the whole page — the "clean" feeling comes from restraint (type, spacing, single-column list) rather than animation. Useful contrast to the other three sites here, which all lean on decoration/interactivity — this one's the "quiet" reference point.

**Takeaway for my portfolio**: 
- A fixed nav with clear "selected" states per page is a simple way to orient visitors without extra chrome.
- Consider a plain single-column list (photo + title + date) for a projects index instead of a grid — easier to scan, feels less "template."
- Restraint is itself a design choice: one typeface, near-black/white palette, minimal motion — worth having at least one section of my site this quiet to contrast the more playful/animated sections above.

---

## Notes for myself
- Keep to light/cream/white palette (not dark mode) for consistency with the rest of the site.
- Test any interactive/animated sections locally before shipping.
