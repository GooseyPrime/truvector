import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Footer from './Footer';
import './Layout.css';

const Layout = ({ children }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-slate-950">
      <nav className="navbar">
        <div className="nav-brand">
          <Link to="/">InTellMe</Link>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/intellme">InTellMe</Link>
          <Link to="/truvector">Overview</Link>
          <Link to="/architecture">Architecture</Link>
          <Link to="/emma">Emma</Link>
          <Link to="/investors">Investors</Link>
        </div>
        <div className="nav-user">
          {user && (
            <>
              <span>Welcome, {user.username}!</span>
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </>
          )}
        </div>
      </nav>
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
