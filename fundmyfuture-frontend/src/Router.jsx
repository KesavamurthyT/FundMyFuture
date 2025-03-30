import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';  // Import LandingPage component
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
        {/* Make LandingPage the default entry route */}
        <Route path="/" element={<LandingPage />} />  {/* This will render the LandingPage at "/" */}

        {/* Other routes */}
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
