const express = require('express');
const router = express.Router();
const { createCourse } = require('../controllers/courseController');
const multer = require('multer');

// Set up file storage with multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directory to save uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Create unique filename
  }
});
const upload = multer({ storage });

router.post('/course', upload.single('profileImage'), createCourse);

module.exports = router;  