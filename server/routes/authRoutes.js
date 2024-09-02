const express = require('express');
const router = express.Router();
const { studentLogin , studentRegister,adminRegister  ,adminLogin} = require("../controllers/authController")


// admin regester
router.post('/admin-register', adminRegister)

// adminLogin
router.post('/admin-login', adminLogin);

// // studentRegister
router.post('/student-register', studentRegister);

// // studentLogin
router.post('/student-login', studentLogin);


module.exports = router;  