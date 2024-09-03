// models/Course.js
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  fatherName: { type: String, required: true },
  cnic: { type: String, required: true },
  dob: { type: Date, required: true },
  course: { type: String, required: true },
  profileImage: { type: String } // URL or file path for the image
}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
