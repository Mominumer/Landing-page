import React from "react";
import arrow from "../assets/arrow.svg";
import Navbar from "./Navbar";
import Section1 from "../assets/Section1.png";

const Homepage = () => {
  return (
    <div className="relative w-full h-screen min-h-[135vh]">
 
      <div
        className="absolute inset-0 bg-cover bg-center rounded-md "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Section1})`,
          backgroundSize: "100%",
          backgroundPosition: "center 20%",
        }}
      />

      <Navbar />

 
      <div className="relative z-10 flex flex-col justify-center h-full max-w-6xl mx-auto  py-16 px-4 sm:px-6 lg:px-8 pt-65 pl-25 ">

        <div className="md:w-1/2 text-white space-y-6">
          <h2 className="text-md font-light">
            No lines. Less hassle, Lower costs.
          </h2>

          <p className="text-6xl md:text-5xl font-normal leading-tight">
            Easy Online Suboxone
            <br />
            Treatment for Opioid
            <br />
            Addiction
          </p>

          <button className="bg-teal-500 text-white px-1 py-2 rounded-lg hover:bg-teal-600 transition-colors text-sm flex items-center gap-x-2">
            Download The App Today
            <img src={arrow} alt="Arrow Icon" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
