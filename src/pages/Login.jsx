import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import KinematicBackground from '../components/KinematicBackground';
import Footer from '../components/Footer';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login, user } = useAuth();
  const navigate = useNavigate();

  if (user) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }

    const success = login(username, password);
    if (success) {
      navigate('/');
    } else {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full relative bg-transparent overflow-x-hidden text-slate-200">

      {/* GLOBAL BACKGROUND */}
      <KinematicBackground />

      {/* MAIN LOGIN CONTENT */}
      <div className="flex-1 flex items-center justify-center w-full relative z-10 px-4 py-12">
        <div className="flex flex-col items-center w-full max-w-md gap-8">

          {/* HERO LOGO — same max-w as the card below */}
          <img
            src="https://res.cloudinary.com/dksj2niho/image/upload/v1772315437/Untitled-1_z9zmgj.png"
            alt="TruVector"
            className="w-full object-contain drop-shadow-[0_0_32px_rgba(34,211,238,0.25)]"
          />

          {/* LOGIN CARD */}
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-10 shadow-xl w-full">
            <h2 className="text-center text-slate-300 mb-8 font-semibold text-xl tracking-widest uppercase">Sign In</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="username" className="block mb-2 text-slate-300 font-medium text-base">Username</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  autoComplete="username"
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-base text-slate-200 transition-all focus:outline-none focus:border-white/30 focus:shadow-[0_0_0_3px_rgba(255,255,255,0.1)] placeholder:text-slate-600"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-slate-300 font-medium text-base">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    className="w-full px-4 py-3 pr-12 bg-black/50 border border-white/10 rounded-lg text-base text-slate-200 transition-all focus:outline-none focus:border-white/30 focus:shadow-[0_0_0_3px_rgba(255,255,255,0.1)] placeholder:text-slate-600"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(v => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors p-1"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="text-red-300 mb-4 px-3 py-3 bg-red-900/10 border border-red-900/20 rounded-lg text-center text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="bg-black/50 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/10 hover:border-white/40 transition-all font-semibold shadow-lg w-full text-base mt-2"
              >
                Sign In
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Login;
