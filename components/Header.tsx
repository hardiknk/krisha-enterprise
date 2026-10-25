"use client";

import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, Menu, X, ShieldCheck } from "lucide-react";
import { BUSINESS_INFO } from "@/data/businessInfo";

export default function Header({
  onOpenPoster,
}: {
  onOpenPoster?: () => void;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact & Location", href: "#contact" },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Skip to main content link for keyboard accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-amber-400 focus:text-slate-900 focus:font-bold focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
      >
        Skip to main content
      </a>

      {/* Top micro bar for quick trust signals */}
      <div className="bg-[#071329] text-slate-300 text-xs border-b border-[#142a53] py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 font-medium text-amber-400">
              <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
              {BUSINESS_INFO.tagline}
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300 font-normal">
              {BUSINESS_INFO.experienceClaim}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-300">
              Mundra - Kutch, Gujarat
            </span>
            <a
              href={BUSINESS_INFO.phoneTel}
              className="font-semibold text-white hover:text-amber-400 transition-colors inline-flex items-center gap-1"
              aria-label={`Call ${BUSINESS_INFO.phoneFormatted}`}
            >
              <Phone className="w-3 h-3 text-red-500" aria-hidden="true" />
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? "bg-[#0c1c38]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-[#1b3b74]"
            : "bg-[#0c1c38] border-b border-[#142a53]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Wordmark logo */}
            <a
              href="#hero"
              className="flex flex-col group focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-[#0c1c38] rounded-md px-1 py-0.5"
              aria-label="Krisha Enterprises - Go to homepage"
            >
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl sm:text-3xl font-extrabold tracking-tight text-white group-hover:text-amber-300 transition-colors font-sans">
                  KRISHA
                </span>
                <span className="text-lg sm:text-2xl font-black tracking-wide text-red-500 group-hover:text-red-400 transition-colors font-sans">
                  ENTERPRISES
                </span>
              </div>
              <span className="text-[9px] sm:text-[11px] font-semibold uppercase tracking-widest text-amber-400/90 -mt-0.5">
                {BUSINESS_INFO.tagline}
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden md:flex items-center gap-6"
              aria-label="Main Navigation"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-slate-200 hover:text-amber-400 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 rounded px-2 py-1"
                >
                  {link.label}
                </a>
              ))}
              {onOpenPoster && (
                <button
                  type="button"
                  onClick={onOpenPoster}
                  className="text-xs font-medium text-slate-300 hover:text-white bg-[#142a53] hover:bg-[#1d3b74] px-3 py-1.5 rounded-full border border-slate-700 transition-colors"
                >
                  View Poster
                </button>
              )}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-600 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-white"
                aria-label={`Call ${BUSINESS_INFO.phoneFormatted}`}
              >
                <Phone className="w-3.5 h-3.5 text-red-400" aria-hidden="true" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-md hover:shadow-emerald-500/20 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400"
                aria-label="Chat with Krisha Enterprises on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="inline-flex items-center justify-center p-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-400"
                aria-label={`Call ${BUSINESS_INFO.phone}`}
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-[#142a53] focus:outline-none focus:ring-2 focus:ring-amber-400"
                aria-controls="mobile-menu"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden bg-[#071329] border-t border-[#142a53] px-4 pt-3 pb-6 space-y-3 transition-all"
          >
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-100 hover:text-amber-400 hover:bg-[#0c1c38] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              {onOpenPoster && (
                <button
                  type="button"
                  onClick={() => {
                    handleNavClick();
                    onOpenPoster();
                  }}
                  className="w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold text-amber-300 hover:bg-[#0c1c38] transition-colors"
                >
                  View Original Poster
                </button>
              )}
            </div>

            <div className="pt-3 border-t border-slate-800 space-y-2">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-current" aria-hidden="true" />
                Chat on WhatsApp
              </a>
              <a
                href={BUSINESS_INFO.phoneTel}
                onClick={handleNavClick}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call {BUSINESS_INFO.phone}
              </a>
            </div>

            <div className="text-center pt-2">
              <p className="text-xs text-slate-400">
                {BUSINESS_INFO.addressCity} • {BUSINESS_INFO.tagline}
              </p>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
