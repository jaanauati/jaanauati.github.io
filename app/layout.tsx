import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import config from "./config.json";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: config.seo.title,
  description: config.seo.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { layout: { profileGradientColors} } = config;
  const cssVariables = {
    "--profile-gradient-one": profileGradientColors[0], 
    "--profile-gradient-two": profileGradientColors[1]
  } as React.CSSProperties;
  return (
    <html lang="en">
      <head>
	<link 
	  rel="icon"
	  href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${config.seo.favIcon}</text></svg>`}
	/>
	<link
	  rel="preload"
	  href={config.profile.picture}
	/>
	<link
	  rel="stylesheet"
	  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/fontawesome.min.css"
	/>
	<link
	  rel="stylesheet"
	  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/brands.min.css"
	/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
	style={cssVariables}
      >
        {children}
      </body>
    </html>
  );
}
