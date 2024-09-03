import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import devDudes from "../assets/devdudes.png";
import axios from 'axios';

const CourseForm = () => {
  const [name, setName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [cnic, setCnic] = useState('');
  const [dob, setDob] = useState('');
  const [course, setCourse] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    try {
      // Implement API call here
      const responce =  await axios.post('http://127.0.0.1:5000/api/course', { name, fatherName, cnic, dob, course, profileImage });
      console.log(responce.data)
      navigate('/some-page'); // Adjust the redirection as needed
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.: ' ,error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageUpload = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const handleGoToDashboard = () => {
    navigate('/dashboard'); // Adjust this path as needed
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="mb-4">
        <img
          src={devDudes}
          alt="Dev Dudes Logo"
          className="w-24 h-24"
        />
      </div>
      <h2 className="text-2xl font-bold mb-6">Course Form for Students</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4 bg-white p-6 rounded-lg shadow-md">
        <div className="input-group">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            placeholder="Father's Name"
            value={fatherName}
            onChange={(e) => setFatherName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            placeholder="CNIC No"
            value={cnic}
            onChange={(e) => setCnic(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="input-group">
          <input
            type="date"
            placeholder="Date of Birth"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="input-group">
          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="" disabled hidden>
              Select Course
            </option>
            <option value="Option1">Option 1</option>
            <option value="Option2">Option 2</option>
          </select>
        </div>
        <div className="input-group flex items-center">
          <label className="cursor-pointer text-blue-600">
            Attach profile image
            <input
              type="file"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </div>
        {isLoading && <p className="text-blue-500">Loading...</p>}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          disabled={isLoading}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CourseForm;
