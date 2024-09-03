const Course = require('../models/Course');
const path = require('path');
const fs = require('fs');

 exports.createCourse = async (req, res) => {
  try {
    const { name, fatherName, cnic, dob, course } = req.body;
    let profileImage = '';

    // Handle file upload if any
    if (req.file) {
      profileImage = req.file.path; // or use req.file.filename depending on your setup
    }

    const newCourse = new Course({
      name,
      fatherName,
      cnic,
      dob,
      course,
      profileImage
    });

    await newCourse.save();
    res.status(201).json({ message: 'Course created successfully', course: newCourse });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the course' });
  }
};

