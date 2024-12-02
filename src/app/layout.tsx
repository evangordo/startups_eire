import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Footer from "./components/footer";
const inter = Inter({ subsets: ["latin"] });
import Navbar from "./components/navbar";

export const metadata: Metadata = {
  title: "Startup Eire",
  description: "For those interested in working in Startups across Ireland.",
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
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
