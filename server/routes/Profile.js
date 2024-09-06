// routes/profile.js
const express = require('express');
const multer = require('multer');
const User = require('../models/User'); // Import the user model
const router = express.Router();

// Multer setup for file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Ensure the uploads folder exists
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });





router.post('/updateProfile', upload.single('profileImage'), async (req, res) => {
  const { username } = req.body;
  const profileImage = req.file ? req.file.path : null; // Get file path if image is uploaded

  try {
    // Check if user exists (assuming req.user._id is available)
    let user = await User.findById(req.user?._id); // Replace req.user._id with actual user ID

    if (user) {
      // If user exists, update their information
      user.username = username;
      if (profileImage) {
        user.profileImage = profileImage;
      }

      await user.save();
      res.status(200).json({ message: 'Profile updated successfully' , });
    } else {
      // If no user exists, create a new one
      user = new User({
        username,
        profileImage: profileImage ? profileImage : null, // Set image path if uploaded
      });

      await user.save();
      res.status(201).json({ message: 'New user created successfully!' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to update or create profile' });
  }
});

  module.exports = router;