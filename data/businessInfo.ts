export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  categoryBadge: string;
  iconName: "credit-card" | "travel" | "phone" | "shield-check";
  whatsappMessage: string;
}

export const BUSINESS_INFO = {
  name: "Krisha Enterprises",
  legalName: "Krisha Enterprises",
  experienceClaim: "10+ years of experience",
  tagline: "Fast • Secure • Trusted Service",
  taglineWords: ["Fast", "Secure", "Trusted Service"],
  phone: "7600468552",
  phoneFormatted: "+91 76004 68552",
  phoneTel: "tel:+917600468552",
  whatsappUrl: "https://wa.me/917600468552",
  address: "Baroi Road, Adeshvar Complex, Near Mahalaxmi Mall, Opposite Sabri Hotel, Mundra - Kutch",
  addressCity: "Mundra - Kutch",
  addressLandmarks: "Adeshvar Complex, Near Mahalaxmi Mall, Opposite Sabri Hotel, Baroi Road",
  googleMapsSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      "Baroi Road, Adeshvar Complex, Near Mahalaxmi Mall, Opposite Sabri Hotel, Mundra - Kutch"
    ),
  posterImagePath: "/images/krisha-poster.jpeg",
  services: [
    {
      id: "credit-card-bill-payment",
      title: "Credit Card Bill Payment",
      shortDescription:
        "Fast and secure credit card bill settlement assistance right in your neighborhood.",
      categoryBadge: "Bill Payment",
      iconName: "credit-card",
      whatsappMessage:
        "Hello Krisha Enterprises, I would like assistance with Credit Card Bill Payment.",
    },
    {
      id: "flight-train-bus-booking",
      title: "Flight / Train / Bus Booking",
      shortDescription:
        "Convenient travel reservations for your flight, train, and bus journeys.",
      categoryBadge: "Travel Booking",
      iconName: "travel",
      whatsappMessage:
        "Hello Krisha Enterprises, I would like assistance with Flight / Train / Bus Booking.",
    },
    {
      id: "all-types-of-recharge",
      title: "All Types of Recharge",
      shortDescription:
        "Quick and reliable recharge services for all prepaid, postpaid, and DTH connections.",
      categoryBadge: "Recharge Service",
      iconName: "phone",
      whatsappMessage:
        "Hello Krisha Enterprises, I would like assistance with All Types of Recharge.",
    },
    {
      id: "pf-related-services",
      title: "PF-Related Services",
      shortDescription:
        "Assistance and guidance for all your provident fund (PF) related needs.",
      categoryBadge: "PF Assistance",
      iconName: "shield-check",
      whatsappMessage:
        "Hello Krisha Enterprises, I would like assistance with PF-Related Services.",
    },
  ] as ServiceItem[],
};
