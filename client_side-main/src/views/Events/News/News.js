import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./news.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import video from "./img/Bvinews.webm";
import extreme from "./img/IEEE Computer Society of SLIIT TTT.png";
import extreme2 from "./img/AAAA.png"
import Footer from "../../Footer/Footer";

export const News = () => {
  const upcomingEvents = [
    {
      name: "SLIITXtreme 3.0",
      description:
        "The IEEE Computer Society of Sri Lanka Institute of Information Technology (SLIIT), in collaboration with the Software Engineering Student Community (SESC) of SLIIT, organizes SLIITXtreme 3.0. This event aims to conduct a virtual hackathon as an introductory hackathon to the IEEEXtreme 18.0 global programming competition., which is proposed to be held annually.",
      image: extreme, // Replace this with the correct path to the image
    },
    {
      name: "Official Merchandise Pack",
      description:
        "The IEEE Computer Society of Sri Lanka Institute of Information Technology (SLIIT) organizes a merchandise project to raise funds for events. The Official Tshirt will be available to purchase by anyone.",
      image: extreme2, // Replace this with the correct path to the image
    }
  ];

  

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="Eh-video-container-news">
        <video autoPlay loop muted className="Eh-video-news">
          <source src={video} type="video/mp4" />
          Sorry, your browser does not support the video tag.
        </video>

        <div className="overlaybk-news"></div>
        <div className="Eh-content-news mt-10 pb-10">
          <h1 className="Eh-topic-news">IEEE HOT NEWS</h1>
        </div>
      </div>

      <section className="mt-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl md:text-4xl font-semibold text-center mb-4">
          Latest News
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

      
      <Footer />
    </div>
  );
}
export default News;
