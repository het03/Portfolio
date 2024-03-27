import React from 'react';
import localfont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from 'next';

const DrukWide = localfont({
  src: [
    {
      path: "../assets/fonts/DrukWideMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/DrukWideBold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../assets/fonts/DrukWideSuper.ttf",
      weight: "900",
      style: "bolder",
    },
  ],
});

export const metadata: Metadata = {
  title: "Het Gajera",
  description: "Home page",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <link rel='icon' href='./favicon.ico' />
      </head>
      <body className={DrukWide.className} style={{height: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
            <Header />
              {children}
            <Footer />
      </body>
    </html>
  );
}
