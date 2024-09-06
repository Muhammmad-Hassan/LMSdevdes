
const express = require('express');
const router = express.Router();


router.post('/', (req, res) => {
    res.json("Hello Khan");
})




module.exports = router;  

