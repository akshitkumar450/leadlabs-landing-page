import React from "react";
import InteractiveImg from "../../assets/interactive.png";

function Interactive() {
  return (
    <div className="max-w-6xl mx-auto px-5 lg:px-0">
      <h1 className="text-3xl lg:text-4xl font-semibold text-center">
        Go from boeing to interactive lead-gen in just 10 minutes
      </h1>

      <div className="px-1 py-1 lg:px-3 lg:py-2 flex items-center justify-between w-40 lg:w-48 mx-auto border-2 border-[#7381F1] bg-white  rounded-lg my-5">
        <p>Before</p>
        <span className="bg-[#7381F1] text-white px-5 py-2 ml-2 text-lg rounded-lg lg:text-xl">
          After
        </span>
      </div>
      <p className=" text-xl lg:text-2xl font-semibold text-center">
        1 tab, 1 click and a happy lead to perform the desired CTA
      </p>
      <div>
        <img
          src={InteractiveImg}
          className="w-full lg:h-80 object-contain"
          alt="interactive-img"
        />
      </div>
    </div>
  );
}

export default Interactive;
