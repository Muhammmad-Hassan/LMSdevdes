import React, { useState } from "react";
import Hamburger from "hamburger-react"
import { Link } from "react-router-dom";
import logo from  "../assets/dude.png"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subCat, setSubCat] = useState(false);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMouseEnter = () => {
    setSubCat(true);
  };

  const handleMouseLeave = () => {
    setSubCat(false);
  };

 
  
 
  

  const handleCatergaoryClick = () => {
    setSubCat(false), setMenuOpen(false);
  };

  return (
    <>
    <nav className="flex shadow-lg sticky bg-gradient-to-tl from-[#E5FCFE] to-[#FAFEFE]  top-0 border justify-between h-[55px] md:h-[80px] p-1 md:p-2 items-center w-full">
      {/* logo */}
      <div className="mx-3">
        <Link to={"/"} className="flex gap-2  justify-center items-center">
           <div className="font-semibold text-2xl rounded-full h-6 w-6 bg-[#7cbbc2]"></div>
           <span className="font-semibold text-lg text-[#649498]">LMS</span>
        </Link>
      </div>

      <div className={`lg:flex hidden   font-medium  `}>
        <Link
          to={"/"}
          onClick={() => setMenuOpen(false)}
          className="lg:mx-2 font-semibold text-zinc-600 focus:text-blue-400 text-md lg:text sm rounded-lg transition-all duration-200 hover:shadow-lg  px-4"
        >
          Home
        </Link>
        

        <Link
          to={"/about"}
          onClick={() => setMenuOpen(false)}
          className="hover:shadow-lg font-semibold text-zinc-600  focus:text-blue-400 lg:mx-2 text-md rounded-lg transition-all duration-200 hover:text-blue-400 px-4"
        >
          About 
        </Link>
       

        <div className="relative">
          <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="hover:shadow-lg font-semibold text-zinc-600  lg:mx-2 text-md focus:text-blue-400 rounded-lg transition-all duration-200 hover:text-blue-400 px-4"
          >
            Student
          </button>
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`absolute top-5 left-0 mt-1 w-[200px] bg- shadow-xl rounded-lg bg-[#E5FCFE] ${
              subCat ? "block" : "hidden"
            }`}
          >
             <Link
              to="/assignments"
              onClick={handleCatergaoryClick}
              className="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-200"
            >
              Assignments
            </Link>
            <Link
              to="/complaints"
              onClick={handleCatergaoryClick}
              className="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-200"
            >
              Complaints
            </Link>
            <Link
              to="/courses"
              onClick={handleCatergaoryClick}
              className="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-200"
            >
              Courses
            </Link>
            <Link
              to="/profile"
              onClick={handleCatergaoryClick}
              className="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-200"
            >
              Profile
            </Link>
          </div>
        </div>

        <Link
          to="/contact"
          onClick={() => setMenuOpen(false)}
          className="hover:shadow-lg font-semibold text-zinc-600  lg:mx-2 focus:text-blue-400 text-md lg:text sm rounded-lg transition-all duration-200 hover:text-blue-400 px-4"
        >
          Contact Us
        </Link>
      </div>

      {/* animative navbar */}
      <div
        className={`lg:flex  font-medium transition-all duration-500 bg-gradient-to-tl from-[#E5FCFE] to-[#FAFEFE]   ${
          menuOpen
            ? "absolute flex w-full sm:w-[300px] translate-x-0    flex-col   gap-4  left-0 h-[100vh]  bg- shadow-xl top-0 "
            : "absolute flex w-full sm:w-[300px] translate-x-[-650px]    flex-col   gap-4 left-0 h-[100vh]  bg- shadow-xl top-0 "
        }`}
      >
        <div className="flex justify-between p-1 mb-2 items-center">
          <Link to={"/"}>
            <img src={"logo"} alt="" width={80} />
          </Link>
          <div className="lg:hidden ml-32">
            <Hamburger toggled={menuOpen} toggle={toggleMenu} />
          </div>
        </div>
        <Link
          to={"/"}
          onClick={() => setMenuOpen(false)}
          className="lg:mx-2 font-semibold text-zinc-600 focus:text-blue-400 text-md lg:text-sm rounded-lg transition-all duration-200 hover:shadow-lg  px-4"
        >
          Home
        </Link>
       

        <Link
          to={"/about"}
          onClick={() => setMenuOpen(false)}
          className="hover:shadow-lg font-semibold text-zinc-600  focus:text-blue-400 lg:mx-2 text-md rounded-lg transition-all duration-200 hover:text-blue-400 px-4"
        >
          About Us
        </Link>
       

        <div className="relative  ">
          <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="hover:shadow-lg font-semibold text-zinc-600  lg:mx-2 text-md focus:text-blue-400 rounded-lg transition-all duration-200 hover:text-blue-400 px-4"
          >
            Student
          </button>
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`absolute top-5 left-0 mt-1 w-[200px] bg- shadow-xl rounded-lg bg-[#E5FCFE] ${
              subCat ? "block" : "hidden"
            }`}
          >
             <Link
              to="/assignments"
              onClick={handleCatergaoryClick}
              className="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-200"
            >
              Assignments
            </Link>
            <Link
              to="/complaints"
              onClick={handleCatergaoryClick}
              className="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-200"
            >
              Complaints
            </Link>
            <Link
              to="/courses"
              onClick={handleCatergaoryClick}
              className="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-200"
            >
              Courses
            </Link>
            <Link
              to="/profile"
              onClick={handleCatergaoryClick}
              className="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-200"
            >
              Profile
            </Link>
          </div>
        </div>

        <Link
          to="/contact"
          onClick={() => setMenuOpen(false)}
          className="hover:shadow-lg font-semibold text-zinc-600  lg:mx-2 focus:text-blue-400 text-md lg:text sm rounded-lg transition-all duration-200 hover:text-blue-400 px-4"
        >
          Contact 
        </Link>
      </div>

     
      <div className="lg:hidden ml-32">
        <Hamburger toggled={menuOpen} toggle={toggleMenu} />
      </div>
    </nav>
    </>
  );
};

export default Header;
