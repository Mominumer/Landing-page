import React from 'react';
import Toronto from '../assets/Toronto.png';
import map from '../assets/map.svg';
import FOX from '../assets/FOX.png';
import CBS from '../assets/CBS.png';
import ABC from '../assets/ABC.png';
import NBC from '../assets/NBC.png';

const Featured = () => {
  return (
    <div className="max-w-screen-xl mx-auto h-[150vh] w-full bg-white py-12 px-6 md:px-20">

      <style>
        {`
          @keyframes marquee {
            0%   { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

      <div className="flex justify-between items-center">
        {/* Left Side: Text */}
        <div className="text-left">
          <h3 className="text-green-600 text-sm font-semibold uppercase">As Seen</h3>
          <h2 className="text-3xl font-bold mt-2">Featured On</h2>
        </div>
        {/* Right Side: Continuous Sliding Logos */}
        <div className="relative w-[300px] overflow-hidden h-8">
          <div
            className="absolute flex items-center gap-8 whitespace-nowrap"
            style={{ animation: 'marquee 15s linear infinite' }}
          >
            <img src={CBS} alt="CBS News" className="h-6" />
            <img src={ABC} alt="ABC" className="h-6" />
            <img src={NBC} alt="NBC" className="h-6" />
            <img src={FOX} alt="FOX" className="h-6" />
            {/* Duplicate logos to ensure continuous scroll */}
            <img src={CBS} alt="CBS News" className="h-6" />
            <img src={ABC} alt="ABC" className="h-6" />
            <img src={NBC} alt="NBC" className="h-6" />
            <img src={FOX} alt="FOX" className="h-6" />
          </div>
        </div>
      </div>


      <div className="mt-12 text-center">
        <h3 className="text-green-600 text-sm font-semibold uppercase">States We</h3>
        <h2 className="text-3xl font-bold mt-2">Currently Serve</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          We believe everyone should have access to treatment and care. That’s why we’re
          teaming up with providers all over the country. Click on a green state to see the
          insurance companies we currently accept and to learn more about online Suboxone
          doctors in your area.
        </p>
      </div>

      <div className="mt-8 flex flex-col md:flex-row justify-center items-start gap-8">
  
        <div className="md:w-1/3">
          <img
            src={Toronto}
            alt="Toronto"
            className="w-full rounded-lg"
          />
    
        </div>

   
        <div className="md:w-2/3 md:ml-8">
          <img
            src={map}
            alt="US Map"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
