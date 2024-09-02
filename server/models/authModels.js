const mongoose = require('mongoose');

// Define the Student schema
const StudentSchema = new mongoose.Schema({
    studentEmail: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Please enter a valid email address'],
    },
    studentPassword: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    // Additional fields like name, class, etc., can be added as needed
});

// Define the Admin schema
const AdminSchema = new mongoose.Schema({
    adminEmail: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Please enter a valid email address'],
    },
    adminPassword: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Create the models
const Student = mongoose.model('Student', StudentSchema);
const Admin = mongoose.model('Admin', AdminSchema);

// Export the models
module.exports = {
    Student,
    Admin
};
