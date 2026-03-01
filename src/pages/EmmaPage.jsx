import KinematicBackground from '../components/KinematicBackground';
import ContentNav from '../components/ContentNav';
import Footer from '../components/Footer';
import PageNav from '../components/PageNav';
import {
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
  CheckCircle2
} from 'lucide-react';

export default function EmmaPage() {
  return (
    <div className="flex flex-col min-h-screen text-slate-200 font-sans selection:bg-emerald-500/20 relative">

      <KinematicBackground />
      <ContentNav />

      <div className="flex-1 max-w-7xl mx-auto w-full relative z-10 px-4 md:px-8 pt-24 pb-16">

        {/* HEADER */}
        <header className="border-b border-white/10 pb-6 mb-10 flex flex-col md:flex-row justify-between items-start gap-6 pt-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-semibold mb-2">Section 04</p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white flex items-center gap-3">
              <Cloud className="w-9 h-9 text-emerald-400 shrink-0" />
              emma's Strategic Placement in the TruVector Architecture
            </h1>
            <p className="text-xl text-emerald-400 mt-2 font-light">
              Multi-Cloud Orchestration for Trust Infrastructure Activation
            </p>
          </div>
          <div className="bg-black/40 backdrop-blur-md border border-emerald-500/20 rounded-xl p-5 max-w-md text-sm text-emerald-100 shadow-xl">
            <strong className="text-white block mb-1 text-base">Core Position</strong>
            emma is not simply hosting TruVector. TruVector exercises the exact multi-cloud orchestration capabilities emma is built to provide.
          </div>
        </header>

        {/* TOP ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* STACK DIAGRAM */}
          <div className="lg:col-span-5">
            <PosterCard title="Where emma Sits in the Stack" icon={Layers} color="text-white">
              <p className="text-sm text-slate-400 mb-6">
                emma operates at the multi-cloud orchestration layer, enabling the infrastructure TruVector requires to operate efficiently, securely, and elastically.
              </p>

              <div className="flex flex-col items-center w-full space-y-2 font-medium text-sm">

                <div className="w-full bg-black/50 border border-white/10 py-3 px-4 rounded-lg text-center text-slate-300">
                  AI Applications / Autonomous Agents
                </div>

                <ArrowDown className="w-5 h-5 text-slate-600" />

                <div className="w-full bg-black/60 border border-white/15 rounded-xl py-3 px-4 text-center text-white font-semibold">
                  TruVector (Trust Arbitration Layer)
                </div>

                <ArrowDown className="w-5 h-5 text-slate-600" />

                <div className="w-full bg-black/50 border border-white/10 py-3 px-4 rounded-lg text-center text-slate-300">
                  Vector Storage + Model APIs + Retrieval Systems
                </div>

                <ArrowDown className="w-5 h-5 text-emerald-500/60" />

                {/* EMMA LAYER */}
                <div className="w-full bg-emerald-950/50 border-2 border-emerald-500/70 py-4 px-4 rounded-xl text-center shadow-[0_0_30px_rgba(16,185,129,0.15)] relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-400/0 via-emerald-400 to-emerald-400/0" />
                  <strong className="text-emerald-300 text-base block mb-1">emma CLOUD ORCHESTRATION</strong>
                  <span className="text-emerald-100/70 text-xs uppercase tracking-wider">Multi-Cloud Compute, Networking &amp; Governance</span>
                </div>

                <ArrowDown className="w-5 h-5 text-emerald-500/40" />

                <div className="w-full bg-black/40 border border-white/8 border-dashed py-3 px-4 rounded-lg text-center text-slate-500">
                  Physical Cloud Infrastructure (AWS, GCP, Azure)
                </div>

              </div>
            </PosterCard>
          </div>

          {/* SYMMETRY & CREDIT PHILOSOPHY */}
          <div className="lg:col-span-7 space-y-6 flex flex-col">

            <PosterCard title="Strategic Symmetry" icon={GitMerge} color="text-cyan-400" className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-black/50 border border-white/10 p-5 rounded-xl hover:bg-black/70 transition-all">
                  <h4 className="text-cyan-400 font-bold mb-2 flex items-center gap-2 text-sm">
                    <Target className="w-4 h-4" /> InTellMe's Mission
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Introduce structured probabilistic trust scoring into AI execution pipelines.
                  </p>
                </div>
                <div className="bg-emerald-950/30 border border-emerald-900/50 p-5 rounded-xl hover:bg-emerald-950/50 transition-all">
                  <h4 className="text-emerald-400 font-bold mb-2 flex items-center gap-2 text-sm">
                    <Cloud className="w-4 h-4" /> emma's Mission
                  </h4>
                  <p className="text-sm text-emerald-100/80 leading-relaxed">
                    Remove infrastructure friction and vendor lock-in across cloud environments.
                  </p>
                </div>
              </div>
              <div className="bg-black/50 border border-white/10 rounded-xl p-5 text-center">
                <p className="text-white font-medium text-sm">
                  <strong className="text-cyan-400">Together:</strong> emma enables the infrastructure layer that allows TruVector to scale without architectural compromise.
                </p>
              </div>
            </PosterCard>

            <PosterCard title="Credit Utilization Philosophy" icon={BarChart3} color="text-amber-400">
              <p className="text-sm text-slate-300 mb-4">
                emma's credits would not be used for uncontrolled compute burn. They are applied through a staged, performance-driven deployment model:
              </p>
              <div className="space-y-2.5">
                <PhaseRow number="Phase 1" text="Baseline ingestion and arbitration pilot" />
                <PhaseRow number="Phase 2" text="Measured scaling and drift modeling" />
                <PhaseRow number="Phase 3" text="Selective accelerator deployment based on benchmarks" />
              </div>
            </PosterCard>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

          <PosterCard title="What TruVector Requires" icon={Database} color="text-blue-400">
            <p className="text-sm text-slate-400 mb-4">
              TruVector is a distributed, API-driven system that has a <strong className="text-white">multi-cloud dependency profile</strong> rather than a single-provider workload:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <RequirementBadge text="Cross-provider model access" icon={Network} />
              <RequirementBadge text="Managed vector storage" icon={Database} />
              <RequirementBadge text="Elastic compute scaling" icon={Cpu} />
              <RequirementBadge text="Cost-efficient data transfer" icon={Zap} />
              <RequirementBadge text="Governance &amp; IaC enforcement" icon={Lock} />
              <RequirementBadge text="Low-latency retrieval" icon={Activity} />
            </div>
          </PosterCard>

          <PosterCard title="What emma Enables" icon={CheckCircle2} color="text-emerald-400">
            <div className="space-y-4">
              <FeatureRow
                number="1"
                title="Unified Multi-Cloud Control Plane"
                desc="Deploy and manage infrastructure across AWS, Azure, GCP without vendor lock-in."
              />
              <FeatureRow
                number="2"
                title="Networking Backbone"
                desc="Reduced cross-cloud egress costs and improved latency for vector retrieval."
              />
              <FeatureRow
                number="3"
                title="Elastic Compute Aggregation"
                desc="Access to CPU and GPU resources across providers through unified orchestration."
              />
              <FeatureRow
                number="4"
                title="Governance Enforcement"
                desc="Infrastructure-as-code integration with standardized policy enforcement."
              />
            </div>
          </PosterCard>
        </div>

        {/* VALIDATION BANNER */}
        <div className="mt-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/8 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-emerald-400 mb-2">Why This Validates emma's Model</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                TruVector is not a generic SaaS workload. It is vector-intensive, API-dependent, cross-provider integrated, latency-aware, and governance-sensitive.
              </p>
            </div>
            <div className="flex-1 w-full grid grid-cols-2 gap-3">
              <ValidationTag text="Multi-cloud cost optimization" />
              <ValidationTag text="Cross-provider networking" />
              <ValidationTag text="Accelerator aggregation" />
              <ValidationTag text="Unified infrastructure governance" />
            </div>
          </div>
          <div className="mt-6 text-center border-t border-white/10 pt-5">
            <p className="text-base font-medium text-white">
              TruVector provides a high-complexity, measurable test case for emma's orchestration value.
            </p>
          </div>
        </div>

        <PageNav currentPath="/emma" />
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

function PhaseRow({ number, text }) {
  return (
    <div className="flex items-center gap-4 bg-black/50 border border-white/10 p-3 rounded-lg hover:bg-black/70 transition-all">
      <div className="bg-black/60 border border-amber-500/30 text-amber-400 font-bold px-3 py-1 rounded-lg text-xs shrink-0">
        {number}
      </div>
      <p className="text-sm text-slate-200">{text}</p>
    </div>
  );
}

function RequirementBadge({ text, icon: Icon }) {
  return (
    <div className="flex items-center gap-2 bg-black/50 border border-white/10 rounded-lg p-2.5 hover:bg-black/70 transition-all">
      <Icon className="w-4 h-4 text-blue-400/80 shrink-0" />
      <span className="text-xs font-medium text-slate-300">{text}</span>
    </div>
  );
}

function FeatureRow({ number, title, desc }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-6 h-6 rounded-lg bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
        {number}
      </div>
      <div>
        <h4 className="text-sm font-bold text-emerald-100 mb-0.5">{title}</h4>
        <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function ValidationTag({ text }) {
  return (
    <div className="bg-black/50 border border-emerald-900/50 p-3 rounded-lg text-center text-xs text-emerald-200 font-medium hover:bg-black/70 transition-all">
      {text}
    </div>
  );
}
