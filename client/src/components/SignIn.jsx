import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios for making HTTP requests
import devDudes from "../assets/devdudes.png";

const SignIn = () => {
  const navigate = useNavigate();
  const [studentEmail, setStudentEmail] = useState(''); // State for student email
  const [studentPassword, setStudentPassword] = useState(''); // State for student password
  const [error, setError] = useState(''); // State for managing error messages

  const handleSignIn = async (event) => {
    event.preventDefault(); // Prevent the default form submission
    setError(''); // Clear any previous errors

    try {
      // Validate email format
      if (!studentEmail.includes('@')) {
        setError('Please enter a valid email address.');
        return;
      }

      // Send the sign-in request to the backend using Axios
      const response = await axios.post('http://127.0.0.1:5000/api/auth/student-login', {
        studentEmail,
        studentPassword,
      });

      // If the sign-in is successful, log the response and navigate to the desired page
      console.log('Sign-in successful!', response.data);
      navigate('/CForm'); // Redirect to the registration form after successful sign-in
    } catch (error) {
      if (error.response) {
        // Handle known errors from the backend (e.g., invalid email/password)
        setError(error.response.data.message || 'An error occurred during sign-in.');
      } else {
        // Handle unknown errors (e.g., network issues)
        setError('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img src={devDudes} alt="Logo" className="w-32 h-32 mb-8" />
      <h2 className="text-2xl font-bold mb-6">Student Portal</h2>
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => navigate('/SignIn')}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md"
        >
          Sign In
        </button>
        <button
          onClick={() => navigate('/SignUp')}
          className="px-4 py-2 bg-gray-800 text-white rounded-md"
        >
          Sign Up
        </button>
      </div>
      <form onSubmit={handleSignIn} className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={studentEmail}
            onChange={(e) => setStudentEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            value={studentPassword}
            onChange={(e) => setStudentPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>} {/* Display error messages */}
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
