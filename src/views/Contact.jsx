import React, { useContext } from "react";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import abstract from "../assets/abstract.jpg";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="contact"
      ////////////////////////////////////////////////////
      style={{
        backgroundImage: `url(${abstract})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      ////////////////////////////////////////////////////
      className={`${
        darkMode
          ? "pt-20 min-h-[600px] text-white" // Add conditional text styles for dark mode
          : "pt-20 text-white min-h-[600px]" // Or light mode
      }`}
    >
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-4">
        <h2 className="text-4xl font-bold text-center text-white mt-8">
          Let's Talk
        </h2>
        <div className="text-center mt-4">
          <h4 className="text-3xl font-semibold text-indigo-400">
            Connect with me
          </h4>
          <p className="text-lg text-gray-300 mt-2">
            If you want to know more about me or my work, or if you would just
            like to say hello, send me a message. I'd love to hear from you.
          </p>
        </div>

        <div className="flex justify-between items-center md:items-stretch flex-col md:flex-row mt-12 pb-16">
          {/* Form Section */}
          <div className="w-full md:pr-8">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="my-4">
                <label
                  htmlFor="name"
                  className="block mb-2 text-lg font-medium text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="bg-gray-800 text-white text-sm rounded-lg w-full p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-2 text-lg font-medium text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="bg-gray-800 text-white text-sm rounded-lg w-full p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block mb-2 text-lg font-medium text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="bg-gray-800 text-white h-28 w-full text-sm rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your message"
                  required
                />
              </div>

              <div className="flex justify-between items-center">
                {/* <div className="underline">
                  <a href="mailto:vmvalluru@gmail.com">
                  <button
                  type="submit"
                  className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-500 transition-all duration-300"
                >
                   Send an email
                   </button>
                  </a>
                </div> */}
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-500 transition-all duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="w-full flex flex-col md:items-end mt-8 md:mt-4">
            <h1 className="text-3xl text-white font-bold mb-2">Email 📧</h1> {/* Adjusted margin */}
            <a
              href="mailto:konnect.surabhi@gmail.com"
              className="mb-8 mt-4 font-semibold text-blue-400 hover:text-blue-500"
            >
              konnect.surabhi@gmail.com
            </a>
            <h1 className="text-3xl text-white font-bold mb-2">🏠 Address</h1> {/* Adjusted margin */}
            <p className="mt-4 text-lg text-blue-300 md:text-right mb-8"> {/* Add bottom margin */}
              Chemnitz
              <br />
              Germany
            </p>

            <h1 className="text-3xl text-white font-bold mb-2">Social</h1> {/* Adjusted margin */}
            <ul className="flex mt-4">
              {contactLinks.map((el) => (
                <a
                  key={el.name}
                  href={el.link}
                  className="md:ml-6 md:mr-0 mr-6 cursor-pointer hover:scale-125 transition-all duration-300 flex flex-col justify-center items-center"
                >
                  <img alt="" src={el.url} className="w-8 h-8" />
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div
        className={
          darkMode
            ? "w-full bg-white text-black text-lg py-3 flex justify-center md:mt-16"
            : "w-full bg-gray-900 text-white text-lg py-3 flex justify-center md:mt-16"
        }
      > 
        © 2024
        <div className="text-red-500 px-2 text-2xl">🧱</div>
        by Sai Sri Harsha
      </div>
    </div>
  );
};

export default Contact;
