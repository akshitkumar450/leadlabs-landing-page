import React from "react";

function Numbers() {
  return (
    <div className="py-16 my-20 bg-[#F4F5FE] px-5 lg:px-0">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl lg:text-[45px] font-bold text-center">
          LeadLabs by numbers
        </h1>
        <div className="grid lg:grid-cols-4 gap-y-4 lg:gap-x-4 mt-10">
          <div className="bg-white p-5 border-l-4 border-[#F06595]">
            <h1 className="text-3xl">10+</h1>
            <p className="text-md text-gray-400 mt-3">
              companies use Leadlabs.
            </p>
          </div>

          <div className="bg-white p-5 border-l-4 border-[#A865F0]">
            <h1 className="text-3xl">250+</h1>
            <p className="text-md text-gray-400  mt-3">
              Leadlys published to date
            </p>
          </div>
          <div className="bg-white p-5 border-l-4 border-[#65C4F0] ">
            <h1 className="text-3xl">4x</h1>
            <p className="text-md text-gray-400  mt-3">
              engagement with your leads
            </p>
          </div>
          <div className="bg-white p-5 border-l-4 border-[#F09165] ">
            <h1 className="text-3xl">16 min</h1>
            <p className="text-md text-gray-400  mt-3">
              median time-to-publish
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Numbers;
