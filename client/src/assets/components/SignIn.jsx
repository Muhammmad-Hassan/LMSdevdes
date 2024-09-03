import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIN.css'; // Import the CSS file

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = (event) => {
    event.preventDefault();
    if (!email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    // Sign-in logic here (without Firebase)
    console.log("Sign-in successful!", { email, password });
    navigate('/CForm'); // Redirect to the registration form after successful sign-in
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
      <form onSubmit={handleSignIn}>
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
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" className="submitButton">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
