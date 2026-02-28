import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Footer from './Footer';

const Layout = ({ children }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-black/50 backdrop-blur-md border-b border-white/10 px-8 py-4 flex justify-between items-center">
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
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
