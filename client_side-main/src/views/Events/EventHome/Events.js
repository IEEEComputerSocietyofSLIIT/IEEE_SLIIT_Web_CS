import { Link } from "react-router-dom";
import "./events.css";
import wbk from "./img/bkw.png";
import video from "./img/Bvi.webm";
import extreme from "./img/FB_IMG_1719930914312.jpg";
import cyber from "./img/FB_IMG_1719930332073.jpg";
import pixel from "./img/05.jpg"
import React from "react";
import webwrap from "./img/7.png";
import Footer from '../../Footer/Footer'
import pixel2 from './img/Screenshot (526).png'
import extreme3 from "./img/extreme3.jpg"

function Events() {
  const upcomingEvents = [
    // {
    //   name: "SLIITXtreme 3.0",
    //   description:
    //     "SLIITXtreme 3.0 was organized by the IEEE Computer Society of SLIIT, in collaboration with Software Engineering Student Community of SLIIT. This event is an awareness hackathon event, IEEEXtreme 18.0 Global Coding Competition.",
    //   image: extreme3, // Replace this with the correct path to the image
    // },
  ];

  const pastEvents = [
    {
      name: "SLIITXtreme 3.0",
      description:
        "SLIITXtreme 3.0 was organized by the IEEE Computer Society of SLIIT, in collaboration with Software Engineering Student Community of SLIIT. This event is an awareness hackathon event, IEEEXtreme 18.0 Global Coding Competition.",
      image: extreme3, // Replace this with the correct path to the image
    },
    {
      name: "CyberShield 3.0",
      description:
        "CyberShield 3.0 was organized by the IEEE Computer Society of SLIIT, in collaboration with Cybersecurity Student Community and HashX (Pvt) Ltd. This is a cyber-related event, which helps the audience to be updated with the cybersecurity-related technology.",
      image: cyber, // Replace this with the correct path to the image
    },
    {
      name: "WebWrap 1.0",
      description:
        "WebWrap 1.0 was organized by the IEEE Computer Society of SLIIT. This is an event which helped audience to learn about web technologies and the career.",
      image: webwrap, // Replace this with the correct path to the image
    },
    {
      name: "Pixel+ 1.0",
      description:
        "Pixel+ 1.0 was organized by the IEEE Computer Society of SLIIT. This is an event which guides the audience into user interfaces/ user experience knowledge and the career.",
      image: pixel2, // Replace this with the correct path to the image
    },
    {
      name: "SLIITXtreme 2.0",
      description:
        "SLIITXtreme 2.0 was organized by the IEEE Computer Society of SLIIT, in collaboration with Software Engineering Student Community of SLIIT. This event is an awareness hackathon event, IEEEXtreme 17.0 Global Coding Competition. 💻",
      image: extreme, // Replace this with the correct path to the image
    },
  ];

  return (
    <div className="Eh-video-container">
      <video autoPlay loop muted className="Eh-video">
        <source src={video} type="video/mp4" />
        Sorry, your browser does not support the video tag.
      </video>

      <img src={wbk} alt="bk" className="Eh-image" />
      <div className="overlaybk"></div>
      <div className="Eh-content">
        <h1 className="Eh-topic">
          EVENT<br></br>NEWS
        </h1>
      </div>

      {/* Upcoming Events Section */}
      <section className="mt-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl md:text-4xl font-semibold text-center mb-4">
          Ongoing Events
        </h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="border-yellow-500 shadow-lg rounded-lg overflow-hidden group mx-auto justify-center" 
            >
              <div className="relative h-96 w-full overflow-hidden mx-auto justify-center">
                <img
                  src={event.image} // Replace with the actual image path
                  alt={event.name}
                  className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl text-center font-bold">
                  {event.name}
                </h3>
                <p className="text-gray-600 mt-2">{event.description}</p>
                {/* <p className="mt-4 text-blue-600 text-center">
                  {new Date(event.date).toLocaleDateString()}
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Past Events Section */}
      <section className="mt-4 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16 py-10">
        <h2 className="text-2xl md:text-4xl font-semibold text-center mb-6">
          Past Events
        </h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastEvents.map((event, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden group"
            >
              <div className="relative h-96 w-full overflow-hidden">
                <img
                  src={event.image} // Replace with the actual image path
                  alt={event.name}
                  className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl text-center font-bold">
                  {event.name}
                </h3>
                <p className="text-gray-600 mt-2">{event.description}</p>
                {/* <p className="mt-4 text-blue-600 text-center">
                  {new Date(event.date).toLocaleDateString()}
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Events;
