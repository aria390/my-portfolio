import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/common-components/Header";
import MySelf from "./UI-mainPage/MySelf";
import Questions from "./UI-mainPage/Questions";
import Footer from "@/common-components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My-Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <section className="flex flex-col sm:relative sm:flex-row sm:pl-55 sm:px-30 sm:gap-18 gap-10 px-5">
          <MySelf />
          <div className="flex flex-col">
            {children}
            <Questions />
          </div>
        </section>
        <Footer />
      </body>
    </html>
  );
}
