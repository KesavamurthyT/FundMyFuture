import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, CheckCircle } from 'lucide-react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// Your Firebase configuration
// Replace with your actual Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// CSS Styles
const styles = `
/* Main container styles */
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f3f4f6;
  padding: 1rem;
}

/* Card styles */
.card {
  width: 100%;
  max-width: 28rem;
}

.card-content {
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Success state */
.success-card {
  width: 100%;
  max-width: 28rem;
  padding: 1.5rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.success-icon {
  width: 4rem;
  height: 4rem;
  color: #10b981;
  margin: 0 auto 1rem auto;
}

.success-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #111827;
  margin-bottom: 0.5rem;
}

.success-message {
  color: #4b5563;
  margin-bottom: 1rem;
}

/* Form header */
.form-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.form-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #111827;
}

/* Form layout */
.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Error message */
.error-message {
  padding: 0.75rem;
  font-size: 0.875rem;
  color: #ef4444;
  background-color: #fee2e2;
  border-radius: 0.375rem;
}

/* Form fields */
.form-group {
  margin-bottom: 1rem;
}

.form-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.25rem;
}

.input-wrapper {
  position: relative;
  margin-top: 0.25rem;
}

.input-icon-left {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding-left: 0.75rem;
  pointer-events: none;
}

.input-icon-left svg {
  width: 1.25rem;
  height: 1.25rem;
  color: #9ca3af;
}

.input-field {
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem 0.5rem 2.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.input-field:focus {
  outline: none;
  border-color: #6366f1;
  box-shadow: 0 0 0 1px #6366f1;
}

.password-field {
  padding-right: 2.5rem;
}

.input-icon-right {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding-right: 0.75rem;
}

.toggle-password {
  color: #9ca3af;
  background: none;
  border: none;
  cursor: pointer;
}

.toggle-password:hover {
  color: #6b7280;
}

.toggle-password:focus {
  outline: none;
}

.toggle-password svg {
  width: 1.25rem;
  height: 1.25rem;
}

/* Links */
.forgot-password {
  display: block;
  text-align: right;
  font-size: 0.875rem;
  font-weight: 500;
  color: #4f46e5;
  text-decoration: none;
}

.forgot-password:hover {
  color: #4338ca;
}

/* Buttons */
.button {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0.5rem 1rem;
  border: 1px solid transparent;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  font-size: 0.875rem;
  font-weight: 500;
  color: white;
  background-color: #4f46e5;
  cursor: pointer;
}

.button:hover {
  background-color: #4338ca;
}

.button:focus {
  outline: none;
  box-shadow: 0 0 0 2px #fff, 0 0 0 4px #4f46e5;
}

.button:disabled {
  opacity: 0.75;
  cursor: not-allowed;
}
`;

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginAttempted, setLoginAttempted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setErrorMessage('Please enter both email and password');
      return;
    }
    
    setIsLoading(true);
    setErrorMessage('');
    setLoginAttempted(true);
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoggedIn(true);
    } catch (error) {
      setIsLoggedIn(false);
      
      // Handle specific Firebase auth errors
      switch (error.code) {
        case 'auth/invalid-email':
          setErrorMessage('Invalid email address format');
          break;
        case 'auth/user-disabled':
          setErrorMessage('This account has been disabled');
          break;
        case 'auth/user-not-found':
          setErrorMessage('No account found with this email');
          break;
        case 'auth/wrong-password':
          setErrorMessage('Incorrect password');
          break;
        default:
          setErrorMessage('Invalid email or password');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Include the styles */}
      <style>{styles}</style>
      
      <div className="login-container">
        {isLoggedIn ? (
          <div className="success-card">
            <CheckCircle className="success-icon" />
            <h2 className="success-title">Successfully Logged In!</h2>
            <p className="success-message">Welcome back, {email}</p>
            <button 
              onClick={() => {
                setIsLoggedIn(false);
                setLoginAttempted(false);
                setEmail('');
                setPassword('');
              }}
              className="button"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="card">
            <div className="card-content">
              <div className="form-header">
                <h2 className="form-title">Sign in to your account</h2>
              </div>
              
              <form className="form" onSubmit={handleSubmit}>
                {errorMessage && (
                  <div className="error-message">
                    {errorMessage}
                  </div>
                )}
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <div className="input-wrapper">
                    <div className="input-icon-left">
                      <Mail />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input-field"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <div className="input-wrapper">
                    <div className="input-icon-left">
                      <Lock />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="input-field password-field"
                      placeholder="••••••••"
                      required
                    />
                    <div className="input-icon-right">
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="toggle-password"
                      >
                        {showPassword ? (
                          <EyeOff />
                        ) : (
                          <Eye />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <a href="#" className="forgot-password">
                    Forgot your password?
                  </a>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="button"
                  >
                    {isLoading ? 'Signing in...' : 'Sign in'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LoginForm;