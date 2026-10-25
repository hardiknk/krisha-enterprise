"use client";

import React from "react";
import Image from "next/image";
import {
  Zap,
  Lock,
  HeartHandshake,
  MapPin,
  Phone,
  Maximize2,
} from "lucide-react";
import { BUSINESS_INFO } from "@/data/businessInfo";

interface AboutProps {
  onOpenOriginalPoster?: () => void;
}

export default function About({ onOpenOriginalPoster }: AboutProps) {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 bg-white text-slate-900"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Text & details */}
          <div className="lg:col-span-7">
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-800 font-bold text-xs uppercase tracking-wider mb-4 border border-slate-300">
              <MapPin className="w-4 h-4 text-red-600" aria-hidden="true" />
              <span>Mundra - Kutch</span>
            </div>

            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl font-extrabold text-[#0c1c38] tracking-tight font-sans leading-tight"
            >
              About Krisha Enterprises
            </h2>

            {/* Supplied tagline callout */}
            <p className="mt-3 text-lg font-bold text-red-600">
              {BUSINESS_INFO.tagline}
            </p>

            {/* Concise factual description */}
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Krisha Enterprises is a dedicated neighborhood service business
              located at Adeshvar Complex on Baroi Road in Mundra - Kutch.
              We assist individuals and families with essential daily
              transactions including credit card bill payment, flight, train,
              and bus booking, all types of mobile and DTH recharge, and
              PF-related services.
            </p>

            {/* Tagline Pillars based on supplied keywords */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center mb-3">
                  <Zap className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="font-extrabold text-[#0c1c38] text-base">
                  Fast
                </h3>
                <p className="mt-1 text-xs text-slate-600 leading-normal">
                  Prompt and organized handling of your bookings, recharge, and
                  bill payments.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#0c1c38] flex items-center justify-center mb-3">
                  <Lock className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="font-extrabold text-[#0c1c38] text-base">
                  Secure
                </h3>
                <p className="mt-1 text-xs text-slate-600 leading-normal">
                  Careful and reliable execution for all your transactions and PF
                  service requests.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-3">
                  <HeartHandshake className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="font-extrabold text-[#0c1c38] text-base">
                  Trusted
                </h3>
                <p className="mt-1 text-xs text-slate-600 leading-normal">
                  Dedicated and trusted service for customers across Mundra
                  and Kutch.
                </p>
              </div>
            </div>

            {/* Contact quick strip */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-red-600 shrink-0" />
                <span>Baroi Road, Mundra - Kutch</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{BUSINESS_INFO.phoneFormatted}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Poster Card & Reference */}
          <div className="lg:col-span-5">
            <div className="bg-[#0c1c38] p-5 sm:p-6 rounded-2xl border-2 border-[#1b3b74] shadow-xl text-white">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Business Identity
                </span>
                {onOpenOriginalPoster && (
                  <button
                    type="button"
                    onClick={onOpenOriginalPoster}
                    className="inline-flex items-center gap-1 text-xs text-slate-300 hover:text-white underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-amber-400 rounded"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    Enlarge Poster
                  </button>
                )}
              </div>

              {/* Poster Image Display */}
              <div
                className="relative aspect-square w-full rounded-xl overflow-hidden bg-black/60 border border-slate-700 cursor-pointer group"
                onClick={onOpenOriginalPoster}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    onOpenOriginalPoster?.();
                  }
                }}
                aria-label="Enlarge Krisha Enterprises poster"
              >
                <Image
                  src={BUSINESS_INFO.posterImagePath}
                  alt="Krisha Enterprises Official Business Poster"
                  fill
                  className="object-contain group-hover:scale-102 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="bg-slate-900/90 text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                    Click to Enlarge
                  </span>
                </div>
              </div>

              <div className="mt-4 text-center">
                <p className="text-sm font-bold text-white">
                  Krisha Enterprises Official Poster
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  Visual reference for services, phone number, and location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
