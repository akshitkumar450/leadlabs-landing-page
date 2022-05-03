import React from "react";
import create from "../../assets/create.png";

function Features() {
  return (
    <div id="features" className="max-w-6xl mx-auto px-5 lg:px-0 my-10">
      <h1 className="text-3xl lg:text-4xl font-semibold mt-8">Features</h1>
      <div className="grid lg:grid-cols-3 gap-x-5 mt-5">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="col-span-1 border-2 border-gray-50 rounded-lg p-4 "
          >
            <div className="w-full h-full p-1">
              <img src={item.image} alt="" />
              <h3 className="text-xl lg:text-3xl my-3 font-semibold">
                {item.heading}
              </h3>
              <p className="text-md text-gray-400">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;

const data = [
  {
    heading: "Collect information",
    text: "Collect desired information from your leads. (Name, Email, Phone number & Custom fields*.)",
    image: create,
  },
  {
    heading: "Design your step",
    text: " Design your content series in multiple steps.",
    image: create,
  },
  {
    heading: "Complete analytics",
    text: "Get complete analytics about Leadley & content engagement*",
    image: create,
  },
];
