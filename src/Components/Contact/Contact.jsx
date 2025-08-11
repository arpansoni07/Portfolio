import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-black text-white py-20" id="contact me">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400">
              Let's Talk
            </h3>
            <p className="mb-4">
              I'm open to discussing web development projects or internship
              opportunities.
            </p>
            <div className="mb-4">
              <FaEnvelope className="inline-block text-pink-400 mr-2" />
              <a
                href="mailto:youremail@example.com"
                className="hover:underline"
              >
                youremail@example.com
              </a>
            </div>
            <div className="mb-4 ">
              <FaPhone className="inline-block text-pink-400 mr-2" />
              <span>+7869979969</span>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-pink-400 mr-2" />
              <span>Street, City, Country</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                focus:border-green-400"
                  placeholder="Enter Your Name"
                ></input>
              </div>
              <div>
                <label htmlFor="E-mail" className="block mb-2">
                  E-Mail
                </label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                focus:border-green-400"
                  placeholder="Enter Your E-mail"
                ></input>
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  type="text"
                  className="w-full p-2 rounded mb-3 bg-gray-800 border border-gray-600 focus:outline-none
                focus:border-green-400"
                  rows="5"
                  placeholder="Enter Your Message"
                />

                <button className="bg-gradient-to-r from-pink-400 to-yellow-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-8  py-2 rounded-full ">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
