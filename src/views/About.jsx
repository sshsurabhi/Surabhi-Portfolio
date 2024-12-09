import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import profileImage from "../assets/DSC.jpeg"; // Replace with your image
import { Link } from "react-scroll";
import abstract from "../assets/abstract.jpg";

const AboutMe = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section
      id="about"
      style={{
        backgroundImage: `url(${abstract})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="flex flex-col md:flex-row items-center px-4 lg:px-12 py-12 min-h-[800px]"
    >
      {/* Right Text */}
      <motion.div
        className="w-full md:w-1/2 text-left md:pr-8 mt-8 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h2
          className={`text-4xl font-bold leading-tight ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          About Me
        </h2>
        <p
          className={`mt-4 text-1xl ${
            darkMode ? "text-gray-300" : "text-gray-700"
          } text-justify`} // Added text-justify class
          style={{ fontFamily: "Roboto, sans-serif", lineHeight: "1.8" }}
        >
          As a software developer, I have cultivated a diverse skill set that spans across various domains,
          including DevOps, Python programming, and image processing. My focus on creating desktop applications
          using PyQt and developing robust APIs is complemented by my expertise in cloud engineering and embedded
          software testing. With a solid foundation in technologies like Terraform, Kubernetes, AWS, Docker, and Bash,
          I thrive on transforming innovative ideas into impactful solutions.
        </p>
        <p
          className={`mt-3 text-1xl ${
            darkMode ? "text-gray-300" : "text-gray-700"
          } text-justify`} // Added text-justify class
        >
          Beyond the code, I channel my creativity into photography and hiking, activities that fuel my inspiration
          for technical projects. My journey is characterized by continuous learning and exploration of new technologies,
          always aiming to push the boundaries of what's possible in software development.
        </p>
        <br />
        <Link
          to="projects" /* Scrolls to the projects section */
          smooth={true}
          offset={-50}
          duration={500}
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-transparent text-base font-medium text-white bg-[#FF6F00] hover:bg-[#D85A00] shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105"
          activeClass="active-link"
        >
          Explore My Work
        </Link>
      </motion.div>

      {/* Left Image */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-center relative"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        <img
          src={profileImage} // Replace with your image URL
          alt="Profile"
          className="rounded-lg shadow-lg w-0.5/5 sm:w-4.5/5"
          style={{
            filter: darkMode
              ? "brightness(100%)"
              : "brightness(100%) contrast(90%)",
          }}
        />
        {/* Cinematic Overlay */}
        <div
          className="absolute inset-0 bg-[#FF6F00] mix-blend-multiply opacity-20 rounded-lg"
          aria-hidden="true"
        ></div>
      </motion.div>
    </section>
  );
};

export default AboutMe;