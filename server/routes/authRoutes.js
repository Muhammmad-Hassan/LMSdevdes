const express = require('express');
const router = express.Router();
const { register , login } = require("../controllers/authController")


// admin regester
router.post('/admin-register', register)

// adminLogin
router.post('/admin-login', login);


module.exports = router;  