import React from "react";
import Section4 from "../assets/Section4.gif";

const Treatment = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-white to-[#49C7AB] py-16 px-4 h-[120vh]">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto flex items-center justify-between mb-4">
        <h2 className="text-teal-500 text-lg font-semibold tracking-wider ml-[3vh]">
          GET SAME DAY ONLINE
        </h2>
        <button className="bg-white text-teal-600 font-medium px-5 py-2 rounded-lg shadow-md hover:bg-gray-100 transition">
          Download The App Today
        </button>
      </div>

      {/* Main Heading */}
      <div className="max-w-6xl mx-auto ">
        <h1 className="text-3xl sm:text-4xl font-semi-bold text-gray-800 ml-[3.5vh]">
          Suboxone Treatment In 10 Minutes
        </h1>
      </div>

      {/* Steps Container */}
      <div className="relative max-w-6xl mx-auto mt-12 h-[700px]">
        {/* Central SVG */}
        <img
          src={Section4}
          alt="Process Visualization"
          className="absolute top-50 left-1/2 w-200 h-200  transform -translate-x-1/2 -translate-y-1/2 object-contain "
      
        />

    {/* Step Cards */}
{/* Step 1 - Top Left */}
<div className="absolute top-[5%] left-[2%] w-[400px] h-[100px] bg-white rounded-lg shadow-md p-4 flex flex-col justify-center border border-teal-500 transition-transform duration-300 hover:scale-105">
  <h3 className="font-semibold text-gray-800 text-md">Step 1 - Download The App</h3>
  <p className="text-gray-600 text-md mt-1">
    Click the link to download our app to get started.
  </p>
</div>

{/* Step 2 - Top Right */}
<div className="absolute top-[5%] right-[-1%] w-[400px] h-[100px] bg-white rounded-lg shadow-md p-4 flex flex-col justify-center border border-teal-500 transition-transform duration-300 hover:scale-105">
  <h3 className="font-semibold text-gray-800 text-md">
    Step 2 - Complete Onboarding Process & Documents
  </h3>
  <p className="text-gray-600 text-md mt-1">
    Provide medical history and sign treatment forms.
  </p>
</div>

{/* Step 3 - Middle Left */}
<div className="absolute top-[30%] left-[2%] w-[400px] h-[100px] bg-white rounded-lg shadow-md p-4 flex flex-col justify-center border border-teal-500 transition-transform duration-300 hover:scale-105">
  <h3 className="font-semibold text-gray-800 text-md">Step 3 - Schedule Your First Visit</h3>
  <p className="text-gray-600 text-md mt-1">
    Our onboarding team will send you a link to book your first meeting. Many times, this is the same day.
  </p>
</div>

{/* Step 4 - Middle Right */}
<div className="absolute top-[30%] right-[-1%] w-[400px] h-[100px] bg-white rounded-lg shadow-md p-4 flex flex-col justify-center border border-teal-500 transition-transform duration-300 hover:scale-105">
  <h3 className="font-semibold text-gray-800 text-md">Step 4 - Meet With Licensed Provider</h3>
  <p className="text-gray-600 text-md mt-1">
    At the time of your appointment, open the app on your phone to have your visit.
  </p>
</div>

{/* Step 5 - Bottom Center */}
<div className="absolute bottom-[30%] left-1/2 transform -translate-x-1/2 w-[600px] h-[100px] bg-white rounded-lg shadow-md p-4 flex flex-col justify-center items-center border border-teal-500 transition-transform duration-300 hover:scale-105">
  <h3 className="font-semibold text-gray-800 text-md">Step 5 - Pick Up Medication</h3>
  <p className="text-gray-600 text-md mt-1">
    Your script will be sent to your pharmacy of choice for pick up the same day.
  </p>
</div>

      </div>
    </section>
  );
};

export default Treatment;