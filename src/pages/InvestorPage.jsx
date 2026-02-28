import KinematicBackground from '../components/KinematicBackground';
import ContentNav from '../components/ContentNav';
import Footer from '../components/Footer';
import PageNav from '../components/PageNav';
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
  Database,
  Network,
  Cpu,
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
    <div className="flex flex-col min-h-screen text-slate-200 font-sans selection:bg-emerald-500/20 relative">

      <KinematicBackground />
      <ContentNav />

      <div className="flex-1 max-w-7xl mx-auto w-full relative z-10 px-4 md:px-8 pt-24 pb-16">

        {/* HEADER */}
        <header className="border-b border-white/10 pb-6 mb-10 flex flex-col md:flex-row justify-between items-start gap-6 pt-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-semibold mb-2">Section 05</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white flex items-center gap-3">
              <Shield className="w-9 h-9 text-white shrink-0" />
              Investors / TruVector Growth Path
            </h1>
            <p className="text-xl text-slate-400 mt-2 font-light">
              Trust Infrastructure for the Next Phase of AI
            </p>
          </div>
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-5 max-w-md text-sm text-slate-300 shadow-xl">
            <strong className="text-white block mb-1 text-base">Core Position</strong>
            InTellMe is building foundational infrastructure for AI reliability. TruVector provides structured probabilistic scoring before AI systems act.
          </div>
        </header>

        {/* TOP ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <PosterCard title="The Problem: Generative Risk" icon={AlertOctagon} color="text-amber-400">
            <p className="mb-4 text-slate-300 text-base leading-relaxed">
              AI systems today generate content. Increasingly, they are beginning to:
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              <ActionTag text="Draft Contracts" />
              <ActionTag text="Execute Workflows" />
              <ActionTag text="Trigger Financial Actions" />
              <ActionTag text="Inform Policy Decisions" />
            </div>
            <div className="border-l-4 border-amber-500/60 pl-4 bg-amber-500/5 py-4 pr-4 rounded-r-lg">
              <p className="text-amber-300 font-semibold mb-1 text-sm">The Critical Vulnerability:</p>
              <p className="text-sm text-amber-100/70 leading-relaxed">
                AI systems do not verify the reliability of their outputs before acting. This creates massive operational and legal risk at the enterprise level.
              </p>
            </div>
          </PosterCard>

          <PosterCard title="The Solution: TruVector" icon={Target} color="text-emerald-400">
            <p className="mb-4 text-emerald-100/90 text-base leading-relaxed">
              TruVector is InTellMe's trust arbitration layer.
            </p>
            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              It evaluates AI-generated statements and measures how strongly they align with structured evidence.{' '}
              <strong className="text-white">It does not declare absolute truth.</strong>
            </p>

            <p className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-3">The Output Artifact Returns:</p>
            <div className="space-y-2 mb-6">
              <OutputItem icon={Activity}      text="A Probabilistic Confidence Score" />
              <OutputItem icon={CheckCircle2}  text="Supporting Evidence References" />
              <OutputItem icon={AlertOctagon}  text="Contradictory Evidence References" />
              <OutputItem icon={Layers}        text="Semantic Drift History Over Time" />
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-lg text-center">
              <p className="text-emerald-300 font-medium text-sm">Think of it as a confidence layer for AI decisions.</p>
            </div>
          </PosterCard>

        </div>

        {/* IMPACT STATEMENT */}
        <div className="mt-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-8 shadow-xl relative overflow-hidden">
          <div className="absolute left-0 top-0 w-1 h-full bg-white/20 rounded-l-xl" />
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center justify-center gap-2 mb-2">
              <Zap className="w-6 h-6 text-white" /> Why This Matters
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              As AI systems move toward autonomy, the core enterprise risk shifts from:
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-base md:text-lg font-medium">
              <div className="bg-black/50 border border-white/10 p-4 rounded-xl text-slate-400 w-full md:w-auto">
                "Did the model say something wrong?"
              </div>
              <div className="text-slate-500 font-bold text-xl">&rarr;</div>
              <div className="bg-black/60 border border-white/15 rounded-xl p-4 text-white font-semibold w-full md:w-auto">
                "Did the system act on something unreliable?"
              </div>
            </div>

            <p className="text-base text-slate-400">
              TruVector reduces that risk by inserting a structured, probabilistic evaluation step{' '}
              <strong className="text-white">before execution</strong>.
            </p>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6">

          <div className="md:col-span-5 space-y-6">

            <PosterCard title="What Makes It Different" icon={Briefcase} color="text-white">
              <div className="space-y-4">
                <div className="bg-black/50 border border-white/10 p-4 rounded-lg">
                  <p className="text-slate-400 line-through decoration-white/20 mb-1 text-sm">
                    Most AI systems generate.
                  </p>
                  <p className="text-white font-bold text-lg">TruVector evaluates.</p>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  It measures alignment with empirical evidence rather than predicting the next likely text token. As AI becomes more autonomous, this trust arbitration layer becomes increasingly necessary.
                </p>
              </div>
            </PosterCard>

            <PosterCard title="Infrastructure Alignment" icon={Cloud} color="text-cyan-400">
              <p className="text-sm text-slate-300 mb-4">TruVector operates at scale, requiring:</p>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <InfraTag text="Multi-cloud flexibility" />
                <InfraTag text="Elastic scaling" />
                <InfraTag text="Structured data retrieval" />
                <InfraTag text="Governance enforcement" />
              </div>
              <div className="p-3 bg-cyan-500/8 border border-cyan-500/20 rounded-lg">
                <p className="text-xs text-cyan-100 text-center leading-relaxed">
                  This makes it a perfect, high-volume workload candidate for advanced cloud orchestration platforms.
                </p>
              </div>
            </PosterCard>
          </div>

          <div className="md:col-span-7">
            <PosterCard title="Who It Serves" icon={Users} color="text-blue-400" className="h-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
                <BenefitCard title="AI Developers" icon={Server}>
                  Teams building autonomous agents who need to ensure safer outputs and prevent hallucination-driven logic errors.
                </BenefitCard>
                <BenefitCard title="Enterprise Systems" icon={Building}>
                  Large organizations deploying AI agents that require strict compliance, liability reduction, and execution-gating.
                </BenefitCard>
                <BenefitCard title="Governments &amp; Regulators" icon={Scale}>
                  Institutions tasked with tracking narrative drift, auditing AI policy decisions, and monitoring systemic risk.
                </BenefitCard>
                <BenefitCard title="Public Platforms" icon={Globe}>
                  Information networks seeking transparent, explainable trust metrics to rebuild user confidence in digital ecosystems.
                </BenefitCard>
              </div>
            </PosterCard>
          </div>

        </div>

        <PageNav currentPath="/investors" />
      </div>

      <Footer />
    </div>
  );
}

/* ── Sub-components ── */

function PosterCard({ title, icon: Icon, color, children, className = '' }) {
  return (
    <div className={`bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl hover:bg-black/50 transition-all ${className}`}>
      <div className="flex items-center gap-3 mb-4 border-b border-white/8 pb-3">
        <Icon className={`w-5 h-5 ${color} shrink-0`} />
        <h2 className="text-lg font-bold text-white tracking-wide">{title}</h2>
      </div>
      <div className="text-slate-200">{children}</div>
    </div>
  );
}

function ActionTag({ text }) {
  return (
    <div className="bg-black/50 border border-white/10 p-3 rounded-lg text-center text-sm font-medium text-amber-100/80 hover:bg-black/70 transition-all">
      {text}
    </div>
  );
}

function OutputItem({ text, icon: Icon }) {
  return (
    <div className="flex items-center gap-3 bg-black/50 border border-white/10 p-3 rounded-lg hover:bg-black/70 transition-all">
      <Icon className="w-4 h-4 text-emerald-400 shrink-0" />
      <span className="text-sm font-medium text-slate-200">{text}</span>
    </div>
  );
}

function InfraTag({ text }) {
  return (
    <div className="bg-black/50 border border-white/10 p-2 rounded-lg text-center text-xs text-cyan-200 font-medium hover:bg-black/70 transition-all">
      {text}
    </div>
  );
}

function BenefitCard({ title, icon: Icon, children }) {
  return (
    <div className="bg-black/50 border border-white/10 p-5 rounded-xl flex flex-col hover:bg-black/70 hover:border-white/20 transition-all">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 bg-white/5 rounded-lg">
          <Icon className="w-4 h-4 text-blue-400/80" />
        </div>
        <h3 className="font-semibold text-white text-sm">{title}</h3>
      </div>
      <p className="text-xs text-slate-400 leading-relaxed">{children}</p>
    </div>
  );
}
