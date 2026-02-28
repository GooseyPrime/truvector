import Layout from '../components/Layout';
import { useAuth } from '../context/AuthContext';
import KinematicBackground from '../components/KinematicBackground';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <Layout>
      <KinematicBackground />
      <div className="max-w-6xl mx-auto px-8 py-12 relative z-10">
        <h1 className="text-5xl text-white mb-4 font-bold">Dashboard</h1>
        <p className="text-xl text-slate-400 mb-8">Welcome back, {user?.username}!</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl hover:bg-black/60 transition-all">
            <h3 className="text-white text-xl font-bold mb-4">📊 Statistics</h3>
            <div className="flex justify-between items-center py-3 border-b border-slate-700">
              <span className="text-slate-400">Total Views:</span>
              <span className="text-2xl font-bold text-white">1,234</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-slate-700">
              <span className="text-slate-400">Active Users:</span>
              <span className="text-2xl font-bold text-white">42</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-slate-400">Projects:</span>
              <span className="text-2xl font-bold text-white">8</span>
            </div>
          </div>

          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl hover:bg-black/60 transition-all">
            <h3 className="text-white text-xl font-bold mb-4">📝 Recent Activity</h3>
            <ul className="list-none p-0">
              <li className="py-3 border-b border-slate-700 text-slate-400">Logged in successfully</li>
              <li className="py-3 border-b border-slate-700 text-slate-400">Viewed dashboard</li>
              <li className="py-3 text-slate-400">Navigated to About page</li>
            </ul>
          </div>

          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl hover:bg-black/60 transition-all">
            <h3 className="text-white text-xl font-bold mb-4">⚙️ Quick Actions</h3>
            <div className="flex flex-col gap-3">
              <button className="bg-black/50 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/10 hover:border-white/40 transition-all font-medium shadow-lg">Create New Project</button>
              <button className="bg-black/50 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/10 hover:border-white/40 transition-all font-medium shadow-lg">View Reports</button>
              <button className="bg-black/50 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/10 hover:border-white/40 transition-all font-medium shadow-lg">Settings</button>
            </div>
          </div>

          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl hover:bg-black/60 transition-all">
            <h3 className="text-white text-xl font-bold mb-4">👤 User Information</h3>
            <div className="text-slate-400">
              <p className="mb-2 leading-relaxed"><strong className="text-white">Username:</strong> {user?.username}</p>
              <p className="mb-2 leading-relaxed"><strong className="text-white">Status:</strong> Active</p>
              <p className="mb-0 leading-relaxed"><strong className="text-white">Last Login:</strong> Just now</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
