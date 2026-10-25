"use client";

import React from "react";
import {
  CreditCard,
  Plane,
  Train,
  Bus,
  Smartphone,
  ShieldCheck,
  MessageCircle,
  Phone,
  ArrowRight,
} from "lucide-react";
import { BUSINESS_INFO, ServiceItem } from "@/data/businessInfo";

export default function Services() {
  const renderIcon = (iconName: ServiceItem["iconName"]) => {
    switch (iconName) {
      case "credit-card":
        return (
          <div className="w-16 h-16 rounded-full bg-red-50 border-2 border-red-600 flex items-center justify-center text-red-600 shadow-md group-hover:scale-105 transition-transform">
            <CreditCard className="w-8 h-8" aria-hidden="true" />
          </div>
        );
      case "travel":
        return (
          <div className="w-16 h-16 rounded-full bg-slate-50 border-2 border-[#0c1c38] flex items-center justify-center text-[#0c1c38] shadow-md group-hover:scale-105 transition-transform">
            <div className="flex items-center gap-1">
              <Plane className="w-5 h-5 text-red-600" aria-hidden="true" />
              <Train className="w-5 h-5 text-[#0c1c38]" aria-hidden="true" />
              <Bus className="w-4 h-4 text-amber-500" aria-hidden="true" />
            </div>
          </div>
        );
      case "phone":
        return (
          <div className="w-16 h-16 rounded-full bg-amber-50 border-2 border-amber-500 flex items-center justify-center text-amber-600 shadow-md group-hover:scale-105 transition-transform">
            <Smartphone className="w-8 h-8" aria-hidden="true" />
          </div>
        );
      case "shield-check":
        return (
          <div className="w-16 h-16 rounded-full bg-red-50 border-2 border-red-600 flex items-center justify-center text-[#0c1c38] shadow-md group-hover:scale-105 transition-transform">
            <ShieldCheck className="w-8 h-8 text-red-600" aria-hidden="true" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="services"
      className="py-16 sm:py-20 bg-slate-50 text-slate-900 border-t border-slate-200"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-700 font-bold text-xs uppercase tracking-wider mb-2">
            Provided Services
          </span>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl font-extrabold text-[#0c1c38] tracking-tight font-sans"
          >
            Services Offered by Krisha Enterprises
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            {BUSINESS_INFO.tagline} — Visit our office in Mundra or connect with
            us directly for quick assistance.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {BUSINESS_INFO.services.map((service, index) => (
            <article
              key={service.id}
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-md hover:shadow-xl border border-slate-200 hover:border-red-400 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Category Pill and Index */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 border border-amber-200">
                    {service.categoryBadge}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    0{index + 1}
                  </span>
                </div>

                {/* Icon in circular poster style */}
                <div className="mb-5 flex justify-start">
                  {renderIcon(service.iconName)}
                </div>

                {/* Service Exact Label */}
                <h3 className="text-xl font-black text-[#0c1c38] tracking-tight group-hover:text-red-600 transition-colors">
                  {service.title}
                </h3>

                {/* Factual Short Description */}
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-5 border-t border-slate-100 space-y-2">
                <a
                  href={`https://wa.me/917600468552?text=${encodeURIComponent(
                    service.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs transition-colors border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  aria-label={`Inquire about ${service.title} on WhatsApp`}
                >
                  <span className="inline-flex items-center gap-1.5">
                    <MessageCircle className="w-4 h-4 text-emerald-600 fill-current" />
                    Inquire on WhatsApp
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400"
                  aria-label={`Call 7600468552 for ${service.title}`}
                >
                  <Phone className="w-3.5 h-3.5 text-red-600" />
                  Call {BUSINESS_INFO.phone}
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner reminding of the 4 categories */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0c1c38] text-white flex flex-col md:flex-row items-center justify-between gap-4 border border-[#1b3b74]">
          <div>
            <h4 className="text-lg font-bold text-white">
              Need assistance with any of these services?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Contact Krisha Enterprises at {BUSINESS_INFO.address}.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-colors"
            >
              WhatsApp Support
            </a>
            <a
              href={BUSINESS_INFO.phoneTel}
              className="px-4 py-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm shadow-md transition-colors"
            >
              Call 7600468552
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
