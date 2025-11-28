// pages/SemeruCorePage.jsx
import React from "react";
import CoreStory from "../components/CoreStory";
import Contact from "../components/Contact";

const AboutUs = () => {
  return (
    <div className="bg-black text-white min-h-screen py-16 px-4 sm:px-8 lg:px-16 font-sans">
      
      <CoreStory />

      <div className="max-w-7xl mx-auto">
        <hr className="border-gray-800 my-16" />
      </div>

      <Contact />
    </div>
  );
};

export default AboutUs;
