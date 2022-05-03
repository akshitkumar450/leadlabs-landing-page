import React from "react";
import engaging from "../../assets/engaging.png";

function Engaging() {
  return (
    <div className="px-5 lg:px-0">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 ">
        <div className="lg:col-span-1 pt-10 lg:py-20 lg:text-left order-last lg:order-first">
          <h1 className="text-3xl lg:text-4xl font-semibold capitalize">
            share engaging experiences
          </h1>
          <p className="lg:text-xl text-gray-400 my-5">
            Design a content series of videos, images, calendar, links and more
            to create an experience that turns your audience into leads.
          </p>
          <div>
            {options.map((item, idx) => (
              <ul key={idx}>
                <li className="text-gray-400 ">
                  <i className="fa-solid fa-angle-right mr-2"></i>
                  {item.text}
                </li>
              </ul>
            ))}
          </div>
        </div>
        <div className="lg:col-span-2 lg:mx-10 order-first lg:order-last">
          <img src={engaging} className="w-full object-contain" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Engaging;
const options = [
  {
    text: "Create in minutes",
  },
  {
    text: "share everywhere",
  },
  {
    text: "grow your leads",
  },
];
