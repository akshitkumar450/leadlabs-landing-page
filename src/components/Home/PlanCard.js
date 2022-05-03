import React from "react";
import Btn from "../Btn";
function PlanCard({ heading, price, benefits, color, img1, img2 }) {
  return (
    <div className={`col-span-1 py-10 px-4 bg-[#F6F8FA] rounded-lg relative`}>
      <div className="absolute -top-6 right-0">
        <div className="relative inline-block">
          <img src={img1} className="" alt="price" />
          <div className="text-3xl mt-4 absolute top-0 left-1/2 -translate-x-1/2">
            <p className={`text-white font-semibold text-5xl mb-3`}>${price}</p>
            <p className="text-sm text-white">per month</p>
          </div>
        </div>
      </div>

      <div className="my-5">
        <img src={img2} alt="price-tag-img" />
        <h2 className="text-black font-semibold text-3xl mt-5">{heading}</h2>
      </div>

      <ul className="text-[15px] grid gap-y-3 my-5">
        {benefits.map((item, idx) => (
          <li key={idx}>
            <i className="text-green-500 fa-solid fa-check-circle"></i>
            <span className="text-black ml-2">{item}</span>
          </li>
        ))}
      </ul>
      {heading === "Pro Leader" ? (
        <Btn href="https://leadlabs.ezcolab.com/signup/free">Get Started</Btn>
      ) : (
        <Btn alternate href="https://leadlabs.ezcolab.com/signup/free">
          Get Started
        </Btn>
      )}
    </div>
  );
}

export default PlanCard;
