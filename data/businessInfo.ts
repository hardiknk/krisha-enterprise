export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  category: "financial" | "travel" | "insurance-pf" | "utilities" | "business";
  categoryBadge: string;
  highlights: string[];
  iconType:
    | "bank-transfer"
    | "credit-card"
    | "car-insurance"
    | "pf"
    | "ticket"
    | "utility"
    | "dth"
    | "irctc";
  whatsappMessage: string;
}

export const BUSINESS_INFO = {
  name: "Krisha Enterprises",
  legalName: "Krisha Enterprises",
  headline: "Krisha Enterprises – Your One-Stop Solution",
  tagline: "Smart Solutions for Your Everyday Needs",
  subTagline: "Reliable Service • Transparent Process • Personal Support",
  missionStatement:
    "Krisha Enterprises offers convenient, reliable, and customer-focused services for payments, travel bookings, motor insurance, and everyday online services right in Mundra - Kutch.",
  closingMotto:
    "Krisha Enterprises – Reliable Services, Clear Communication & Personal Support.",
  phone: "7600468552",
  phoneFormatted: "+91 76004 68552",
  phoneTel: "tel:+917600468552",
  whatsappUrl: "https://wa.me/917600468552",
  address:
    "Baroi Road, Adeshvar Complex, Near Mahalaxmi Mall, Opposite Sabri Hotel, Mundra - Kutch",
  addressCity: "Mundra - Kutch",
  addressLandmarks:
    "Adeshvar Complex, Near Mahalaxmi Mall, Opposite Sabri Hotel, Baroi Road",
  googleMapsSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      "Baroi Road, Adeshvar Complex, Near Mahalaxmi Mall, Opposite Sabri Hotel, Mundra - Kutch"
    ),
  services: [
    {
      id: "credit-card-to-bank-transfer",
      title: "Convenient Credit Card Payment Solutions",
      category: "financial",
      categoryBadge: "Card Solutions",
      shortDescription:
        "Assistance with eligible credit card transactions, with clear charges and transparent processing.",
      highlights: [
        "Assistance for Eligible Credit Cards",
        "Clear Charges & Upfront Terms",
        "Transparent & Orderly Processing",
      ],
      iconType: "bank-transfer",
      whatsappMessage:
        "Hello Krisha Enterprises, I would like to inquire about Convenient Credit Card Payment Solutions.",
    },
    {
      id: "credit-card-bill-cycle",
      title: "Simplify Your Credit Card Payments",
      category: "financial",
      categoryBadge: "Bill & Cycle Management",
      shortDescription:
        "Assistance with credit card bill payments and billing cycle management, subject to applicable bank terms and conditions.",
      highlights: [
        "Credit Card Bill Payment Assistance",
        "Billing Cycle Management Guidance",
        "Subject to Applicable Bank Terms",
      ],
      iconType: "credit-card",
      whatsappMessage:
        "Hello Krisha Enterprises, I need assistance with Simplifying Credit Card Payments & Billing Cycle Management.",
    },
    {
      id: "bike-car-insurance",
      title: "Bike & Car Insurance Assistance",
      category: "insurance-pf",
      categoryBadge: "Insurance Advisory",
      shortDescription:
        "Get assistance with bike and car insurance quotes, new policies and renewals, subject to insurer availability and policy terms.",
      highlights: [
        "Bike & Car Insurance Quotes",
        "New Policy & Renewal Assistance",
        "Subject to Insurer Terms & Availability",
      ],
      iconType: "car-insurance",
      whatsappMessage:
        "Hello Krisha Enterprises, I want to inquire about Bike & Car Insurance Assistance.",
    },
    {
      id: "pf-withdrawal-services",
      title: "PF Withdrawal & All PF Related Services",
      category: "insurance-pf",
      categoryBadge: "EPFO Guidance",
      shortDescription:
        "Assistance with PF withdrawal, UAN activation, KYC updates, nominee updates and other PF-related services, subject to EPFO rules.",
      highlights: [
        "PF Withdrawal & Claim Filing Guidance",
        "UAN Activation & KYC Updates",
        "Nominee Updates (Subject to EPFO Rules)",
      ],
      iconType: "pf",
      whatsappMessage:
        "Hello Krisha Enterprises, I need guidance regarding PF Withdrawal & PF-Related Services.",
    },
    {
      id: "train-tatkal-flight-bus-ticket",
      title: "Train, Tatkal, Flight & Bus Ticket Booking",
      category: "travel",
      categoryBadge: "Travel Reservation",
      shortDescription:
        "Reliable reservation assistance for Indian Railways (including Tatkal booking), domestic and international flights, and interstate bus journeys.",
      highlights: [
        "Train & Tatkal Booking Assistance",
        "Domestic & Global Flight Booking",
        "Sleeper & AC Volvo Bus Seats",
      ],
      iconType: "ticket",
      whatsappMessage:
        "Hello Krisha Enterprises, I would like to book Train / Tatkal / Flight / Bus tickets.",
    },
    {
      id: "mobile-recharge-electricity-gas",
      title: "Mobile Recharge, Electricity & Gas Bill Payment",
      category: "utilities",
      categoryBadge: "Essential Utilities",
      shortDescription:
        "Never miss a due date. Instant prepaid and postpaid mobile recharges, state electricity power board payments, and piped/cylinder LPG gas bookings.",
      highlights: [
        "All Telecom Operators Supported",
        "State Electricity Board Payments",
        "Piped Natural Gas & Cylinder Bills",
      ],
      iconType: "utility",
      whatsappMessage:
        "Hello Krisha Enterprises, I want to pay my Mobile Recharge / Electricity / Gas bill.",
    },
    {
      id: "dth-recharge-bbps-services",
      title: "DTH Recharge & BBPS Utility Services",
      category: "utilities",
      categoryBadge: "BBPS Network",
      shortDescription:
        "Instant DTH recharge for all dish television networks and integrated Bharat Bill Payment System (BBPS) clearing for water, broadband, and municipal services.",
      highlights: [
        "All DTH Service Providers",
        "Official BBPS Clearing Platform",
        "Immediate Digital Confirmation",
      ],
      iconType: "dth",
      whatsappMessage:
        "Hello Krisha Enterprises, I need assistance with DTH Recharge & BBPS Utility Services.",
    },
    {
      id: "irctc-agent-registration",
      title: "IRCTC Agent Registration Assistance",
      category: "travel",
      categoryBadge: "Agency Support",
      shortDescription:
        "Professional onboarding and documentation assistance for business owners and individuals seeking official IRCTC authorized railway ticketing agency registration.",
      highlights: [
        "Document Verification & Preparation",
        "Official Registration Process Guidance",
        "Compliant & Transparent Advisory",
      ],
      iconType: "irctc",
      whatsappMessage:
        "Hello Krisha Enterprises, I am interested in IRCTC Agent Registration Assistance.",
    },
  ] as ServiceItem[],
};
