import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anurag Mishra — Work, Research & Notes",
  description:
    "A personal portfolio documenting Anurag Mishra’s work in mechanical design, Tirare, MRII, F1 in Schools, robotics, research and writing — including the stories and decisions behind the work.",
  applicationName: "Anurag Mishra Portfolio",
  openGraph: {
    title: "Anurag Mishra — Work, Research & Notes",
    description:
      "Projects, research, and the stories behind the work. A record of what was built, what changed, and what still needs proving.",
    type: "website",
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#19251e",
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
