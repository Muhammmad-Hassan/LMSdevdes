import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css'; // Import the CSS file

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = (event) => {
    event.preventDefault();
    if (!email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    // Sign-up logic here (without Firebase)
    console.log("Sign-up successful!", { email, password });
    navigate('/SignIn'); // Redirect to sign-in page after successful sign-up
  };

  return (
    <div className="formContainer">
      <img src="https://student.saylaniwelfare.com/assets/logo-OpazD70S.png" alt="Logo" className="logo" />
      <h2 className="heading">Student Portal</h2>
      <div className="toggleButtons">
        <button 
          onClick={() => navigate('/SignIn')} 
          className="toggleButton" 
          style={{ backgroundColor: '#f0f0f0' }}
        >
          Sign In
        </button>
        <button 
          onClick={() => navigate('/SignUp')} 
          className="toggleButton"
        >
          Sign Up
        </button>
      </div>
      <form onSubmit={handleSignUp}>
        <div className="inputGroup">
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="inputField"
            required
          />
        </div>
        <div className="inputGroup">
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="inputField"
            required
          />
        </div>
        <div className="inputGroup">
          <input 
            type="password" 
            placeholder="Confirm Password" 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="inputField"
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" className="submitButton">Create Account</button>
      </form>
    </div>
  );
};

export default SignUp;