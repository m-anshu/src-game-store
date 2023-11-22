// Signup.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './signup.css';

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    // Implement your signup logic here
    // For simplicity, let's just navigate to the home page
    navigate("/");
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <h2 className="signup">Sign up</h2>
        <form className="signup-form">
          <label className="signup-label">
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="signup-input"
            />
          </label>
          <label className="signup-label">
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="signup-input"
            />
          </label>
          <button type="button" onClick={handleSignup} className="signup-button">
            Sign up
          </button>
        </form>
        <p className="signup-message">
          Already have an account? <Link to="/login" className="signup-link">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
