"use client";

import React, { useEffect, useRef } from "react";

export default function PremiumBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates with smooth lerping
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    // Particle definition - Thicker, bigger, more luminous
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
      maxAlpha: number;
      pulseSpeed: number;
      color: string;
    }

    const particleColors = [
      "rgba(244, 63, 94, ",   // Luminous Rose
      "rgba(251, 191, 36, ",  // Radiant Amber Gold
      "rgba(56, 189, 248, ",  // Sky Blue
      "rgba(52, 211, 153, ",  // Bright Emerald
      "rgba(255, 255, 255, ", // Pure Diamond Starlight
    ];

    const particleCount = Math.min(Math.floor((width * height) / 24000), 70);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.55,
        vy: -0.35 - Math.random() * 0.45, // Gentle upward starlight drift
        radius: 2.2 + Math.random() * 3.5, // Thick, clearly visible particles
        alpha: Math.random() * 0.5 + 0.35,
        maxAlpha: 0.65 + Math.random() * 0.35,
        pulseSpeed: 0.01 + Math.random() * 0.02,
        color: particleColors[Math.floor(Math.random() * particleColors.length)],
      });
    }

    // Bold, thick shooting star meteors
    interface ShootingStar {
      x: number;
      y: number;
      len: number;
      speed: number;
      angle: number;
      opacity: number;
      active: boolean;
      thickness: number;
    }

    let starTimer = 0;
    const shootingStars: ShootingStar[] = [];

    const spawnShootingStar = () => {
      shootingStars.push({
        x: Math.random() * width * 0.95,
        y: Math.random() * height * 0.45,
        len: 160 + Math.random() * 160, // Much longer tail
        speed: 12 + Math.random() * 10,
        angle: (Math.PI / 4) + (Math.random() - 0.5) * 0.25,
        opacity: 1.0,
        thickness: 3.2 + Math.random() * 1.8, // Thicker stroke
        active: true,
      });
    };

    let time = 0;

    const render = () => {
      time += 0.02;

      // Mouse smooth interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // 1. Broad interactive mouse radial glow
      const mouseGrad = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        450
      );
      mouseGrad.addColorStop(0, "rgba(244, 63, 94, 0.12)");
      mouseGrad.addColorStop(0.4, "rgba(251, 191, 36, 0.07)");
      mouseGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = mouseGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Thick Shooting Stars
      starTimer++;
      if (starTimer > 130 && Math.random() < 0.05) {
        spawnShootingStar();
        starTimer = 0;
      }

      for (let s = shootingStars.length - 1; s >= 0; s--) {
        const star = shootingStars[s];
        if (!star.active) continue;

        const endX = star.x - Math.cos(star.angle) * star.len;
        const endY = star.y - Math.sin(star.angle) * star.len;

        const starGrad = ctx.createLinearGradient(star.x, star.y, endX, endY);
        starGrad.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
        starGrad.addColorStop(0.2, `rgba(253, 224, 71, ${star.opacity * 0.9})`);
        starGrad.addColorStop(0.6, `rgba(244, 63, 94, ${star.opacity * 0.6})`);
        starGrad.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.beginPath();
        ctx.strokeStyle = starGrad;
        ctx.lineWidth = star.thickness;
        ctx.lineCap = "round";
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;
        star.opacity -= 0.016;

        if (star.opacity <= 0 || star.x > width || star.y > height) {
          star.active = false;
          shootingStars.splice(s, 1);
        }
      }

      // 3. Constellation connection lines - Thicker and more visible
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const lineAlpha = (1 - dist / 130) * 0.24; // Doubled visibility
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha})`;
            ctx.lineWidth = 1.4; // Thicker lines
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // 4. Update and render big glowing particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        p.alpha = 0.3 + (Math.sin(time * 2 + i) + 1) * 0.5 * (p.maxAlpha - 0.3);

        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        // Magnetism toward mouse
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const mouseDist = Math.sqrt(dx * dx + dy * dy);
        if (mouseDist < 180) {
          p.x += (dx / mouseDist) * 0.8;
          p.y += (dy / mouseDist) * 0.8;
        }

        // Outermost soft glow halo
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 3.8, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha * 0.35})`;
        ctx.fill();

        // Inner luminous core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Huge, Thick, Highly Saturated Aurora Plasma Clouds */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Cloud 1: Intense Ruby Rose (Top-Left) - 1200px Big */}
        <div
          className="absolute -top-[20%] -left-[15%] w-[850px] h-[850px] sm:w-[1250px] sm:h-[1250px] rounded-full blur-[110px] opacity-45 mix-blend-screen"
          style={{
            background:
              "radial-gradient(circle, #ff1e56 0%, #e11d48 40%, #be123c 65%, transparent 80%)",
            animation: "driftAurora1 20s ease-in-out infinite alternate",
          }}
        />

        {/* Cloud 2: Radiant Warm Amber Gold (Top-Right) - 1100px Big */}
        <div
          className="absolute top-[0%] -right-[15%] w-[800px] h-[800px] sm:w-[1150px] sm:h-[1150px] rounded-full blur-[110px] opacity-40 mix-blend-screen"
          style={{
            background:
              "radial-gradient(circle, #fbbf24 0%, #f59e0b 45%, #b45309 70%, transparent 80%)",
            animation: "driftAurora2 24s ease-in-out infinite alternate",
          }}
        />

        {/* Cloud 3: Royal Electric Sapphire Blue (Center) - 1300px Big */}
        <div
          className="absolute top-[35%] left-[10%] w-[900px] h-[900px] sm:w-[1300px] sm:h-[1300px] rounded-full blur-[120px] opacity-38 mix-blend-screen"
          style={{
            background:
              "radial-gradient(circle, #3b82f6 0%, #1d4ed8 45%, #1e3a8a 70%, transparent 80%)",
            animation: "driftAurora3 28s ease-in-out infinite alternate",
          }}
        />

        {/* Cloud 4: Vibrant Emerald Fintech Flow (Bottom-Right) - 1000px Big */}
        <div
          className="absolute -bottom-[15%] right-[5%] w-[750px] h-[750px] sm:w-[1050px] sm:h-[1050px] rounded-full blur-[110px] opacity-35 mix-blend-screen"
          style={{
            background:
              "radial-gradient(circle, #10b981 0%, #059669 45%, #047857 70%, transparent 80%)",
            animation: "driftAurora4 22s ease-in-out infinite alternate",
          }}
        />

        {/* Cloud 5: Electric Violet Accent (Bottom-Left) */}
        <div
          className="absolute bottom-[10%] -left-[10%] w-[700px] h-[700px] sm:w-[950px] sm:h-[950px] rounded-full blur-[110px] opacity-30 mix-blend-screen"
          style={{
            background:
              "radial-gradient(circle, #8b5cf6 0%, #6d28d9 50%, transparent 75%)",
            animation: "driftAurora1 26s ease-in-out infinite alternate-reverse",
          }}
        />
      </div>

      {/* Cyber Dot-Matrix Grid - Thicker 2px Dots with Stronger Contrast */}
      <div
        className="absolute inset-0 opacity-[0.24]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1.5px 1.5px, rgba(255, 255, 255, 0.6) 1.5px, transparent 0)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* Thick Broad Glowing Light Beam Scan */}
      <div
        className="absolute inset-x-0 h-64 opacity-35 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(251, 191, 36, 0.25) 45%, rgba(244, 63, 94, 0.35) 65%, transparent 100%)",
          animation: "scanBeam 12s linear infinite",
        }}
      />

      {/* Interactive Starlight Canvas Overlay (Particles & Constellations) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Soft Vignette Mask to keep text readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 35%, rgba(5, 12, 26, 0.55) 100%)",
        }}
      />
    </div>
  );
}
