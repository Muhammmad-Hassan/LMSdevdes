import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // Fetch data from API
        // await axios.get('https://api.example.com/courses'); // Replace with the actual endpoint
        // Set dummy data
        const dummyCourses = [
          { id: 1, name: 'Introduction to Programming', description: 'Learn the basics of programming with this introductory course.' },
          { id: 2, name: 'Advanced JavaScript', description: 'Dive deep into JavaScript and explore advanced concepts.' },
          { id: 3, name: 'Web Development Bootcamp', description: 'A comprehensive bootcamp covering all aspects of web development.' },
        ];
        setCourses(dummyCourses);
      } catch (err) {
        setError('Failed to fetch courses');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 bg-gradient-to-tl from-[#FAFEFE] to-[#E5FCFE]">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">Courses</h1>
      <p className="text-gray-600 mb-6 text-center">Check out your current courses and progress.</p>
      {loading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          {courses.length > 0 ? (
            <ul className="space-y-4">
              {courses.map((course) => (
                <li key={course.id} className="border-b border-gray-300 pb-4">
                  <h2 className="text-xl font-semibold text-gray-800">{course.name}</h2>
                  <p className="text-gray-600">{course.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center text-gray-600">No courses available.</div>
          )}
        </div>
      )}
    </div>
  );
}

export default Courses;
