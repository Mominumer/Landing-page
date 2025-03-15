import React from "react";
import Section1 from "../assets/Section1.png";
import StarsRating from "../shared/StarsRating";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";

const Testimonials = () => {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
 
        <div className="flex flex-col lg:flex-row items-center gap-8">

          <div className="text-left flex-1">
            <h2 className="text-sm font-semibold text-teal-500 tracking-wider uppercase">
              WELCOME TO RECOVERY DELIVERED
            </h2>
            <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
              Your Fully Online Suboxone Treatment Platform
            </h1>
            <p className="mt-4 text-gray-700">
              100% online opioid treatment with licensed buprenorphine providers
              starts at just
              <span className="font-medium"> $99/month</span>.
            </p>
            <p className="mt-2 text-gray-700">
              With monthly and weekly meetings based on where you are in your
              recovery. Get a same-day appointment and script.
            </p>
          </div>

          <div className="flex-1 l lg:w-auto">
            <div className=" h-[300px] lg:w-[696px] lg:h-[395px] bg-gray-200 rounded-md flex items-center justify-center relative overflow-hidden">
              <img
                src={Section1}
                alt="Video Thumbnail"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 flex items-center justify-center">

                <div className="w-32 h-32 bg-teal-500/20 rounded-full absolute" />


                <div className="w-24 h-24 bg-teal-500/30 rounded-full absolute" />


                <div className="relative w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-teal-600 transition-colors">
                  <svg
                    className="w-13 h-13 text-white fill-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="miter"
                      strokeLinejoin="miter"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 group">

          <div
            className=" rounded-md p-6 shadow-sm flex flex-col transition-all duration-300 ease-in-out 
                  group-hover:opacity-50 hover:opacity-100 hover:-translate-y-2 hover:-rotate-2 hover:scale-105"
          >


            <p className="mt-4 text-gray-700">
              “Recovery Delivered is great! I cannot believe how fast and easy
              the process is. The staff are helpful and the doctors are
              top-notch. Highly recommend!”
            </p>
            <div className="mt-4 flex  items-center gap-x-2">
              <img
                src={person1}
                alt="Nicholas Q."
                className="w-10 h-10 rounded-full object-cover"
              />

              <span className="font-semibold text-gray-900">Nicholas Q.</span>
            </div>
          </div>

          <div
            className=" rounded-md p-6 shadow-sm flex flex-col transition-all duration-300 ease-in-out 
                  group-hover:opacity-50 hover:opacity-100 hover:-translate-y-2 hover:-rotate-2 hover:scale-105"
          >
            <StarsRating />
            <p className="mt-4 text-gray-700">
              “My daughter started her online opioid treatment program not too
              long ago and it was such an easy transition. We’ve met with an
              FL-based provider, and it’s been a lifesaver.”
            </p>
            <div className="mt-4 flex items-center gap-x-2">
              <img
                src={person2}
                alt="Christine M."
                className="w-10 h-10 rounded-full object-cover"
              />

              <span className="font-semibold text-gray-900">Christine M.</span>
            </div>
          </div>


          <div
            className=" rounded-md p-6 shadow-sm flex flex-col transition-all duration-300 ease-in-out 
                  group-hover:opacity-50 hover:opacity-100 hover:-translate-y-2 hover:-rotate-2 hover:scale-105s"
          >
            <StarsRating />
            <p className="mt-4 text-gray-700">
              “If you need help, Recovery Delivered is the place to go. Sign-up
              was fast and I saw a Suboxone doctor in my area right away. This
              has truly changed my life!”
            </p>
            <div className="mt-4 flex  items-center gap-x-2">
              <img
                src={person3}
                alt="Heather B."
                className="w-10 h-10 rounded-full object-cover "
              />
              <span className="font-semibold text-gray-900">Heather B.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
