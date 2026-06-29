import type { Metadata } from "next";
import { Cabin, Inclusive_Sans, Inria_Sans } from "next/font/google";
import "./globals.css";

const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inclusiveSans = Inclusive_Sans({
  variable: "--font-inclusive-sans",
  weight: "400",
  subsets: ["latin"],
});

const inriaSans = Inria_Sans({
  variable: "--font-inria-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Lucy Kates — Product Designer",
  description: "Senior Product Designer with 6+ years across enterprise and consumer platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cabin.variable} ${inclusiveSans.variable} ${inriaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
