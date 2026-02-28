import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-8 py-12">
        <h1 className="text-5xl text-white mb-4 font-bold">Welcome to TruVector</h1>
        <p className="text-xl text-slate-400 mb-12">A Simple Multi-Page React Application with Authentication</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl hover:bg-black/60 transition-all">
            <h3 className="text-white text-xl font-bold mb-2">🔐 Secure Authentication</h3>
            <p className="text-slate-400 leading-relaxed">Basic authentication system to protect your content</p>
          </div>
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl hover:bg-black/60 transition-all">
            <h3 className="text-white text-xl font-bold mb-2">🗺️ Multi-Page Navigation</h3>
            <p className="text-slate-400 leading-relaxed">Seamless navigation between different pages using React Router</p>
          </div>
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl hover:bg-black/60 transition-all">
            <h3 className="text-white text-xl font-bold mb-2">⚡ Fast & Modern</h3>
            <p className="text-slate-400 leading-relaxed">Built with React and Vite for optimal performance</p>
          </div>
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl hover:bg-black/60 transition-all">
            <h3 className="text-white text-xl font-bold mb-2">🎨 Clean Design</h3>
            <p className="text-slate-400 leading-relaxed">Simple and intuitive user interface</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
