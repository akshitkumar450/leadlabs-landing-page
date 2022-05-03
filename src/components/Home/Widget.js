import React, { useState } from "react";
import easyInstall from "../../assets/easy-installation.png";
import experience from "../../assets/experience.png";
import click from "../../assets/click.png";

import widget1 from "../../assets/widget-1.svg";
import widget2 from "../../assets/widget-2.svg";
import widget3 from "../../assets/widget-3.png";

function Widget() {
  const [image, setImage] = useState(widget1);
  const [selectedText, setSelectedText] = useState("");
  return (
    <div className="lg:grid lg:grid-cols-3">
      <div className="lg:col-span-1 text-white bg-[#6c83e8] grid place-items-center p-10 lg:p-20">
        <div>
          <h1 className="text-3xl lg:text-4xl font-semibold capitalize">
            How our Widget Works?
          </h1>
          <p className="text-lg my-10">
            The first step of generating revenue is lead generation. Make this
            experience 5x better for your audience in just 3 easy steps.
          </p>
        </div>
      </div>

      <div className="text-center max-w-5xl mx-auto px-2  bg-[#F4F5FE] lg:px-0 lg:col-span-2">
        <div className="flex items-center justify-evenly lg:w-3/4 py-5">
          {options.map((option, idx) => (
            <div
              onClick={() => {
                setImage(option.image);
              }}
              key={idx}
            >
              <h1
                className={`cursor-pointer text-md lg:text-lg text-gray-400 capitalize`}
              >
                {option.text}
              </h1>
            </div>
          ))}
        </div>
        <div className={`h-1 bg-white }`} />

        <div className="grid place-items-center mx-auto pb-10 lg:mx-20 mt-10">
          <img src={image} className="w-full object-contain" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Widget;
const options = [
  {
    image: widget1,
    icon: easyInstall,
    text: "Easy Install",
    changeText: "first",
  },
  {
    image: widget2,
    icon: click,
    text: "One Click Lead-Generate",
    changeText: "second",
  },
  {
    image: widget3,
    icon: experience,
    text: "Enhanced Experience",
    changeText: "third",
  },
];
