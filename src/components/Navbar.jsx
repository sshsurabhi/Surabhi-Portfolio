import React, { useContext, useState } from "react";
import { Link } from "react-scroll";
import { ThemeContext } from "../themeProvider";
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const [toggle, setToggle] = useState(false);
  const darkMode = theme.state.darkMode;

  const links = [
    { name: "Home", route: "/" },
    { name: "About", route: "about" },
    { name: "Skills", route: "skills" },
    { name: "Projects", route: "projects" },
    { name: "Contact", route: "contact" },
  ];

  const toggleTheme = () => {
    theme.dispatch({ type: darkMode ? "LIGHTMODE" : "DARKMODE" });
  };

  return (
    <>
      <nav
        className={`border-gray-200 z-50 shadow-lg md:px-8 px-1 fixed w-full top-0 ${
          darkMode ? "bg-[rgba(255,255,255,0.1)]" : "bg-[rgba(55,65,81,0.1)]"
        }`}
      >
        <div className="flex justify-between items-center py-2 md:py-4 md:px-2 pl-2 mx-auto">
        {/* Logo Section */}
        <div className="flex items-center cursor-pointer hover:bg-[#FF6F00] squared-full p-0 transition duration-300">
          <Link to="/" spy={true} smooth={true} duration={500} offset={-50} className="flex items-center">
            <img
              src="https://img.icons8.com/external-others-inmotus-design/67/external-H-alphabet-others-inmotus-design-14.png" // Use your icon URL here
              alt="Logo"
              className={`w-10 h-10 transition-all duration-300 hover:scale-105 ${
                darkMode ? "hover:text-gray-700" : "hover:text-gray-700"
              }`}
              style={{
                cursor: 'pointer',
              }}
            />
          </Link>
        </div>

          {/* Desktop Navigation */}
          <div className="hidden justify-between items-center w-full md:flex md:w-auto">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium">
              {links.map((el) => (
                <li className="cursor-pointer" key={el.name}>
                  <Link
                    to={el.route}
                    activeClass={"text-white bg-[#FF6F00]"}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-50}
                    className={`block py-2 px-3 rounded-md text-black hover:bg-[#FF6F00] ${
                      darkMode
                        ? "text-black hover:bg-[#FF6F00] hover:text-white"
                        : "text-white hover:bg-[#FF6F00] hover:text-black"
                    }`}
                  >
                    {el.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Theme toggle with aria-label for accessibility */}
            <button onClick={toggleTheme} aria-label={`Switch to ${darkMode ? "light" : "dark"} theme`}>
              <img
                src={
                  darkMode
                    ? "https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-sun-lighting-flaticons-flat-flat-icons.png"
                    : "https://img.icons8.com/external-prettycons-lineal-color-prettycons/49/000000/external-moon-astrology-and-symbology-prettycons-lineal-color-prettycons.png"
                }
                className="w-6 ml-6 cursor-pointer hover:scale-150"
                alt={darkMode ? "Switch to Light Theme" : "Switch to Dark Theme"}
              />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center">
            {/* Theme toggle for mobile */}
            <button onClick={toggleTheme} aria-label={`Switch to ${darkMode ? "light" : "dark"} theme`}>
              <img
                src={
                  darkMode
                    ? "https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-sun-lighting-flaticons-flat-flat-icons.png"
                    : "https://img.icons8.com/external-prettycons-lineal-color-prettycons/49/000000/external-moon-astrology-and-symbology-prettycons-lineal-color-prettycons.png"
                }
                className="w-6 mr-4 cursor-pointer hover:scale-150"
                alt={darkMode ? "Switch to Light Theme" : "Switch to Dark Theme"}
              />
            </button>

            {/* Hamburger Icon */}
            <Hamburger
              toggled={toggle}
              size={22}
              duration={0.8}
              distance={"lg"}
              toggle={setToggle}
              color={darkMode ? "#000000" : "#ffffff"}
            />
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0, transition: { type: "spring" } }}
            exit={{ x: 200, transition: { type: "spring" } }}
            className={`py-2 px-2 md:p-0 z-50 fixed top-16 mt-2 rounded-lg shadow-lg right-2 block w-40 ${
              darkMode ? "bg-white" : "bg-black"
            }`}
          >
            <ul className="md:hidden md:flex-row md:space-y-8 md:mt-0 md:text-md md:font-medium">
              {links.map((el) => (
                <Link
                  key={el.name}
                  to={el.route}
                  activeClass={"text-white bg-[#FF6F00]"}
                  className={`hover:bg-[#FF6F00] ${
                    darkMode
                      ? "text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium mt-1"
                      : "text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium mt-1"
                  }`}
                  spy={true}
                  smooth={true}
                  onClick={() => setToggle(false)} // Close the menu after clicking
                >
                  {el.name}
                </Link>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;