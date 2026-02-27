import React from 'react';
import ContentNav from '../components/ContentNav';
import Footer from '../components/Footer';
import KinematicBackground from '../components/KinematicBackground';
import { 
  Shield, 
  Users, 
  Target,
  Lightbulb,
  Heart,
  TrendingUp,
  Award,
  Globe
} from 'lucide-react';

export default function InTellMePage() {
  return (
    <div className="min-h-screen text-slate-200 p-4 md:p-8 font-sans selection:bg-emerald-500/30 relative overflow-hidden" style={{ paddingTop: '5rem', paddingBottom: '150px' }}>
      
      {/* KINEMATIC BACKGROUND */}
      <KinematicBackground />
      <ContentNav />

      <div className="max-w-7xl mx-auto space-y-6 relative z-10">
        
        {/* HEADER / TITLE BLOCK */}
        <header className="border-b border-slate-800 pb-6 mb-8 text-center md:text-left">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white flex items-center gap-3 justify-center md:justify-start">
              <Globe className="w-10 h-10 text-indigo-500" />
              InTellMe - Who We Are
            </h1>
            <p className="text-xl text-indigo-400 mt-2 font-light">
              Bringing Structured Trust to AI-Driven Execution
            </p>
          </div>
        </header>

        {/* MISSION & VISION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-900/50 border border-indigo-500/30 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-8 h-8 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Our Mission</h2>
            </div>
            <p className="text-slate-300 leading-relaxed">
              To introduce structured probabilistic trust scoring into AI execution pipelines, enabling autonomous systems to make decisions with quantifiable confidence and evidence-based validation.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-purple-500/30 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="w-8 h-8 text-purple-400" />
              <h2 className="text-2xl font-bold text-white">Our Vision</h2>
            </div>
            <p className="text-slate-300 leading-relaxed">
              A future where AI systems operate with transparent, auditable trust mechanisms—where every autonomous action is backed by measurable confidence and verifiable evidence.
            </p>
          </div>
        </div>

        {/* WHAT WE DO */}
        <div className="bg-slate-900/50 border border-slate-700 p-6 md:p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Shield className="w-8 h-8 text-emerald-400" />
            What We Do
          </h2>
          <div className="space-y-4 text-slate-300">
            <p className="leading-relaxed">
              InTellMe develops <strong className="text-white">TruVector</strong>, a probabilistic arbitration infrastructure for AI-generated outputs. We don't compete with generative models—we operate as a trust layer between generation and execution.
            </p>
            <p className="leading-relaxed">
              Our system performs post-generation semantic alignment scoring against structured corpora, returning machine-readable arbitration objects that quantify confidence, evidence, and semantic drift.
            </p>
            <p className="leading-relaxed">
              This enables enterprises, autonomous agents, and policy systems to gate AI-driven actions based on measurable trust metrics rather than blind execution.
            </p>
          </div>
        </div>

        {/* CORE VALUES */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Heart className="w-8 h-8 text-rose-400" />
            Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 border border-slate-700 p-6 rounded-lg">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Transparency</h3>
              <p className="text-slate-400 text-sm">
                Every trust score is auditable, explainable, and backed by retrievable evidence.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-slate-700 p-6 rounded-lg">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Precision</h3>
              <p className="text-slate-400 text-sm">
                We use vector-space semantics and Bayesian aggregation for rigorous confidence modeling.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-slate-700 p-6 rounded-lg">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Pragmatism</h3>
              <p className="text-slate-400 text-sm">
                Built for real-world deployment—API-driven, cloud-native, and infrastructure-agnostic.
              </p>
            </div>
          </div>
        </div>

        {/* OUR APPROACH */}
        <div className="bg-gradient-to-br from-indigo-950/40 to-purple-950/40 border border-indigo-500/30 p-6 md:p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-indigo-400" />
            Our Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="font-bold text-white mb-2">No Deterministic Claims</h3>
              <p className="text-slate-300">
                We don't certify truth. We provide probabilistic confidence scores with quantified uncertainty.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-2">Evidence-Based</h3>
              <p className="text-slate-300">
                Every score is backed by supporting and contradictory evidence from structured corpora.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-2">Time-Aware</h3>
              <p className="text-slate-300">
                Semantic drift modeling tracks how claims evolve over time and across domains.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-2">Infrastructure-Level</h3>
              <p className="text-slate-300">
                Designed as execution-gating infrastructure, not a consumer-facing application.
              </p>
            </div>
          </div>
        </div>

        {/* TEAM */}
        <div className="bg-slate-900/50 border border-slate-700 p-6 md:p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <Users className="w-8 h-8 text-cyan-400" />
            Leadership
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-indigo-500 pl-4">
              <h3 className="text-xl font-bold text-white">M. Brandon Lane</h3>
              <p className="text-indigo-400 font-medium">Founder & CEO</p>
              <p className="text-slate-400 mt-2 text-sm">
                Building trust infrastructure for the AI execution layer.
              </p>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
