import React, { useState } from 'react';
import LandingPage from './pages/LandingPage'; // Import the LandingPage component
import LoginForm from './components/LoginForm'; // Import LoginForm component

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  return (
    <div>
      {!isLoggedIn ? (
        <>
          <LandingPage /> {/* Render the LandingPage component */}
          <button
            onClick={() => setIsLoggedIn(true)}
            className="mt-4 p-2 bg-blue-500 text-white rounded"
          >
            Go to Login
          </button>
        </>
      ) : (
        <LoginForm /> // Render the LoginForm component if logged in
      )}
    </div>
  );
}

export default App;
