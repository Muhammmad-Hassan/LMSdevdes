const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const path = require('path');
const multer = require('multer');
const fs = require('fs');
require('./db/conn'); // Ensure your database connection is being established
const { Student, Admin } = require('./models/authModels'); // Import your models
const User = require('./models/User'); // Import the User model

const app = express();
const port = 5000;

// Middleware
app.use(cors({
    origin: [""],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'uploads')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

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

// Admin Registration
app.post('/api/auth/admin-register', async (req, res) => {
    const { adminEmail, adminPassword } = req.body;
    console.log(req.body);

    try {
        // Check if the admin already exists
        const existingAdmin = await Admin.findOne({ adminEmail });
        if (existingAdmin) {
            return res.status(400).json({ message: 'Admin already exists' });
        }

        // Hash the password before saving
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(adminPassword, salt);

        // Create a new admin
        const admin = await Admin.create({ adminEmail, adminPassword: hashedPassword });

        // Generate a token
        console.log(admin);
        res.status(201).json({ message: "Admin created successfully" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

// Admin Login
app.post('/api/auth/admin-login', async (req, res) => {
    const { adminEmail, adminPassword } = req.body;

    try {
        const admin = await Admin.findOne({ adminEmail });
        if (!admin) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(adminPassword, admin.adminPassword);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ id: admin._id }, "hassan");
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Student Registration
app.post('/api/auth/student-register', async (req, res) => {
    const { studentEmail, studentPassword, confirmPassword } = req.body;
    console.log("body data:", req.body);

    try {
        // Check if the student already exists
        const existingStudent = await Student.findOne({ studentEmail });
        if (existingStudent) {
            return res.status(400).json({ message: 'Student already exists' });
        }

        // Check if passwords match
        if (studentPassword !== confirmPassword) {
            return res.status(400).json({ message: 'Passwords do not match' });
        }

        // Hash the password before saving
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(studentPassword, salt);

        // Create a new student
        const student = await Student.create({ studentEmail, studentPassword: hashedPassword });

        // Generate a token
        console.log(student);
        res.status(201).json({ message: "Student created successfully" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

// Student Login
app.post('/api/auth/student-login', async (req, res) => {
    const { studentEmail, studentPassword } = req.body;
    console.log(req.body);

    try {
        const student = await Student.findOne({ studentEmail });
        if (!student) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(studentPassword, student.studentPassword);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ id: student._id }, "hassan");
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});


// Profile Update Route
app.post('/api/updateProfile', upload.single('profileImage'), async (req, res) => {
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
            res.status(200).json({ message: 'Profile updated successfully' });
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

// Default Route
app.get("/", (req, res) => {
    res.json("Hello Khan");
});

// Start Server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
