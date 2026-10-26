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
      "Krisha Enterprises | Your One-Stop Solution in Mundra - Kutch",
    template: "%s | Krisha Enterprises",
  },
  description:
    "Krisha Enterprises at Baroi Road, Adeshvar Complex, Near Mahalaxmi Mall, Opposite Sabri Hotel, Mundra - Kutch provides convenient and reliable services for Credit Card Payment Solutions, Bill Management, Bike & Car Insurance, PF Services, Train/Tatkal/Flight/Bus Booking, Recharge, and BBPS Utility Services. Call 7600468552.",
  keywords: [
    "Krisha Enterprises",
    "Krisha Enterprises Mundra",
    "Credit card payment solutions Mundra",
    "Credit card bill payment Mundra",
    "Billing cycle management Mundra",
    "Bike car insurance Mundra Kutch",
    "PF withdrawal services Mundra",
    "Tatkal train ticket booking Mundra",
    "Flight booking Mundra",
    "Bus ticket booking Mundra",
    "BBPS utility services Mundra",
    "IRCTC agent registration Mundra",
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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "96x96" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Krisha Enterprises – Your One-Stop Solution | Mundra - Kutch",
    description:
      "Reliable Service • Transparent Process • Personal Support at Baroi Road, Adeshvar Complex, Near Mahalaxmi Mall, Opposite Sabri Hotel, Mundra - Kutch. Credit Card Solutions, Bike & Car Insurance, PF Services, and Travel Reservations. Call 7600468552.",
    url: "https://krishaenterprises.in",
    siteName: "Krisha Enterprises",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krisha Enterprises – Smart Solutions for Your Everyday Needs",
    description:
      "Krisha Enterprises – Reliable Services, Clear Communication & Personal Support. Credit Card Solutions, Bike & Car Insurance, PF Services & Travel Booking in Mundra - Kutch. Call 7600468552.",
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
    "Krisha Enterprises offers convenient and reliable services with transparent process and personal support for payments, travel bookings, motor insurance, and online services in Mundra - Kutch.",
  telephone: "+91" + BUSINESS_INFO.phone,
  url: "https://krishaenterprises.in",
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
      <body className="min-h-full flex flex-col font-sans bg-[#050c1a] text-slate-100">
        {children}
      </body>
    </html>
  );
}
