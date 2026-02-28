import React from 'react';
import ContentNav from '../components/ContentNav';
import Footer from '../components/Footer';
import KinematicBackground from '../components/KinematicBackground';
import {
  Shield, 
  Server, 
  Users, 
  CheckCircle2,
  Scale,
  Cloud,
  Zap,
  Target,
  Layers,
  ArrowDown,
  Database,
  Network,
  Cpu,
  GitMerge,
  BarChart3,
  Lock,
  Activity,
  AlertOctagon,
  Briefcase,
  Building,
  Globe
} from 'lucide-react';

export default function InvestorPage() {
  return (
    <div className="flex flex-col flex-1 text-slate-200 p-4 md:p-8 font-sans selection:bg-emerald-500/30 relative" style={{ paddingTop: '5rem', paddingBottom: '150px' }}>
      
      {/* KINEMATIC BACKGROUND */}
      <KinematicBackground />
      <ContentNav />

      <div className="flex-1 max-w-7xl mx-auto space-y-6 relative z-10">
        
        {/* HEADER / TITLE BLOCK */}
        <header className="border-b border-slate-800 pb-6 mb-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white flex items-center gap-3 justify-center md:justify-start">
              <Shield className="w-10 h-10 text-white" />
              Investors / TruVector Growth Path
            </h1>
            <p className="text-xl text-slate-300 mt-2 font-light">
              Trust Infrastructure for the Next Phase of AI
            </p>
          </div>
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl hover:bg-black/60 transition-all max-w-md text-sm text-slate-200">
            <strong className="text-white block mb-1 text-base">Core Position</strong>
            InTellMe is building foundational infrastructure for AI reliability. TruVector provides structured probabilistic scoring before AI systems act.
          </div>
        </header>

        {/* MAIN GRID - TOP ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* The Problem */}
          <PosterCard title="The Problem: Generative Risk" icon={AlertOctagon} color="text-amber-400">
            <p className="mb-4 text-slate-300 text-lg">AI systems today generate content. Increasingly, they are beginning to:</p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-slate-900 border border-slate-800 p-3 rounded text-center text-sm font-medium text-amber-100/80">Draft Contracts</div>
              <div className="bg-slate-900 border border-slate-800 p-3 rounded text-center text-sm font-medium text-amber-100/80">Execute Workflows</div>
              <div className="bg-slate-900 border border-slate-800 p-3 rounded text-center text-sm font-medium text-amber-100/80">Trigger Financial Actions</div>
              <div className="bg-slate-900 border border-slate-800 p-3 rounded text-center text-sm font-medium text-amber-100/80">Inform Policy Decisions</div>
            </div>
            <div className="border-l-4 border-amber-500 pl-4 bg-amber-500/5 p-4 rounded-r-lg">
              <p className="text-amber-300 font-semibold mb-1">The Critical Vulnerability:</p>
              <p className="text-sm text-amber-100/70">AI systems do not verify the reliability of their outputs before acting. This creates massive operational and legal risk at the enterprise level.</p>
            </div>
          </PosterCard>

          {/* The Solution */}
          <PosterCard title="The Solution: TruVector" icon={Target} color="text-emerald-400">
            <p className="mb-4 text-emerald-100/90 text-lg">
              TruVector is InTellMe’s trust arbitration layer.
            </p>
            <p className="text-sm text-slate-300 mb-6">
              It evaluates AI-generated statements and measures how strongly they align with structured evidence. <strong className="text-white">It does not declare absolute truth.</strong>
            </p>
            
            <p className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-3">The Output Artifact Returns:</p>
            <div className="space-y-2 mb-6">
              <ListItem icon={Activity} text="A Probabilistic Confidence Score" color="text-emerald-400" />
              <ListItem icon={CheckCircle2} text="Supporting Evidence References" color="text-emerald-400" />
              <ListItem icon={AlertOctagon} text="Contradictory Evidence References" color="text-emerald-400" />
              <ListItem icon={Layers} text="Semantic Drift History Over Time" color="text-emerald-400" />
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-md text-center">
              <p className="text-emerald-300 font-medium">Think of it as a confidence layer for AI decisions.</p>
            </div>
          </PosterCard>

        </div>

        {/* MIDDLE ROW - IMPACT STATEMENT */}
        <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl hover:bg-black/60 transition-all relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-white/20"></div>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center justify-center gap-2 mb-2">
              <Zap className="w-6 h-6 text-white" /> Why This Matters
            </h2>
            <p className="text-xl text-slate-300">As AI systems move toward autonomy, the core enterprise risk shifts from:</p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-lg md:text-xl font-medium">
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-slate-400 w-full md:w-auto">
                "Did the model say something wrong?"
              </div>
              <div className="text-slate-500 font-bold">➔</div>
              <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl text-white w-full md:w-auto">
                "Did the system act on something unreliable?"
              </div>
            </div>
            
            <p className="text-lg text-slate-400 mt-4">
              TruVector reduces that risk by inserting a structured, probabilistic evaluation step <strong className="text-white">before execution</strong>.
            </p>
          </div>
        </div>

        {/* BOTTOM ROW - MARKET & INFRA */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* What Makes It Different & Infrastructure */}
          <div className="md:col-span-5 space-y-6">
            <PosterCard title="What Makes It Different" icon={Briefcase} color="text-fuchsia-400">
              <div className="space-y-4">
                <div className="bg-slate-950 border border-slate-800 p-4 rounded-lg">
                  <p className="text-slate-400 line-through decoration-fuchsia-900 mb-1">Most AI systems generate.</p>
                  <p className="text-fuchsia-300 font-bold text-lg">TruVector evaluates.</p>
                </div>
                <p className="text-sm text-slate-300">
                  It measures alignment with empirical evidence rather than predicting the next likely text token. As AI becomes more autonomous, this trust arbitration layer becomes increasingly necessary.
                </p>
              </div>
            </PosterCard>

            <PosterCard title="Infrastructure Alignment" icon={Cloud} color="text-cyan-400">
              <p className="text-sm text-slate-300 mb-4">TruVector operates at scale, requiring:</p>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-slate-950 border border-slate-800 p-2 rounded text-center text-xs text-cyan-200">Multi-cloud flexibility</div>
                <div className="bg-slate-950 border border-slate-800 p-2 rounded text-center text-xs text-cyan-200">Elastic scaling</div>
                <div className="bg-slate-950 border border-slate-800 p-2 rounded text-center text-xs text-cyan-200">Structured data retrieval</div>
                <div className="bg-slate-950 border border-slate-800 p-2 rounded text-center text-xs text-cyan-200">Governance enforcement</div>
              </div>
              <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-md">
                <p className="text-xs text-cyan-100 text-center">
                  This makes it a perfect, high-volume workload candidate for advanced cloud orchestration platforms.
                </p>
              </div>
            </PosterCard>
          </div>

          {/* Who It Serves */}
          <div className="md:col-span-7">
            <PosterCard title="Who It Serves" icon={Users} color="text-blue-400" className="h-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
                <BenefitCard title="AI Developers" icon={Server}>
                  Teams building autonomous agents who need to ensure safer outputs and prevent hallucination-driven logic errors.
                </BenefitCard>
                <BenefitCard title="Enterprise Systems" icon={Building}>
                  Large organizations deploying AI agents that require strict compliance, liability reduction, and execution-gating.
                </BenefitCard>
                <BenefitCard title="Governments & Regulators" icon={Scale}>
                  Institutions tasked with tracking narrative drift, auditing AI policy decisions, and monitoring systemic risk.
                </BenefitCard>
                <BenefitCard title="Public Platforms" icon={Globe}>
                  Information networks seeking transparent, explainable trust metrics to rebuild user confidence in digital ecosystems.
                </BenefitCard>
              </div>
            </PosterCard>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}

// Sub-components
function PosterCard({ title, icon: Icon, color, children, className = '' }) {
  return (
    <div className={`bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl hover:bg-black/60 transition-all ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        <Icon className={`w-6 h-6 ${color}`} />
        <h2 className="text-xl font-bold text-white tracking-wide">{title}</h2>
      </div>
      <div className="text-slate-200">
        {children}
      </div>
    </div>
  );
}

function ListItem({ text, icon: Icon, color }) {
  return (
    <div className="flex items-center gap-3 bg-slate-950 border border-slate-800 p-3 rounded-lg">
      <Icon className={`w-5 h-5 ${color} shrink-0`} />
      <span className="text-sm font-medium text-slate-200">{text}</span>
    </div>
  );
}

function BenefitCard({ title, icon: Icon, children }) {
  return (
    <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 flex flex-col h-full hover:border-blue-500/50 transition-colors">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 bg-blue-500/10 rounded-lg">
          <Icon className="w-5 h-5 text-blue-400" />
        </div>
        <h3 className="font-semibold text-white text-base">{title}</h3>
      </div>
      <p className="text-sm text-slate-400 leading-relaxed mt-auto">
        {children}
      </p>
    </div>
  );
}
