import { Link } from 'react-router-dom';
import ContentNav from '../components/ContentNav';
import Footer from '../components/Footer';
import KinematicBackground from '../components/KinematicBackground';

const SECTIONS = [
  {
    number: '01',
    title: 'InTellMe',
    subtitle: 'Origin & Objective',
    description: 'The engineering of trust infrastructure — from chemical kinetics to semantic motion frameworks.',
    path: '/intellme',
  },
  {
    number: '02',
    title: 'TruVector',
    subtitle: 'Product Overview',
    description: 'Probabilistic trust arbitration for AI-generated declarative outputs before downstream execution.',
    path: '/truvector',
  },
  {
    number: '03',
    title: 'Architecture',
    subtitle: 'Technical Design',
    description: 'Vector retrieval, Bayesian arbitration, multi-model cross-analysis, and structured output artifacts.',
    path: '/architecture',
  },
  {
    number: '04',
    title: 'emma',
    subtitle: "Strategic Placement",
    description: "How emma's multi-cloud orchestration layer enables TruVector's infrastructure dependency profile.",
    path: '/emma',
  },
  {
    number: '05',
    title: 'Growth Path',
    subtitle: 'For Investors',
    description: 'Infrastructure alignment, market positioning, and the activation roadmap for TruVector.',
    path: '/investors',
  },
];

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen text-slate-200 relative">
      <KinematicBackground />
      <ContentNav />

      <main className="flex-1 relative z-10 flex flex-col px-4 md:px-8 pt-24 pb-16">
        <div className="max-w-7xl mx-auto w-full flex flex-col gap-16">

          {/* HERO */}
          <div className="pt-8 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 font-semibold mb-5">
              Confidential Briefing &mdash; Prepared for emma
            </p>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight text-white mb-3 leading-none">
              TruVector
            </h1>
            <p className="text-slate-500 text-sm font-semibold tracking-[0.2em] uppercase mb-4">by InTellMe</p>
            <p className="text-xl md:text-2xl font-light text-slate-400 tracking-tight mb-10">
              Trust Infrastructure for Autonomous AI Systems
            </p>

            <div className="max-w-2xl mx-auto bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl">
              <p className="text-slate-300 leading-relaxed text-base">
                <span className="text-white font-semibold">Information moves. AI systems act.</span>
                {' '}TruVector exists to measure evidentiary alignment before execution — delivering
                structured, probabilistic trust arbitration as foundational infrastructure for the
                next phase of AI.
              </p>
            </div>
          </div>

          {/* SECTION CARDS */}
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500 font-semibold mb-5">
              Navigate this presentation
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {SECTIONS.map(section => (
                <Link
                  key={section.path}
                  to={section.path}
                  className="group bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl hover:bg-black/60 hover:border-white/20 transition-all no-underline flex flex-col gap-4"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-5xl font-black text-white/8 leading-none group-hover:text-white/15 transition-colors select-none">
                      {section.number}
                    </span>
                    <span className="text-white/25 group-hover:text-white/60 transition-all text-xl leading-none mt-1">
                      &rarr;
                    </span>
                  </div>
                  <div>
                    <h2 className="text-white font-bold text-xl tracking-tight leading-tight">
                      {section.title}
                    </h2>
                    <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mt-0.5 mb-3">
                      {section.subtitle}
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
