import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Footer from "./components/footer";
const inter = Inter({ subsets: ["latin"] });
import { Analytics } from "@vercel/analytics/react";

import Navbar from "./components/navbar";

export const metadata: Metadata = {
  title: "Startups Eire",
  description: "For those interested in working in Startups across Ireland.",
  keywords: [
    "Startups in Ireland",
    "Job Opportunities",
    "Startup Jobs",
    "Startup Careers",
    "Startup Life",
  ],
  metadataBase: new URL("https://startupseire.com/"),

  icons: {
    icon: [
      {
        url: "https://startupseire.com/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "https://startupseire.com/static/se.png", // Removed double https://
        sizes: "16x16",
        type: "image/png",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" />
      </head>
      <body>
        {" "}
        <Providers>
          <Navbar />
          <Analytics />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
