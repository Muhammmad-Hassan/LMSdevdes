const bcrypt =   require('bcrypt')
const jwt = require('jsonwebtoken')




// adminRegister
exports.register = async (req, res) => {
    const { adminName, adminPassword } = req.body;
    console.log(req.body);

    try {
        // Check if the admin already exists
        const existingAdmin = await Admin.findOne({ adminName });
        if (existingAdmin) {
            return res.status(400).json({ message: 'Admin already exists' });
        }

        // Hash the password before saving
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(adminPassword, salt);

        // Create a new admin
        const admin = await Admin.create({ adminName, adminPassword: hashedPassword });

        // Generate a token
        console.log(admin)
        res.status(201).json({ message: "User created" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server error' });
    }
};

// adminLogin
exports.login = async (req, res) => {
    const { adminName, adminPassword } = req.body;
    // console.log(req.body)

    try {
        const admin = await Admin.findOne({ adminName });
        if (!admin) {

            return res.status(401).json({ message: 'Invalid admin name or password' });
        }

        const isMatch = await bcrypt.compare(adminPassword, admin.adminPassword);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid admin name or password' });
        }

        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET);

        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

