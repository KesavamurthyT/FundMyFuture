// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';  // To provide navigation back to the home page

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.message}>Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/" style={styles.link}>Go Back to Home</Link>
    </div>
  );
};

// Simple inline styling for this example
const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    marginTop: '50px',
  },
  heading: {
    fontSize: '3em',
    color: '#e74c3c',
  },
  message: {
    fontSize: '1.5em',
    color: '#555',
  },
  link: {
    fontSize: '1.2em',
    color: '#3498db',
    textDecoration: 'none',
  },
};

export default NotFound;
