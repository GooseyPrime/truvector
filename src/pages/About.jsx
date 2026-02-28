import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-8 py-12">
        <h1 className="text-4xl text-white mb-8">About TruVector</h1>
        <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl hover:bg-black/60 transition-all">
          <section className="mb-8">
            <h2 className="text-white text-2xl mb-4 font-bold">What is TruVector?</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              TruVector is a demonstration of a simple multi-page React application
              with basic authentication. It showcases how to build a modern web
              application with protected routes and user authentication.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-white text-2xl mb-4 font-bold">Features</h2>
            <ul className="text-slate-300 leading-relaxed pl-8 list-disc">
              <li className="mb-2">User authentication with login/logout functionality</li>
              <li className="mb-2">Protected routes that require authentication</li>
              <li className="mb-2">Multiple pages with React Router navigation</li>
              <li className="mb-2">Persistent login state using localStorage</li>
              <li className="mb-2">Clean and responsive design</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-white text-2xl mb-4 font-bold">Technology Stack</h2>
            <ul className="text-slate-300 leading-relaxed pl-8 list-disc">
              <li className="mb-2"><strong className="text-white">React:</strong> A JavaScript library for building user interfaces</li>
              <li className="mb-2"><strong className="text-white">React Router:</strong> Declarative routing for React applications</li>
              <li className="mb-2"><strong className="text-white">Vite:</strong> Next generation frontend tooling</li>
              <li className="mb-2"><strong className="text-white">Context API:</strong> For state management</li>
            </ul>
          </section>

          <section className="mb-0">
            <h2 className="text-white text-2xl mb-4 font-bold">How It Works</h2>
            <p className="text-slate-300 leading-relaxed">
              The application uses React Context API to manage authentication state.
              When you log in with any username and password (for demo purposes),
              your session is stored in localStorage. Protected routes check for
              authentication before allowing access, redirecting to the login page
              if necessary.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default About;
