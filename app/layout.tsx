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
    "Krisha Enterprises at Baroi Road, Adeshvar Complex, Near Mahalaxmi Mall, Opposite Sabri Hotel, Mundra - Kutch provides convenient and reliable services for Credit Card to Bank Transfer, Bill Cycle Rotation, Bike & Car Insurance, PF Claims, Train/Tatkal/Flight/Bus Booking, Recharge, and BBPS Utility Services. Call 7600468552.",
  keywords: [
    "Krisha Enterprises",
    "Krisha Enterprises Mundra",
    "Credit card to bank transfer Mundra",
    "Credit card bill payment Mundra",
    "Bill cycle rotation Mundra",
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
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Krisha Enterprises – Your One-Stop Solution | Mundra - Kutch",
    description:
      "Fast • Secure • Trusted Service at Baroi Road, Adeshvar Complex, Near Mahalaxmi Mall, Opposite Sabri Hotel, Mundra - Kutch. Credit Card Settlements, Motor Insurance, PF Claims, and Travel Reservations. Call 7600468552.",
    url: "https://krishaenterprises.in",
    siteName: "Krisha Enterprises",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krisha Enterprises – Smart Solutions for Your Everyday Needs",
    description:
      "Credit Card to Bank Transfer, Bill Payments, Motor Insurance, PF Claims & Travel Booking in Mundra - Kutch. Call 7600468552.",
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
    "Krisha Enterprises offers convenient and reliable services for payments, travel bookings, motor insurance, and online services in Mundra - Kutch.",
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
