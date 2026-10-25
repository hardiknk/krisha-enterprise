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

    // Particle definition
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
      "rgba(225, 29, 72, ",   // Ruby rose
      "rgba(245, 158, 11, ",  // Imperial gold
      "rgba(56, 189, 248, ",  // Sky cyan
      "rgba(16, 185, 129, ",  // Emerald
      "rgba(255, 255, 255, ", // Pure starlight
    ];

    const particleCount = Math.min(Math.floor((width * height) / 32000), 55);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: -0.25 - Math.random() * 0.4, // Drifts gently upwards
        radius: 1 + Math.random() * 2.2,
        alpha: Math.random() * 0.6 + 0.2,
        maxAlpha: 0.5 + Math.random() * 0.4,
        pulseSpeed: 0.008 + Math.random() * 0.015,
        color: particleColors[Math.floor(Math.random() * particleColors.length)],
      });
    }

    // Shooting stars / meteor streaks
    interface ShootingStar {
      x: number;
      y: number;
      len: number;
      speed: number;
      angle: number;
      opacity: number;
      active: boolean;
    }

    let starTimer = 0;
    const shootingStars: ShootingStar[] = [];

    const spawnShootingStar = () => {
      shootingStars.push({
        x: Math.random() * width * 0.9,
        y: Math.random() * height * 0.4,
        len: 80 + Math.random() * 120,
        speed: 9 + Math.random() * 8,
        angle: (Math.PI / 4) + (Math.random() - 0.5) * 0.2, // ~45 deg downward
        opacity: 0.9,
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

      // 1. Draw subtle interactive mouse ambient light
      const mouseGrad = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        350
      );
      mouseGrad.addColorStop(0, "rgba(225, 29, 72, 0.07)");
      mouseGrad.addColorStop(0.5, "rgba(245, 158, 11, 0.03)");
      mouseGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = mouseGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Draw Shooting Stars occasionally
      starTimer++;
      if (starTimer > 180 && Math.random() < 0.03) {
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
        starGrad.addColorStop(0.3, `rgba(253, 224, 71, ${star.opacity * 0.8})`);
        starGrad.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.beginPath();
        ctx.strokeStyle = starGrad;
        ctx.lineWidth = 1.8;
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;
        star.opacity -= 0.018;

        if (star.opacity <= 0 || star.x > width || star.y > height) {
          star.active = false;
          shootingStars.splice(s, 1);
        }
      }

      // 3. Connect particles with faint glowing constellation lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const lineAlpha = (1 - dist / 110) * 0.12;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // 4. Update and render glowing particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        // Subtle oscillating alpha pulse
        p.alpha = 0.2 + (Math.sin(time * 2 + i) + 1) * 0.5 * (p.maxAlpha - 0.2);

        // Wrap around boundaries smoothly
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Slight drift toward mouse when near
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const mouseDist = Math.sqrt(dx * dx + dy * dy);
        if (mouseDist < 160) {
          p.x += (dx / mouseDist) * 0.6;
          p.y += (dy / mouseDist) * 0.6;
        }

        // Draw particle with subtle glow halo
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha * 0.25})`;
        ctx.fill();

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
      {/* Dynamic Ambient Aurora Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Blob 1: Vibrant Ruby Rose (Top-Left) */}
        <div
          className="absolute -top-[15%] -left-[10%] w-[650px] h-[650px] rounded-full blur-[140px] opacity-25 mix-blend-screen"
          style={{
            background:
              "radial-gradient(circle, #e11d48 0%, #be123c 45%, transparent 70%)",
            animation: "driftAurora1 22s ease-in-out infinite alternate",
          }}
        />

        {/* Blob 2: Warm Imperial Gold (Top-Right) */}
        <div
          className="absolute top-[5%] -right-[10%] w-[600px] h-[600px] rounded-full blur-[140px] opacity-20 mix-blend-screen"
          style={{
            background:
              "radial-gradient(circle, #f59e0b 0%, #d97706 45%, transparent 70%)",
            animation: "driftAurora2 26s ease-in-out infinite alternate",
          }}
        />

        {/* Blob 3: Deep Royal Sapphire Blue (Center-Bottom) */}
        <div
          className="absolute top-[45%] left-[20%] w-[700px] h-[700px] rounded-full blur-[150px] opacity-20 mix-blend-screen"
          style={{
            background:
              "radial-gradient(circle, #2563eb 0%, #1d4ed8 50%, transparent 70%)",
            animation: "driftAurora3 30s ease-in-out infinite alternate",
          }}
        />

        {/* Blob 4: Emerald Fintech Flow (Bottom-Right) */}
        <div
          className="absolute -bottom-[10%] right-[10%] w-[550px] h-[550px] rounded-full blur-[130px] opacity-15 mix-blend-screen"
          style={{
            background:
              "radial-gradient(circle, #10b981 0%, #059669 45%, transparent 70%)",
            animation: "driftAurora4 24s ease-in-out infinite alternate",
          }}
        />
      </div>

      {/* Cyber Dot-Matrix Grid with Subtle Vertical Light Scanner */}
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.4) 1px, transparent 0)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Light Scanning Ray gliding vertically */}
      <div
        className="absolute inset-x-0 h-40 opacity-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(245, 158, 11, 0.15) 50%, rgba(225, 29, 72, 0.2) 75%, transparent 100%)",
          animation: "scanBeam 14s linear infinite",
        }}
      />

      {/* Interactive Starlight Canvas Overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Soft Vignette Mask to frame content beautifully */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(5, 12, 26, 0.7) 100%)",
        }}
      />
    </div>
  );
}
