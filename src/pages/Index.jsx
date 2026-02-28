import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Footer from '../components/Footer';
import KinematicBackground from '../components/KinematicBackground';

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
    <div className="flex flex-col min-h-screen text-slate-200 relative">
      <KinematicBackground />
      <nav className="flex justify-between items-center px-12 py-6 bg-slate-900/50 backdrop-blur-md border-b border-slate-800 sticky top-0 z-10">
        <div>
          <h1 className="text-white m-0 text-3xl font-bold tracking-tight">InTellMe</h1>
        </div>
        <div className="flex items-center gap-6 text-slate-300 text-base">
          {user && (
            <>
              <span>Welcome, {user.username}!</span>
              <button onClick={handleLogout} className="bg-black/50 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/10 hover:border-white/40 transition-all font-medium shadow-lg">
                Logout
              </button>
            </>
          )}
        </div>
      </nav>

      <main className="flex-1 px-12 py-16 max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4 font-extrabold tracking-tight bg-gradient-to-br from-indigo-200 via-slate-200 to-indigo-200 bg-clip-text text-transparent">Welcome to InTellMe</h2>
          <p className="text-xl text-slate-400 font-light tracking-tight">Explore our platform and discover what we offer</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {sections.map((section) => (
            <Link
              key={section.id}
              to={section.path}
              className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl hover:bg-black/60 transition-all no-underline relative overflow-hidden flex flex-col min-h-[220px] group"
            >
              <div className="flex items-center justify-center w-12 h-12 text-2xl font-bold bg-black/50 backdrop-blur-md border border-white/20 rounded-xl mb-6 text-white shadow-lg">
                {section.id}
              </div>
              <h3 className="text-indigo-200 mb-4 text-2xl font-bold tracking-tight leading-snug">{section.title}</h3>
              <p className="text-slate-400 leading-relaxed flex-1 mb-6 text-base">{section.description}</p>
              <span className="text-white/60 text-2xl font-bold self-end transition-transform group-hover:translate-x-2">→</span>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
