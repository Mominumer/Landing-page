import React from 'react';
import Section5 from '../assets/Section5.gif';


const CallToAction = () => {
  return (
    <section
      className="
        relative
        mt-[-10vh]
        w-full min-h-[60vh] 
        flex flex-col items-center justify-center 
        px-4 py-16
        bg-center bg-cover bg-no-repeat
      "
      style={{
        backgroundImage: `url(${Section5})`,
      }}
    >

      <div className="absolute inset-0 bg-teal-400 opacity-50 pointer-events-none" />

      <div className="relative text-center text-white z-10 flex flex-col items-center">

        <h2 className="text-sm font-semibold tracking-wider text-black uppercase mb-4 animate-slide-in-left">
          Secure Access to Your Medications
        </h2>


        <h1 className="text-3xl sm:text-4xl md:text-5xl text-black font-bold mb-6 animate-slide-in-right">
          Get Your Meds Online Today
        </h1>


        <p className="max-w-3xl mx-auto mb-8 text-black px-4">
          We have partnered with RX Octean to provide mail-order medications at a
          fraction of the price you may find in your local pharmacy. Meet your
          chronic illness provider online today and get your medication delivered
          as quickly as 24-48 hours later.
        </p>

        <button
          className="
            bg-black text-white px-6 py-3 rounded-md 
            shadow-md hover:bg-gray-800 
            transition-colors duration-300
            flex items-center justify-center mx-auto
          "
        >
          Get The App 
          <span className="ml-2">→</span>
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
