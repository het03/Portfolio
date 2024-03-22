'use client'
import React, { useState, useEffect } from 'react';
import localfont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InitialPageTransition from "@/components/utils/InitialPageTransition";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate delay to play initial page transition
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1500); // Adjust this delay to match the duration of your initial page transition
    return () => clearTimeout(timer);
  }, []);

  
  return (
    <html lang="en">
      <body className={DrukWide.className} style={{height: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
        <InitialPageTransition />
        {showContent && (
          <>
            <Header />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
