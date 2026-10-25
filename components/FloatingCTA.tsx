"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/data/businessInfo";

export default function FloatingCTA() {
  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#071329]/95 backdrop-blur-md border-t border-[#1b3b74] px-4 py-2.5 sm:hidden shadow-[0_-4px_16px_rgba(0,0,0,0.4)]"
    >
      <div className="flex items-center gap-2.5">
        <a
          href={BUSINESS_INFO.phoneTel}
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-red-600 active:bg-red-700 text-white font-black text-sm shadow-md"
          aria-label={`Call ${BUSINESS_INFO.phone}`}
        >
          <Phone className="w-4 h-4" aria-hidden="true" />
          <span>Call Now</span>
        </a>

        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-emerald-500 active:bg-emerald-600 text-slate-950 font-black text-sm shadow-md"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 fill-current" aria-hidden="true" />
          <span>WhatsApp</span>
        </a>
      </div>
    </aside>
  );
}
