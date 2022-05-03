import React from "react";
import convertMore from "../../assets/convert-more.png";
import memorable from "../../assets/memorable.png";
import emails from "../../assets/increase-conversions.png";
import convertBlog from "../../assets/convert-blog.png";
import socialMedia from "../../assets/social-media.png";
import Btn from "../Btn";

function Excellent() {
  return (
    <div className="px-5 lg:px-0 my-10 max-w-6xl mx-auto ">
      <div className="grid gap-5 lg:grid-cols-3 ">
        <div className="col-span-1 p-5">
          <h2 className="text-3xl font-semibold">
            Here's why LeadLabs will be an excellent addition to your marketing
            efforts
          </h2>
        </div>

        {data.map((item, idx) => (
          <div
            key={idx}
            className={`border-2 col-span-1 border-gray-100 border-b-8 ${item.border} rounded-lg p-4 pb-10`}
          >
            <div>
              <img
                className="w-16 object-contain border-2"
                src={item.image}
                alt=""
              />
            </div>
            <h3 className="text-2xl font-semibold my-3">{item.heading}</h3>
            <p
              className="text-md text-gray-400"
              dangerouslySetInnerHTML={{ __html: item.text }}
            />
          </div>
        ))}
      </div>
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
export default Excellent;
const data = [
  {
    heading: "Convert more of your website visitors into leads",
    text: "What's the point if you don't convert all those hard earned (& spent) visitors into engaged leads? Get <span class='text-black'>up-to 56% conversions</span> of visitors into leads",
    image: convertMore,
    border: "border-b-[#F06595]",
  },
  {
    heading: "Memorable interactive experiences",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus atque fugiat beatae! Aliquam excepturi enim corrupti, pariatur blanditiis error delectus.",
    image: memorable,
    border: "border-b-[#CC5DE8]",
  },
  {
    heading: "Increase conversion via emails",
    text: "After downloading, Content Consumption rate through a text based lead magnet about 10%.",
    image: emails,
    border: "border-b-[#65C4F0]",
  },
  {
    heading: "Convert your blog traffic to leads",
    text: "This leads to lower CTA via lead magnets (<1%) and makes it hard to build authority & trust with your audience.",
    image: convertBlog,
    border: "border-b-[#FA8145]",
  },
  {
    heading: "Then your social media followers into leads",
    text: "Finally, your leads don't engage well with your future emails, thus resulting in lower sales.",
    image: socialMedia,
    border: "border-b-[#FFCC00]",
  },
];
