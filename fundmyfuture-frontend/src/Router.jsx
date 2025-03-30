import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import StudentDashboard from './pages/StudentDashboard';
import NGODashboard from './pages/NGODashboard';
import DonorVolunteerPortal from './pages/DonorVolunteerPortal';
import AdminPanel from './pages/AdminPanel';
import NotFound from './pages/NotFound'; // Import NotFound component

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Default entry route */}
        <Route path="/" element={<LandingPage />} />

        {/* Authentication Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Dashboard Routes */}
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/ngo-dashboard" element={<NGODashboard />} />
        <Route path="/donor-volunteer" element={<DonorVolunteerPortal />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminPanel />} />

        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<NotFound />} /> {/* Show NotFound page for any unmatched route */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
