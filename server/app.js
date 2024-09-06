// server/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const path = require('path');
const authRoutes = require("./routes/authRoutes")
const profileRoutes = require('./routes/Profile'); // Import the profile route
require("./db/conn")
// Middleware

app.use(cors({
    origin: ["https://front-azure-six.vercel.app"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'uploads'))); 
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get("/", (req, res) => {
    res.json("Hello Khan");
})

app.use('/api/auth', authRoutes);
app.use('/api', profileRoutes);





app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
