import KinematicBackground from '../components/KinematicBackground';
import ContentNav from '../components/ContentNav';
import Footer from '../components/Footer';
import PageNav from '../components/PageNav';
import {
  TrendingUp, Shield, Database, Cpu, Network,
  Activity, CheckCircle2, Zap, Layers, Target,
  Server, ArrowRight, DollarSign, LayoutTemplate, BarChart3
} from 'lucide-react';

export default function ThePlanPage() {
  return (
    <div className="flex flex-col min-h-screen text-slate-200 font-sans selection:bg-emerald-500/20 relative">

      <KinematicBackground />
      <ContentNav />

      <div className="flex-1 relative z-10 pt-24 pb-16">
        <div className="w-full text-slate-200 p-4 md:p-8">
          <div className="max-w-7xl mx-auto space-y-8">

            {/* HEADER */}
            <header className="border-b border-white/10 pb-6 mb-8">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-semibold mb-2">Section 05</p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white flex items-center gap-3">
                <TrendingUp className="w-10 h-10 text-emerald-500 shrink-0" />
                Infrastructure Activation Plan
              </h1>
              <p className="text-xl text-emerald-300 mt-2 font-light">
                Structured Credit Deployment &amp; Scalable Trust Architecture
              </p>
            </header>

            {/* INTRO BAR */}
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl flex flex-col md:flex-row gap-8 items-center justify-between">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-3">Modular Activation</h2>
                <p className="text-lg text-slate-300 leading-relaxed">
                  TruVector is architected in modular activation phases. Each phase delivers operational capability independently while compounding toward full-scale institutional deployment.
                </p>
              </div>
              <div className="flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm text-slate-300 md:border-l border-white/10 md:pl-8 w-full md:w-auto">
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Immediate deployment readiness</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Predictable compute utilization</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Progressive robustness</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Responsible credit scaling</span>
                <span className="flex items-center gap-2 sm:col-span-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Governance-grade infrastructure alignment</span>
              </div>
            </div>

            {/* MAIN LAYOUT: 8-col Phases / 4-col Sidebar */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

              {/* LEFT COLUMN: THE 3 PHASES */}
              <div className="lg:col-span-8 space-y-8">

                {/* PHASE I */}
                <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl hover:bg-black/50 transition-all relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                        <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-md text-sm font-mono border border-emerald-500/30">Phase I</span>
                        Core Arbitration Engine
                      </h2>
                      <p className="text-emerald-300 mt-2 text-lg">Operational Trust Layer Activation</p>
                    </div>
                    <div className="bg-black/50 border border-white/10 px-5 py-3 rounded-xl text-center shadow-inner shrink-0">
                      <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-1 flex items-center justify-center gap-1"><DollarSign className="w-3 h-3" /> Target Credit</p>
                      <p className="text-2xl font-mono text-emerald-400 font-bold">$40K &ndash; $75K</p>
                    </div>
                  </div>
                  <p className="text-slate-300 mb-6 font-medium text-lg">Phase I establishes TruVector as a deployable probabilistic arbitration service.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-4">
                      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2 border-b border-white/5 pb-2"><Server className="w-4 h-4 text-indigo-400" /> Infrastructure Activated</h3>
                      <ul className="space-y-2">
                        <ListItem text="Assertion embedding pipeline" />
                        <ListItem text="Authority-weighted vector retrieval" />
                        <ListItem text="Structured corpus indexing" />
                        <ListItem text="Probabilistic alignment scoring engine" />
                        <ListItem text="Contradictory evidence detection" />
                        <ListItem text="JSON arbitration artifact generation" />
                        <ListItem text="Cost-per-assertion telemetry logging" />
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2 border-b border-white/5 pb-2"><Activity className="w-4 h-4 text-indigo-400" /> Workload Characteristics</h3>
                      <ul className="space-y-2">
                        <ListItem text="CPU-dominant embedding workloads" />
                        <ListItem text="Persistent vector database operations" />
                        <ListItem text="Elastic inference scaling" />
                        <ListItem text="Controlled corpus ingestion" />
                        <ListItem text="Governance-ready logging" />
                      </ul>
                    </div>
                  </div>
                  <div className="bg-black/50 border border-white/10 rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-8 shadow-inner">
                    <div>
                      <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-4 flex items-center gap-2"><Zap className="w-4 h-4" /> Deployment Capacity</h3>
                      <ul className="space-y-3 text-sm text-slate-300">
                        <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" /><span><span className="font-semibold text-white">10k–50k</span> evaluated assertions/mo</span></li>
                        <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" /><span><span className="font-semibold text-white">10–100</span> retrieval queries/assertion</span></li>
                        <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" /><span>Stable corpus: <span className="font-semibold text-white">100k–1M documents</span></span></li>
                        <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" /><span>Controlled ingestion cadence</span></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-4 flex items-center gap-2"><Target className="w-4 h-4" /> Deliverable Capability</h3>
                      <p className="text-sm text-slate-200 mb-3 font-medium">Insert a probabilistic evidentiary alignment score prior to AI execution. Suitable for:</p>
                      <ul className="space-y-2 text-sm text-slate-400 pl-4 border-l-2 border-emerald-500/30">
                        <li>Enterprise document arbitration</li>
                        <li>Policy consistency verification</li>
                        <li>Pre-execution AI output evaluation</li>
                        <li>Controlled API-based scoring services</li>
                      </ul>
                      <div className="mt-4 inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded text-xs text-emerald-300 font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Production-scoped &amp; economically measurable
                      </div>
                    </div>
                  </div>
                </div>

                {/* PHASE II */}
                <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl hover:bg-black/50 transition-all relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                        <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-md text-sm font-mono border border-blue-500/30">Phase II</span>
                        Multi-Model Triangulation
                      </h2>
                      <p className="text-blue-300 mt-2 text-lg">Cross-Model Alignment Resilience</p>
                    </div>
                    <div className="bg-black/50 border border-white/10 px-5 py-3 rounded-xl text-center shadow-inner shrink-0">
                      <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-1 flex items-center justify-center gap-1"><DollarSign className="w-3 h-3" /> Target Credit</p>
                      <p className="text-2xl font-mono text-blue-400 font-bold">$75K &ndash; $150K</p>
                    </div>
                  </div>
                  <p className="text-slate-300 mb-6 font-medium text-lg">Phase II expands arbitration robustness through structured model triangulation.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-4">
                      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2 border-b border-white/5 pb-2"><Network className="w-4 h-4 text-indigo-400" /> Infrastructure Expansion</h3>
                      <ul className="space-y-2">
                        <ListItem text="Parallel assertion parsing across models" />
                        <ListItem text="Distributed embedding generation" />
                        <ListItem text="Cross-model semantic comparison" />
                        <ListItem text="Confidence delta scoring" />
                        <ListItem text="Disagreement weighting algorithms" />
                        <ListItem text="Enhanced contradiction density analysis" />
                        <ListItem text="Drift detection enhancement" />
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2 border-b border-white/5 pb-2"><Cpu className="w-4 h-4 text-indigo-400" /> Workload Profile</h3>
                      <ul className="space-y-2">
                        <ListItem text="Increased embedding throughput" />
                        <ListItem text="Higher memory vector search" />
                        <ListItem text="Parallel inference orchestration" />
                        <ListItem text="Controlled batch evaluation pipelines" />
                      </ul>
                    </div>
                  </div>
                  <div className="bg-black/50 border border-white/10 rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-8 shadow-inner">
                    <div>
                      <h3 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-4 flex items-center gap-2"><Zap className="w-4 h-4" /> Deployment Capacity</h3>
                      <ul className="space-y-3 text-sm text-slate-300">
                        <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" /><span><span className="font-semibold text-white">50k–250k</span> evaluated assertions/mo</span></li>
                        <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" /><span><span className="font-semibold text-white">3-model</span> arbitration minimum</span></li>
                        <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" /><span>Corpus expansion: <span className="font-semibold text-white">1M–5M documents</span></span></li>
                        <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" /><span>Scheduled authority recalibration jobs</span></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-4 flex items-center gap-2"><Target className="w-4 h-4" /> Capability Enhancement</h3>
                      <p className="text-sm text-slate-300 leading-relaxed mb-3">
                        Reduces single-model bias and improves probabilistic stability through ensemble convergence.
                      </p>
                      <div className="bg-blue-500/10 border border-blue-500/20 p-3 rounded-lg text-sm text-blue-200">
                        The system now evaluates not only corpus alignment, but <strong className="text-white">inter-model alignment variance.</strong>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PHASE III */}
                <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl hover:bg-black/50 transition-all relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500/5 rounded-full blur-3xl pointer-events-none" />
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                        <span className="bg-fuchsia-500/20 text-fuchsia-400 px-3 py-1 rounded-md text-sm font-mono border border-fuchsia-500/30">Phase III</span>
                        Governance &amp; Scale
                      </h2>
                      <p className="text-fuchsia-300 mt-2 text-lg">Institutional-Grade Trust Infrastructure</p>
                    </div>
                    <div className="bg-black/50 border border-white/10 px-5 py-3 rounded-xl text-center shadow-inner shrink-0">
                      <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-1 flex items-center justify-center gap-1"><DollarSign className="w-3 h-3" /> Target Credit</p>
                      <p className="text-2xl font-mono text-fuchsia-400 font-bold">$200K &ndash; $300K</p>
                    </div>
                  </div>
                  <p className="text-slate-300 mb-6 font-medium text-lg">Phase III transitions TruVector from controlled deployment to scalable trust infrastructure.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-4">
                      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2 border-b border-white/5 pb-2"><Layers className="w-4 h-4 text-indigo-400" /> Infrastructure Activation</h3>
                      <ul className="space-y-2">
                        <ListItem text="Large-scale corpus ingestion pipelines" />
                        <ListItem text="Authority recalibration & weighting jobs" />
                        <ListItem text="Longitudinal semantic drift history" />
                        <ListItem text="Multi-tenant scoring endpoints" />
                        <ListItem text="Pre-execution gating simulations" />
                        <ListItem text="Audit-grade storage & reporting" />
                        <ListItem text="Governance-ready API orchestration" />
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2 border-b border-white/5 pb-2"><BarChart3 className="w-4 h-4 text-indigo-400" /> Workload Profile</h3>
                      <ul className="space-y-2">
                        <ListItem text="High-volume vector indexing" />
                        <ListItem text="Batch ingestion compute" />
                        <ListItem text="Elastic orchestration across workloads" />
                        <ListItem text="Multi-model arbitration at scale" />
                        <ListItem text="Persistent compliance-grade logging" />
                      </ul>
                    </div>
                  </div>
                  <div className="bg-black/50 border border-white/10 rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-8 shadow-inner">
                    <div>
                      <h3 className="text-sm font-bold text-fuchsia-400 uppercase tracking-wider mb-4 flex items-center gap-2"><Zap className="w-4 h-4" /> Deployment Capacity</h3>
                      <ul className="space-y-3 text-sm text-slate-300">
                        <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 mt-1.5 shrink-0" /><span><span className="font-semibold text-white">250k–1M+</span> evaluated assertions/mo</span></li>
                        <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 mt-1.5 shrink-0" /><span>Corpus scale: <span className="font-semibold text-white">5M–20M+ documents</span></span></li>
                        <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 mt-1.5 shrink-0" /><span>Distributed arbitration across endpoints</span></li>
                        <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 mt-1.5 shrink-0" /><span>Continuous drift monitoring pipelines</span></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-fuchsia-400 uppercase tracking-wider mb-4 flex items-center gap-2"><Target className="w-4 h-4" /> Institutional Capability</h3>
                      <p className="text-sm text-slate-200 mb-3 font-medium">Phase III enables TruVector to operate as:</p>
                      <ul className="space-y-2 text-sm text-slate-400 pl-4 border-l-2 border-fuchsia-500/30">
                        <li>A pre-execution evaluation layer for autonomous systems</li>
                        <li>A governance-ready arbitration service</li>
                        <li>A scalable probabilistic trust infrastructure</li>
                      </ul>
                      <p className="text-xs text-fuchsia-300/70 mt-4 italic">Supports high-volume, distributed vector workloads aligned with advanced cloud orchestration.</p>
                    </div>
                  </div>
                </div>

              </div>{/* end left column */}

              {/* RIGHT COLUMN: SIDEBAR */}
              <div className="lg:col-span-4 space-y-8">
                <div className="bg-black/60 backdrop-blur-xl border border-indigo-500/30 rounded-2xl p-6 shadow-2xl sticky top-24">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                    <LayoutTemplate className="w-6 h-6 text-indigo-400" />
                    <h2 className="text-xl font-bold text-white tracking-wide">Compute Class Sidebar</h2>
                  </div>
                  <p className="text-sm text-indigo-200 mb-6 font-medium leading-relaxed">
                    <strong className="text-white block mb-1">Workload Composition &amp; Resource Discipline</strong>
                    TruVector workloads are intentionally structured for predictability and modular scaling.
                  </p>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-4">Core Workload Classes</h3>
                      <div className="space-y-5">
                        <SidebarItem title="Embedding Generation" desc="Moderate compute. Batch or real-time. Optimized for reuse." />
                        <SidebarItem title="Vector Retrieval & Similarity Search" desc="High read frequency. Memory-sensitive. Indexed for efficiency." />
                        <SidebarItem title="Authority Weighting & Scoring" desc="Lightweight aggregation. Deterministic computation layer." />
                        <SidebarItem title="Logging & Audit Telemetry" desc="Persistent storage. Governance-ready structuring." />
                        <SidebarItem title="Corpus Ingestion (Phase II–III)" desc="Scheduled batch pipelines. Controlled scaling cadence." />
                      </div>
                    </div>
                    <div className="pt-6 border-t border-white/10">
                      <h3 className="text-xs uppercase tracking-widest font-bold text-emerald-400 mb-4">Cost Discipline Principles</h3>
                      <ul className="space-y-3 text-sm text-slate-300">
                        <li className="flex items-start gap-3"><ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> Embedding reuse prioritized</li>
                        <li className="flex items-start gap-3"><ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> Cached retrieval where appropriate</li>
                        <li className="flex items-start gap-3"><ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> Controlled ingestion velocity</li>
                        <li className="flex items-start gap-3"><ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> Measurable cost-per-assertion</li>
                        <li className="flex items-start gap-3"><ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> Progressive scale without architectural redesign</li>
                      </ul>
                    </div>
                    <div className="bg-indigo-500/10 border border-indigo-500/30 p-5 rounded-xl shadow-inner text-center">
                      <p className="text-sm text-indigo-200 font-medium leading-relaxed">
                        Credits accelerate scale and ensemble resilience.
                        <span className="block mt-2 text-white font-bold tracking-wide">Foundational viability exists at Phase I.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>{/* end main grid */}

            {/* FOOTER WIDE CARD: ARCHITECTURAL INTEGRITY */}
            <div className="bg-gradient-to-r from-black/60 via-slate-900/80 to-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl mt-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent pointer-events-none" />
              <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                <div className="p-5 bg-black/50 border border-white/10 rounded-2xl shrink-0 shadow-inner">
                  <Shield className="w-10 h-10 text-indigo-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Architectural Integrity Across All Phases</h2>
                  <ul className="space-y-2 text-slate-300 mb-6 text-lg">
                    <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 shrink-0" /> Phase I operates as a self-contained arbitration service.</li>
                    <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 shrink-0" /> Phases II and III expand robustness and governance depth.</li>
                    <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 shrink-0" /><strong className="text-white">No architectural redesign is required between phases.</strong></li>
                    <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 shrink-0" /> Credit scaling directly increases capability without structural disruption.</li>
                  </ul>
                  <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 px-4 py-2 rounded-lg text-sm text-indigo-200 font-medium">
                    <Target className="w-4 h-4 text-indigo-400" />
                    This modular progression ensures disciplined infrastructure growth rather than experimental expansion.
                  </div>
                </div>
              </div>
            </div>

            <PageNav currentPath="/plan" />

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

/* ── Sub-components ── */

function ListItem({ text }) {
  return (
    <li className="flex items-start gap-3 text-sm text-slate-300">
      <CheckCircle2 className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
      <span className="leading-snug">{text}</span>
    </li>
  );
}

function SidebarItem({ title, desc }) {
  return (
    <div className="border-l-2 border-indigo-500/50 pl-4 py-1">
      <h4 className="text-sm font-bold text-white mb-1">{title}</h4>
      <p className="text-sm text-slate-400 leading-snug">{desc}</p>
    </div>
  );
}
