import type { CSSProperties } from "react";

// Start time for a .reveal element's entrance animation.
export const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;
