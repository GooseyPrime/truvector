import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Index from './pages/Index';
import InTellMePage from './pages/InTellMePage';
import OverviewPage from './pages/OverviewPage';
import TechPage from './pages/TechPage';
import EmmaPage from './pages/EmmaPage';
import ThePlanPage from './pages/ThePlanPage';
import InvestorPage from './pages/InvestorPage';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Index />
              </ProtectedRoute>
            }
          />
          <Route
            path="/intellme"
            element={
              <ProtectedRoute>
                <InTellMePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/truvector"
            element={
              <ProtectedRoute>
                <OverviewPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/architecture"
            element={
              <ProtectedRoute>
                <TechPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/emma"
            element={
              <ProtectedRoute>
                <EmmaPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/plan"
            element={
              <ProtectedRoute>
                <ThePlanPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/summary"
            element={
              <ProtectedRoute>
                <InvestorPage />
              </ProtectedRoute>
            }
          />
          {/* Legacy redirect for old /investors links */}
          <Route path="/investors" element={<Navigate to="/summary" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
