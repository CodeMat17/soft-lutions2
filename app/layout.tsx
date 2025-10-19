import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Soft-lutions | Modern Web Development & AI Solutions in Nigeria",
    template: "%s | Soft-lutions",
  },
  description:
    "Transform your business with cutting-edge web development, AI integration, and digital solutions at affordable prices. Professional websites, e-commerce stores, and custom web applications.",
  keywords: [
    "web development Nigeria",
    "AI solutions Nigeria",
    "website development",
    "e-commerce development",
    "custom web applications",
    "digital transformation",
    "affordable web design",
    "Next.js development",
    "React development",
    "modern web solutions",
    "business website Nigeria",
    "AI integration services",
    "responsive web design",
    "web development company Nigeria",
    "digital agency Nigeria",
  ].join(", "),

  // Open Graph Metadata
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://soft-lutions.com.ng",
    siteName: "Soft-lutions",
    title: "Soft-lutions | Modern Web Development & AI Solutions in Nigeria",
    description:
      "Transform your business with cutting-edge web development, AI integration, and digital solutions at affordable prices.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Soft-lutions - Digital Excellence Made Affordable",
      },
    ],
  },

  // Twitter Card Metadata
  twitter: {
    card: "summary_large_image",
    site: "@softlutions",
    creator: "@softlutions",
    title: "Soft-lutions | Modern Web Development & AI Solutions",
    description:
      "Transform your business with cutting-edge web development and AI solutions at affordable prices.",
    images: ["/og-image.jpg"],
  },

  // Additional Metadata
  authors: [{ name: "Soft-lutions", url: "https://soft-lutions.com.ng" }],
  creator: "Soft-lutions",
  publisher: "Soft-lutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Robots & Crawling
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Alternates & Canonical
  alternates: {
    canonical: "https://soft-lutions.com.ng",
    languages: {
      "en-NG": "https://soft-lutions.com.ng",
    },
  },

  // Category & Classification
  category: "technology",
  classification: "Web Development, AI Solutions, Digital Transformation",

  
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
