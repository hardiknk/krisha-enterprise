"use client";

import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, Menu, X, Sparkles } from "lucide-react";
import { BUSINESS_INFO } from "@/data/businessInfo";

export default function Header() {
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
    { label: "Our 8 Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
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
      <div className="bg-[#030814] text-slate-300 text-xs border-b border-white/5 py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 font-medium text-amber-400">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              {BUSINESS_INFO.tagline}
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">
              {BUSINESS_INFO.subTagline}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400 truncate max-w-md">
              {BUSINESS_INFO.address}
            </span>
            <a
              href={BUSINESS_INFO.phoneTel}
              className="font-semibold text-white hover:text-amber-400 transition-colors inline-flex items-center gap-1.5"
              aria-label={`Call ${BUSINESS_INFO.phoneFormatted}`}
            >
              <Phone className="w-3 h-3 text-rose-500" aria-hidden="true" />
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#050c1a]/90 backdrop-blur-xl shadow-2xl shadow-black/40 border-b border-white/10"
            : "bg-[#050c1a]/95 border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Wordmark logo */}
            <a
              href="#hero"
              className="flex flex-col group focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-[#050c1a] rounded-lg px-1.5 py-1"
              aria-label="Krisha Enterprises - Go to homepage"
            >
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-black tracking-tight text-white group-hover:text-amber-300 transition-colors font-sans">
                  KRISHA
                </span>
                <span className="text-xl sm:text-2xl font-black tracking-wide text-rose-500 group-hover:text-rose-400 transition-colors font-sans">
                  ENTERPRISES
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-amber-400/90 -mt-0.5">
                Your One-Stop Solution
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden md:flex items-center gap-7"
              aria-label="Main Navigation"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-slate-300 hover:text-white transition-colors relative group py-1"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-rose-500 transition-all duration-300 group-hover:w-full rounded-full" />
                </a>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-white"
                aria-label={`Call ${BUSINESS_INFO.phoneFormatted}`}
              >
                <Phone className="w-3.5 h-3.5 text-rose-400" aria-hidden="true" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group inline-flex items-center gap-2 px-5 py-2.5 text-xs font-black uppercase tracking-wider text-slate-950 bg-gradient-to-r from-emerald-400 to-emerald-300 hover:from-emerald-300 hover:to-emerald-200 rounded-xl shadow-lg shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                aria-label="Chat with Krisha Enterprises on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-current" aria-hidden="true" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="inline-flex items-center justify-center p-2 rounded-xl bg-rose-600 text-white hover:bg-rose-700 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-400"
                aria-label={`Call ${BUSINESS_INFO.phone}`}
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2.5 rounded-xl text-slate-300 hover:text-white bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-400"
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
            className="md:hidden bg-[#030814]/98 backdrop-blur-2xl border-t border-white/10 px-4 pt-4 pb-7 space-y-4"
          >
            <div className="space-y-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="block px-4 py-3 rounded-xl text-base font-semibold text-slate-100 hover:text-amber-400 hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 space-y-2.5">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-400 text-slate-950 font-black text-sm shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-current" aria-hidden="true" />
                Chat on WhatsApp
              </a>
              <a
                href={BUSINESS_INFO.phoneTel}
                onClick={handleNavClick}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-black text-sm shadow-lg"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call {BUSINESS_INFO.phone}
              </a>
            </div>

            <div className="text-center pt-2 px-2">
              <p className="text-xs text-slate-400 leading-relaxed">
                {BUSINESS_INFO.address}
              </p>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
