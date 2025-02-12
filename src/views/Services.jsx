import React, { useContext } from "react";
import { serviceData } from "../constants";  // Ensure serviceData contains the correct format
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const Services = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={
        theme.state.darkMode ? "pb-20 bg-fixed bg-gray-100" : "pb-20 bg-black"
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20" id="services">
        <h2
          className={
            theme.state.darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          Certifications
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {serviceData.map((el) => (
            <motion.a
              key={el.name} // Essential for lists in React
              href={el.link} // Makes the container a link
              target="_blank" // Opens in new tab
              rel="noopener noreferrer" // Security measure
              initial="hidden"
              whileInView={"visible"}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center rounded-lg cursor-pointer ${theme.state.darkMode ? 'bg-white' : 'bg-gray-100'}`}
              title={el.name} // Accessibility feature, provides a title for the link
            >
              <img src={el.img} alt={el.name} className="w-16 h-16" /> {/* Adjust icon size */}
              <h4 className="text-xl font-bold mt-4">{el.name}</h4>
              <p className="text-lg mt-2 text-justify">{el.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;