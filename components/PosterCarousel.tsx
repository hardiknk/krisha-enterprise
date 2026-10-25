"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Phone,
  MessageCircle,
  CreditCard,
  Plane,
  Train,
  Bus,
  Smartphone,
  ShieldCheck,
  MapPin,
  Maximize2,
} from "lucide-react";
import { BUSINESS_INFO } from "@/data/businessInfo";

interface PosterCarouselProps {
  onOpenOriginalPoster?: () => void;
}

export default function PosterCarousel({
  onOpenOriginalPoster,
}: PosterCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const totalSlides = 4; // 3 poster-style HTML/CSS slides + 1 actual printed poster slide

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Keyboard navigation
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

  // Touch swipe support for mobile
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

  // Autoplay support (paused by default, respects reduced motion)
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
      className="relative w-full max-w-5xl mx-auto my-4 sm:my-6 focus:outline-none"
      role="region"
      aria-roledescription="carousel"
      aria-label="Krisha Enterprises Featured Highlights Carousel"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Outer Card with layered poster aesthetic */}
      <div className="relative rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border-2 border-[#1b3b74] bg-[#0c1c38] text-white">
        {/* Slides viewport */}
        <div className="relative min-h-[460px] sm:min-h-[500px] md:min-h-[520px] flex items-center justify-center p-3 sm:p-6 md:p-8">
          {/* ========================================== */}
          {/* SLIDE 1: Krisha Enterprises Brand & Tagline */}
          {/* ========================================== */}
          <div
            className={`w-full max-w-3xl transition-opacity duration-300 ${
              currentSlide === 0 ? "block opacity-100" : "hidden opacity-0"
            }`}
            role="group"
            aria-roledescription="slide"
            aria-label="Slide 1 of 4: Krisha Enterprises - Fast, Secure, Trusted Service"
            aria-hidden={currentSlide !== 0}
          >
            {/* Poster Inner Arch Design */}
            <div className="bg-white text-slate-900 rounded-2xl p-5 sm:p-8 md:p-10 shadow-xl border-t-8 border-red-600 relative overflow-hidden text-center">
              {/* Decorative arched accent line */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-600 via-amber-400 to-[#0c1c38]" />

              {/* Tagline Top Header */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-300 text-xs sm:text-sm font-bold tracking-widest uppercase text-slate-800 mb-3 sm:mb-4">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                {BUSINESS_INFO.tagline}
              </div>

              {/* Brand Name Typography matching poster */}
              <div className="my-1 sm:my-2">
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#0c1c38] font-sans leading-none">
                  KRISHA
                </h2>
                <span className="block text-2xl sm:text-4xl md:text-5xl font-black tracking-wider text-red-600 uppercase font-sans mt-1">
                  ENTERPRISES
                </span>
              </div>

              {/* Location badge */}
              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 bg-slate-50 border border-slate-200 rounded-md text-slate-800 font-bold text-xs sm:text-sm">
                <MapPin className="w-4 h-4 text-red-600" aria-hidden="true" />
                <span>Mundra - Kutch</span>
              </div>

              {/* Lower Navy Section (matching the lower half of the poster) */}
              <div className="mt-6 pt-5 pb-4 px-3 sm:px-6 rounded-xl bg-[#0c1c38] text-white border border-[#1b3b74]">
                {/* 4 Mini category pills */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center mb-5">
                  <div className="bg-[#142a53] p-2 rounded-lg border border-slate-700">
                    <CreditCard className="w-5 h-5 mx-auto text-amber-400 mb-1" />
                    <span className="text-[11px] sm:text-xs font-semibold text-slate-100 block leading-tight">
                      Credit Card Bill
                    </span>
                  </div>
                  <div className="bg-[#142a53] p-2 rounded-lg border border-slate-700">
                    <div className="flex justify-center gap-1 mb-1 text-amber-400">
                      <Plane className="w-4 h-4" />
                      <Train className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-semibold text-slate-100 block leading-tight">
                      Ticket Booking
                    </span>
                  </div>
                  <div className="bg-[#142a53] p-2 rounded-lg border border-slate-700">
                    <Smartphone className="w-5 h-5 mx-auto text-amber-400 mb-1" />
                    <span className="text-[11px] sm:text-xs font-semibold text-slate-100 block leading-tight">
                      All Recharges
                    </span>
                  </div>
                  <div className="bg-[#142a53] p-2 rounded-lg border border-slate-700">
                    <ShieldCheck className="w-5 h-5 mx-auto text-amber-400 mb-1" />
                    <span className="text-[11px] sm:text-xs font-semibold text-slate-100 block leading-tight">
                      PF Services
                    </span>
                  </div>
                </div>

                {/* Big Phone & WhatsApp Display matching poster */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm sm:text-base shadow-lg transition-transform hover:scale-105"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    Chat on WhatsApp
                  </a>
                  <a
                    href={BUSINESS_INFO.phoneTel}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-sm sm:text-base shadow-lg transition-transform hover:scale-105"
                  >
                    <Phone className="w-5 h-5" />
                    Call {BUSINESS_INFO.phone}
                  </a>
                </div>

                {/* Address snippet */}
                <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] sm:text-xs text-slate-300 flex items-center justify-center gap-1.5 text-center px-1">
                  <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0" />
                  <span className="leading-snug">
                    Baroi Road, Adeshvar Complex, Near Mahalaxmi Mall, Mundra - Kutch
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================== */}
          {/* SLIDE 2: Flight, Train, and Bus Booking   */}
          {/* ========================================== */}
          <div
            className={`w-full max-w-3xl transition-opacity duration-300 ${
              currentSlide === 1 ? "block opacity-100" : "hidden opacity-0"
            }`}
            role="group"
            aria-roledescription="slide"
            aria-label="Slide 2 of 4: Flight, Train, and Bus Booking Services"
            aria-hidden={currentSlide !== 1}
          >
            <div className="bg-white text-slate-900 rounded-2xl p-5 sm:p-8 md:p-10 shadow-xl border-t-8 border-red-600 relative overflow-hidden text-center">
              {/* Decorative accent */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-600 via-amber-400 to-[#0c1c38]" />

              {/* Tagline Header */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-300 text-xs sm:text-sm font-bold tracking-widest uppercase text-slate-800 mb-2 sm:mb-3">
                <span>Krisha Enterprises</span>
                <span className="text-red-500">•</span>
                <span className="text-slate-600">{BUSINESS_INFO.tagline}</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#0c1c38] font-sans tracking-tight">
                Flight, Train & Bus Booking
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                Reliable neighborhood ticket booking assistance in Mundra - Kutch
              </p>

              {/* Visual Presentation: 3 circular badges matching poster */}
              <div className="mt-5 grid grid-cols-3 gap-3 max-w-md mx-auto">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-slate-50 border-3 border-red-600 flex items-center justify-center text-red-600 shadow-md">
                    <Plane className="w-7 h-7 sm:w-9 sm:h-9" />
                  </div>
                  <span className="mt-2 text-xs sm:text-sm font-extrabold text-[#0c1c38]">
                    Flight
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-slate-50 border-3 border-red-600 flex items-center justify-center text-[#0c1c38] shadow-md">
                    <Train className="w-7 h-7 sm:w-9 sm:h-9" />
                  </div>
                  <span className="mt-2 text-xs sm:text-sm font-extrabold text-[#0c1c38]">
                    Train
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-slate-50 border-3 border-red-600 flex items-center justify-center text-red-600 shadow-md">
                    <Bus className="w-7 h-7 sm:w-9 sm:h-9" />
                  </div>
                  <span className="mt-2 text-xs sm:text-sm font-extrabold text-[#0c1c38]">
                    Bus
                  </span>
                </div>
              </div>

              {/* Navy Call to Action Bar */}
              <div className="mt-6 pt-4 pb-4 px-4 rounded-xl bg-[#0c1c38] text-white">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="https://wa.me/917600468552?text=Hello%20Krisha%20Enterprises,%20I%20want%20to%20inquire%20about%20Flight,%20Train%20or%20Bus%20Booking."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    Book via WhatsApp
                  </a>
                  <a
                    href={BUSINESS_INFO.phoneTel}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-md"
                  >
                    <Phone className="w-4 h-4" />
                    Call 7600468552
                  </a>
                </div>
                <p className="mt-2 text-[11px] text-slate-400">
                  Fast • Secure • Trusted Service • Mundra - Kutch
                </p>
              </div>
            </div>
          </div>

          {/* ======================================================= */}
          {/* SLIDE 3: Credit Card Bill Payment, Recharge & PF Services */}
          {/* ======================================================= */}
          <div
            className={`w-full max-w-3xl transition-opacity duration-300 ${
              currentSlide === 2 ? "block opacity-100" : "hidden opacity-0"
            }`}
            role="group"
            aria-roledescription="slide"
            aria-label="Slide 3 of 4: Credit Card Bill Payment, Recharge, and PF-Related Services"
            aria-hidden={currentSlide !== 2}
          >
            <div className="bg-white text-slate-900 rounded-2xl p-5 sm:p-8 md:p-10 shadow-xl border-t-8 border-red-600 relative overflow-hidden text-center">
              {/* Decorative accent */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-600 via-amber-400 to-[#0c1c38]" />

              {/* Tagline Header */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-300 text-xs sm:text-sm font-bold tracking-widest uppercase text-slate-800 mb-2 sm:mb-3">
                <span>Krisha Enterprises</span>
                <span className="text-red-500">•</span>
                <span className="text-slate-600">{BUSINESS_INFO.tagline}</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#0c1c38] font-sans tracking-tight">
                Bill Payment, Recharge & PF Services
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                Your trusted neighborhood counter for quick payments and provident fund services
              </p>

              {/* 3 Circular Badges */}
              <div className="mt-5 grid grid-cols-3 gap-3 max-w-lg mx-auto">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-slate-50 border-3 border-red-600 flex items-center justify-center text-[#0c1c38] shadow-md">
                    <CreditCard className="w-7 h-7 sm:w-9 sm:h-9" />
                  </div>
                  <span className="mt-2 text-xs sm:text-sm font-extrabold text-[#0c1c38] leading-tight">
                    Credit Card Bill
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-slate-50 border-3 border-red-600 flex items-center justify-center text-red-600 shadow-md">
                    <Smartphone className="w-7 h-7 sm:w-9 sm:h-9" />
                  </div>
                  <span className="mt-2 text-xs sm:text-sm font-extrabold text-[#0c1c38] leading-tight">
                    All Recharges
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-slate-50 border-3 border-red-600 flex items-center justify-center text-[#0c1c38] shadow-md">
                    <ShieldCheck className="w-7 h-7 sm:w-9 sm:h-9" />
                  </div>
                  <span className="mt-2 text-xs sm:text-sm font-extrabold text-[#0c1c38] leading-tight">
                    PF Services
                  </span>
                </div>
              </div>

              {/* Navy Call to Action Bar */}
              <div className="mt-6 pt-4 pb-4 px-4 rounded-xl bg-[#0c1c38] text-white">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="https://wa.me/917600468552?text=Hello%20Krisha%20Enterprises,%20I%20need%20assistance%20with%20Bill%20Payment,%20Recharge%20or%20PF%20Services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    Chat on WhatsApp
                  </a>
                  <a
                    href={BUSINESS_INFO.phoneTel}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-md"
                  >
                    <Phone className="w-4 h-4" />
                    Call 7600468552
                  </a>
                </div>
                <p className="mt-2 text-[11px] text-slate-400">
                  Located at Adeshvar Complex, Baroi Road, Mundra - Kutch
                </p>
              </div>
            </div>
          </div>

          {/* ======================================================= */}
          {/* SLIDE 4: Official Business Poster View                  */}
          {/* ======================================================= */}
          <div
            className={`w-full max-w-3xl transition-opacity duration-300 ${
              currentSlide === 3 ? "block opacity-100" : "hidden opacity-0"
            }`}
            role="group"
            aria-roledescription="slide"
            aria-label="Slide 4 of 4: Official Krisha Enterprises Business Poster"
            aria-hidden={currentSlide !== 3}
          >
            <div className="bg-[#071329] text-white rounded-2xl p-4 sm:p-6 shadow-xl border border-[#1b3b74] flex flex-col items-center">
              <div className="flex items-center justify-between w-full mb-3 pb-2 border-b border-slate-800">
                <div className="text-left">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                    Official Reference
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Original Krisha Enterprises Poster
                  </h3>
                </div>
                {onOpenOriginalPoster && (
                  <button
                    type="button"
                    onClick={onOpenOriginalPoster}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#142a53] hover:bg-[#1d3b74] text-xs font-semibold rounded-md text-slate-200 transition-colors"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    Enlarge Poster
                  </button>
                )}
              </div>

              {/* Poster Image Container */}
              <div
                className="relative w-full max-w-sm sm:max-w-md aspect-square rounded-xl overflow-hidden shadow-2xl border-2 border-slate-700 bg-black cursor-pointer group"
                onClick={onOpenOriginalPoster}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    onOpenOriginalPoster?.();
                  }
                }}
                aria-label="Click to view full size poster"
              >
                <Image
                  src={BUSINESS_INFO.posterImagePath}
                  alt="Official Krisha Enterprises Business Poster showing services: Credit Card Bill Payment, Flight/Train/Bus Booking, All Types of Recharge, PF-Related Services"
                  fill
                  className="object-contain group-hover:scale-102 transition-transform duration-200"
                  priority={false}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="bg-slate-900/80 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm">
                    Click to Enlarge
                  </span>
                </div>
              </div>

              <p className="mt-3 text-xs text-slate-400 text-center">
                Mundra - Kutch Branch • Phone: {BUSINESS_INFO.phone}
              </p>
            </div>
          </div>
        </div>

        {/* Carousel Navigation Bar (Controls & Indicators) */}
        <div className="bg-[#071329] px-4 py-3 border-t border-[#142a53] flex flex-wrap items-center justify-between gap-3">
          {/* Previous / Next Buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prevSlide}
              className="p-2 rounded-lg bg-[#142a53] hover:bg-[#1d3b74] text-white transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="p-2 rounded-lg bg-[#142a53] hover:bg-[#1d3b74] text-white transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
            <span className="text-xs font-semibold text-slate-400 ml-1">
              Slide {currentSlide + 1} of {totalSlides}
            </span>
          </div>

          {/* Slide Indicator Dots */}
          <div
            className="flex items-center gap-2"
            role="tablist"
            aria-label="Carousel slide indicators"
          >
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={currentSlide === index}
                aria-label={`Go to slide ${index + 1}: ${
                  index === 0
                    ? "Overview & Tagline"
                    : index === 1
                    ? "Ticketing Booking"
                    : index === 2
                    ? "Bill Payment & PF"
                    : "Original Poster"
                }`}
                onClick={() => goToSlide(index)}
                className={`h-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                  currentSlide === index
                    ? "w-8 bg-amber-400"
                    : "w-2.5 bg-slate-600 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          {/* Autoplay Pause / Play Control */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={togglePlay}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-[#142a53] hover:bg-[#1d3b74] text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors"
              aria-label={
                isPlaying
                  ? "Pause slide rotation"
                  : "Start slide rotation (Respects reduced motion)"
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
    </section>
  );
}
