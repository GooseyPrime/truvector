import { useEffect, useRef } from 'react';

const PARTICLE_COUNT_DESKTOP = 200;
const PARTICLE_COUNT_MOBILE = 100;
const CONNECTION_RADIUS = 190;
const MOUSE_RADIUS = 200;
const BASE_VELOCITY = 0.4;
const CYAN_RGB = { r: 34, g: 211, b: 238 };

function KinematicBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    let isVisible = true;

    const init = () => {
      particles = [];
      const particleCount =
        typeof window !== 'undefined' && window.innerWidth <= 768
          ? PARTICLE_COUNT_MOBILE
          : PARTICLE_COUNT_DESKTOP;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * BASE_VELOCITY,
          vy: (Math.random() - 0.5) * BASE_VELOCITY,
          size: Math.random() * 2 + 1.2,
          energy: 0.3 + Math.random() * 0.6,
        });
      }
    };

    const resizeCanvas = () => {
      if (!canvas) return;
      if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
      }
    };

    const mouse = { x: null, y: null };

    const handleVisibility = () => {
      isVisible = document.visibilityState === 'visible';
    };

    const handleResize = () => {
      resizeCanvas();
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const connectParticles = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < CONNECTION_RADIUS) {
            const opacity = (1 - distance / CONNECTION_RADIUS) * 0.25;
            ctx.strokeStyle = `rgba(${CYAN_RGB.r}, ${CYAN_RGB.g}, ${CYAN_RGB.b}, ${opacity})`;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      // Fill background with dark color
      ctx.fillStyle = '#020617';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        if (mouse.x != null && mouse.y != null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < MOUSE_RADIUS && distance > 0) {
            const force = (MOUSE_RADIUS - distance) / MOUSE_RADIUS;
            p.x -= (dx / distance) * force * p.size * 2;
            p.y -= (dy / distance) * force * p.size * 2;
          }
        }

        ctx.save();
        ctx.shadowBlur = 8;
        ctx.shadowColor = `rgba(${CYAN_RGB.r}, ${CYAN_RGB.g}, ${CYAN_RGB.b}, 0.6)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${CYAN_RGB.r}, ${CYAN_RGB.g}, ${CYAN_RGB.b}, ${p.energy * 0.55})`;
        ctx.fill();
        ctx.restore();
      }

      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
      aria-hidden="true"
    />
  );
}

export default KinematicBackground;
