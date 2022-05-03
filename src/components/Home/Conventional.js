import React from "react";
import create from "../../assets/create.png";
function Conventional() {
  return (
    <div className="max-w-6xl mx-auto grid gap-5 my-10 lg:grid-cols-3 px-5 lg:px-0">
      <div className="col-span-1 p-5">
        <h2 className="text-3xl font-semibold">
          How Conventional Lead Magnets (CLM) Work?
        </h2>
        <p className="text-md text-gray-400 mt-3">
          5 Tabs, 20+ clicks & a frustrated lead to perform the desired CTA
        </p>
      </div>

      {data.map((item, idx) => (
        <div
          key={idx}
          className="border-2 col-span-1 border-gray-100 rounded-lg p-4"
        >
          <div>
            <img
              className="w-16 object-contain border-2"
              src={item.image}
              alt=""
            />
          </div>
          <h3 className="text-2xl font-semibold my-3">{item.heading}</h3>
          <p className="text-md text-gray-400">{item.text}</p>
          <p
            className="text-7xl text-right font-thin text-white"
            style={{
              textShadow:
                "-1px -1px 0 #FFD9E6, 1px -1px 0 #FFD9E6, -1px 1px 0 #FFD9E6, 1px 1px 0 #FFD9E6",
            }}
          >
            0{idx + 1}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Conventional;
const data = [
  {
    heading: "Create",
    text: "On an average it takes 5-7 hours to Create a lead magnet.",
    image: create,
  },
  {
    heading: "Download",
    text: "After this hard work, the average download rate for a lead magnet is just 4% which means you don't capture information of 96% of visitors.",
    image: create,
  },
  {
    heading: "Consumption",
    text: "After downloading, Content Consumption rate through a text based lead magnet about 10%.",
    image: create,
  },
  {
    heading: "Authority & Trust",
    text: "This leads to lower CTA via lead magnets (<1%) and makes it hard to build authority & trust with your audience.",
    image: create,
  },
  {
    heading: "Result",
    text: "Finally, your leads don't engage well with your future emails, thus resulting in lower sales.",
    image: create,
  },
];
