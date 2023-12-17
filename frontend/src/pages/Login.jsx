// Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import { Header, Footer } from '../components'; // Import your Header and Footer components
import './Login.css'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Logging in...');
  };

  return (
    <div className="login-page">
      <Header />

      <div className="login-container">
        <h2>Login</h2>
        <form>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>

        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
