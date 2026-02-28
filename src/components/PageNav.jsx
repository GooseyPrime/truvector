import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PAGES = [
  { path: '/intellme',     label: 'InTellMe — Origin & Objective' },
  { path: '/truvector',    label: 'TruVector Overview' },
  { path: '/architecture', label: 'Technical Architecture' },
  { path: '/emma',         label: "emma's Strategic Placement" },
  { path: '/investors',    label: 'Growth Path' },
];

const PageNav = ({ currentPath }) => {
  const idx  = PAGES.findIndex(p => p.path === currentPath);
  const prev = idx > 0 ? PAGES[idx - 1] : null;
  const next = idx < PAGES.length - 1 ? PAGES[idx + 1] : null;

  return (
    <div className="flex justify-between items-center pt-8 pb-2 border-t border-white/10 mt-10 gap-4">

      {/* PREV */}
      {prev ? (
        <Link
          to={prev.path}
          className="flex items-center gap-3 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl px-5 py-3.5 hover:bg-black/60 hover:border-white/20 transition-all group min-w-0 max-w-xs"
        >
          <ChevronLeft className="w-5 h-5 text-white/40 group-hover:text-white transition-colors shrink-0" />
          <div className="min-w-0">
            <p className="text-xs text-slate-500 uppercase tracking-[0.15em] font-semibold">Previous</p>
            <p className="text-sm font-semibold text-white truncate">{prev.label}</p>
          </div>
        </Link>
      ) : <div />}

      {/* DOT INDICATORS */}
      <div className="flex items-center gap-2 shrink-0">
        {PAGES.map(page => (
          <Link
            key={page.path}
            to={page.path}
            title={page.label}
            className={`rounded-full transition-all duration-200 ${
              page.path === currentPath
                ? 'w-5 h-2 bg-white'
                : 'w-2 h-2 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* NEXT */}
      {next ? (
        <Link
          to={next.path}
          className="flex items-center gap-3 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl px-5 py-3.5 hover:bg-black/60 hover:border-white/20 transition-all group min-w-0 max-w-xs"
        >
          <div className="text-right min-w-0">
            <p className="text-xs text-slate-500 uppercase tracking-[0.15em] font-semibold">Next</p>
            <p className="text-sm font-semibold text-white truncate">{next.label}</p>
          </div>
          <ChevronRight className="w-5 h-5 text-white/40 group-hover:text-white transition-colors shrink-0" />
        </Link>
      ) : <div />}

    </div>
  );
};

export default PageNav;
