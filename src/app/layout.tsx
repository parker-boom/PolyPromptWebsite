import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PolyPrompt",
  description:
    "A weekend-long hackathon at Cal Poly focused on creating impactful AI-driven projects. Feb 13–15, 2026. Open to all majors.",
  keywords: [
    "hackathon",
    "Cal Poly",
    "OpenAI",
    "AI",
    "coding",
    "Poly Prompt",
    "CS+AI",
    "CodeBox",
  ],
  authors: [{ name: "Poly Prompt Team" }],
  openGraph: {
    title: "PolyPrompt",
    description:
      "A weekend-long hackathon at Cal Poly focused on creating impactful AI-driven projects. Feb 13–15, 2026.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "PolyPrompt",
    description:
      "A weekend-long hackathon at Cal Poly focused on creating impactful AI-driven projects. Feb 13–15, 2026.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased bg-black">{children}</body>
    </html>
  );
}
