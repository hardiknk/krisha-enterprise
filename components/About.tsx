"use client";

import React from "react";
import Image from "next/image";
import {
  Zap,
  Lock,
  HeartHandshake,
  MapPin,
  Phone,
  MessageCircle,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { BUSINESS_INFO } from "@/data/businessInfo";
import GlowCard from "@/components/GlowCard";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 bg-[#050c1a]/80 backdrop-blur-md text-white relative overflow-hidden border-t border-white/5"
      aria-labelledby="about-heading"
    >
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-rose-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Mission, Philosophy & Pillars */}
          <div className="lg:col-span-7">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 text-amber-300 font-bold text-xs uppercase tracking-wider mb-4 border border-white/10 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
              <span>Our Service Philosophy</span>
            </div>

            <h2
              id="about-heading"
              className="text-3xl sm:text-5xl font-black text-white tracking-tight font-sans leading-tight"
            >
              Serving Mundra with Care, Reliability &amp; Integrity
            </h2>

            {/* Supplied headline / tagline callout */}
            <p className="mt-3 text-base sm:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-rose-300 to-amber-300">
              {BUSINESS_INFO.closingMotto}
            </p>

            {/* Polite, respectful factual description */}
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              At <strong className="text-white font-bold">Krisha Enterprises</strong>, we understand that handling financial transactions, planning urgent family travel, claiming your hard-earned provident fund, or managing monthly utility bills requires both prompt action and total trust. Located right in the heart of Mundra at <span className="text-amber-300/90 font-medium">{BUSINESS_INFO.address}</span>, we are honored to serve our local community with courtesy, transparency, and personal attention.
            </p>

            <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
              Every request is treated with the highest degree of confidentiality and speed. Whether you visit our counter in person or connect conveniently over WhatsApp, our objective is simple: to make your everyday tasks effortless and completely stress-free.
            </p>

            {/* 3 Core Value Pillars with Mouse Over Glow */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <GlowCard
                glowColor="red"
                className="p-5 rounded-2xl bg-[#0a1733]/60 border border-white/10 hover:border-rose-500/30 backdrop-blur-xl"
              >
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center mb-3">
                  <Zap className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="font-extrabold text-white text-base">
                  Prompt Service
                </h3>
                <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                  Timely assistance for bookings, payments, recharges and other service requests.
                </p>
              </GlowCard>

              <GlowCard
                glowColor="emerald"
                className="p-5 rounded-2xl bg-[#0a1733]/60 border border-white/10 hover:border-emerald-500/30 backdrop-blur-xl"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-3">
                  <Lock className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="font-extrabold text-white text-base">
                  Privacy-Conscious
                </h3>
                <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                  Your personal information is handled carefully and used only as required.
                </p>
              </GlowCard>

              <GlowCard
                glowColor="gold"
                className="p-5 rounded-2xl bg-[#0a1733]/60 border border-white/10 hover:border-amber-500/30 backdrop-blur-xl"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-3">
                  <HeartHandshake className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="font-extrabold text-white text-base">
                  Personal Support
                </h3>
                <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                  Helpful guidance with clear and transparent charges communicated before processing.
                </p>
              </GlowCard>
            </div>

            {/* Quick full address pill */}
            <div className="mt-7 flex items-start gap-2 text-xs text-slate-400 bg-white/5 border border-white/5 rounded-xl p-3">
              <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <span className="leading-snug">
                <strong className="text-slate-200">Our Counter Address:</strong> {BUSINESS_INFO.address}
              </span>
            </div>
          </div>

          {/* Right Column: Luxury Summary GlowCard */}
          <div className="lg:col-span-5">
            <GlowCard
              glowColor="gold"
              className="bg-gradient-to-b from-[#0c1f44] to-[#08152e] p-6 sm:p-8 rounded-3xl border border-white/15 shadow-2xl backdrop-blur-2xl"
            >
              <div className="mb-5 pb-4 border-b border-white/10 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                    Mundra Local Service Hub
                  </span>
                  <h3 className="text-2xl font-black text-white">
                    Krisha Enterprises
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    {BUSINESS_INFO.tagline}
                  </p>
                </div>
                <div className="w-24 sm:w-28 aspect-[696/324] rounded-lg overflow-hidden bg-white border border-white/20 p-0.5 shrink-0 shadow-md">
                  <Image
                    src="/images/krisha-logo.png"
                    alt="Krisha Enterprises Official Logo"
                    className="w-full h-full object-contain"
                    width={112}
                    height={52}
                  />
                </div>
              </div>

              {/* Service list checks */}
              <div className="space-y-2.5 mb-6">
                {BUSINESS_INFO.services.map((service) => (
                  <div
                    key={service.id}
                    className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-200">
                      {service.title}
                    </span>
                  </div>
                ))}
              </div>

              {/* Full Address Block */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 mb-6">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {BUSINESS_INFO.address}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-300 hover:from-emerald-300 hover:to-emerald-200 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 transition-transform hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  WhatsApp
                </a>

                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-rose-600/30 transition-transform hover:scale-105"
                >
                  <Phone className="w-4 h-4" />
                  Call {BUSINESS_INFO.phone}
                </a>
              </div>
            </GlowCard>
          </div>
        </div>
      </div>
    </section>
  );
}
