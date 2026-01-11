import type { Metadata, Viewport } from "next";
import "./globals.css";

const SHARE_TITLE = "Poly Prompt - Apply today";
const SHARE_DESCRIPTION =
  "A weekend hackathon at Cal Poly for building real AI products. Feb 20—22nd, 2026. Open to all majors.";

export const metadata: Metadata = {
  title: SHARE_TITLE,
  description: SHARE_DESCRIPTION,
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
    title: SHARE_TITLE,
    description: SHARE_DESCRIPTION,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Poly Prompt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SHARE_TITLE,
    description: SHARE_DESCRIPTION,
    images: ["/og.png"],
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
