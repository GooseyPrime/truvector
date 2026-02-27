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
  ShieldCheck,
  BrainCircuit,
  Workflow,
  Building2,
  Globe2,
  Microscope
} from 'lucide-react';

export default function OverviewPage() {
  return (
    <div className="min-h-screen text-slate-200 p-4 md:p-8 font-sans selection:bg-emerald-500/30 relative">
      
      {/* KINEMATIC BACKGROUND */}
      <KinematicBackground />

      <div className="max-w-7xl mx-auto space-y-6 relative z-10">
        
        {/* HEADER / TITLE BLOCK */}
        <header className="border-b border-slate-800 pb-6 mb-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white flex items-center gap-3 justify-center md:justify-start">
              <ShieldCheck className="w-10 h-10 text-indigo-500" />
              InTellMe
            </h1>
            <p className="text-xl text-indigo-300 mt-2 font-light">
              Probabilistic Trust Arbitration Infrastructure
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg max-w-sm text-sm text-slate-400">
            <strong className="text-white">Core Position:</strong> We are not building another generative model. We are building structured probabilistic arbitration infrastructure for AI-generated declarative outputs.
          </div>
        </header>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* COLUMN 1: WHAT & WHY (Left) */}
          <div className="md:col-span-4 space-y-6">
            
            {/* What is InTellMe */}
            <PosterCard title="The Infrastructure of Trust" icon={BrainCircuit} color="text-indigo-400">
              <p className="mb-4">
                As artificial intelligence transitions from generating text to executing workflows, drafting policies, triggering transactions, and making autonomous decisions, the reliability of model-generated outputs becomes a systems-level dependency.
              </p>
              <div className="bg-indigo-500/10 border border-indigo-500/20 p-3 rounded-md">
                <p className="text-indigo-200 font-medium">
                  InTellMe provides the structured evaluation layer that quantifies evidentiary alignment before AI systems act.
                </p>
              </div>
            </PosterCard>

            {/* Why Needed */}
            <PosterCard title="The Generative Risk Problem" icon={AlertTriangle} color="text-amber-400">
              <p className="mb-3 text-sm text-slate-300">Modern large language models:</p>
              <ul className="space-y-2 mb-4">
                <ListItem text="Predict tokens probabilistically" />
                <ListItem text="Do not independently verify evidentiary consistency" />
                <ListItem text="Do not track narrative mutation across time" />
                <ListItem text="Do not quantify semantic velocity or drift" />
              </ul>
              <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-md mb-4">
                <p className="text-amber-200 text-sm font-semibold text-center uppercase tracking-wider">
                  As AI moves to autonomous execution,<br/>generative risk = operational risk.
                </p>
              </div>
              <p className="text-sm text-slate-300 mb-2">A structured arbitration layer reduces:</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <span className="bg-slate-900 border border-slate-800 p-2 rounded text-center">Hallucination Exposure</span>
                <span className="bg-slate-900 border border-slate-800 p-2 rounded text-center">Policy Misalignment</span>
                <span className="bg-slate-900 border border-slate-800 p-2 rounded text-center">Decision Liability</span>
                <span className="bg-slate-900 border border-slate-800 p-2 rounded text-center">Narrative Manipulation</span>
              </div>
            </PosterCard>

          </div>

          {/* COLUMN 2: THE PRODUCT & HOW (Center/Right) */}
          <div className="md:col-span-8 space-y-6">
            
            {/* TruVector Product */}
            <PosterCard title="The Product: TruVector" icon={Activity} color="text-emerald-400">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 space-y-4">
                  <p className="text-lg font-medium text-emerald-300 border-b border-emerald-900/50 pb-2">
                    TruVector is InTellMe’s trust arbitration layer.
                  </p>
                  <div className="flex gap-4 mb-4">
                    <div className="flex-1 bg-red-500/10 border border-red-500/20 p-3 rounded-md text-sm text-red-200">
                      <strong className="block text-red-400">Does NOT:</strong>
                      Generate content or declare objective truth.
                    </div>
                    <div className="flex-1 bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-md text-sm text-emerald-200">
                      <strong className="block text-emerald-400">DOES:</strong>
                      Evaluate assertions and return structured probabilistic assessments.
                    </div>
                  </div>
                  <p className="text-sm">
                    TruVector functions as a validation checkpoint for AI-driven systems, introducing probabilistic alignment scoring before downstream execution.
                  </p>
                </div>
                
                {/* Truth Object UI representation - FIXED JSX PARSING ISSUE HERE */}
                <pre className="flex-1 bg-slate-950 border border-slate-800 rounded-lg p-4 font-mono text-xs text-slate-300 overflow-x-auto whitespace-pre">
                  <span className="text-slate-500">// The Truth Object Payload</span>{"\n"}
                  <span className="text-emerald-400">{"{"}</span>{"\n"}
                  {"  "}<span className="text-blue-300">"confidence_score"</span>: <span className="text-orange-300">0.942</span>,{"\n"}
                  {"  "}<span className="text-blue-300">"supporting_evidence"</span>: [...],{"\n"}
                  {"  "}<span className="text-blue-300">"contradictory_evidence"</span>: [...],{"\n"}
                  {"  "}<span className="text-blue-300">"alignment_metrics"</span>: <span className="text-emerald-400">{"{"}</span>{"\n"}
                  {"    "}<span className="text-blue-300">"authority_weighted"</span>: <span className="text-orange-300">true</span>{"\n"}
                  {"  "}<span className="text-emerald-400">{"}"}</span>,{"\n"}
                  {"  "}<span className="text-blue-300">"semantic_drift_history"</span>: [...]{"\n"}
                  <span className="text-emerald-400">{"}"}</span>
                </pre>
              </div>
            </PosterCard>

            {/* How It Works Pipeline */}
            <PosterCard title="How TruVector Works" icon={Workflow} color="text-cyan-400">
              <p className="text-sm text-cyan-200 mb-4">
                The system operates using probabilistic modeling and statistical alignment — not deterministic truth certification.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
                <Step number="1" text="AI-generated assertion is submitted" />
                <Step number="2" text="Statement transformed into semantic embeddings" />
                <Step number="3" text="Documents retrieved from structured vector corpus" />
                <Step number="4" text="Multiple foundation models perform cross-analysis" />
                <Step number="5" text="Probabilistic alignment metrics are computed" />
                <Step number="6" text="Truth Object returned & Lineage history updated" />
              </div>
            </PosterCard>
          </div>
        </div>

        {/* BOTTOM ROW: WHO & TECH */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Who Benefits */}
          <PosterCard title="Who Benefits" icon={Users} color="text-fuchsia-400">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <BenefitCard title="AI Platform Developers" icon={BrainCircuit}>
                Apply post-generation alignment scoring, reduce hallucination exposure, and provide explainable confidence metrics.
              </BenefitCard>
              <BenefitCard title="Enterprise AI Systems" icon={Building2}>
                Introduce a pre-execution checkpoint, quantify alignment before automated decisions, and improve compliance.
              </BenefitCard>
              <BenefitCard title="Govs & Regulators" icon={Scale}>
                Monitor narrative mutation, detect rapid semantic drift, and track proposition lineage and authority weighting.
              </BenefitCard>
              <BenefitCard title="Researchers & Public" icon={Globe2}>
                Cluster evidence, model semantic velocity in datasets, and provide transparent trust metrics to improve user confidence.
              </BenefitCard>
            </div>
          </PosterCard>

          {/* Infrastructure & Data */}
          <div className="space-y-6 flex flex-col">
            <PosterCard title="What Data It Touches" icon={Database} color="text-blue-400" className="flex-1">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge text="AI Assertions" />
                <Badge text="Declarative Outputs" />
                <Badge text="Structured Corpora" />
                <Badge text="Policy Statements" />
                <Badge text="Research Publications" />
                <Badge text="Regulatory Documents" />
              </div>
              <p className="text-sm border-l-2 border-blue-500 pl-3 text-slate-300">
                It does <strong>not</strong> replace model training. It evaluates semantic outputs before execution or downstream action.
              </p>
            </PosterCard>

            <PosterCard title="Infrastructure Characteristics" icon={Server} color="text-slate-300" className="flex-1">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-2">Requirements</h4>
                  <ul className="space-y-1 text-sm text-slate-300">
                    <li className="flex items-center gap-2"><Cloud className="w-3 h-3 text-indigo-400"/> Multi-cloud flexibility</li>
                    <li className="flex items-center gap-2"><Network className="w-3 h-3 text-indigo-400"/> Elastic compute scaling</li>
                    <li className="flex items-center gap-2"><Microscope className="w-3 h-3 text-indigo-400"/> Cross-provider access</li>
                    <li className="flex items-center gap-2"><Database className="w-3 h-3 text-indigo-400"/> Structured vector storage</li>
                    <li className="flex items-center gap-2"><ShieldCheck className="w-3 h-3 text-indigo-400"/> IaC & Governance enforcement</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-2">Workload Profile</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-slate-800 rounded text-xs">Distributed</span>
                    <span className="px-2 py-1 bg-slate-800 rounded text-xs">API-driven</span>
                    <span className="px-2 py-1 bg-slate-800 rounded text-xs">Retrieval intensive</span>
                    <span className="px-2 py-1 bg-slate-800 rounded text-xs">Latency-aware</span>
                    <span className="px-2 py-1 bg-slate-800 rounded text-xs">Governance-sensitive</span>
                  </div>
                </div>
              </div>
            </PosterCard>
          </div>

        </div>
        
        {/* FOOTER */}
        <footer className="text-center pt-8 pb-4 text-slate-500 text-sm">
          <p>As AI systems move toward autonomous action, the need for explainable evidentiary alignment scoring becomes foundational infrastructure.</p>
          <p className="text-indigo-400 font-semibold mt-1">TruVector provides that layer.</p>
        </footer>

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