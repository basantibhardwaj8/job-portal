import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';  // Make sure the path is correct
import './Signup.css';  // Import the CSS file for styling

const Signup = () => {
  const { signup } = useContext(AuthContext);  // Get signup function from AuthContext
  const [email, setEmail] = useState('');  // State for email input
  const [password, setPassword] = useState('');  // State for password input

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password).catch((error) => alert(error.message));  // Call signup function from AuthContext
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>  {/* Page title */}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}  
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
