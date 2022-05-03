import React from "react";
import header from "../../assets/header.png";
function Working() {
  return (
    <div className="my-10">
      <h1 className="text-3xl lg:text-4xl font-semibold text-center">
        How a Leadley works?
      </h1>
      <div className="px-5 lg:px-0 lg:flex items-end max-w-5xl mx-auto my-10">
        {data.map((item, idx) => (
          <div
            key={idx}
            className={`${
              idx === 1 && "bg-[#6C83E8] text-white relative z-1"
            } lg:w-1/3 px-4 py-5 ${idx !== 1 && "border-2 lg:-mx-1"}`}
          >
            <span className="text-gray-600 text-lg">0{idx + 1}</span>
            <h3 className={`text-xl lg:text-3xl font-semibold my-5`}>
              {item.heading}
            </h3>
            <p className="text-md text-gray-700">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Working;
const data = [
  {
    img: header,
    heading: "Create Bite Content.",
  },
  {
    img: header,
    heading: "Share Link Or Widgets",
    text: "Either share links or embed widgets across all your webpages, blogs & marketing channels.",
  },
  {
    img: header,
    heading: "Watch your leads grow!",
  },
];
