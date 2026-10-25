"use client";

import React, { useState, useRef, MouseEvent } from "react";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "red" | "gold" | "blue" | "emerald";
  onClick?: () => void;
  scaleOnHover?: number;
}

export default function GlowCard({
  children,
  className = "",
  glowColor = "red",
  onClick,
  scaleOnHover = 1.045,
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
    red: "rgba(225, 29, 72, 0.22)",
    gold: "rgba(245, 158, 11, 0.22)",
    blue: "rgba(37, 99, 235, 0.22)",
    emerald: "rgba(16, 185, 129, 0.22)",
  };

  const borderHighlightStyles = {
    red: "rgba(225, 29, 72, 0.55)",
    gold: "rgba(245, 158, 11, 0.55)",
    blue: "rgba(59, 130, 246, 0.55)",
    emerald: "rgba(52, 211, 153, 0.55)",
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`relative rounded-2xl overflow-hidden transition-all duration-300 ease-out will-change-transform ${className}`}
      style={{
        transform: isHovered
          ? `translateY(-6px) scale(${scaleOnHover})`
          : "translateY(0px) scale(1)",
        zIndex: isHovered ? 20 : 1,
        boxShadow: isHovered
          ? "0 20px 40px -10px rgba(0, 0, 0, 0.8), 0 0 25px -2px rgba(255, 255, 255, 0.08)"
          : "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
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
      <div className="relative z-10">{children}</div>
    </div>
  );
}
