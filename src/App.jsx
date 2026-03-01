import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard'; 
import { useAuth } from './context/AuthContext';

function App() {
  const { user, loading } = useAuth();

  if (loading) return <div className="bg-primary min-h-screen flex items-center justify-center text-white">Loading Appointo...</div>;

  return (
    <Router>
      <Routes>
        {/* Agar user login nahi hy toh Auth page dikhao */}
        <Route path="/auth" element={!user ? <Auth /> : <Navigate to="/dashboard" />} />
        
        {/* Agar login hy toh Dashboard, warna wapas Auth par bhejo */}
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/auth" />} />
        
        {/* Default route */}
        <Route path="/" element={<Navigate to="/auth" />} />
      </Routes>
    </Router>
  );
}

export default App;