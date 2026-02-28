import React, { useEffect, useRef } from 'react';
import ContentNav from '../components/ContentNav';
import Footer from '../components/Footer';
import { 
  Activity, Target, FlaskConical, Workflow, Zap, User, Briefcase, 
  Shield, ArrowRight, TrendingUp, Cpu, Lightbulb, Waves, 
  Microscope, Server, HeartPulse
} from 'lucide-react';

export default function InTellMePage() {
  return (
    <div className="text-slate-200 font-sans selection:bg-white/10 flex flex-col justify-center relative py-12 md:py-20 w-full">
      
      {/* KINEMATIC BACKGROUND */}
      <KinematicBackground />
      <ContentNav />

      <div className="max-w-7xl mx-auto space-y-6 w-full relative z-10 px-4 md:px-8">
        
        {/* HEADER */}
        <header className="border-b border-slate-800 pb-6 mb-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white flex items-center gap-3 justify-center md:justify-start">
              <Shield className="w-10 h-10 text-white" />
              InTellMe: Origin & Objective
            </h1>
            <p className="text-xl text-slate-300 mt-2 font-light">
              The Engineering of Trust Infrastructure
            </p>
          </div>
        </header>

        {/* MAIN TWO-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* LEFT FRAME: WHY INTELLME EXISTS */}
          <div className="flex flex-col h-full space-y-6">
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl hover:bg-black/60 transition-all md:p-8 flex-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                <Workflow className="w-6 h-6 text-white" />
                <h2 className="text-2xl font-bold text-white">Why InTellMe Exists</h2>
              </div>

              <div className="space-y-6">
                <ThoughtRow icon={Lightbulb} color="text-amber-400" text="InTellMe did not begin as a 'truth platform.' It began as a modeling problem." />
                <ThoughtRow icon={Target} color="text-indigo-400" text="Lane-Vector was originally developed to measure topic momentum within search ecosystems." subtext="The goal was predictive: understand how information gains traction, how authority influences amplification, and how narrative flow behaves over time." />
                <ThoughtRow icon={FlaskConical} color="text-fuchsia-400" text="But during that modeling process, something unexpected emerged." subtext={<span>Information did not behave like marketing trends. <strong className="text-white">It behaved like kinetics.</strong></span>} />
                <ThoughtRow icon={Microscope} color="text-blue-400" text="With a background in chemical engineering, reaction dynamics, and physics..." subtext="It became clear that the same mathematical principles used to model reaction rates, diffusion, and system momentum could be applied to semantic information flow." />

                <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl ml-0 md:ml-11">
                  <p className="text-xs font-semibold text-slate-400 mb-3 uppercase tracking-wider">Narratives Showed:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <KinematicBadge text="Velocity & Acceleration" />
                    <KinematicBadge text="Amplification Thresholds" />
                    <KinematicBadge text="Catalytic Effects" />
                    <KinematicBadge text="Half-Life Decay" />
                    <KinematicBadge text="Cross-Domain Diffusion" />
                  </div>
                </div>

                <ThoughtRow icon={Waves} color="text-cyan-400" text="Information was not just trending. It was reacting." subtext="The insight was not to invent a new theory—it was to recognize that kinematic principles could be applied in a different dimension." />
                <ThoughtRow icon={ArrowRight} color="text-emerald-400" text="Lane-Vector evolved into a semantic motion framework." subtext="Grounded in magnitude, direction, time, and authority weighting." />
                <ThoughtRow icon={Shield} color="text-white" text="From that foundation, TruVector emerged as the operational layer." subtext="Designed to measure evidentiary alignment before AI systems act." />
              </div>
            </div>
          </div>

          {/* RIGHT FRAME: WHY I AM HERE */}
          <div className="flex flex-col h-full space-y-6">
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl hover:bg-black/60 transition-all md:p-8 flex-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

              <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                <User className="w-6 h-6 text-emerald-400" />
                <h2 className="text-2xl font-bold text-white">Why I Am Here</h2>
              </div>

              <div className="space-y-6">
                <ThoughtRow icon={Cpu} color="text-emerald-400" text="InTellMe is currently founder-led and architected independently." />
                <ThoughtRow icon={HeartPulse} color="text-rose-400" text="Following aggressive cancer treatment and recovery..." subtext="I redirected my full professional focus toward building systems that address structural weaknesses in how information is processed and acted upon." />

                <div className="ml-0 md:ml-11 space-y-3 py-2">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">InTellMe Represents:</p>
                  <ObjectiveRow icon={Activity} text="A disciplined technical initiative" />
                  <ObjectiveRow icon={TrendingUp} text="A return-to-work pathway" />
                  <ObjectiveRow icon={Briefcase} text="A systems-level infrastructure opportunity" />
                </div>

                <ThoughtRow icon={Target} color="text-amber-400" text="There are no competing obligations." subtext="My sole professional objective is the successful activation and responsible scaling of this infrastructure." />
                <ThoughtRow icon={Server} color="text-white" text="The opportunity to leverage cloud resources would not fund experimentation." subtext="It would activate a formally designed system whose mathematical foundations are already established." />
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM FULL-WIDTH FRAME */}
        <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl hover:bg-black/60 transition-all md:p-8 text-center relative overflow-hidden mt-8">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none"></div>
          
          <h3 className="text-sm uppercase tracking-widest text-white font-bold mb-6">Core Position</h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-xl md:text-3xl font-light text-slate-300">
            <span className="font-semibold text-white">Information moves.</span>
            <ArrowRight className="w-6 h-6 text-slate-600 hidden md:block" />
            <span className="font-semibold text-white">AI systems act.</span>
          </div>
          
          <div className="mt-8 max-w-3xl mx-auto space-y-2">
            <p className="text-lg md:text-xl text-slate-200">
              <strong className="text-white">TruVector</strong> exists to measure alignment before execution.
            </p>
            <p className="text-lg md:text-xl text-emerald-200">
              <strong className="text-emerald-400">InTellMe</strong> exists to build that layer.
            </p>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

// Sub-components
function ThoughtRow({ icon: Icon, color, text, subtext }) {
  return (
    <div className="flex gap-4 items-start group">
      <div className="mt-0.5 shrink-0">
        <Icon className={`w-5 h-5 ${color} opacity-75 group-hover:opacity-100 transition-opacity`} />
      </div>
      <div>
        <p className="text-base font-medium text-slate-200 leading-snug">{text}</p>
        {subtext && <p className="text-sm text-slate-400 mt-1.5 leading-relaxed">{subtext}</p>}
      </div>
    </div>
  );
}

function KinematicBadge({ text }) {
  return (
    <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-2 shadow-xl hover:bg-black/60 transition-all">
      <Zap className="w-3.5 h-3.5 text-white shrink-0" />
      <span className="text-xs font-medium text-slate-300">{text}</span>
    </div>
  );
}

function ObjectiveRow({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-3 shadow-xl hover:bg-black/60 transition-all">
      <Icon className="w-4 h-4 text-emerald-500 shrink-0" />
      <span className="text-sm font-medium text-slate-200">{text}</span>
    </div>
  );
}

// Kinematic Background
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
      const particleCount = typeof window !== 'undefined' && window.innerWidth <= 768 ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * BASE_VELOCITY, vy: (Math.random() - 0.5) * BASE_VELOCITY,
          size: Math.random() * 2 + 1.2, energy: 0.3 + Math.random() * 0.6,
        });
      }
    };
    const resizeCanvas = () => {
      if (!canvas) return;
      if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
        canvas.width = window.innerWidth; canvas.height = window.innerHeight;
        init();
      }
    };
    const mouse = { x: null, y: null };
    const handleVisibility = () => isVisible = document.visibilityState === 'visible';
    const handleResize = () => resizeCanvas();
    const handleMouseMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const handleMouseOut = () => { mouse.x = null; mouse.y = null; };
    const connectParticles = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x; const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < CONNECTION_RADIUS) {
            const opacity = (1 - distance / CONNECTION_RADIUS) * 0.25;
            ctx.strokeStyle = `rgba(${CYAN_RGB.r}, ${CYAN_RGB.g}, ${CYAN_RGB.b}, ${opacity})`;
            ctx.lineWidth = 1.2; ctx.beginPath(); ctx.moveTo(particles[a].x, particles[a].y); ctx.lineTo(particles[b].x, particles[b].y); ctx.stroke();
          }
        }
      }
    };
    const animate = () => {
      if (!isVisible) { animationFrameId = requestAnimationFrame(animate); return; }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]; p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1; if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        if (mouse.x != null && mouse.y != null) {
          const dx = mouse.x - p.x; const dy = mouse.y - p.y; const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < MOUSE_RADIUS && distance > 0) {
            const force = (MOUSE_RADIUS - distance) / MOUSE_RADIUS; p.x -= (dx / distance) * force * p.size * 2; p.y -= (dy / distance) * force * p.size * 2;
          }
        }
        ctx.save(); ctx.shadowBlur = 8; ctx.shadowColor = `rgba(${CYAN_RGB.r}, ${CYAN_RGB.g}, ${CYAN_RGB.b}, 0.6)`;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${CYAN_RGB.r}, ${CYAN_RGB.g}, ${CYAN_RGB.b}, ${p.energy * 0.55})`; ctx.fill(); ctx.restore();
      }
      connectParticles(); animationFrameId = requestAnimationFrame(animate);
    };
    resizeCanvas(); window.addEventListener('resize', handleResize); document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('mousemove', handleMouseMove); window.addEventListener('mouseout', handleMouseOut); animate();
    return () => {
      window.removeEventListener('resize', handleResize); document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('mousemove', handleMouseMove); window.removeEventListener('mouseout', handleMouseOut); cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none bg-[#020617]" style={{ zIndex: -1 }} aria-hidden />;
}
