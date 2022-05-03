import React from "react";
import logo from "../../assets/logo-white.png";
function Footer() {
  return (
    <div className="bg-black text-white px-4 lg:px-5 py-10 lg:py-8">
      <div className=" space-y-5 lg:space-y-0 lg:flex items-center justify-between">
        <div>
          <img className="w-48 lg:w-64 object-contain" src={logo} alt="" />
        </div>
        <ul className=" mt-20 lg:flex lg:gap-x-10 space-y-3 lg:space-y-0 ">
          <a href="mailto:hello@vclearning.co" className="block lg:inline-flex">
            Send us an Email
          </a>
          <a
            href="https://roadmap.ezcolab.com/leadlabs"
            className="block lg:inline-flex">
            Roadmap
          </a>
          <a
            href="https://ezcolab.com/privacy-policy"
            className="block lg:inline-flex">
            Privacy Policy
          </a>
          <a
            href="https://ezcolab.com/refund-policy"
            className="block lg:inline-flex">
            Refund Policy
          </a>
          <a
            href="https://ezcolab.com/terms-conditions"
            className="block lg:inline-flex">
            Terms of Service
          </a>
        </ul>
      </div>
      <div>
        <p className="my-5 ">
          This is a Product of EZColab and will be governed by the same refund
          policy, Terms and Conditions and Privacy Policy
        </p>
        <div className="lg:flex items center justify-between space-y-3 lg:space-y-0">
          <p>This website is owned and managed by VC Learning EdTech LLP</p>
          <p>Copyright © 2022 VC Learning EdTech LLP All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
