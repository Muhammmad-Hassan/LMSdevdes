import React, { useState } from 'react';
import { FaTachometerAlt, FaBook, FaClipboardList, FaComments } from 'react-icons/fa';
import './dashbaord.css'; // Import the CSS file

function Dashboard() {
    const [activeSection, setActiveSection] = useState('');

    const renderContent = () => {
        switch (activeSection) {
            case 'dashboard':
                return (
                    <div className="content-container">
                        <h2>Student Information</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>F.Name</th>
                                    <th>CNIC</th>
                                    <th>DOB</th>
                                    <th>Course</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>John Doe</td>
                                    <td>Jane Doe</td>
                                    <td>12345-6789012-3</td>
                                    <td>01-01-2000</td>
                                    <td>Computer Science</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                );
            case 'courses':
                return (
                    <div className="content-container">
                        <h2>Course Title</h2>
                        <p>This is a course description.</p>
                        <button className="learn-more-button">Learn More</button>
                    </div>
                );
            case 'assignments':
                return (
                    <div className="content-container">
                        <h2>Submit Assignment</h2>
                        <form>
                            <div>
                                <label>Assignment Name:</label>
                                <input type="text" className="assignment-name-input"/>
                            </div>
                            <div>
                                <label>Date Posted:</label>
                                <input type="date" className="date-posted-input"/>
                            </div>
                            <button type="submit" className="submit-assignment-button">Submit Assignment</button>
                        </form>
                    </div>
                );
            case 'complaints':
                return (
                    <div className="content-container">
                        <h2>Write Complaint</h2>
                        <form>
                            <div>
                                <label>Write Complaint:</label>
                                <textarea rows="4" className="write-complaint-textarea" />
                            </div>
                            <button type="submit" className="send-complaint-button">Send Complaint</button>
                        </form>
                    </div>
                );
            default:
                return <div className="content-container"></div>;
        }
    };

    return (
        <div className="dashboard-container">
            <div className="sidebar">
                <div className="profile-section">
                    <img src="your-image-url" alt="Profile" />
                    <h3>Ghulam Hamza</h3>
                </div>
                <nav>
                    <ul>
                        <li onClick={() => setActiveSection('dashboard')}>
                            <FaTachometerAlt /> Dashboard
                        </li>
                        <li onClick={() => setActiveSection('courses')}>
                            <FaBook /> Courses
                        </li>
                        <li onClick={() => setActiveSection('assignments')}>
                            <FaClipboardList /> Assignments
                        </li>
                        <li onClick={() => setActiveSection('complaints')}>
                            <FaComments /> Complaints
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="content">
                {renderContent()}
            </div>
        </div>
    );
}

export default Dashboard;
