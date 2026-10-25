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
  Sparkles,
} from "lucide-react";
import { BUSINESS_INFO } from "@/data/businessInfo";
import GlowCard from "@/components/GlowCard";

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
      className="py-20 sm:py-28 bg-[#040916]/80 backdrop-blur-md text-white relative overflow-hidden border-t border-white/5"
      aria-labelledby="contact-heading"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-20 w-96 h-96 bg-rose-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-amber-300 mb-3 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Connect &amp; Visit Us</span>
          </div>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-5xl font-black text-white tracking-tight font-sans"
          >
            Visit Our Office or Contact Online
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Whether you wish to drop by our counter in Mundra or prefer instant remote
            assistance over WhatsApp, we are always here to help you politely and promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Phone & WhatsApp Cards */}
          <div className="lg:col-span-5 space-y-6">
            <GlowCard
              glowColor="emerald"
              className="bg-[#0a1733]/70 rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl backdrop-blur-xl"
            >
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                  <Phone className="w-7 h-7" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                    Direct Contact &amp; WhatsApp
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    {BUSINESS_INFO.phone}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Reach out anytime for credit card bill payments, card-to-bank settlement,
                tatkal / train / flight ticket bookings, motor insurance, or PF assistance.
                Our team responds quickly with polite, personalized support.
              </p>

              <div className="space-y-3">
                {/* WhatsApp Action */}
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-300 hover:from-emerald-300 hover:to-emerald-200 text-slate-950 font-black text-sm uppercase tracking-wider shadow-lg shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  aria-label="Chat on WhatsApp with Krisha Enterprises at 7600468552"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  Chat on WhatsApp
                </a>

                {/* Call Action */}
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-rose-600/30 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-rose-400"
                  aria-label={`Call ${BUSINESS_INFO.phoneFormatted}`}
                >
                  <Phone className="w-4 h-4" />
                  Call {BUSINESS_INFO.phone}
                </a>

                {/* Copy Phone Button */}
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold border border-white/10 transition-colors"
                  aria-label="Copy phone number to clipboard"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">
                        Phone number copied to clipboard!
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
            </GlowCard>

            {/* Neighborhood Trust Pledge */}
            <div className="p-5 rounded-2xl bg-[#08152c] border border-white/10 text-xs text-slate-300 flex items-start gap-3 backdrop-blur-md">
              <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block mb-0.5">
                  Warm Welcome at Mundra Counter
                </span>
                <p className="text-slate-400 leading-relaxed">
                  Serving Mundra and Kutch with dedicated local support. Walk-ins are always
                  warmly assisted with respectful attention.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Address and Directions Card */}
          <div className="lg:col-span-7">
            <GlowCard
              glowColor="gold"
              className="bg-[#0a1733]/70 rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl backdrop-blur-xl"
            >
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-amber-400/15 border border-amber-400/30 text-amber-400 flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-rose-500" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                    Counter Location
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    Mundra - Kutch Center
                  </h3>
                </div>
              </div>

              {/* Exact Address Highlight */}
              <div className="p-5 rounded-2xl bg-black/40 border border-white/10 my-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Full Registered Address:
                </span>
                <address className="not-italic text-base sm:text-lg font-bold text-white leading-relaxed">
                  {BUSINESS_INFO.address}
                </address>
              </div>

              {/* Actions: Google Maps Directions & Copy Address */}
              <div className="flex flex-col sm:flex-row items-center gap-3 mb-6">
                <a
                  href={BUSINESS_INFO.googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-400/20 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  aria-label="Get directions by searching address on Google Maps"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open on Google Maps</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 text-xs font-semibold border border-white/10 transition-colors"
                  aria-label="Copy full address to clipboard"
                >
                  {copiedAddress ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Address copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Full Address</span>
                    </>
                  )}
                </button>
              </div>

              {/* Embedded Google Maps Viewport */}
              <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-white/10 bg-black relative shadow-inner">
                <iframe
                  title="Google Maps Location for Krisha Enterprises, Baroi Road, Mundra - Kutch"
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
            </GlowCard>
          </div>
        </div>
      </div>
    </section>
  );
}
