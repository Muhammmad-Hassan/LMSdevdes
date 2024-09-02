import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './components/HeroSection'; 
import AboutPage from './pages/About.jsx';
import ContactUsPage from './pages/ContactUsPage';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';


function App() {
  return (
    <>
      <Router>
        {/* <Header />  */}
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactUsPage/>} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
