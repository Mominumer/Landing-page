import React from "react";
import Section2 from "../assets/Section2.gif";

const Stats = () => {
  return (
    <div
      className="w-full min-h-[100px] flex items-center justify-center text-center px-6 py-10 "
      style={{
        backgroundImage: `url(${Section2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      <div className="max-w-6xl flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-24 ">

        <div className="flex-1 flex flex-col gap-6 text-left">
          <h2 className="text-4xl font-md text-black">
            Breaking Barriers to <br />
            <span>Recovery</span>
          </h2>
          <p className="text-lg font-light text-gray-700 font-stretch-condensed">
            Our mission is to make Medication Assisted Treatment accessible to
            people in both major cities and rural communities. We're deeply
            committed to removing obstacles to recovery, ensuring our clients
            get the support they need.
          </p>
        </div>

        <div className="flex-1 flex flex-row flex-wrap justify-center gap-8 lg:gap-12 mt-8 lg:mt-0">
          <p className="text-gray-700 text-md font-light text-left">
            We're not just offering a service; we're creating a lifeline. Our
            platform is designed to eliminate the challenges that often stand in
            the way of recovery—whether it's stigma, inconvenience, or lack of
            access to quality care.
          </p>
  
          <div className="flex-1 w-full flex flex-row justify-between gap-4 lg:gap-8 mt-8 lg:mt-0">
            <div className="flex flex-col items-start flex-1">
              <span className="text-4xl font-bold text-teal-500">500+</span>
              <span className="text-lg text-black mt-2">Patients Treated</span>
            </div>

            <div className="flex flex-col items-start flex-1">
              <span className="text-4xl font-bold text-teal-500">300+</span>
              <span className="text-lg text-black mt-2 whitespace-nowrap">
                Centers Nationwide
              </span>
            </div>

            <div className="flex flex-col items-start flex-1">
              <span className="text-4xl font-bold text-teal-500">4.9/5</span>
              <span className="text-lg text-black mt-2 whitespace-nowrap">
                Patients Satisfaction
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
