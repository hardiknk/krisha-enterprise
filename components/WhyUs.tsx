"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  Zap,
  HelpCircle,
  MessageCircle,
  ChevronDown,
  Sparkles,
  Award,
  Users,
  CheckCircle2,
} from "lucide-react";
import GlowCard from "@/components/GlowCard";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How does Credit Card to Bank Transfer and Bill Cycle Rotation work?",
    answer:
      "We assist you in transferring funds securely from your credit card directly to your bank account with instant settlement. Additionally, we provide courteous guidance on managing and rotating your billing cycles strategically so you can avoid late payment surcharges, optimize your cash flow, and maintain a healthy credit score.",
  },
  {
    question: "Can I book urgent Tatkal train or flight tickets via WhatsApp?",
    answer:
      "Yes, absolutely. For your convenience, you can simply message us on WhatsApp (+91 7600468552) with your passenger names, travel date, and destination. We promptly check seat availability for Tatkal or regular train reservations, domestic and international flights, or luxury sleeper buses, and assist you with the booking.",
  },
  {
    question: "What documents are needed for PF Advance or withdrawal claims?",
    answer:
      "To assist you with Employee Provident Fund (PF) claims, you will generally need your Universal Account Number (UAN), linked Aadhaar card, PAN card, and a clear photo or copy of your bank account passbook or cancelled cheque. We guide you through KYC updating, grievance lodging, and claim status tracking with complete confidentiality.",
  },
  {
    question: "How quickly can I renew my Bike or Car Insurance policy?",
    answer:
      "Policy issuance and renewal are virtually instantaneous. You can send us a photo of your existing policy copy and Vehicle Registration Certificate (RC) on WhatsApp. We compare options from reputable insurance providers, share competitive quotes, and issue your verified digital policy copy right away.",
  },
  {
    question: "Do you assist with official IRCTC Agent Registration?",
    answer:
      "Yes. If you run a local retail shop, cyber cafe, or travel enterprise and wish to obtain an authorized IRCTC railway ticketing agency license, we guide you through the official documentation, portal registration, security clearance, and onboarding step-by-step.",
  },
  {
    question: "Do I need an appointment to visit your Mundra office?",
    answer:
      "No appointment is required! You are always warmly welcome to visit our counter at Baroi Road, Adeshvar Complex, Near Mahalaxmi Mall, Opposite Sabri Hotel, Mundra - Kutch. You can also contact us anytime by phone or WhatsApp at 7600468552 for swift remote assistance.",
  },
];

export default function WhyUs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="why-us"
      className="py-20 sm:py-28 bg-[#030814]/50 backdrop-blur-md text-white relative overflow-hidden border-t border-white/5"
      aria-labelledby="why-us-heading"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-rose-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-amber-300 mb-3 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>The Krisha Commitment</span>
          </div>

          <h2
            id="why-us-heading"
            className="text-3xl sm:text-5xl font-black text-white tracking-tight font-sans"
          >
            Why Customers Trust Us Every Day
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            We treat your time, money, and personal details with the utmost care,
            courtesy, and confidentiality. Here is why residents and business owners
            across Mundra and Kutch rely on Krisha Enterprises.
          </p>
        </div>

        {/* 4 Trust Value Cards with Mouse Over Glow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <GlowCard
            glowColor="gold"
            className="bg-[#08152e]/60 border border-white/10 hover:border-amber-400/30 p-6 flex flex-col justify-between backdrop-blur-xl"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Courteous Personal Guidance
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We take the time to listen and walk you through every step politely —
                no confusion, no hurried queues, just friendly neighborhood support.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-xs text-amber-300 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Dedicated Attention</span>
            </div>
          </GlowCard>

          <GlowCard
            glowColor="emerald"
            className="bg-[#08152e]/60 border border-white/10 hover:border-emerald-400/30 p-6 flex flex-col justify-between backdrop-blur-xl"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Strict Confidentiality
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Your personal IDs, banking information, UAN details, and travel documents
                are handled with total privacy, zero data retention, and bank-grade care.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-xs text-emerald-300 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>100% Privacy Respected</span>
            </div>
          </GlowCard>

          <GlowCard
            glowColor="red"
            className="bg-[#08152e]/60 border border-white/10 hover:border-rose-400/30 p-6 flex flex-col justify-between backdrop-blur-xl"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Fast &amp; Accurate Turnaround
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Whether it is an urgent Tatkal ticket booking opening, instant card
                settlement, or electricity payment due today, we act with precision and speed.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-xs text-rose-300 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Immediate Digital Receipts</span>
            </div>
          </GlowCard>

          <GlowCard
            glowColor="blue"
            className="bg-[#08152e]/60 border border-white/10 hover:border-sky-400/30 p-6 flex flex-col justify-between backdrop-blur-xl"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-400/10 border border-sky-400/30 text-sky-400 flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Clear &amp; Transparent Terms
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                No hidden costs, surprise deductions, or unexpected terms. We discuss
                everything transparently upfront before processing any request.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-xs text-sky-300 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Fair &amp; Honest Practice</span>
            </div>
          </GlowCard>
        </div>

        {/* Interactive FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>Got Questions? We Have Answers</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Clear answers to help you make informed decisions with total peace of mind.
            </p>
          </div>

          <div className="space-y-3.5">
            {FAQ_ITEMS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-[#08152e]/70 backdrop-blur-xl overflow-hidden transition-all duration-300"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    <span className="font-bold text-sm sm:text-base text-slate-100 leading-snug">
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-slate-300 transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-rose-500/20 text-rose-400" : ""
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 animate-fadeIn">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Help Strip */}
          <div className="mt-10 text-center p-6 rounded-2xl bg-gradient-to-r from-white/5 via-white/10 to-white/5 border border-white/10">
            <p className="text-sm font-semibold text-slate-200">
              Have another question or need personalized assistance right now?
            </p>
            <p className="text-xs text-slate-400 mt-1 mb-4">
              We are just one message away on WhatsApp and always pleased to assist you.
            </p>
            <a
              href="https://wa.me/917600468552?text=Hello%20Krisha%20Enterprises,%20I%20have%20a%20question%20regarding%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-300 hover:from-emerald-300 hover:to-emerald-200 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 transition-transform hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Ask Our Team on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
