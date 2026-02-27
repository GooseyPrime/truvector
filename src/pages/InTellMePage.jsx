import React from 'react';
import ContentNav from '../components/ContentNav';
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
  Activity
} from 'lucide-react';

export default function InTellMePage() {
  return (
    <div className="min-h-screen text-slate-200 p-4 md:p-8 font-sans selection:bg-emerald-500/30 relative overflow-hidden" style={{ paddingTop: '5rem', background: '#020617' }}>
      
      {/* KINEMATIC BACKGROUND */}
      <KinematicBackground />
      <ContentNav />

      <div className="max-w-7xl mx-auto space-y-6 relative z-10">
        
        {/* HEADER / TITLE BLOCK */}
        <header className="border-b border-slate-800 pb-6 mb-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white flex items-center gap-3 justify-center md:justify-start">
              <Cloud className="w-10 h-10 text-emerald-500" />
              emma’s Strategic Placement in the InTellMe Architecture
            </h1>
            <p className="text-xl text-emerald-400 mt-2 font-light">
              Multi-Cloud Orchestration for Trust Infrastructure Activation
            </p>
          </div>
          <div className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-lg max-w-md text-sm text-emerald-100 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
            <strong className="text-white block mb-1 text-base">Core Position</strong>
            emma is not simply hosting InTellMe. TruVector exercises the exact multi-cloud orchestration capabilities emma is built to provide.
          </div>
        </header>

        {/* TOP ROW: THE STACK & SYMMETRY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Where Emma Sits in the Stack */}
          <div className="lg:col-span-5 space-y-6">
            <PosterCard title="Where emma Sits in the Stack" icon={Layers} color="text-indigo-400">
              <p className="text-sm text-slate-400 mb-6">
                emma operates at the multi-cloud orchestration layer, enabling the infrastructure TruVector requires to operate efficiently, securely, and elastically.
              </p>
              
              <div className="flex flex-col items-center w-full space-y-2 font-medium text-sm">
                
                {/* AI Apps Layer */}
                <div className="w-full bg-slate-900 border border-slate-700 py-3 px-4 rounded-lg text-center text-slate-300">
                  AI Applications / Autonomous Agents
                </div>
                
                <ArrowDown className="w-5 h-5 text-slate-600" />

                {/* TruVector Layer */}
                <div className="w-full bg-indigo-950/40 border border-indigo-500/50 py-3 px-4 rounded-lg text-center text-indigo-200 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
                  TruVector (Trust Arbitration Layer)
                </div>

                <ArrowDown className="w-5 h-5 text-indigo-500/50" />

                {/* Data/Model Layer */}
                <div className="w-full bg-slate-800/80 border border-slate-700 py-3 px-4 rounded-lg text-center text-slate-300">
                  Vector Storage + Model APIs + Retrieval Systems
                </div>

                <ArrowDown className="w-5 h-5 text-emerald-500/50" />

                {/* EMMA LAYER - HIGHLIGHTED */}
                <div className="w-full bg-emerald-950/60 border-2 border-emerald-500 py-4 px-4 rounded-lg text-center shadow-[0_0_25px_rgba(16,185,129,0.2)] relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400"></div>
                  <strong className="text-emerald-300 text-base block mb-1">emma CLOUD ORCHESTRATION</strong>
                  <span className="text-emerald-100/80 text-xs uppercase tracking-wider">Multi-Cloud Compute, Networking & Governance</span>
                </div>

                <ArrowDown className="w-5 h-5 text-emerald-500/50" />

                {/* Physical Infra Layer */}
                <div className="w-full bg-slate-950 border border-slate-800 py-3 px-4 rounded-lg text-center text-slate-500 border-dashed">
                  Physical Cloud Infrastructure (AWS, GCP, Azure)
                </div>

              </div>
            </PosterCard>
          </div>

          {/* Strategic Symmetry & Credit Philosphy */}
          <div className="lg:col-span-7 space-y-6 flex flex-col">
            <PosterCard title="Strategic Symmetry" icon={GitMerge} color="text-fuchsia-400" className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-950 border border-slate-800 p-5 rounded-xl">
                  <h4 className="text-indigo-400 font-bold mb-2 flex items-center gap-2"><Target className="w-4 h-4"/> InTellMe’s Mission</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">Introduce structured probabilistic trust scoring into AI execution pipelines.</p>
                </div>
                <div className="bg-emerald-950/30 border border-emerald-900/50 p-5 rounded-xl">
                  <h4 className="text-emerald-400 font-bold mb-2 flex items-center gap-2"><Cloud className="w-4 h-4"/> emma’s Mission</h4>
                  <p className="text-sm text-emerald-100/80 leading-relaxed">Remove infrastructure friction and vendor lock-in across cloud environments.</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-indigo-900/40 to-emerald-900/40 border border-slate-700 p-4 rounded-lg text-center">
                <p className="text-white font-medium">
                  <strong className="text-fuchsia-400">Together:</strong> emma enables the infrastructure layer that allows TruVector to scale without architectural compromise.
                </p>
              </div>
            </PosterCard>

            <PosterCard title="Credit Utilization Philosophy" icon={BarChart3} color="text-amber-400">
              <p className="text-sm text-slate-300 mb-4">
                emma’s credits would not be used for uncontrolled compute burn. They are applied through a staged, performance-driven deployment model:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-4 bg-slate-950 border border-slate-800 p-3 rounded-lg">
                  <div className="bg-slate-800 text-amber-400 font-bold px-3 py-1 rounded text-sm">Phase 1</div>
                  <p className="text-sm text-slate-200">Baseline ingestion and arbitration pilot</p>
                </div>
                <div className="flex items-center gap-4 bg-slate-950 border border-slate-800 p-3 rounded-lg">
                  <div className="bg-slate-800 text-amber-400 font-bold px-3 py-1 rounded text-sm">Phase 2</div>
                  <p className="text-sm text-slate-200">Measured scaling and drift modeling</p>
                </div>
                <div className="flex items-center gap-4 bg-slate-950 border border-slate-800 p-3 rounded-lg">
                  <div className="bg-slate-800 text-amber-400 font-bold px-3 py-1 rounded text-sm">Phase 3</div>
                  <p className="text-sm text-slate-200">Selective accelerator deployment based on benchmarks</p>
                </div>
              </div>
            </PosterCard>
          </div>
        </div>

        {/* BOTTOM ROW: NEEDS VS ENABLEMENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* What TruVector Requires */}
          <PosterCard title="What TruVector Requires" icon={Database} color="text-blue-400">
            <p className="text-sm text-slate-400 mb-4">
              TruVector is a distributed, API-driven system that has a <strong>multi-cloud dependency profile</strong> rather than a single-provider workload:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Badge text="Cross-provider model access" icon={Network} />
              <Badge text="Managed vector storage" icon={Database} />
              <Badge text="Elastic compute scaling" icon={Cpu} />
              <Badge text="Cost-efficient data transfer" icon={Zap} />
              <Badge text="Governance & IaC enforcement" icon={Lock} />
              <Badge text="Low-latency retrieval" icon={Activity} />
            </div>
          </PosterCard>

          {/* What Emma Enables */}
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

        {/* FULL WIDTH FOOTER / VALIDATION */}
        <div className="bg-emerald-950/20 border border-emerald-900/30 rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-emerald-400 mb-2">Why This Validates emma’s Model</h3>
              <p className="text-emerald-100/70 text-sm leading-relaxed">
                TruVector is not a generic SaaS workload. It is vector-intensive, API-dependent, cross-provider integrated, latency-aware, and governance-sensitive. 
              </p>
            </div>
            <div className="flex-1 w-full grid grid-cols-2 gap-3">
              <div className="bg-slate-900 border border-emerald-900/50 p-3 rounded-lg text-center text-xs text-emerald-200">Multi-cloud cost optimization</div>
              <div className="bg-slate-900 border border-emerald-900/50 p-3 rounded-lg text-center text-xs text-emerald-200">Cross-provider networking</div>
              <div className="bg-slate-900 border border-emerald-900/50 p-3 rounded-lg text-center text-xs text-emerald-200">Accelerator aggregation</div>
              <div className="bg-slate-900 border border-emerald-900/50 p-3 rounded-lg text-center text-xs text-emerald-200">Unified infrastructure governance</div>
            </div>
          </div>
          <div className="mt-6 text-center border-t border-emerald-900/30 pt-6">
            <p className="text-lg font-medium text-white">
              InTellMe provides a high-complexity, measurable test case for emma’s orchestration value.
            </p>
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

function Badge({ text, icon: Icon }) {
  return (
    <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 p-2 rounded-lg">
      <Icon className="w-4 h-4 text-blue-500 shrink-0" />
      <span className="text-xs font-medium text-slate-300">{text}</span>
    </div>
  );
}

function FeatureRow({ number, title, desc }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-6 h-6 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
        {number}
      </div>
      <div>
        <h4 className="text-sm font-bold text-emerald-100 mb-1">{title}</h4>
        <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}