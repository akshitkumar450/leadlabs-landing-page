import React from "react";
import Btn from "../Btn";
import header from "../../assets/header-img.png";
import trusted from "../../assets/trusted.png";
import CCRequired from "../../assets/cc-required.png";
function Header() {
  return (
    <header id="home" className="mt-24 grid lg:grid-cols-2 ">
      <div className="col-span-1 grid place-content-center bg-[#F4F5FE] p-5 lg:px-10">
        <h1
          className="text-3xl lg:text-4xl font-semibold capitalize"
          style={{
            lineHeight: 1.3,
          }}
        >
          Get 3.2x Leads and 1.8x Sales Using your Web Traffic & Audience
          Network
        </h1>

        <p className="text-lg lg:text-xl text-gray-500 my-5 lg:my-8">
          Are you monetizing your website traffic? With LeadLabs, you can create
          interactive experiences to convert your traffic into leads.
        </p>

        <div className="px-1 lg:p-2 bg-white lg:flex lg:justify-between rounded-lg">
          <input
            type="email"
            className="h-full w-full lg:w-72 outline-none"
            placeholder="Enter email"
          />
          <div className="flex justify-center mt-5 lg:mt-0 lg:block">
            <Btn>Get Started for free</Btn>
          </div>
        </div>

        <div className="flex items-center gap-x-5 mt-20 lg:mt-2">
          <div className="flex items-center">
            <img src={trusted} alt="trusted" />
            <p className="text-sm lg:text-md  text-gray-500 ml-2">
              Trusted by 100+ companies
            </p>
          </div>
          <div className="flex items-center">
            <img src={CCRequired} alt="no-cc" />
            <p className="text-sm lg:text-md  text-gray-500 ml-2">
              No CC Required
            </p>
          </div>
        </div>
      </div>

      <div className="col-span-1 grid place-items-center py-10 bg-[#6D83E8] ">
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
