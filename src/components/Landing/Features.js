import React from "react";
import feature1 from "../../assets/feature-1.png";
import feature2 from "../../assets/feature-2.png";
import feature3 from "../../assets/feature-3.png";
import feature4 from "../../assets/feature-4.png";
import feature5 from "../../assets/feature-5.png";
import feature6 from "../../assets/feature-6.png";

function Features() {
  return (
    <div className="max-w-6xl mx-auto my-14 px-5 lg:px-0">
      <h1 className="text-3xl lg:text-4xl font-semibold text-center">
        Features to help you succeed
      </h1>
      <div className="grid lg:grid-cols-2 gap-10 mt-10">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="col-span-1 bg-[#F1F3FD] py-14 px-5 lg:p-10 rounded-lg"
          >
            <div className="flex items-center">
              <span className="text-6xl font-semibold mr-2">{idx + 1}</span>
              <p className="text-xl font-semibold">{item.heading}</p>
            </div>
            <div className=" mt-10">
              <img
                src={item.img}
                className="w-72 lg:w-96 mx-auto object-contain"
                alt="feature-img"
              />
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
    heading: "Collect desired infomation from your leads",
    img: feature1,
  },
  {
    heading: "Design your content series in multiple steps",
    img: feature2,
  },
  {
    heading: "Get complete analytics about Leadley & content engagement",
    img: feature3,
  },
  {
    heading: "Fully customize Leadley with your branding & CNAME",
    img: feature4,
  },
  {
    heading:
      "Control your lead's journey in one place with our embeddable widgets",
    img: feature5,
  },
  {
    heading:
      "send collected leads to your favorite mailing software via zapier or pabbly Connect",
    img: feature6,
  },
];
