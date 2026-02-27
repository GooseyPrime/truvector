import Layout from '../components/Layout';
import './About.css';

const About = () => {
  return (
    <Layout>
      <div className="about-container">
        <h1>About TruVector</h1>
        <div className="about-content">
          <section className="about-section">
            <h2>What is TruVector?</h2>
            <p>
              TruVector is a demonstration of a simple multi-page React application
              with basic authentication. It showcases how to build a modern web
              application with protected routes and user authentication.
            </p>
          </section>

          <section className="about-section">
            <h2>Features</h2>
            <ul>
              <li>User authentication with login/logout functionality</li>
              <li>Protected routes that require authentication</li>
              <li>Multiple pages with React Router navigation</li>
              <li>Persistent login state using localStorage</li>
              <li>Clean and responsive design</li>
            </ul>
          </section>

          <section className="about-section">
            <h2>Technology Stack</h2>
            <ul>
              <li><strong>React:</strong> A JavaScript library for building user interfaces</li>
              <li><strong>React Router:</strong> Declarative routing for React applications</li>
              <li><strong>Vite:</strong> Next generation frontend tooling</li>
              <li><strong>Context API:</strong> For state management</li>
            </ul>
          </section>

          <section className="about-section">
            <h2>How It Works</h2>
            <p>
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
