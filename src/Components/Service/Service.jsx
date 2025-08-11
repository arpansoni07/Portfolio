import React from "react";

const Services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Developing robust server-side logic and database.",
  },
  {
    id: 4,
    title: "Full-Stack Development",
    description: "Combining both frontend and backend development skills.",
  },
];
const Service = () => {
  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover: shadow-lg transform transition-transform duration-300 hover:scale-110"
            >
              <div className="text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400">
                {service.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
              <a
                href="#"
                className="mt-4 inline-black text-pink-400 hover:text-yellow-500"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
