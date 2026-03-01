import KinematicBackground from '../components/KinematicBackground';
import ContentNav from '../components/ContentNav';
import Footer from '../components/Footer';
import PageNav from '../components/PageNav';
import {
  Server,
  Cloud,
  Database,
  Network,
  Cpu,
  GitMerge,
  Activity,
  AlertTriangle,
  Binary,
  FileText,
  CheckCircle,
  ShieldCheck,
  Terminal
} from 'lucide-react';

export default function TechPage() {
  return (
    <div className="flex flex-col min-h-screen text-slate-200 font-sans selection:bg-emerald-500/20 relative">

      <KinematicBackground />
      <ContentNav />

      <div className="flex-1 max-w-7xl mx-auto w-full relative z-10 px-4 md:px-8 pt-24 pb-16">

        {/* HEADER */}
        <header className="border-b border-white/10 pb-6 mb-10 flex flex-col md:flex-row justify-between items-start gap-6 pt-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-semibold mb-2">Section 03</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white flex items-center gap-3">
              <Terminal className="w-9 h-9 text-white shrink-0" />
              TruVector Technical Architecture
            </h1>
            <p className="text-xl text-slate-400 mt-2 font-light">
              Probabilistic Arbitration Infrastructure for AI Output Systems
            </p>
          </div>
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-5 max-w-sm text-sm text-slate-300 shadow-xl">
            <strong className="text-white block mb-1">Positioning</strong>
            TruVector does not compete with generative models. It operates as a probabilistic arbitration layer between generation and execution.
          </div>
        </header>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* COLUMN 1 */}
          <div className="md:col-span-4 space-y-6">

            <PosterCard title="System Overview" icon={Network} color="text-slate-300">
              <p className="mb-4 text-sm leading-relaxed">
                TruVector provides structured probabilistic arbitration infrastructure for AI-generated declarative outputs.
              </p>
              <div className="bg-black/50 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-slate-200 font-medium text-sm">
                  The core product, TruVector, performs post-generation semantic alignment scoring against structured corpora and returns a machine-readable arbitration object.
                </p>
              </div>
              <p className="text-sm text-slate-300">
                This system operates as an execution-gating layer for AI-driven workflows.
              </p>
            </PosterCard>

            <PosterCard title="The Problem Space" icon={AlertTriangle} color="text-amber-400">
              <p className="mb-3 text-sm text-slate-300">Large Language Models (LLMs):</p>
              <ul className="space-y-2 mb-4">
                <ListItem text="Optimize token probability distributions" />
                <ListItem text="Do not independently verify evidentiary alignment" />
                <ListItem text="Do not track semantic drift longitudinally" />
                <ListItem text="Do not quantify cross-corpus divergence" />
              </ul>
              <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                <p className="text-amber-200 text-sm font-semibold text-center uppercase tracking-wider">
                  As AI systems transition to autonomous execution, output uncertainty becomes an infrastructure-level risk.
                </p>
              </div>
            </PosterCard>

          </div>

          {/* COLUMN 2 */}
          <div className="md:col-span-8 space-y-6">

            <PosterCard title="TruVector Architecture" icon={Cpu} color="text-emerald-400">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="border-l-2 border-emerald-500/25 pl-4">
                    <h4 className="text-emerald-400 font-semibold text-sm mb-1">1. Input</h4>
                    <p className="text-xs text-slate-400">AI-generated assertion/output + Context metadata (source, time, domain, model).</p>
                  </div>
                  <div className="border-l-2 border-emerald-500/40 pl-4">
                    <h4 className="text-emerald-400 font-semibold text-sm mb-1">2. Semantic Encoding</h4>
                    <p className="text-xs text-slate-400">Embedding generation &bull; Token normalization &bull; Domain tagging.</p>
                  </div>
                  <div className="border-l-2 border-emerald-500/55 pl-4">
                    <h4 className="text-emerald-400 font-semibold text-sm mb-1">3. Vector Retrieval</h4>
                    <p className="text-xs text-slate-400">kNN search over structured corpora &bull; Authority-weighted scoring &bull; Time-indexed filtering.</p>
                  </div>
                  <div className="border-l-2 border-emerald-500/70 pl-4">
                    <h4 className="text-emerald-400 font-semibold text-sm mb-1">4. Cross-Model Arbitration</h4>
                    <p className="text-xs text-slate-400">Multi-model triangulation &bull; Divergence scoring &bull; Confidence aggregation.</p>
                  </div>
                  <div className="border-l-2 border-emerald-500 pl-4">
                    <h4 className="text-emerald-400 font-semibold text-sm mb-1">5. Alignment Computation</h4>
                    <p className="text-xs text-slate-400">Cosine similarity differentials &bull; Drift vector calculation &bull; Velocity &amp; acceleration modeling.</p>
                  </div>
                </div>

                <div className="flex flex-col">
                  <h4 className="text-emerald-300 font-semibold text-sm mb-3">6. Structured Output Artifact</h4>
                  <pre className="flex-1 bg-black/60 border border-white/10 rounded-lg p-4 font-mono text-xs text-slate-300 overflow-x-auto whitespace-pre leading-relaxed">
                    <span className="text-slate-500">{'// Machine-readable arbitration object'}</span>{'\n'}
                    <span className="text-emerald-400">{'{'}</span>{'\n'}
                    {'  '}<span className="text-blue-300">"alignment_score"</span>: <span className="text-orange-300">float</span>,{'\n'}
                    {'  '}<span className="text-blue-300">"confidence_interval"</span>: <span className="text-orange-300">float</span>,{'\n'}
                    {'  '}<span className="text-blue-300">"supporting_evidence"</span>: <span className="text-slate-400">[refs]</span>,{'\n'}
                    {'  '}<span className="text-blue-300">"contradictory_evidence"</span>: <span className="text-slate-400">[refs]</span>,{'\n'}
                    {'  '}<span className="text-blue-300">"authority_weight"</span>: <span className="text-emerald-200">metric</span>,{'\n'}
                    {'  '}<span className="text-blue-300">"semantic_velocity"</span>: <span className="text-slate-500">optional</span>,{'\n'}
                    {'  '}<span className="text-blue-300">"timestamp"</span>: <span className="text-orange-300">"ISO_8601"</span>{'\n'}
                    <span className="text-emerald-400">{'}'}</span>
                  </pre>
                </div>
              </div>
            </PosterCard>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

          <div className="space-y-6 flex flex-col">
            <PosterCard title="Mathematical Foundation" icon={Binary} color="text-white" className="flex-1">
              <ul className="space-y-2 mb-4">
                <ListItem text="Vector-space semantic modeling" />
                <ListItem text="Bayesian confidence aggregation" />
                <ListItem text="Magnitude &times; Direction signal modeling" />
                <ListItem text="Authority-weighted clustering" />
                <ListItem text="Time-windowed embedding differentials" />
              </ul>
              <div className="p-3 bg-black/50 border border-white/10 rounded-lg">
                <p className="text-sm text-slate-300 font-medium">
                  No deterministic truth certification is performed. All outputs are probabilistic and auditable.
                </p>
              </div>
            </PosterCard>

            <PosterCard title="Data Scope" icon={Database} color="text-blue-400">
              <div className="flex flex-wrap gap-2 mb-4">
                <DataBadge text="Public structured corpora" />
                <DataBadge text="Regulatory archives" />
                <DataBadge text="Research abstracts" />
                <DataBadge text="Policy documentation" />
                <DataBadge text="Enterprise knowledge bases" />
              </div>
              <p className="text-sm text-slate-300">
                TruVector evaluates semantic outputs, <strong className="text-blue-300">not</strong> raw model internals.
              </p>
            </PosterCard>
          </div>

          <div className="space-y-6 flex flex-col">
            <PosterCard title="Deployment Profile" icon={Server} color="text-cyan-400" className="flex-1">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-3">Workload Characteristics</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-center gap-2"><Activity className="w-3 h-3 text-cyan-500/70" /> API-driven</li>
                    <li className="flex items-center gap-2"><Database className="w-3 h-3 text-cyan-500/70" /> Vector retrieval intensive</li>
                    <li className="flex items-center gap-2"><Cpu className="w-3 h-3 text-cyan-500/70" /> Embedding generation bounded</li>
                    <li className="flex items-center gap-2"><GitMerge className="w-3 h-3 text-cyan-500/70" /> Cross-model inference</li>
                    <li className="flex items-center gap-2"><ShieldCheck className="w-3 h-3 text-cyan-500/70" /> Governance &amp; IaC enforced</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-3">Infra Requirements</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-center gap-2"><Database className="w-3 h-3 text-cyan-500/70" /> Managed vector database</li>
                    <li className="flex items-center gap-2"><Cloud className="w-3 h-3 text-cyan-500/70" /> Multi-cloud API access</li>
                    <li className="flex items-center gap-2"><Network className="w-3 h-3 text-cyan-500/70" /> Elastic compute scaling</li>
                    <li className="flex items-center gap-2"><Activity className="w-3 h-3 text-cyan-500/70" /> Latency-sensitive retrieval</li>
                  </ul>
                </div>
              </div>

              <div className="bg-black/50 border border-white/10 rounded-lg p-4">
                <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-2">Artifact Consumers</h4>
                <div className="flex flex-wrap gap-2">
                  <ConsumerTag text="AI agents" />
                  <ConsumerTag text="Enterprise workflows" />
                  <ConsumerTag text="Policy engines" />
                  <ConsumerTag text="Audit systems" />
                </div>
              </div>
            </PosterCard>
          </div>
        </div>

        <PageNav currentPath="/architecture" />
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

function ListItem({ text }) {
  return (
    <li className="flex items-start gap-2 text-sm text-slate-300 list-none">
      <CheckCircle className="w-4 h-4 text-amber-500/80 mt-0.5 shrink-0" />
      <span>{text}</span>
    </li>
  );
}

function DataBadge({ text }) {
  return (
    <div className="px-2.5 py-1.5 bg-black/50 border border-white/10 text-slate-300 text-xs rounded-lg flex items-center gap-1.5 hover:bg-black/70 transition-all">
      <FileText className="w-3 h-3 text-blue-400/80" />
      {text}
    </div>
  );
}

function ConsumerTag({ text }) {
  return (
    <span className="px-2.5 py-1 bg-black/50 border border-cyan-500/20 text-cyan-300 rounded-lg text-xs font-medium">
      {text}
    </span>
  );
}
