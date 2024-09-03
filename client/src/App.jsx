import React from "react";
import { BrowserRouter as Router, Route, Routes, Form } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import AboutPage from "./pages/About.jsx";
import ContactUsPage from "./pages/ContactUsPage";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import CForm from "./components/CForm.jsx";
import Header from "./components/Header.jsx";

import Assignments from "./pages/studandDashboard/Assignments.jsx";
import Courses from "./pages/studandDashboard/Courses.jsx";
import Complaints from "./pages/studandDashboard/Complaints.jsx";
import Profile from "./pages/studandDashboard/Profile.jsx";
import RouteWrapper from "./components/RouteWrapper.jsx";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<RouteWrapper element={<HeroSection />} />} />
          <Route path="/about" element={<RouteWrapper element={<AboutPage />} />} />
          <Route path="/contact" element={<RouteWrapper element={<ContactUsPage />} />} />
          <Route path="/SignIn" element={<RouteWrapper element={<SignIn />} />} />
          <Route path="/SignUp" element={<RouteWrapper element={<SignUp />} />} />
          <Route path="/CForm" element={<RouteWrapper element={<CForm />} />}/>
          <Route
            path="/assignments"
            element={<RouteWrapper element={<Assignments />} />}
          />
          <Route
            path="/courses"
            element={<RouteWrapper element={<Courses />} />}
          />
          <Route path="/complaints" element={<RouteWrapper element={<Complaints />} />}/>
          <Route path="/profile" element={<RouteWrapper element={<Profile />} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
