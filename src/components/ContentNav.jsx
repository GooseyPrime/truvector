import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ContentNav = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: '#0f172a',
      borderBottom: '1px solid #1e293b',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backdropFilter: 'blur(10px)'
    }}>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <Link to="/" style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '1.25rem', textDecoration: 'none' }}>
          InTellMe
        </Link>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <Link to="/" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.95rem' }}>Home</Link>
          <Link to="/intellme" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.95rem' }}>InTellMe</Link>
          <Link to="/truvector" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.95rem' }}>Overview</Link>
          <Link to="/architecture" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.95rem' }}>Architecture</Link>
          <Link to="/emma" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.95rem' }}>Emma</Link>
          <Link to="/investors" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.95rem' }}>Investors</Link>
        </div>
      </div>
      {user && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>Welcome, {user.username}!</span>
          <button
            onClick={handleLogout}
            style={{
              background: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: 'white',
              padding: '0.5rem 1.25rem',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '0.9rem'
            }}
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default ContentNav;
