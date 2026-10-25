"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, Phone, MessageCircle, Download } from "lucide-react";
import { BUSINESS_INFO } from "@/data/businessInfo";

interface PosterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PosterModal({ isOpen, onClose }: PosterModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="poster-modal-title"
    >
      <div
        className="relative w-full max-w-xl bg-[#0c1c38] rounded-2xl border-2 border-[#1b3b74] shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-[#071329]">
          <div>
            <h2
              id="poster-modal-title"
              className="text-base sm:text-lg font-bold text-white flex items-center gap-2"
            >
              <span>Krisha Enterprises</span>
              <span className="text-xs px-2 py-0.5 rounded bg-red-600 text-white font-semibold">
                Official Poster
              </span>
            </h2>
            <p className="text-xs text-slate-400">
              {BUSINESS_INFO.tagline} • Mundra - Kutch
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-label="Close poster view"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Image Body with perfect aspect ratio */}
        <div className="p-4 overflow-y-auto flex-1 flex flex-col items-center justify-center bg-slate-950">
          <div className="relative w-full max-w-md aspect-square rounded-lg overflow-hidden shadow-2xl border border-slate-700">
            <Image
              src={BUSINESS_INFO.posterImagePath}
              alt="Official Krisha Enterprises business poster showing services: Credit card bill payment, flight train bus booking, all types of recharge, PF related services, phone 7600468552, Baroi Road Mundra - Kutch"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Modal Footer with Quick Actions */}
        <div className="p-4 bg-[#071329] border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-300">
            <span>Phone / WhatsApp: </span>
            <strong className="text-white">{BUSINESS_INFO.phone}</strong>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={BUSINESS_INFO.posterImagePath}
              download="Krisha-Enterprises-Poster.jpeg"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#142a53] hover:bg-[#1d3b74] text-xs font-semibold text-slate-200 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              Download
            </a>

            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              WhatsApp
            </a>

            <a
              href={BUSINESS_INFO.phoneTel}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
