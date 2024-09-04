import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });
import Navbar from "./components/navbar";

export const metadata: Metadata = {
  title: "Dublin Startup Ecosystem",
  description:
    "A way to find jobs, events, and other resources for the Dublin startup ecosystem.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {" "}
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
