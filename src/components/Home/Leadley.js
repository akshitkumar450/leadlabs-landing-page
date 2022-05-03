import React from "react";

function Leadley() {
  return (
    <div className="max-w-6xl mx-auto my-16 px-5 lg:px-0">
      <h1 className="text-3xl text-center font-semibold">
        Now, What can a Leadley do for you?
      </h1>
      <p className="text-gray-400 text-center text-md my-5">
        1 tab, 1 click and a happy lead to perform the desired CTA
      </p>
      <div className="grid lg:grid-cols-2 gap-5 my-10">
        {data.map((item, idx) => (
          <div className="col-span-1 flex items-center border-2 border-gray-50 rounded-lg p-4">
            <h2
              className={`text-5xl lg:text-6xl ${item.color} font-semibold pr-5`}
            >
              {idx + 1}
            </h2>
            <div className="border-l-2 pl-5">
              <h3 className="text-xl lg:text-3xl font-semibold">
                {item.heading}
              </h3>
              <p className="text-md text-gray-400 mt-2">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leadley;

const data = [
  {
    heading: "30X Faster v/s CLM",
    text: "It takes 10-20 minutes to create a Leadley.",
    color: "text-[#F06595]",
  },
  {
    heading: "10X Higher CTR v/s CLM",
    text: "A video based thumbnail can increase CTR to 40%+.",
    color: "text-[#A865F0]",
  },
  {
    heading: "9.5X Higher v/s CLM",
    text: "Content consumption rate via videos is about 95%.",
    color: "text-[#65C4F0]",
  },
  {
    heading: "30X Faster v/s CLM",
    text: "At the end you get 10% + CTA while building authority and gaining trust with your leads.",
    color: "text-[#F09165]",
  },
  {
    heading: "4X Higher Engagement v/s CLM",
    text: "This results in higher engagement rate via future emails.",
    color: "text-[#FFCC00]",
  },
  {
    heading: "Celebrate with 3X more sales",
    text: "This results in higher engagement rate via future emails.",
    color: "text-[#3AD86F]",
  },
];
