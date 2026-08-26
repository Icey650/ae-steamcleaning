import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aesteampro.com"),
  title: "AE SteamPro | Mobile Steam Cleaning & Auto Detailing - Bay Area",
  description:
    "Professional mobile steam cleaning and car detailing that comes to you. Carpet, upholstery & auto interior steam cleaning across San Francisco, San Jose, Oakland, Berkeley & the greater Bay Area. Book online in minutes.",
  keywords: [
    "mobile steam cleaning",
    "carpet cleaning Bay Area",
    "auto detailing San Francisco",
    "mobile car detailing San Jose",
    "steam cleaning Oakland",
    ],
  openGraph: {
    title: "AE SteamPro | Mobile Steam Cleaning & Auto Detailing",
    description:
      "Professional mobile steam cleaning at your home or office. No drop-off, no waiting. Serving the entire Bay Area.",
    url: "https://www.aesteampro.com",
    siteName: "AE SteamPro",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
    <body className="min-h-full flex flex-col">{children}</body>
    </html>
    );
}
