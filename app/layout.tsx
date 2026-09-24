import type { Metadata } from "next";
import { Cabin, IBM_Plex_Mono } from "next/font/google";
import EntranceGate from "./components/EntranceGate";
import "./globals.css";

const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Lucy Kates",
  description: "Lucy Kates — product designer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cabin.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <noscript>
          <style>{`.reveal{animation-play-state:running}`}</style>
        </noscript>
        {children}
        <EntranceGate />
      </body>
    </html>
  );
}
