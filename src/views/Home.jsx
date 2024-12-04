import React, { useContext } from "react";
import Typical from "react-typical";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import abstract from "../assets/home.jpg";
// import cloudDark from "../assets/cloudDark.png";
import CV from "../assets/surabhi.pdf";

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <div
        style={{
          backgroundImage: darkMode ? `url('${abstract}')` : 'none',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          height: "100vh", // Ensure full viewport height
        }}
        className="flex items-center justify-center"
      >
        <main
          className="text-center px-4 sm:px-6 md:mt-0 lg:px-8 max-w-4xl w-full"
          id="/"
        >
          <div>
            <motion.h1
              className="text-3xl tracking-tight font-semibold sm:text-4xl md:text-5xl"
              style={{
                fontFamily: "Poppins, cambria", // New font for headings
                color: darkMode ? "white" : "#FF6F00", // White text for dark mode
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.span
                className={darkMode ? "block text-white" : "text-white"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                Hello, I am Sai Sri Harsha Surabhi
              </motion.span>
              <br />
              <span className="block text-[#FF6F00] z-0 lg:inline">
                <Typical
                  steps={[
                    "Devops Engineer",
                    1000,
                    "Automation Test Engineer",
                    1000,
                    "Python Developer",
                    1000,
                    "Cloud Engineer",
                    1000,
                  ]}
                  loop={Infinity}
                  wrapper="span"
                />
              </span>
            </motion.h1>

            {/* New Paragraph with Additional Information */}
            <div className="flex justify-center">
              <motion.p
                className="mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl text-center"
                style={{
                  fontFamily: "Lato, Cambria", // New font for text
                  color: darkMode ? "white" : "#FF6F00", // White text for dark mode
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }} // Adjust the delay for a nice effect
              >
              A dedicated DevOps Engineer with a robust background in Software Development with Python.
              I specialize in AWS, Infrastructure as Code (IaC), Kubernetes, and CI/CD pipelines.
              With a comprehensive understanding of the software lifecycle—from coding to cloud deployment.
              I am passionate about optimizing processes and delivering scalable solutions. It's a pleasure to connect...!
              </motion.p>
            </div>            
            <div className="flex justify-center mt-4 space-x-4">
              {contactLinks.map((el) => (
                <motion.a
                  href={el.link}
                  target="_blank"
                  className="cursor-pointer hover:scale-125 inline-flex items-center"
                  key={el.name}
                  whileHover={{ scale: 1.2 }} // Hover scale effect
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img alt="" src={el.url} className="w-10 h-10" />
                </motion.a>
              ))}
            </div>
            <div className="mt-5 sm:mt-8 flex justify-center space-x-4">
              {/* CV Button */}
              <motion.a
                href={CV} // Change this link to your actual resume link
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-5 py-3 border border-round text-base font-semibold text-white bg-transparent hover:bg-[#FF6F00] hover:text-white transition duration-300"
                whileHover={{ scale: 1.1 }} // Hover scale effect
                transition={{ type: "spring", stiffness: 200 }}
              >
                Download CV ⬇️
              </motion.a>

              {/* Hire Me Button */}
              <motion.div
                whileHover={{ scale: 1.1 }} // Hover scale effect
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link
                  to="contact" // Scrolls to the contact section
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="flex items-center justify-center px-5 py-3 border border-round text-base font-semibold text-white bg-transparent hover:bg-[#FF6F00] hover:text-white transition duration-300"
                >
                  Contact 📞
                </Link>
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;