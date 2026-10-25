"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Phone,
  MessageCircle,
  CreditCard,
  Train,
  ShieldCheck,
  MapPin,
  Zap,
  Car,
  Sparkles,
} from "lucide-react";
import { BUSINESS_INFO } from "@/data/businessInfo";

export default function PosterCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const totalSlides = 3;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prevSlide();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      nextSlide();
    } else if (e.key === "Home") {
      e.preventDefault();
      goToSlide(0);
    } else if (e.key === "End") {
      e.preventDefault();
      goToSlide(totalSlides - 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const togglePlay = () => {
    if (!isPlaying) {
      if (
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return;
      }
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  return (
    <section
      ref={carouselRef}
      className="relative w-full max-w-5xl mx-auto my-6 sm:my-8 focus:outline-none"
      role="region"
      aria-roledescription="carousel"
      aria-label="Krisha Enterprises Featured Showcase"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Outer Glow Container with 10M Dollar Aesthetic */}
      <div className="relative rounded-3xl p-1 bg-gradient-to-b from-white/15 via-white/5 to-transparent shadow-2xl">
        <div className="relative rounded-[22px] overflow-hidden bg-gradient-to-b from-[#0a1733] to-[#040a17] border border-white/10 text-white">
          
          {/* Ambient Lighting Orbs */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-rose-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Slides Viewport */}
          <div className="relative min-h-[500px] sm:min-h-[520px] flex items-center justify-center p-4 sm:p-8 md:p-10">

            {/* ========================================== */}
            {/* SLIDE 1: One-Stop Solution Overview        */}
            {/* ========================================== */}
            <div
              className={`w-full max-w-3xl transition-all duration-300 ${
                currentSlide === 0
                  ? "block opacity-100 transform scale-100"
                  : "hidden opacity-0 transform scale-98"
              }`}
              role="group"
              aria-roledescription="slide"
              aria-label="Slide 1 of 3: Krisha Enterprises - Your One-Stop Solution"
              aria-hidden={currentSlide !== 0}
            >
              <div className="text-center">
                {/* Header Tag */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs sm:text-sm font-bold tracking-wider uppercase text-amber-300 mb-4 backdrop-blur-md">
                  <Sparkles className="w-4 h-4 text-amber-400" aria-hidden="true" />
                  <span>{BUSINESS_INFO.headline}</span>
                </div>

                {/* Main Titles */}
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white font-sans leading-none">
                  KRISHA
                  <span className="block text-2xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-rose-400 to-amber-400 tracking-wide uppercase mt-1">
                    ENTERPRISES
                  </span>
                </h2>

                <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
                  Convenient and dependable service for payments, travel
                  bookings, motor insurance, and utility clearing in Mundra.
                </p>

                {/* 4 Quick Category Badges with interactive hover */}
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-2xl mx-auto text-left">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-rose-500/50 transition-all duration-200">
                    <CreditCard className="w-5 h-5 text-rose-400 mb-1.5" />
                    <span className="text-xs font-bold text-white block">
                      Card to Bank
                    </span>
                    <span className="text-[10px] text-slate-400">
                      Bill cycle rotation
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-amber-500/50 transition-all duration-200">
                    <Car className="w-5 h-5 text-amber-400 mb-1.5" />
                    <span className="text-xs font-bold text-white block">
                      Motor Insurance
                    </span>
                    <span className="text-[10px] text-slate-400">
                      Bike &amp; Car covers
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-all duration-200">
                    <Train className="w-5 h-5 text-emerald-400 mb-1.5" />
                    <span className="text-xs font-bold text-white block">
                      Travel Ticketing
                    </span>
                    <span className="text-[10px] text-slate-400">
                      Train, Tatkal, Flight
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-sky-500/50 transition-all duration-200">
                    <ShieldCheck className="w-5 h-5 text-sky-400 mb-1.5" />
                    <span className="text-xs font-bold text-white block">
                      PF Assistance
                    </span>
                    <span className="text-[10px] text-slate-400">
                      Claims &amp; Services
                    </span>
                  </div>
                </div>

                {/* Action Strip */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-300 hover:from-emerald-300 hover:to-emerald-200 text-slate-950 font-black text-sm shadow-xl shadow-emerald-500/20 transition-transform hover:scale-105"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    Chat on WhatsApp
                  </a>

                  <a
                    href={BUSINESS_INFO.phoneTel}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-black text-sm shadow-xl shadow-rose-600/30 transition-transform hover:scale-105"
                  >
                    <Phone className="w-4 h-4" />
                    Call {BUSINESS_INFO.phone}
                  </a>
                </div>

                <div className="mt-5 text-[11px] text-slate-400 flex items-center justify-center gap-1.5 text-center px-2">
                  <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span>{BUSINESS_INFO.address}</span>
                </div>
              </div>
            </div>

            {/* ======================================================= */}
            {/* SLIDE 2: Financial Settlements & Travel Ticketing       */}
            {/* ======================================================= */}
            <div
              className={`w-full max-w-3xl transition-all duration-300 ${
                currentSlide === 1
                  ? "block opacity-100 transform scale-100"
                  : "hidden opacity-0 transform scale-98"
              }`}
              role="group"
              aria-roledescription="slide"
              aria-label="Slide 2 of 3: Financial & Travel Booking Services"
              aria-hidden={currentSlide !== 1}
            >
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/15 border border-rose-500/30 text-xs sm:text-sm font-bold tracking-wider uppercase text-rose-300 mb-3">
                  <span>Fast Settlements • Seamless Travel</span>
                </div>

                <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white font-sans tracking-tight">
                  Credit Card Solutions &amp; Ticket Booking
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
                  Instant Credit Card to Bank Transfer, Bill Payment with Cycle
                  Rotation, and Train, Tatkal, Flight &amp; Bus reservations.
                </p>

                {/* 2 Feature Cards */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto text-left">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-rose-500/50 transition-colors">
                    <div className="flex items-center gap-2 mb-2 text-rose-400">
                      <CreditCard className="w-5 h-5" />
                      <span className="font-bold text-sm text-white">
                        Card to Bank &amp; Bill Payment
                      </span>
                    </div>
                    <ul className="text-xs text-slate-300 space-y-1">
                      <li>• Direct bank account transfer</li>
                      <li>• Bill cycle rotation assistance</li>
                      <li>• Zero late penalty guidance</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-500/50 transition-colors">
                    <div className="flex items-center gap-2 mb-2 text-amber-400">
                      <Train className="w-5 h-5" />
                      <span className="font-bold text-sm text-white">
                        Complete Travel Reservations
                      </span>
                    </div>
                    <ul className="text-xs text-slate-300 space-y-1">
                      <li>• Confirmed &amp; Tatkal train tickets</li>
                      <li>• Domestic &amp; international flights</li>
                      <li>• Sleeper &amp; AC Volvo bus bookings</li>
                    </ul>
                  </div>
                </div>

                {/* Direct Action */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="https://wa.me/917600468552?text=Hello%20Krisha%20Enterprises,%20I%20would%20like%20assistance%20with%20Credit%20Card%20or%20Travel%20Booking."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-sm shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    Inquire via WhatsApp
                  </a>
                  <a
                    href={BUSINESS_INFO.phoneTel}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm shadow-md"
                  >
                    <Phone className="w-4 h-4" />
                    Call {BUSINESS_INFO.phone}
                  </a>
                </div>

                <p className="mt-4 text-[11px] text-slate-400">
                  {BUSINESS_INFO.address}
                </p>
              </div>
            </div>

            {/* ======================================================= */}
            {/* SLIDE 3: Insurance, PF, BBPS & IRCTC Services           */}
            {/* ======================================================= */}
            <div
              className={`w-full max-w-3xl transition-all duration-300 ${
                currentSlide === 2
                  ? "block opacity-100 transform scale-100"
                  : "hidden opacity-0 transform scale-98"
              }`}
              role="group"
              aria-roledescription="slide"
              aria-label="Slide 3 of 3: Motor Insurance, PF Services, BBPS and IRCTC Assistance"
              aria-hidden={currentSlide !== 2}
            >
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-xs sm:text-sm font-bold tracking-wider uppercase text-amber-300 mb-3">
                  <span>Protection &amp; Essential Utilities</span>
                </div>

                <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white font-sans tracking-tight">
                  Insurance, PF Claims &amp; Utilities
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
                  Bike &amp; Car Insurance, PF online withdrawals, BBPS electricity
                  and gas clearance, and IRCTC agent registration support.
                </p>

                {/* 2 Grid items */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto text-left">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-sky-500/50 transition-colors">
                    <div className="flex items-center gap-2 mb-2 text-sky-400">
                      <ShieldCheck className="w-5 h-5" />
                      <span className="font-bold text-sm text-white">
                        Motor Insurance &amp; PF
                      </span>
                    </div>
                    <ul className="text-xs text-slate-300 space-y-1">
                      <li>• Instant Bike &amp; Car insurance policy</li>
                      <li>• PF advance &amp; full withdrawal claim</li>
                      <li>• KYC and UAN assistance</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-colors">
                    <div className="flex items-center gap-2 mb-2 text-emerald-400">
                      <Zap className="w-5 h-5" />
                      <span className="font-bold text-sm text-white">
                        BBPS Utilities &amp; IRCTC
                      </span>
                    </div>
                    <ul className="text-xs text-slate-300 space-y-1">
                      <li>• Electricity, Gas &amp; Mobile recharges</li>
                      <li>• DTH &amp; all BBPS municipal bills</li>
                      <li>• IRCTC agent registration onboarding</li>
                    </ul>
                  </div>
                </div>

                {/* Action Strip */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="https://wa.me/917600468552?text=Hello%20Krisha%20Enterprises,%20I%20need%20assistance%20with%20Insurance,%20PF%20or%20Utility%20Services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-sm shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    Quick WhatsApp Help
                  </a>
                  <a
                    href={BUSINESS_INFO.phoneTel}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm shadow-md"
                  >
                    <Phone className="w-4 h-4" />
                    Call {BUSINESS_INFO.phone}
                  </a>
                </div>

                <p className="mt-4 text-[11px] text-slate-400">
                  {BUSINESS_INFO.address}
                </p>
              </div>
            </div>
          </div>

          {/* Carousel Footer Controls */}
          <div className="bg-[#030814]/90 backdrop-blur-md px-5 py-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            {/* Prev / Next buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-400"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-400"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </button>
              <span className="text-xs font-semibold text-slate-400 ml-1.5">
                Highlight {currentSlide + 1} of {totalSlides}
              </span>
            </div>

            {/* Slide Indicators */}
            <div
              className="flex items-center gap-2"
              role="tablist"
              aria-label="Showcase slide indicators"
            >
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  role="tab"
                  aria-selected={currentSlide === index}
                  aria-label={`Go to highlight ${index + 1}`}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                    currentSlide === index
                      ? "w-8 bg-gradient-to-r from-amber-400 to-rose-500"
                      : "w-2 bg-slate-700 hover:bg-slate-500"
                  }`}
                />
              ))}
            </div>

            {/* Auto-play toggle */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={togglePlay}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors"
                aria-label={
                  isPlaying
                    ? "Pause highlight rotation"
                    : "Start highlight rotation (Respects reduced motion)"
                }
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
                    <span>Auto-play</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
