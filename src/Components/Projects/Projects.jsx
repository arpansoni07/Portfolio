import React from "react";
import ecommerceImage from "../../assets/ecommerce.jpeg";
import blogImage from "../../assets/blog.jpeg";
import chattingImage from "../../assets/chatting.jpeg";

const Project = [
  {
    id: 1,
    name: "Chatting APP",
    technologies: "MERN STACK",
    image: chattingImage,
    github: "",
  },
  {
    id: 2,
    name: "Blog APP",
    technologies: "MERN STACK",
    image: blogImage,
    github: "",
  },
  {
    id: 3,
    name: "E-Commerce Website",
    technologies: "MERN STACK",
    image: ecommerceImage,
    github: "",
  },
];
const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Project.map((Project) => (
            <div
              key={Project.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover: shadow-lg transform transition-transform duration-300 hover:scale-110"
            >
              <img
                src={Project.image}
                alt={Project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              ></img>
              <h3 className="text-2xl font-bold mb-2">{Project.name}</h3>
              <p className="text-gray-400 mb-4 ">{Project.technologies}</p>
              <a
                href=""
                className="inline-block bg-gradient-to-r from-pink-400 to-yellow-400 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
