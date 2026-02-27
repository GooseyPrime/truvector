import Layout from '../components/Layout';
import './Home.css';

const Home = () => {
  return (
    <Layout>
      <div className="home-container">
        <h1>Welcome to TruVector</h1>
        <p className="subtitle">A Simple Multi-Page React Application with Authentication</p>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>🔐 Secure Authentication</h3>
            <p>Basic authentication system to protect your content</p>
          </div>
          <div className="feature-card">
            <h3>🗺️ Multi-Page Navigation</h3>
            <p>Seamless navigation between different pages using React Router</p>
          </div>
          <div className="feature-card">
            <h3>⚡ Fast & Modern</h3>
            <p>Built with React and Vite for optimal performance</p>
          </div>
          <div className="feature-card">
            <h3>🎨 Clean Design</h3>
            <p>Simple and intuitive user interface</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
