// server/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const path = require('path');
const courseRoutes = require("./routes/courseRoute")
const authRoutes = require("./routes/authRoutes")
require("./db/conn")
// Middleware

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'uploads'))); 

app.get("/", (req, res) => {
    res.json("Hello Khan");
})

app.use('/api/auth', authRoutes);
app.use('/api', courseRoutes);





app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
