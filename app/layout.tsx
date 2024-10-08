import React from 'react';
import localfont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
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
        <meta name="google-site-verification" content="kbIGtFg4O7wsl6Im-UEqRtiW0oSGeAe4HXUl6JczJa8" />
      </head>
      <body className={DrukWide.className}>
            <Header />
              {children}
              <SpeedInsights />
              <Analytics />
            <Footer />
      </body>
    </html>
  );
}
