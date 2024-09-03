import React, { useState } from 'react';
import axios from 'axios';

function Assignments() {
  const [assignmentName, setAssignmentName] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/assignments', {
        name: assignmentName,
        date,
      });
      // Clear form fields after successful submission
      setAssignmentName('');
      setDate('');
      alert('Assignment submitted successfully!');
    } catch (error) {
      console.error('Error submitting assignment:', error);
      alert('Failed to submit assignment.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tl from-[#FAFEFE] to-[#E5FCFE]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">Assignments</h1>
        <p className="text-gray-600 mb-6 text-center">Manage and view your assignments here.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="assignmentName" className="block text-sm font-medium text-gray-700 mb-2">Assignment Name</label>
            <input
              type="text"
              id="assignmentName"
              value={assignmentName}
              onChange={(e) => setAssignmentName(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">Date</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Assignments;
