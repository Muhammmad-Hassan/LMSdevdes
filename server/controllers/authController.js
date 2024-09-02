const bcrypt =   require('bcrypt')
const jwt = require('jsonwebtoken')

const {Student ,Admin} = require("../models/authModels")




// adminRegister
exports.adminRegister = async (req, res) => {
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
        console.log(admin)
        res.status(201).json({ message: "User created" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server error' });
    }
};

// adminLogin
exports.adminLogin = async (req, res) => {
    const { adminEmail, adminPassword } = req.body;
    // console.log(req.body)

    try {
        const admin = await Admin.findOne({ adminEmail });
        if (!admin) {

            return res.status(401).json({ message: 'Invalid admin Email or password' });
        }

        const isMatch = await bcrypt.compare(adminPassword, admin.adminPassword);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid admin Email or password' });
        }

        const token = jwt.sign({ id: admin._id }, "hassan");

        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}


// studentRegister
exports.studentRegister = async (req, res) => {
    const { studentEmail, studentPassword } = req.body;
    console.log("body data :",req.body);

    try {
        // Check if the student already exists
        const existingstudent = await Student.findOne({ studentEmail });
        if (existingstudent) {
            return res.status(400).json({ message: 'Admin already exists' });
        }

        // Hash the password before saving
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(studentPassword, salt);

        // Create a new student
        const student = await Student.create({ studentEmail, studentPassword: hashedPassword });

        // Generate a token
        console.log(student)
        res.status(201).json({ message: "User created" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server error' });
    }
}


// studentLogin
exports.studentLogin = async (req, res) => {
    const { studentEmail, studentPassword } = req.body;
    console.log(req.body)

    try {
        const student = await Student.findOne({ studentEmail });
        if (!student) {

            return res.status(401).json({ message: 'Invalid admin Email or password' });
        }

        const isMatch = await bcrypt.compare(studentPassword, student.studentPassword);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid admin Email or password' });
        }

        const token = jwt.sign({ id: student._id }, "hassan");

        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

