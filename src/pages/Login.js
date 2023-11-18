// Login.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './login.css';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Implement your login logic here
    // For simplicity, let's just navigate to the home page
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h2 className="login">Login</h2>
        <form className="login-form">
          <label className="login-label">
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="login-input"
            />
          </label>
          <label className="login-label">
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />
          </label>
          <button type="button" onClick={handleLogin} className="login-button">
            Login
          </button>
        </form>
        <p className="login-message">
          Don't have an account? <Link to="/signup" className="login-link">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
