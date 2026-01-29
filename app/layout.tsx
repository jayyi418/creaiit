import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";
import BackgroundStars from "@/components/ui/BackgroundStars";

import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CREAI+IT",
  description: "Yonsei University AI Entrepreneurship Society",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased`}
      >
        <LenisProvider>
          <BackgroundStars />
          <Navbar />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
