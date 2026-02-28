import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import KinematicBackground from '../components/KinematicBackground';
import Footer from '../components/Footer';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, user } = useAuth();
  const navigate = useNavigate();

  // If already logged in, redirect to home
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
    <div className="flex flex-col flex-1 items-center relative">
      <KinematicBackground />
      <div className="flex-1 flex items-center justify-center w-full relative z-10 px-4">
        <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-12 shadow-xl w-full max-w-md">
          <h1 className="text-center text-white mb-2 text-4xl font-extrabold tracking-tight">InTellMe</h1>
          <h2 className="text-center text-slate-200 mb-8 font-semibold text-2xl tracking-tight">Login</h2>
          <form onSubmit={handleSubmit}>
        <h1 className="text-center text-white mb-2 text-4xl font-extrabold tracking-tight">InTellMe</h1>
        <h2 className="text-center text-slate-200 mb-8 font-semibold text-2xl tracking-tight">Login</h2>
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
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-base text-slate-200 transition-all focus:outline-none focus:border-white/30 focus:shadow-[0_0_0_3px_rgba(255,255,255,0.1)] focus:bg-slate-900"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-slate-300 font-medium text-base">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              autoComplete="current-password"
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-base text-slate-200 transition-all focus:outline-none focus:border-white/30 focus:shadow-[0_0_0_3px_rgba(255,255,255,0.1)] focus:bg-slate-900"
            />
          </div>
          {error && <div className="text-red-300 mb-4 px-3 py-3 bg-red-900/10 border border-red-900/20 rounded-lg text-center text-sm">{error}</div>}
          <button type="submit" className="bg-black/50 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/10 hover:border-white/40 transition-all font-medium shadow-lg w-full text-base font-semibold">
            Login
          </button>
        </form>
      </div>
    </div>
    <Footer />
  </div>
  );
};

export default Login;
