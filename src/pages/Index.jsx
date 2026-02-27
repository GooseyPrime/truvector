import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Footer from '../components/Footer';
import './Index.css';

const Index = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const sections = [
    {
      id: 1,
      title: 'InTellMe - Who We Are',
      description: 'Discover our mission, values, and the team behind InTellMe',
      path: '/intellme'
    },
    {
      id: 2,
      title: 'TruVector Overview',
      description: 'Learn about TruVector technology and capabilities',
      path: '/truvector'
    },
    {
      id: 3,
      title: 'Technical Architecture',
      description: 'Deep dive into our technical infrastructure and design',
      path: '/architecture'
    },
    {
      id: 4,
      title: 'Emma Placement',
      description: 'Explore Emma AI placement and integration solutions',
      path: '/emma'
    },
    {
      id: 5,
      title: 'For Investors / Growth Path',
      description: 'Investment opportunities and our growth strategy',
      path: '/investors'
    }
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="index-page">
      <nav className="index-navbar">
        <div className="index-nav-brand">
          <h1>InTellMe</h1>
        </div>
        <div className="index-nav-user">
          {user && (
            <>
              <span>Welcome, {user.username}!</span>
              <button onClick={handleLogout} className="index-logout-btn">
                Logout
              </button>
            </>
          )}
        </div>
      </nav>

      <main className="index-main">
        <div className="index-header">
          <h2>Welcome to InTellMe</h2>
          <p>Explore our platform and discover what we offer</p>
        </div>

        <div className="index-grid">
          {sections.map((section) => (
            <Link
              key={section.id}
              to={section.path}
              className="index-card"
            >
              <div className="index-card-number">{section.id}</div>
              <h3>{section.title}</h3>
              <p>{section.description}</p>
              <span className="index-card-arrow">→</span>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
