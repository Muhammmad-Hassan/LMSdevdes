// server/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const path = require('path');
// const jwt = require('jsonwebtoken');

// const bcrypt = require('bcrypt');

const { Student, Admin } = require('./models/authModels'); // Import your models

require("./db/conn")
// Middleware

app.use(cors({
    origin: [""],
    methods: ["POST", "GET"],
    credentials: true
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'uploads'))); 
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get("/", (req, res) => {
    res.json("Hello Khan");
})


// app.post('/api/admin-register', async (req, res) => {
//     const { adminEmail, adminPassword } = req.body;
//     console.log(req.body);

//     try {
//         // Check if the admin already exists
//         const existingAdmin = await Admin.findOne({ adminEmail });
//         if (existingAdmin) {
//             return res.status(400).json({ message: 'Admin already exists' });
//         }

//         // Hash the password before saving
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(adminPassword, salt);

//         // Create a new admin
//         const admin = await Admin.create({ adminEmail, adminPassword: hashedPassword });

//         // Generate a token
//         console.log(admin);
//         res.status(201).json({ message: "Admin created successfully" });
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).json({ message: 'Server error' });
//     }
// });




app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
