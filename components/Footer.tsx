"use client";

import React from "react";
import { Phone, MessageCircle, MapPin, ArrowUp } from "lucide-react";
import { BUSINESS_INFO } from "@/data/businessInfo";

interface FooterProps {
  onOpenOriginalPoster?: () => void;
}

export default function Footer({ onOpenOriginalPoster }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#071329] text-slate-300 border-t border-[#142a53] pt-12 pb-24 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-black tracking-tight text-white font-sans">
                KRISHA
              </span>
              <span className="text-xl font-black tracking-wide text-red-500 font-sans">
                ENTERPRISES
              </span>
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-amber-400">
              {BUSINESS_INFO.tagline}
            </p>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Providing credit card bill payment, flight, train, and bus booking,
              all types of recharge, and PF-related services in Mundra - Kutch.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
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
                  All 4 Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-amber-400 transition-colors focus:outline-none focus:underline"
                >
                  About
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
              {onOpenOriginalPoster && (
                <li>
                  <button
                    type="button"
                    onClick={onOpenOriginalPoster}
                    className="hover:text-amber-400 transition-colors text-left focus:outline-none focus:underline"
                  >
                    View Official Poster
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Contact and address */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Location &amp; Contact
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <address className="not-italic">
                  {BUSINESS_INFO.address}
                </address>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="font-bold text-white hover:text-amber-400 transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
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
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} {BUSINESS_INFO.name}. All rights reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 rounded px-2 py-1"
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
