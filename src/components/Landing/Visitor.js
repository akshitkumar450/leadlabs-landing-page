import React from "react";
import Btn from "../Btn";

function Visitor() {
  return (
    <div className="max-w-6xl mx-auto px-5 lg:px-0 my-10">
      <h1 className="text-3xl lg:text-4xl font-semibold text-center">
        Put your visitor conversion on auto pilot and add another 1000+ leads to
        your pipeline today
      </h1>

      <div className="px-1 lg:p-2 bg-white lg:flex lg:justify-between rounded-lg lg:w-3/5 lg:mx-auto shadow-lg mt-5">
        <input
          type="email"
          className="h-14 w-full px-3 lg:px-0 lg:w-96  outline-none"
          placeholder="Enter email"
        />
        <div className="hidden lg:flex lg:justify-center ">
          <Btn>Get Started for free</Btn>
        </div>
      </div>
      <div className=" lg:hidden flex justify-center mt-5 ">
        <Btn>Get Started for free</Btn>
      </div>
    </div>
  );
}

export default Visitor;
