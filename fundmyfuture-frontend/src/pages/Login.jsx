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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {isLoggedIn ? (
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Successfully Logged In!</h2>
          <p className="text-gray-600 mb-4">Welcome back, {email}</p>
          <button 
            onClick={() => {
              setIsLoggedIn(false);
              setLoginAttempted(false);
              setEmail('');
              setPassword('');
            }}
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="w-full max-w-md">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Sign in to your account</h2>
            </div>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              {errorMessage && (
                <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md">
                  {errorMessage}
                </div>
              )}
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="relative mt-1">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Mail className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative mt-1">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Lock className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="••••••••"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-gray-400 hover:text-gray-500 focus:outline-none"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-75"
                >
                  {isLoading ? 'Signing in...' : 'Sign in'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;