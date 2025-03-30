import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';  // Import your Landing Page component
import LoginForm from './components/LoginForm'; // Import your LoginForm component
import App from './App.jsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for LandingPage (Entry Page) */}
        <Route path="/" element={<LandingPage />} />

        {/* Route for LoginForm */}
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;
