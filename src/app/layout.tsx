import type { Metadata } from "next";
import { Geist, Geist_Mono , Montserrat } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-poppins",
  subsets: ["latin"]
});


export const metadata: Metadata = {
  title: "Owais Khiljee - Developer Portfolio",
  description: "Hey! I'm Owais Khiljee, a passionate developer specializing in creating dynamic and responsive web applications. Welcome to my portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        <Suspense fallback  ={null}>
        {children}
          </Suspense>
      </body>
    </html>
  );
}
