import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css"; // Import the CSS file

import devDudes from "../assets/devdudes.png";

const Registered = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async (event) => {
    event.preventDefault();
    if (!email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    // Placeholder for sign-in logic (e.g., Firebase authentication)
    try {
      // Example: await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log("Sign-in successful!", { email, password });
      navigate('/Dashboard'); // Redirect to the dashboard after successful sign-in
    } catch (e) {
      setError('Sign-in failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className="authContainer">
      <img src={devDudes} alt="Logo" className="authLogo"/>
      <h2 className="authHeading">Registered Student Portal</h2>
      <form onSubmit={handleSignIn} className="authForm">
        <div className="authInputGroup">
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="authInputField"
            required
          />
        </div>
        <div className="authInputGroup">
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="authInputField"
            required
          />
        </div>
        {error && <p className="authError">{error}</p>}
        <button type="submit" className="authSubmitButton">Sign In</button>
      </form>
    </div>
  );
};

export default Registered;
