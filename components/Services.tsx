"use client";

import React, { useState } from "react";
import {
  CreditCard,
  Plane,
  Train,
  ShieldCheck,
  MessageCircle,
  Phone,
  ArrowRight,
  ArrowRightLeft,
  Car,
  Tv,
  Zap,
  Flame,
  FileBadge,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { BUSINESS_INFO, ServiceItem } from "@/data/businessInfo";
import GlowCard from "@/components/GlowCard";

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Services (8)" },
    { id: "financial", label: "Cards & Payments" },
    { id: "insurance-pf", label: "Insurance & PF" },
    { id: "travel", label: "Travel & Ticketing" },
    { id: "utilities", label: "Recharge & Utilities" },
  ];

  const filteredServices =
    selectedCategory === "all"
      ? BUSINESS_INFO.services
      : BUSINESS_INFO.services.filter(
          (service) => service.category === selectedCategory
        );

  const renderIcon = (iconType: ServiceItem["iconType"]) => {
    switch (iconType) {
      case "bank-transfer":
        return (
          <div className="w-14 h-14 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 group-hover:scale-110 group-hover:bg-rose-500/20 transition-all duration-300">
            <ArrowRightLeft className="w-7 h-7" aria-hidden="true" />
          </div>
        );
      case "credit-card":
        return (
          <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all duration-300">
            <CreditCard className="w-7 h-7" aria-hidden="true" />
          </div>
        );
      case "car-insurance":
        return (
          <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:bg-sky-500/20 transition-all duration-300">
            <Car className="w-7 h-7" aria-hidden="true" />
          </div>
        );
      case "pf":
        return (
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300">
            <ShieldCheck className="w-7 h-7" aria-hidden="true" />
          </div>
        );
      case "ticket":
        return (
          <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all duration-300">
            <div className="flex items-center gap-1">
              <Train className="w-4 h-4" />
              <Plane className="w-4 h-4" />
            </div>
          </div>
        );
      case "utility":
        return (
          <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all duration-300">
            <div className="flex items-center gap-1">
              <Zap className="w-4 h-4" />
              <Flame className="w-4 h-4" />
            </div>
          </div>
        );
      case "dth":
        return (
          <div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 group-hover:scale-110 group-hover:bg-teal-500/20 transition-all duration-300">
            <Tv className="w-7 h-7" aria-hidden="true" />
          </div>
        );
      case "irctc":
        return (
          <div className="w-14 h-14 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 group-hover:scale-110 group-hover:bg-rose-500/20 transition-all duration-300">
            <FileBadge className="w-7 h-7" aria-hidden="true" />
          </div>
        );
      default:
        return null;
    }
  };

  const getGlowColor = (index: number) => {
    const colors: ("red" | "gold" | "blue" | "emerald")[] = [
      "red",
      "gold",
      "blue",
      "emerald",
    ];
    return colors[index % colors.length];
  };

  return (
    <section
      id="services"
      className="py-20 sm:py-28 bg-[#040916]/80 backdrop-blur-md text-white relative overflow-hidden border-t border-white/5"
      aria-labelledby="services-heading"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-rose-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-amber-300 mb-3 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Comprehensive Solutions</span>
          </div>

          <h2
            id="services-heading"
            className="text-3xl sm:text-5xl font-black text-white tracking-tight font-sans"
          >
            Our Complete Range of Services
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Krisha Enterprises provides reliable everyday assistance for payments,
            motor insurance, travel ticketing, provident fund claims, and utility
            settlements under one roof in Mundra - Kutch.
          </p>
        </div>

        {/* Interactive Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 sm:mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-lg shadow-rose-500/25"
                  : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* 8 Services Grid with Mouse Over Glow Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {filteredServices.map((service, index) => (
            <GlowCard
              key={service.id}
              glowColor={getGlowColor(index)}
              className="bg-[#0a1733]/60 border border-white/10 hover:border-white/20 p-6 flex flex-col justify-between group shadow-xl backdrop-blur-xl"
            >
              <div className="flex flex-col h-full">
                {/* Header: Category Badge & Number */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/5 text-amber-300 border border-white/10">
                    {service.categoryBadge}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-500">
                    0{index + 1}
                  </span>
                </div>

                {/* Animated Icon */}
                <div className="mb-4">
                  {renderIcon(service.iconType)}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-black text-white tracking-tight group-hover:text-rose-400 transition-colors leading-snug">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Bullet Highlights */}
                <ul className="mt-4 space-y-1.5 pt-3 border-t border-white/5 flex-1">
                  {service.highlights.map((highlight, hIdx) => (
                    <li
                      key={hIdx}
                      className="flex items-start gap-2 text-[11px] text-slate-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-white/10 space-y-2">
                <a
                  href={`https://wa.me/917600468552?text=${encodeURIComponent(
                    service.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500/20 to-emerald-400/20 hover:from-emerald-500/30 hover:to-emerald-400/30 text-emerald-300 font-bold text-xs transition-colors border border-emerald-500/40 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  aria-label={`Inquire about ${service.title} on WhatsApp`}
                >
                  <span className="inline-flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 fill-current text-emerald-400" />
                    Inquire on WhatsApp
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 font-bold text-xs transition-colors border border-white/10 focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label={`Call 7600468552 for ${service.title}`}
                >
                  <Phone className="w-3.5 h-3.5 text-rose-400" />
                  Call {BUSINESS_INFO.phone}
                </a>
              </div>
            </GlowCard>
          ))}
        </div>

        {/* Bottom Banner reminding of all everyday needs */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#0d1e44] via-[#102554] to-[#0d1e44] text-white flex flex-col lg:flex-row items-center justify-between gap-6 border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
              {BUSINESS_INFO.closingMotto}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Have an urgent payment or booking requirement?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl">
              Connect directly with Krisha Enterprises at {BUSINESS_INFO.address}.
              Our team is ready to assist you politely and promptly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 relative z-10 w-full sm:w-auto">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-300 hover:from-emerald-300 hover:to-emerald-200 text-slate-950 font-black text-sm shadow-lg shadow-emerald-500/25 transition-transform hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              WhatsApp Help
            </a>
            <a
              href={BUSINESS_INFO.phoneTel}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-black text-sm shadow-lg shadow-rose-600/30 transition-transform hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
