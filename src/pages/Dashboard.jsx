import Layout from '../components/Layout';
import { useAuth } from '../context/AuthContext';
import KinematicBackground from '../components/KinematicBackground';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <Layout>
      <KinematicBackground />
      <div className="dashboard-container">
        <h1>Dashboard</h1>
        <p className="welcome-message">Welcome back, {user?.username}!</p>
        
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h3>📊 Statistics</h3>
            <div className="stat-item">
              <span className="stat-label">Total Views:</span>
              <span className="stat-value">1,234</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Active Users:</span>
              <span className="stat-value">42</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Projects:</span>
              <span className="stat-value">8</span>
            </div>
          </div>

          <div className="dashboard-card">
            <h3>📝 Recent Activity</h3>
            <ul className="activity-list">
              <li>Logged in successfully</li>
              <li>Viewed dashboard</li>
              <li>Navigated to About page</li>
            </ul>
          </div>

          <div className="dashboard-card">
            <h3>⚙️ Quick Actions</h3>
            <div className="action-buttons">
              <button className="action-btn">Create New Project</button>
              <button className="action-btn">View Reports</button>
              <button className="action-btn">Settings</button>
            </div>
          </div>

          <div className="dashboard-card">
            <h3>👤 User Information</h3>
            <div className="user-info">
              <p><strong>Username:</strong> {user?.username}</p>
              <p><strong>Status:</strong> Active</p>
              <p><strong>Last Login:</strong> Just now</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
