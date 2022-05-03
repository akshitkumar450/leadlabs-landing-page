import React from "react";
import Btn from "../Btn";
import header from "../../assets/header-img.png";
function Header() {
  return (
    <header id="home" className="mt-24 grid lg:grid-cols-2 ">
      <div className="col-span-1 grid place-content-center bg-[#F4F5FE] p-5 lg:px-10">
        <h1
          className="text-3xl lg:text-4xl font-bold capitalize"
          style={{
            lineHeight: 1.3,
          }}
        >
          2x Leads, 3x Sales for your Biz using shareable bite sized content
        </h1>
        <p className="text-lg lg:text-xl text-gray-500 my-5 lg:my-10">
          Revolutionize lead generation with the first ever content front tool.
          Gain trust and build authority with your audience using LeadLabs
          today!
        </p>

        <Btn>create your first Leadley for free</Btn>
      </div>

      <div className="col-span-1 grid place-items-center py-10 bg-[#6D83E8]">
        <img
          src={header}
          alt="header"
          className="object-contain w-72 lg:w-96"
        />
      </div>
    </header>
  );
}

export default Header;
