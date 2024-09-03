import React, { useState } from 'react';
import axios from 'axios';

function Profile() {
  const [formData, setFormData] = useState({
    username: '',
    profileImage: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const data = new FormData();
    data.append('username', formData.username);
    if (formData.profileImage) {
      data.append('profileImage', formData.profileImage);
    }

    try {
      // Replace with your actual API endpoint
      await axios.post('http://localhost:5000/api/updateProfile', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSuccess('Profile updated successfully!');
    } catch (err) {
      setError('Failed to update profile');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tl from-[#FAFEFE] to-[#E5FCFE] p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">Profile</h1>
      <p className="text-gray-600 mb-6 text-center">Update your profile information here.</p>
      <div className="max-w-lg mx-auto border bg-[#FAFEFE] p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="profileImage" className="block text-gray-700">Profile Image</label>
            <input
              type="file"
              id="profileImage"
              name="profileImage"
              onChange={handleChange}
              className="mt-1 block w-full text-sm text-gray-500 border border-gray-300 rounded-md cursor-pointer"
            />
          </div>
          {loading ? (
            <div className="text-center text-gray-500">Submitting...</div>
          ) : (
            <>
              {success && <div className="text-center text-green-500">{success}</div>}
              {error && <div className="text-center text-red-500">{error}</div>}
            </>
          )}
          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
