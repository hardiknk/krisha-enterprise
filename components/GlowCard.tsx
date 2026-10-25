"use client";

import React, { useState, useRef, MouseEvent } from "react";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "red" | "gold" | "blue" | "emerald";
  onClick?: () => void;
}

export default function GlowCard({
  children,
  className = "",
  glowColor = "red",
  onClick,
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const glowStyles = {
    red: "rgba(225, 29, 72, 0.18)",
    gold: "rgba(245, 158, 11, 0.18)",
    blue: "rgba(37, 99, 235, 0.18)",
    emerald: "rgba(16, 185, 129, 0.18)",
  };

  const borderHighlightStyles = {
    red: "rgba(225, 29, 72, 0.4)",
    gold: "rgba(245, 158, 11, 0.4)",
    blue: "rgba(59, 130, 246, 0.4)",
    emerald: "rgba(52, 211, 153, 0.4)",
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${className}`}
      style={{
        transform: isHovered ? "translateY(-4px)" : "translateY(0px)",
      }}
    >
      {/* Interactive mouse follow gradient */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(420px circle at ${mousePos.x}px ${mousePos.y}px, ${glowStyles[glowColor]}, transparent 75%)`,
        }}
        aria-hidden="true"
      />

      {/* Subtle border shine follower */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 border"
        style={{
          opacity: isHovered ? 1 : 0,
          borderColor: borderHighlightStyles[glowColor],
        }}
        aria-hidden="true"
      />

      {/* Content wrapper */}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
