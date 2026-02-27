import React from 'react';
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
  Globe,
  Terminal,
  AlertTriangle,
  Binary,
  FileText,
  CheckCircle,
  ShieldCheck
} from 'lucide-react';

export default function TechPage() {
  return (
    <div className="min-h-screen text-slate-200 p-4 md:p-8 font-sans selection:bg-emerald-500/30 relative">
      
      {/* KINEMATIC BACKGROUND */}
      <KinematicBackground />

      <div className="max-w-7xl mx-auto space-y-6 relative z-10">
        
        {/* HEADER / TITLE BLOCK */}
        <header className="border-b border-slate-800 pb-6 mb-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white flex items-center gap-3 justify-center md:justify-start">
              <Terminal className="w-10 h-10 text-indigo-500" />
              InTellMe
            </h1>
            <p className="text-xl text-indigo-300 mt-2 font-light">
              Probabilistic Arbitration Infrastructure for AI Output Systems
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg max-w-sm text-sm text-slate-400">
            <strong className="text-white">Positioning:</strong> InTellMe does not compete with generative models. It operates as a probabilistic arbitration layer between generation and execution.
          </div>
        </header>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* COLUMN 1: SYSTEM & PROBLEM (Left) */}
          <div className="md:col-span-4 space-y-6">
            
            {/* System Overview */}
            <PosterCard title="System Overview" icon={Network} color="text-indigo-400">
              <p className="mb-4">
                InTellMe develops structured probabilistic arbitration infrastructure for AI-generated declarative outputs.
              </p>
              <div className="bg-indigo-500/10 border border-indigo-500/20 p-3 rounded-md mb-4">
                <p className="text-indigo-200 font-medium text-sm">
                  The core product, TruVector, performs post-generation semantic alignment scoring against structured corpora and returns a machine-readable arbitration object.
                </p>
              </div>
              <p className="text-sm text-slate-300">
                This system operates as an execution-gating layer for AI-driven workflows.
              </p>
            </PosterCard>

            {/* Problem Space */}
            <PosterCard title="The Problem Space" icon={AlertTriangle} color="text-amber-400">
              <p className="mb-3 text-sm text-slate-300">Large Language Models (LLMs):</p>
              <ul className="space-y-2 mb-4">
                <ListItem text="Optimize token probability distributions" />
                <ListItem text="Do not independently verify evidentiary alignment" />
                <ListItem text="Do not track semantic drift longitudinally" />
                <ListItem text="Do not quantify cross-corpus divergence" />
              </ul>
              <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-md">
                <p className="text-amber-200 text-sm font-semibold text-center uppercase tracking-wider">
                  As AI systems transition to autonomous execution, output uncertainty becomes an infrastructure-level risk.
                </p>
              </div>
            </PosterCard>

          </div>

          {/* COLUMN 2: ARCHITECTURE & ARTIFACT (Center/Right) */}
          <div className="md:col-span-8 space-y-6">
            
            {/* Architecture */}
            <PosterCard title="TruVector Architecture" icon={Cpu} color="text-emerald-400">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="border-l-2 border-emerald-500/30 pl-4">
                    <h4 className="text-emerald-400 font-semibold text-sm mb-1">1. Input</h4>
                    <p className="text-xs text-slate-400">AI-generated assertion/output + Context metadata (source, time, domain, model).</p>
                  </div>
                  <div className="border-l-2 border-emerald-500/50 pl-4">
                    <h4 className="text-emerald-400 font-semibold text-sm mb-1">2. Semantic Encoding</h4>
                    <p className="text-xs text-slate-400">Embedding generation • Token normalization • Domain tagging.</p>
                  </div>
                  <div className="border-l-2 border-emerald-500/70 pl-4">
                    <h4 className="text-emerald-400 font-semibold text-sm mb-1">3. Vector Retrieval</h4>
                    <p className="text-xs text-slate-400">kNN search over structured corpora • Authority-weighted scoring • Time-indexed filtering.</p>
                  </div>
                  <div className="border-l-2 border-emerald-500/90 pl-4">
                    <h4 className="text-emerald-400 font-semibold text-sm mb-1">4. Cross-Model Arbitration</h4>
                    <p className="text-xs text-slate-400">Multi-model triangulation • Divergence scoring • Confidence aggregation.</p>
                  </div>
                  <div className="border-l-2 border-emerald-500 pl-4">
                    <h4 className="text-emerald-400 font-semibold text-sm mb-1">5. Alignment Computation</h4>
                    <p className="text-xs text-slate-400">Cosine similarity differentials • Drift vector calculation • Velocity & acceleration modeling.</p>
                  </div>
                </div>

                <div className="flex flex-col h-full">
                  <h4 className="text-emerald-300 font-semibold text-sm mb-3">6. Structured Output Artifact</h4>
                  <pre className="flex-1 bg-slate-950 border border-slate-800 rounded-lg p-4 font-mono text-xs text-slate-300 overflow-x-auto whitespace-pre">
                    <span className="text-slate-500">// Machine-readable truth object</span>{"\n"}
                    <span className="text-emerald-400">{"{"}</span>{"\n"}
                    {"  "}<span className="text-blue-300">"alignment_score"</span>: <span className="text-orange-300">float</span>,{"\n"}
                    {"  "}<span className="text-blue-300">"confidence_interval"</span>: <span className="text-orange-300">float</span>,{"\n"}
                    {"  "}<span className="text-blue-300">"supporting_evidence"</span>: <span className="text-slate-400">[references]</span>,{"\n"}
                    {"  "}<span className="text-blue-300">"contradictory_evidence"</span>: <span className="text-slate-400">[references]</span>,{"\n"}
                    {"  "}<span className="text-blue-300">"authority_weight"</span>: <span className="text-emerald-200">metric</span>,{"\n"}
                    {"  "}<span className="text-blue-300">"semantic_velocity"</span>: <span className="text-slate-500">optional_metric</span>,{"\n"}
                    {"  "}<span className="text-blue-300">"timestamp"</span>: <span className="text-orange-300">"ISO_8601"</span>{"\n"}
                    <span className="text-emerald-400">{"}"}</span>
                  </pre>
                </div>
              </div>
            </PosterCard>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Math & Data */}
          <div className="space-y-6 flex flex-col">
            <PosterCard title="Mathematical Foundation" icon={Binary} color="text-fuchsia-400" className="flex-1">
              <ul className="space-y-2 mb-4">
                <ListItem text="Vector-space semantic modeling" />
                <ListItem text="Bayesian confidence aggregation" />
                <ListItem text="Magnitude × Direction signal modeling" />
                <ListItem text="Authority-weighted clustering" />
                <ListItem text="Time-windowed embedding differentials" />
              </ul>
              <div className="p-3 bg-slate-950 border border-slate-800 rounded-md">
                <p className="text-sm text-fuchsia-300 font-medium">
                  No deterministic truth certification is performed. All outputs are probabilistic and auditable.
                </p>
              </div>
            </PosterCard>

            <PosterCard title="Data Scope" icon={Database} color="text-blue-400">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge text="Public structured corpora" />
                <Badge text="Regulatory archives" />
                <Badge text="Research abstracts" />
                <Badge text="Policy documentation" />
                <Badge text="Enterprise knowledge bases" />
              </div>
              <p className="text-sm text-slate-300">
                TruVector evaluates semantic outputs, <strong className="text-blue-300">not</strong> raw model internals.
              </p>
            </PosterCard>
          </div>

          {/* Deployment */}
          <div className="space-y-6 flex flex-col">
            <PosterCard title="Deployment Profile" icon={Server} color="text-cyan-400" className="flex-1">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-3">Workload Characteristics</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-center gap-2"><Activity className="w-3 h-3 text-cyan-500"/> API-driven</li>
                    <li className="flex items-center gap-2"><Database className="w-3 h-3 text-cyan-500"/> Vector retrieval intensive</li>
                    <li className="flex items-center gap-2"><Cpu className="w-3 h-3 text-cyan-500"/> Embedding generation bounded</li>
                    <li className="flex items-center gap-2"><GitMerge className="w-3 h-3 text-cyan-500"/> Cross-model inference</li>
                    <li className="flex items-center gap-2"><ShieldCheck className="w-3 h-3 text-cyan-500"/> Governance & IaC enforced</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-3">Infra Requirements</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-center gap-2"><Database className="w-3 h-3 text-cyan-500"/> Managed vector database</li>
                    <li className="flex items-center gap-2"><Cloud className="w-3 h-3 text-cyan-500"/> Multi-cloud API access</li>
                    <li className="flex items-center gap-2"><Network className="w-3 h-3 text-cyan-500"/> Elastic compute scaling</li>
                    <li className="flex items-center gap-2"><Activity className="w-3 h-3 text-cyan-500"/> Latency-sensitive retrieval</li>
                  </ul>
                </div>
              </div>
              
              <div className="p-4 bg-slate-950 border border-slate-800 rounded-md">
                <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-2">Artifact Consumers</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 rounded text-xs">AI agents</span>
                  <span className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 rounded text-xs">Enterprise workflows</span>
                  <span className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 rounded text-xs">Policy engines</span>
                  <span className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 rounded text-xs">Audit systems</span>
                </div>
              </div>
            </PosterCard>
          </div>

        </div>
      </div>
    </div>
  );
}

// Sub-components
function PosterCard({ title, icon: Icon, color, children, className = '' }) {
  return (
    <div className={`bg-slate-900/80 border border-slate-800 p-6 rounded-xl shadow-lg backdrop-blur-sm ${className}`}>
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

function ListItem({ text }) {
  return (
    <li className="flex items-start gap-2 text-sm text-slate-300">
      <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
      <span>{text}</span>
    </li>
  );
}

function Step({ number, text }) {
  return (
    <div className="bg-slate-950 border border-slate-800 p-3 rounded-lg flex flex-col items-center text-center relative overflow-hidden group">
      <div className="text-3xl font-black text-slate-800/50 absolute -right-2 -top-4 group-hover:text-cyan-900/30 transition-colors">
        {number}
      </div>
      <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-bold mb-2 z-10">
        {number}
      </div>
      <p className="text-xs text-slate-300 z-10 leading-tight">{text}</p>
    </div>
  );
}

function BenefitCard({ title, icon: Icon, children }) {
  return (
    <div className="bg-slate-950 p-4 rounded-lg border border-slate-800/50">
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-4 h-4 text-fuchsia-400" />
        <h3 className="font-semibold text-slate-200 text-sm">{title}</h3>
      </div>
      <p className="text-xs text-slate-400 leading-relaxed">
        {children}
      </p>
    </div>
  );
}

function Badge({ text }) {
  return (
    <div className="px-2 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs rounded-md flex items-center gap-1">
      <FileText className="w-3 h-3" />
      {text}
    </div>
  );
}