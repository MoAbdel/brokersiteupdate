'use client';

import React, { useEffect, useRef } from 'react';

interface NetworkBackgroundProps {
  opacity?: number;
}

export default function NetworkBackground({ opacity = 0.15 }: NetworkBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configuration
    const NODE_COUNT = 60; // Reduced slightly for cleaner look on light bg
    const CONNECTION_DISTANCE = 250;
    const PULSE_SPEED = 0.005;
    
    // Colors (Adapted for Light Theme - Slate 900 Nodes on White)
    const COLOR_NODE = 'rgba(15, 23, 42, 0.4)'; // Slate 900
    const COLOR_LINE = 'rgba(20, 184, 166, 0.15)'; // Teal
    const COLOR_PULSE = 'rgba(212, 175, 55, 0.6)'; // Gold
    const COLOR_CENTER = 'rgba(20, 184, 166, 0.8)'; // Teal

    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    // State
    const center = { x: width / 2, y: height / 2 };
    
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      pulseOffset: number;
    }

    const particles: Particle[] = [];

    // Initialize particles
    for (let i = 0; i < NODE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2, // Very slow movement
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 2 + 1,
        pulseOffset: Math.random()
      });
    }

    const animate = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      
      // Update dimensions if needed
      if (canvas.width !== canvas.offsetWidth || canvas.height !== canvas.offsetHeight) {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
        center.x = width / 2;
        center.y = height / 2;
      }

      // Draw Center Node (The "Broker")
      ctx.beginPath();
      ctx.arc(center.x, center.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = COLOR_CENTER;
      ctx.fill();
      
      // Subtle glow for center
      const centerPulse = Math.sin(time * 0.002) * 0.5 + 0.5; // 0 to 1
      ctx.beginPath();
      ctx.arc(center.x, center.y, 15 + centerPulse * 10, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(20, 184, 166, ${0.05 + centerPulse * 0.05})`;
      ctx.fill();

      // Update and Draw Particles (The "Lenders")
      particles.forEach((p, i) => {
        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw Node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = COLOR_NODE;
        ctx.fill();

        // Connect to Center
        const dx = center.x - p.x;
        const dy = center.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Only connect if within range or arbitrarily for effect
        // Here we connect ALL to center to emphasize "Central Hub", but fade distant ones
        if (dist < width * 0.6) { // Connect most visible ones
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(center.x, center.y);
            
            // Gradient line
            const gradient = ctx.createLinearGradient(p.x, p.y, center.x, center.y);
            gradient.addColorStop(0, 'rgba(15, 23, 42, 0.01)');
            gradient.addColorStop(1, COLOR_LINE);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.stroke();

            // Draw Pulse traveling to/from center
            // Phase 1: Inward (Deals coming in)
            // Phase 2: Outward (Options going out)
            const pulsePhase = (time * PULSE_SPEED + p.pulseOffset) % 2;
            let pulsePos = 0;
            
            if (pulsePhase < 1) {
                // Moving towards center (0 -> 1)
                pulsePos = pulsePhase;
            } else {
                // Moving away (1 -> 0) or just loop? 
                // Let's make them always flow IN for "Access" feeling
                pulsePos = pulsePhase - 1;
            }

            // Calculate pulse position
            const px = p.x + dx * pulsePos;
            const py = p.y + dy * pulsePos;

            // Draw Pulse Particle
            ctx.beginPath();
            ctx.arc(px, py, 1.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(212, 175, 55, ${1 - pulsePos})`; // Gold fading as it reaches destination? Or staying bright?
            ctx.fill();
        }
      });

      requestAnimationFrame(animate);
    };

    const animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity }}
    />
  );
}
