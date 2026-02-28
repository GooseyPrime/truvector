import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const NAV_LINKS = [
  { to: '/intellme',     label: 'InTellMe' },
  { to: '/truvector',    label: 'Overview' },
  { to: '/architecture', label: 'Architecture' },
  { to: '/emma',         label: 'Emma' },
  { to: '/investors',    label: 'Investors' },
];

const ContentNav = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* LEFT: Brand + nav links */}
        <div className="flex items-center gap-6 min-w-0">
          <Link
            to="/"
            className="text-white font-bold text-lg tracking-tight shrink-0 hover:text-white/80 transition-colors"
          >
            InTellMe
          </Link>
          <div className="hidden md:flex items-center gap-1 overflow-x-auto">
            {NAV_LINKS.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  location.pathname === link.to
                    ? 'bg-white/10 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT: User + logout */}
        {user && (
          <div className="flex items-center gap-3 shrink-0">
            <span className="hidden lg:block text-slate-500 text-sm font-medium">
              {user.username}
            </span>
            <button
              onClick={handleLogout}
              className="bg-black/50 border border-white/15 text-white/80 px-4 py-1.5 rounded-lg text-sm font-medium hover:text-white hover:bg-white/10 hover:border-white/30 transition-all"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default ContentNav;
