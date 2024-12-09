import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import { techStack } from "../constants"; // Assuming techStack contains the list of technologies
import abstract from "../assets/abstract.jpg";

const Skills = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  // Split the tech stack into two halves
  const midIndex = Math.ceil(techStack.length / 2);
  const leftTechStack = techStack.slice(0, midIndex);
  const rightTechStack = techStack.slice(midIndex);

  return (
    <section
      id="skills"
      style={{
        backgroundImage: `url(${abstract})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="flex flex-col md:flex-row items-center px-4 lg:px-12 py-12"
    >
      {/* Left Tech Stack Icons */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-center flex-wrap gap-8 mt-8 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      >
        {leftTechStack.map((el, index) => (
          <motion.div
            key={index}
            className="p-0 flex items-center justify-center"
            whileHover={{
              scale: 1.2,
              boxShadow: "0px 0px 20px rgba(255, 111, 0, 0.7)",
              filter: "brightness(1.2)",
            }}
          >
            <motion.img
              alt={el.name}
              src={el.link}
              className="w-20 h-20"
              style={{
                transition: "transform 0.2s ease",
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Description Text */}
      <motion.div
        className="w-full md:w-1/2 text-left md:px-8 mt-8 md:mt-0" // Added padding for better spacing
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2
          className={`text-4xl font-bold leading-tight ${
            darkMode ? "text-[#FF6F00]" : "text-gray-800"
          }`}
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Technical Stack
        </h2>
        <br />
        <p
          className={`mt-4 text-xl ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
          style={{
            fontFamily: "'Pacifico', cursive",
            lineHeight: "1.8",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
            boxShadow: "0px 0px 15px rgba(50, 111, 111, 0.3)",
          }}
        >
          Turning coffee into code and ideas into reality with these powerful tools!
        </p>
      </motion.div>

      {/* Right Tech Stack Icons */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-center flex-wrap gap-8 mt-8 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      >
        {rightTechStack.map((el, index) => (
          <motion.div
            key={index}
            className="p-0 flex items-center justify-center"
            whileHover={{
              scale: 1.2,
              boxShadow: "0px 0px 20px rgba(255, 111, 0, 0.7)",
              filter: "brightness(1.2)",
            }}
          >
            <motion.img
              alt={el.name}
              src={el.link}
              className="w-20 h-20"
              style={{
                transition: "transform 0.2s ease",
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;