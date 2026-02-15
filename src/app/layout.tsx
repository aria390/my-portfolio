import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/common-components/Header";
import MySelf from "../common-components/MySelf";
import Questions from "../common-components/Questions";
import Footer from "@/common-components/Footer";
import Background from "@/common-components/Background";

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
        <Background />
        <div className="flex justify-center ">
          <section className="flex flex-col sm:relative sm:flex-row lg:flex-row justify-center sm:w-300 w-auto sm:gap-18 gap-10 xl:gap-16 px-5">
            <MySelf />
            <div className="flex flex-col gap-10">
              {children}
              <Questions />
            </div>
          </section>
        </div>
        <Footer />
      </body>
    </html>
  );
}
