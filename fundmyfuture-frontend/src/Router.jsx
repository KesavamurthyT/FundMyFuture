import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';  // Import App component to use in routing
import Login from './pages/Login';
import Signup from './pages/Signup';
import StudentDashboard from './pages/StudentDashboard';
import NGODashboard from './pages/NGODashboard';
import DonorVolunteerPortal from './pages/DonorVolunteerPortal';
import AdminPanel from './pages/AdminPanel';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />  {/* Default route with App component */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/ngo-dashboard" element={<NGODashboard />} />
        <Route path="/donor-volunteer" element={<DonorVolunteerPortal />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
