import React from "react";
import easyInstall from "../../assets/easy-install.png";
import enhancedExp from "../../assets/enhanced-exp.png";
import leadGen from "../../assets/lead-gen.png";

import widget1 from "../../assets/widget-1.svg";

function Widget() {
  return (
    <div className="max-w-6xl mx-auto px-5 lg:px-0">
      <div className="text-center p-6 lg:p-14 w-full lg:w-3/4 mx-auto">
        <h1 className="text-3xl lg:text-4xl font-semibold capitalize">
          How our Widget Works?
        </h1>
        <p className="my-4 text-md lg:text-lg text-gray-500">
          The first step of generating revenue is lead generation. Make this
          experience 5x better for your audience in just 3 easy steps.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        {options.map((option, idx) => (
          <div
            className="col-span-1 text-center border-2 border-gray-100 rounded-lg px-2 py-5"
            key={idx}
          >
            <img
              className="w-20 object-contain mx-auto"
              src={option.icon}
              alt="icons"
            />
            <h1
              className={`cursor-pointer text-xl lg:text-2xl capitalize my-5`}
            >
              {option.heading}
            </h1>
            <p className="text-md lg:text-lg text-gray-500">{option.text}</p>
          </div>
        ))}
      </div>

      <div className="grid place-items-center mx-auto pb-10 lg:mx-20 mt-10">
        <img src={widget1} className="lg:w-1/2 object-contain" alt="" />
      </div>
    </div>
  );
}
export default Widget;

const options = [
  {
    icon: easyInstall,
    heading: "Easy Install",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem sunt odit labore! Voluptates, asperiores corporis.",
  },
  {
    icon: leadGen,
    heading: "Click Lead-Gen",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem sunt odit labore! Voluptates, asperiores corporis.",
  },
  {
    icon: enhancedExp,
    heading: "Enhanced Experience",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem sunt odit labore! Voluptates, asperiores corporis.",
  },
];
