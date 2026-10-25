import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BUSINESS_INFO } from "@/data/businessInfo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://krishaenterprises.in"),
  title: {
    default:
      "Krisha Enterprises | Credit Card Bill Payment, Ticket Booking, Recharge & PF Services in Mundra",
    template: "%s | Krisha Enterprises",
  },
  description:
    "Krisha Enterprises at Baroi Road, Adeshvar Complex, Near Mahalaxmi Mall, Opposite Sabri Hotel, Mundra - Kutch provides fast, secure, and trusted services for Credit Card Bill Payment, Flight/Train/Bus Booking, All Types of Recharge, and PF-related services. Call 7600468552.",
  keywords: [
    "Krisha Enterprises",
    "Krisha Enterprises Mundra",
    "Credit card bill payment Mundra",
    "Flight booking Mundra",
    "Train ticket booking Mundra",
    "Bus booking Mundra Kutch",
    "Mobile recharge Mundra",
    "PF services Mundra Kutch",
    "Adeshvar Complex Baroi Road",
  ],
  authors: [{ name: "Krisha Enterprises" }],
  creator: "Krisha Enterprises",
  publisher: "Krisha Enterprises",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/favicon.ico",
    apple: "/icon.svg",
  },
  openGraph: {
    title:
      "Krisha Enterprises | Credit Card Bill Payment, Ticket Booking, Recharge & PF Services",
    description:
      "Fast • Secure • Trusted Service at Baroi Road, Adeshvar Complex, Near Mahalaxmi Mall, Opposite Sabri Hotel, Mundra - Kutch. Credit Card Bill Payment, Flight/Train/Bus Booking, All Types of Recharge & PF Services. Call 7600468552.",
    url: "https://krishaenterprises.in",
    siteName: "Krisha Enterprises",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/krisha-poster.jpeg",
        width: 640,
        height: 640,
        alt: "Krisha Enterprises Official Business Poster",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Krisha Enterprises | Fast • Secure • Trusted Service",
    description:
      "Credit Card Bill Payment, Flight/Train/Bus Booking, Recharge & PF Services in Mundra - Kutch. Call 7600468552.",
    images: ["/images/krisha-poster.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BUSINESS_INFO.name,
  description:
    "Neighborhood service business providing Credit Card Bill Payment, Flight/Train/Bus Booking, All Types of Recharge, and PF-related services in Mundra - Kutch.",
  telephone: "+91" + BUSINESS_INFO.phone,
  url: "https://krishaenterprises.in",
  image: "https://krishaenterprises.in/images/krisha-poster.jpeg",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Baroi Road, Adeshvar Complex, Near Mahalaxmi Mall, Opposite Sabri Hotel",
    addressLocality: "Mundra",
    addressRegion: "Kutch, Gujarat",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "Place",
    name: "Mundra, Kutch",
  },
  makesOffer: BUSINESS_INFO.services.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.title,
      description: service.shortDescription,
    },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
