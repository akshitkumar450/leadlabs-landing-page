import React from "react";
import LeadleyImg from "../../assets/leadley-works.png";
import Btn from "../Btn";

function LeadleyWorks() {
  return (
    <div className=" bg-[#F4F5FE] py-10 px-5 lg:px-0">
      <div className="max-w-6xl mx-auto ">
        <h1 className="text-3xl lg:text-4xl font-semibold text-center">
          How a Leadley works?
        </h1>
        <div className="my-5 lg:my-8">
          <img
            src={LeadleyImg}
            className="h-28 lg:h-40 mx-auto object-contain"
            alt="leadley-work"
          />
        </div>

        <div className="px-1 lg:p-2 bg-white lg:flex lg:justify-between rounded-lg lg:w-3/5 lg:mx-auto shadow-lg">
          <input
            type="email"
            className="h-14 w-full px-3 lg:px-0 lg:w-80  outline-none"
            placeholder="Enter email"
          />
          <div className="hidden lg:flex lg:justify-center ">
            <Btn>Create your first leadley for free</Btn>
          </div>
        </div>
      </div>
      <div className=" lg:hidden flex justify-center mt-5 ">
        <Btn>Create your first leadley for free</Btn>
      </div>
    </div>
  );
}

export default LeadleyWorks;
