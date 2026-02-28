import KinematicBackground from '../components/KinematicBackground';
import ContentNav from '../components/ContentNav';
import Footer from '../components/Footer';
import PageNav from '../components/PageNav';
import {
  Activity, Target, FlaskConical, Workflow, Zap, User, Briefcase,
  Shield, ArrowRight, TrendingUp, Cpu, Lightbulb, Waves,
  Microscope, Server, HeartPulse
} from 'lucide-react';

export default function InTellMePage() {
  return (
    <div className="flex flex-col min-h-screen text-slate-200 font-sans selection:bg-white/10 relative w-full">

      <KinematicBackground />
      <ContentNav />

      <div className="flex-1 max-w-7xl mx-auto w-full relative z-10 px-4 md:px-8 pt-24 pb-16">

        {/* HEADER */}
        <header className="border-b border-white/10 pb-6 mb-10 flex flex-col md:flex-row justify-between items-start gap-4 pt-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-semibold mb-2">Section 01</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white flex items-center gap-3">
              <Shield className="w-9 h-9 text-white shrink-0" />
              InTellMe: Origin &amp; Objective
            </h1>
            <p className="text-xl text-slate-400 mt-2 font-light">
              The Engineering of Trust Infrastructure
            </p>
          </div>
        </header>

        {/* TWO-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* LEFT: WHY INTELLME EXISTS */}
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 md:p-8 shadow-xl hover:bg-black/50 transition-all relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/3 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
              <Workflow className="w-5 h-5 text-white" />
              <h2 className="text-xl font-bold text-white tracking-wide">Why InTellMe Exists</h2>
            </div>

            <div className="space-y-6 flex-1">
              <ThoughtRow
                icon={Lightbulb} color="text-amber-400"
                text="InTellMe did not begin as a 'truth platform.' It began as a modeling problem."
              />
              <ThoughtRow
                icon={Target} color="text-cyan-400"
                text="Lane-Vector was originally developed to measure topic momentum within search ecosystems."
                subtext="The goal was predictive: understand how information gains traction, how authority influences amplification, and how narrative flow behaves over time."
              />
              <ThoughtRow
                icon={FlaskConical} color="text-amber-400"
                text="But during that modeling process, something unexpected emerged."
                subtext={<span>Information did not behave like marketing trends. <strong className="text-white">It behaved like kinetics.</strong></span>}
              />
              <ThoughtRow
                icon={Microscope} color="text-blue-400"
                text="With a background in chemical engineering, reaction dynamics, and physics..."
                subtext="It became clear that the same mathematical principles used to model reaction rates, diffusion, and system momentum could be applied to semantic information flow."
              />

              <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-xl p-5 ml-0 md:ml-9">
                <p className="text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wider">
                  Narratives Showed:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <KinematicBadge text="Velocity &amp; Acceleration" />
                  <KinematicBadge text="Amplification Thresholds" />
                  <KinematicBadge text="Catalytic Effects" />
                  <KinematicBadge text="Half-Life Decay" />
                  <KinematicBadge text="Cross-Domain Diffusion" />
                </div>
              </div>

              <ThoughtRow
                icon={Waves} color="text-cyan-400"
                text="Information was not just trending. It was reacting."
                subtext="The insight was not to invent a new theory — it was to recognize that kinematic principles could be applied in a different dimension."
              />
              <ThoughtRow
                icon={ArrowRight} color="text-emerald-400"
                text="Lane-Vector evolved into a semantic motion framework."
                subtext="Grounded in magnitude, direction, time, and authority weighting."
              />
              <ThoughtRow
                icon={Shield} color="text-white"
                text="From that foundation, TruVector emerged as the operational layer."
                subtext="Designed to measure evidentiary alignment before AI systems act."
              />
            </div>
          </div>

          {/* RIGHT: WHY I AM HERE */}
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 md:p-8 shadow-xl hover:bg-black/50 transition-all relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/3 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
              <User className="w-5 h-5 text-emerald-400" />
              <h2 className="text-xl font-bold text-white tracking-wide">Why I Am Here</h2>
            </div>

            <div className="space-y-6 flex-1">
              <ThoughtRow
                icon={Cpu} color="text-emerald-400"
                text="InTellMe is currently founder-led and architected independently."
              />
              <ThoughtRow
                icon={HeartPulse} color="text-rose-400"
                text="Following aggressive cancer treatment and recovery..."
                subtext="I redirected my full professional focus toward building systems that address structural weaknesses in how information is processed and acted upon."
              />

              <div className="ml-0 md:ml-9 space-y-2.5 py-1">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  InTellMe Represents:
                </p>
                <ObjectiveRow icon={Activity}  text="A disciplined technical initiative" />
                <ObjectiveRow icon={TrendingUp} text="A return-to-work pathway" />
                <ObjectiveRow icon={Briefcase}  text="A systems-level infrastructure opportunity" />
              </div>

              <ThoughtRow
                icon={Target} color="text-amber-400"
                text="There are no competing obligations."
                subtext="My sole professional objective is the successful activation and responsible scaling of this infrastructure."
              />
              <ThoughtRow
                icon={Server} color="text-white"
                text="The opportunity to leverage cloud resources would not fund experimentation."
                subtext="It would activate a formally designed system whose mathematical foundations are already established."
              />
            </div>
          </div>
        </div>

        {/* CORE POSITION BANNER */}
        <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-8 shadow-xl text-center relative overflow-hidden mt-8">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.04)_0%,_transparent_70%)] pointer-events-none" />

          <h3 className="text-xs uppercase tracking-[0.25em] text-slate-500 font-semibold mb-6">
            Core Position
          </h3>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 text-2xl md:text-3xl font-light text-slate-300">
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

        <PageNav currentPath="/intellme" />
      </div>

      <Footer />
    </div>
  );
}

/* ── Sub-components ── */

function ThoughtRow({ icon: Icon, color, text, subtext }) {
  return (
    <div className="flex gap-4 items-start group">
      <div className="mt-0.5 shrink-0">
        <Icon className={`w-5 h-5 ${color} opacity-70 group-hover:opacity-100 transition-opacity`} />
      </div>
      <div>
        <p className="text-base font-medium text-slate-200 leading-snug">{text}</p>
        {subtext && (
          <p className="text-sm text-slate-400 mt-1.5 leading-relaxed">{subtext}</p>
        )}
      </div>
    </div>
  );
}

function KinematicBadge({ text }) {
  return (
    <div className="flex items-center gap-2 bg-black/50 border border-white/10 rounded-lg px-3 py-2 hover:bg-black/70 transition-all">
      <Zap className="w-3 h-3 text-amber-400 shrink-0" />
      <span className="text-xs font-medium text-slate-300">{text}</span>
    </div>
  );
}

function ObjectiveRow({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-3 bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 hover:bg-black/70 transition-all">
      <Icon className="w-4 h-4 text-emerald-500 shrink-0" />
      <span className="text-sm font-medium text-slate-200">{text}</span>
    </div>
  );
}
