"use client";

import React from "react";
import Image from "next/image";
import { Phone, MessageCircle, MapPin, ArrowUp, Sparkles } from "lucide-react";
import { BUSINESS_INFO } from "@/data/businessInfo";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#030712]/90 backdrop-blur-md text-slate-300 border-t border-white/10 pt-16 pb-28 sm:pb-16 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-gradient-to-t from-rose-600/10 to-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-auto aspect-[696/324] rounded-lg overflow-hidden border border-white/20 bg-white p-0.5 shadow-lg shadow-black/50 shrink-0">
                <Image
                  src="/images/krisha-logo.png"
                  alt="Krisha Enterprises Official Logo"
                  className="h-full w-full object-contain"
                  width={103}
                  height={48}
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-white font-sans leading-none">
                    KRISHA
                  </span>
                  <span className="text-lg sm:text-xl font-black tracking-wide text-rose-500 font-sans leading-none">
                    ENTERPRISES
                  </span>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-amber-400 mt-1">
                  {BUSINESS_INFO.tagline}
                </span>
              </div>
            </div>
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-amber-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{BUSINESS_INFO.headline}</span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Krisha Enterprises offers convenient, secure, and reliable services for
              payments, travel bookings, motor insurance, and online services right in Mundra - Kutch.
            </p>

            <p className="text-xs text-slate-500">
              {BUSINESS_INFO.closingMotto}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#hero"
                  className="hover:text-amber-400 transition-colors focus:outline-none focus:underline"
                >
                  Home / Overview
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-amber-400 transition-colors focus:outline-none focus:underline"
                >
                  Our 8 Services
                </a>
              </li>
              <li>
                <a
                  href="#why-us"
                  className="hover:text-amber-400 transition-colors focus:outline-none focus:underline"
                >
                  Why Us &amp; FAQ
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-amber-400 transition-colors focus:outline-none focus:underline"
                >
                  About Krisha Enterprises
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-amber-400 transition-colors focus:outline-none focus:underline"
                >
                  Contact &amp; Location
                </a>
              </li>
            </ul>
          </div>

          {/* Contact and address */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-wider">
              Office Location &amp; Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed text-slate-300">
                  {BUSINESS_INFO.address}
                </address>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-rose-500 shrink-0" />
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="font-bold text-white hover:text-amber-400 transition-colors"
                >
                  +91 {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  WhatsApp: +91 {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line and back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} {BUSINESS_INFO.name}. All rights reserved.</p>

          <p className="text-slate-400 text-center">
            {BUSINESS_INFO.subTagline} • Mundra, Kutch, Gujarat
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-lg px-2.5 py-1.5 bg-white/5 border border-white/5"
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
