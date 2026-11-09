import type { Metadata, Viewport } from "next";
import "./globals.css";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Anurag Mishra — Founder, Tirare | Mechanical Design & Research",
  description:
    "Personal portfolio of Anurag Mishra: founder of Tirare and developer of MRII, a mechanical rider-intent interface for cargo-tricycle electric retrofits. Mechanical design, research, robotics, competitions and independent work.",
  applicationName: "Anurag Mishra Portfolio",
  openGraph: {
    title: "Anurag Mishra — Founder, Tirare | Mechanical Design & Research",
    description:
      "The work of Anurag Mishra: Tirare mobility, MRII mechanical interface research, design development, robotics, competitions and independent initiatives.",
    type: "website",
  },
  icons: { icon: `${publicBasePath}/favicon.svg` },
};

export const viewport: Viewport = {
  themeColor: "#171a17",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
