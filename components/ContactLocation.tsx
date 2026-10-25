"use client";

import React, { useState } from "react";
import {
  Phone,
  MessageCircle,
  MapPin,
  ExternalLink,
  Copy,
  Check,
  ShieldCheck,
} from "lucide-react";
import { BUSINESS_INFO } from "@/data/businessInfo";

export default function ContactLocation() {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 bg-slate-900 text-white border-t border-slate-800"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-red-600/20 text-red-400 font-bold text-xs uppercase tracking-wider mb-2 border border-red-500/30">
            Reach Out
          </span>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans"
          >
            Contact &amp; Location
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            {BUSINESS_INFO.name} — {BUSINESS_INFO.tagline}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Phone & WhatsApp Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Phone & WhatsApp Card */}
            <div className="bg-[#0c1c38] rounded-2xl p-6 sm:p-7 border border-[#1b3b74] shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/40 text-red-500 flex items-center justify-center">
                  <Phone className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Phone &amp; WhatsApp
                  </span>
                  <h3 className="text-2xl font-black text-white">
                    {BUSINESS_INFO.phone}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Connect directly with Krisha Enterprises for credit card bill
                payments, ticket reservations, recharge, and PF-related
                inquiries.
              </p>

              <div className="space-y-3">
                {/* WhatsApp Action */}
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  aria-label="Chat on WhatsApp with Krisha Enterprises at 7600468552"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  Chat on WhatsApp
                </a>

                {/* Call Action */}
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-sm shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-red-400"
                  aria-label={`Call ${BUSINESS_INFO.phoneFormatted}`}
                >
                  <Phone className="w-4 h-4" />
                  Call {BUSINESS_INFO.phone}
                </a>

                {/* Copy Phone Button */}
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#142a53] hover:bg-[#1d3b74] text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
                  aria-label="Copy phone number to clipboard"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">
                        Phone number copied!
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Phone Number</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Trust and Verification badge */}
            <div className="p-5 rounded-2xl bg-[#08152c] border border-slate-800 text-xs text-slate-400 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-200 block mb-0.5">
                  Local Service Commitment
                </span>
                <p>
                  Serving Mundra - Kutch with {BUSINESS_INFO.experienceClaim}.
                  {BUSINESS_INFO.tagline}.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Address and Directions Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#0c1c38] rounded-2xl p-6 sm:p-7 border border-[#1b3b74] shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-red-500" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Office Address
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    Mundra - Kutch Location
                  </h3>
                </div>
              </div>

              {/* Exact Provided Address */}
              <div className="p-4 rounded-xl bg-[#071329] border border-slate-800 my-4">
                <address className="not-italic text-base sm:text-lg font-medium text-slate-100 leading-relaxed">
                  {BUSINESS_INFO.address}
                </address>
              </div>

              {/* Actions: Get Directions & Copy Address */}
              <div className="flex flex-col sm:flex-row items-center gap-3 mb-6">
                <a
                  href={BUSINESS_INFO.googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
                  aria-label="Get directions by searching address on Google Maps"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Get Directions on Google Maps</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#142a53] hover:bg-[#1d3b74] text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
                  aria-label="Copy full address to clipboard"
                >
                  {copiedAddress ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Address copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Full Address</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-slate-400 mb-4">
                Note: The link above performs a search query on Google Maps for the
                provided address (Baroi Road, Adeshvar Complex, Near Mahalaxmi Mall,
                Opposite Sabri Hotel, Mundra - Kutch).
              </p>

              {/* Responsive Map Container */}
              <div className="w-full h-64 sm:h-72 rounded-xl overflow-hidden border border-slate-700 bg-slate-950 relative">
                <iframe
                  title="Google Maps Location for Baroi Road, Mundra - Kutch"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    "Baroi Road, Adeshvar Complex, Mundra, Kutch, Gujarat"
                  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
