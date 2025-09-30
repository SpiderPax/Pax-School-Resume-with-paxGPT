import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pax Parker Portfolio",
  description:
    "Portfolio website for Paxton Parker, a talented middle school student applying to competitive coding high schools. Showcasing academics, leadership, athletics, and community service.",
  openGraph: {
    title: "Pax Parker Portfolio",
    description:
      "Portfolio website for Paxton Parker, showcasing academics, leadership, athletics, and community service.",
    type: "website",
    url: "https://paxparker.com", // replace with your live domain
    images: [
      {
        url: "https://paxparker.com/og-image.png", // replace with your actual image
        width: 1200,
        height: 630,
        alt: "Pax Parker Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pax Parker Portfolio",
    description:
      "Portfolio website for Paxton Parker, showcasing academics, leadership, athletics, and community service.",
    images: ["https://paxparker.com/og-image.png"], // replace with your actual image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased">
        {children} <SpeedInsights /> <Analytics />
      </body>
    </html>
  );
}
