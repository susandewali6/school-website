import React, { useEffect, useState } from "react";
import {
  MdOutlineMenu,
  MdClose,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpg";


const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const [showMenu, setShowMenu] = useState(false);
  const [showAboutSubMenu, setShowAboutSubMenu] = useState(false);
  const [showServiceSubMenu, setShowServiceSubMenu] = useState(false);
  const [showSubjectSubMenu, setShowSubjectSubMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    if (!showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  useEffect(() => {
    if (!showMenu) {
      document.body.style.overflow = "";
    }
  }, [showMenu]);

  const handleAboutClick = () => {
    setShowAboutSubMenu(!showAboutSubMenu);
    if (showServiceSubMenu) {
      setShowServiceSubMenu(false);
    }
    if (showSubjectSubMenu) {
      setShowSubjectSubMenu(false);
    }
  };







  const aboutLinks = [
    { to: "/about", label: "About Us" },
    { to: "/features", label: "Our Facilities" },
    { to: "/gallery", label: "Gallery" },
  ];






  return (
    <div className="sticky top-0 z-50 w-full ">
      {/* Navbar for larger devices more than 1024px */}


      <div className="bg-gray-50 border-b border-gray-100 text-gray-950 hidden lg:block sticky top-0 h-[5rem] py-2">
        <div className="md:px-0 px-4 md:w-10/12 mx-auto flex items-center justify-between">
          <Link to="/">
            <img
              className="h-12 w-12 rounded-full z-50 object-cover"
              src={logo}
              alt="Logo"
            />
          </Link>
          <div className="flex gap-7 items-center">


            <Link to="/" className="list-none cursor-pointer">
              HOME
            </Link>

            <li
              className="list-none cursor-pointer relative h-full py-7"
              onMouseEnter={() => setShowAboutSubMenu(true)}
              onMouseLeave={() => setShowAboutSubMenu(false)}
            >
              ABOUT
              {showAboutSubMenu ? (
                <MdKeyboardArrowUp className="inline-block ml-1 text-lg float-right" />
              ) : (
                <MdKeyboardArrowDown className="inline-block ml-1 text-lg float-right" />
              )}
              {showAboutSubMenu && (
                <div
                  className="absolute flex flex-col gap-2 bg-gray-50 text-[#233542] w-[15rem] my-[1.62rem] rounded-md shadow-lg"
                  onMouseEnter={() => setShowAboutSubMenu(true)}
                  onMouseLeave={() => setShowAboutSubMenu(false)}
                >
                  {aboutLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.to}
                      className="py-2 px-4 nav-hover hover:bg-yellow-200 group"
                    >
                      <p className="group-hover:translate-x-2 duration-500">
                        {link.label}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </li>










            <Link to="/contactus" className="list-none cursor-pointer">
              CONTACT
            </Link>

            <Link to="/apply">
              <button className="bg-accent-350 py-2 px-4 hover:bg-accent-300 text-white duration-500 rounded-md">
                Apply online
              </button>
            </Link>

          </div>
        </div>
      </div>



      {/* Navbar for smaller devices less than 1024px */}
      <div className="lg:hidden">
        <div className="flex justify-between items-center px-4 py-2 shadow-md bg-gray-50">

          <Link to="/">
            <img
              className="h-12 w-12 rounded-full z-50 object-cover"
              src={logo}
              alt="Logo"
            />
          </Link>

          <div className="text-3xl text-primary-450" onClick={toggleMenu}>
            <MdOutlineMenu />
          </div>

        </div>

        {/* Menu Background */}
        <div
          className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out ${showMenu ? "opacity-50" : "opacity-0 pointer-events-none"
            }`}
          onClick={toggleMenu}
        ></div>

        {/* Link content */}


        <div
          className={`fixed top-0 left-0 bottom-0 w-[75%] bg-white shadow-md flex flex-col gap-4 transition-transform duration-300 ease-in-out ${showMenu ? "translate-x-0" : "-translate-x-full"
            }`}
        >


          <div
            className="py-2 shadow-md w-full h-[4rem] bg-white text-gray-950 pl-3 flex  justify-between items-center px-4"
            onClick={toggleMenu}
          >


            <Link to="/">
              <img
                className="h-12 w-full z-50 object-cover"
                src={logo}
                alt="Logo"
              />
            </Link>
            <div className="text-3xl text-primary-450">
              <MdClose />
            </div>


          </div>


          <Link
            to="/"
            className="list-none cursor-pointer py-2 px-4 border-b border-gray-300"
            onClick={toggleMenu}
          >
            HOME
          </Link>
          <li
            className="list-none cursor-pointer py-2 px-4 border-b border-gray-300 flex justify-between"
            onClick={handleAboutClick}
          >
            ABOUT
            {showAboutSubMenu ? (
              <MdKeyboardArrowUp className="inline-block ml-1 text-lg" />
            ) : (
              <MdKeyboardArrowDown className="inline-block ml-1 text-lg" />
            )}
          </li>
          {showAboutSubMenu && (
            <ul className="bg-white text-[#233542] pl-6">
              {aboutLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className="py-3 px-2 nav-hover hover:bg-primary-450 hover:text-white block"
                  onClick={toggleMenu}
                >
                  {link.label}
                </Link>
              ))}
            </ul>
          )}













          <Link
            to="/contactus"
            className="list-none cursor-pointer py-2 px-4 border-b border-gray-300"
            onClick={toggleMenu}
          >
            CONTACT
          </Link>
          <Link to="/apply" className="px-4 mt-5" onClick={toggleMenu}>
            <button className="bg-accent-350 py-2 px-4 hover:bg-accent-300 text-white duration-500 rounded-md">
              Apply online
            </button>
          </Link>




          <div className=" flex   mt-5">


            <Link
              onClick={toggleMenu}
              to={"/events"}
              className="flex items-center py-3 px-6 bg-green-600 hover:bg-green-500 duration-700 gap-3 text-white"
            >
              EVENTS
            </Link>

            <Link
              onClick={toggleMenu}
              to={"/notices"}
              className="flex items-center  hover:bg-red-600 duration-700   text-white bg-red-700 gap-3  py-3 px-6"
            >
              NOTICE
            </Link>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
