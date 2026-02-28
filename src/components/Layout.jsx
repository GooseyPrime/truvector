import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Footer from './Footer';
import KinematicBackground from './KinematicBackground';

const Layout = ({ children }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex flex-col min-h-screen w-full relative text-slate-200 bg-transparent overflow-x-hidden">
      
      {/* GLOBAL BACKGROUND - Renders behind everything */}
      <KinematicBackground />

      {/* NAV BAR - Added relative z-10 to float above the canvas */}
      <nav className="relative z-10 bg-black/50 backdrop-blur-md border-b border-white/10 px-8 py-4 flex justify-between items-center">
        <div>
          <Link to="/" className="text-white text-2xl font-bold hover:text-white/80 transition-colors">InTellMe</Link>
        </div>
        <div className="flex gap-8">
          <Link to="/" className="text-white hover:text-white/70 transition-colors">Home</Link>
          <Link to="/intellme" className="text-white hover:text-white/70 transition-colors">InTellMe</Link>
          <Link to="/truvector" className="text-white hover:text-white/70 transition-colors">Overview</Link>
          <Link to="/architecture" className="text-white hover:text-white/70 transition-colors">Architecture</Link>
          <Link to="/emma" className="text-white hover:text-white/70 transition-colors">Emma</Link>
          <Link to="/investors" className="text-white hover:text-white/70 transition-colors">Investors</Link>
        </div>
        <div className="flex items-center gap-4">
          {user && (
            <>
              <span className="text-white">Welcome, {user.username}!</span>
              <button onClick={handleLogout} className="bg-black/50 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/10 hover:border-white/40 transition-all font-medium shadow-lg">
                Logout
              </button>
            </>
          )}
        </div>
      </nav>
      
      {/* MAIN CONTENT - Added relative z-10 so pages float above canvas */}
      <main className="flex-1 w-full relative z-10 flex flex-col">{children}</main>
      
      <Footer />
    </div>
  );
};

export default Layout;
