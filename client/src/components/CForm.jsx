import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css'; // Assuming you have a CSS file for styling
import devDudes from "../assets/devdudes.png"

const CForm = () => {
  const [name, setName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [cnic, setCnic] = useState('');
  const [dob, setDob] = useState('');
  const [course, setCourse] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Implement your form submission logic here, e.g., saving data to local state or passing it to a backend service

    setLoading(false);
    navigate('/Dashboard'); // Adjust the redirection as needed
  };

  const handleImageUpload = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const handleGoToDashboard = () => {
    navigate('/Dashboard'); // Adjust this path as needed
  };

  return (
    <div>
    {/* //   <div className="dashboardContainer">
    //     <span className="registeredText">Already Registered?</span>
    //     <button onClick={handleGoToDashboard} className="dashboardButton">
    //       Go to Dashboard
    //     </button>
    //   </div> */}

      <div className="formContainer">
        <img
          src={devDudes}
          className="logo"
        />
        <h2 className="heading">Course Form for Students</h2>
        <form onSubmit={handleSubmit}>
          <div className="inputGroup">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="inputField"
              required
            />
          </div>
          <div className="inputGroup">
            <input
              type="text"
              placeholder="Father's Name"
              value={fatherName}
              onChange={(e) => setFatherName(e.target.value)}
              className="inputField"
              required
            />
          </div>
          <div className="inputGroup">
            <input
              type="text"
              placeholder="CNIC No"
              value={cnic}
              onChange={(e) => setCnic(e.target.value)}
              className="inputField"
              required
            />
          </div>
          <div className="inputGroup">
            <input
              type="date"
              placeholder="Date of Birth"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="inputField"
              required
            />
          </div>
          <div className="inputGroup">
            <select
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="inputField"
              required
            >
              <option value="" disabled hidden>
                Select Course
              </option>
              <option value="Option1">Option1</option>
              <option value="Option2">Option2</option>
            </select>
          </div>
          <div className="inputGroup">
            <button className="fileInputButton">
              Attach profile image
              <input
                type="file"
                onChange={handleImageUpload}
                className="fileInput"
              />
            </button>
          </div>
          {loading && <p>Loading...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button
            type="submit"
            className="submitButton"
            disabled={loading}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CForm;
