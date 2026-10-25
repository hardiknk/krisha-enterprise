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
  subTagline: "Fast • Secure • Trusted Service",
  missionStatement:
    "Krisha Enterprises offers convenient, secure, and reliable services for payments, travel bookings, motor insurance, utility clearance, and online services right in Mundra - Kutch.",
  closingMotto: "Krisha Enterprises – Smart Solutions for Your Everyday Needs.",
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
      title: "Credit Card to Bank Transfer",
      category: "financial",
      categoryBadge: "Instant Settlement",
      shortDescription:
        "Fast, reliable, and completely secure credit card to bank account transfer assistance with full transparency and instant processing.",
      highlights: [
        "Direct Bank Account Settlement",
        "Transparent & Instant Processing",
        "High Data Privacy & Security",
      ],
      iconType: "bank-transfer",
      whatsappMessage:
        "Hello Krisha Enterprises, I would like to inquire about Credit Card to Bank Transfer service.",
    },
    {
      id: "credit-card-bill-cycle",
      title: "Credit Card Bill Payment & Bill Cycle Rotation",
      category: "financial",
      categoryBadge: "Credit Card Hub",
      shortDescription:
        "Timely credit card bill payments and smart billing cycle management assistance so you can maintain a flawless credit score with zero penalties.",
      highlights: [
        "All Major Bank Cards Supported",
        "Bill Cycle Rotation Guidance",
        "Instant Payment Confirmation",
      ],
      iconType: "credit-card",
      whatsappMessage:
        "Hello Krisha Enterprises, I need assistance with Credit Card Bill Payment & Bill Cycle Rotation.",
    },
    {
      id: "bike-car-insurance",
      title: "Bike & Car Insurance",
      category: "insurance-pf",
      categoryBadge: "Motor Protection",
      shortDescription:
        "Quick and hassle-free policy issuance and renewals for two-wheelers and four-wheelers with competitive quotes and comprehensive coverage options.",
      highlights: [
        "Instant Bike & Car Policy Renewal",
        "Comprehensive & Third-Party Covers",
        "Paperless & Quick Documentation",
      ],
      iconType: "car-insurance",
      whatsappMessage:
        "Hello Krisha Enterprises, I want to inquire about Bike & Car Insurance policy issuance / renewal.",
    },
    {
      id: "pf-withdrawal-services",
      title: "PF Withdrawal & All PF Related Services",
      category: "insurance-pf",
      categoryBadge: "PF & Pension",
      shortDescription:
        "Complete step-by-step guidance for employee provident fund (PF) advance withdrawal, full settlement, KYC updating, UAN activation, and grievance assistance.",
      highlights: [
        "Online PF Advance & Final Claim Guidance",
        "KYC, Bank & Aadhaar Linking Support",
        "UAN Activation & Transfer Assistance",
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
        "Reliable reservation assistance for Indian Railways (including urgent Tatkal booking), domestic and international flights, and interstate luxury bus journeys.",
      highlights: [
        "Tatkal & Regular Train Reservations",
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
        "Immediate Digital Receipts",
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
