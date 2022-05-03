import React from "react";
import firstLeadly from "../../assets/first-leadley.png";
import Btn from "../Btn";

function FirstLeadly() {
  return (
    <div className="mx-4 my-10 lg:mx-20">
      <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-3">
        <div className="lg:col-span-2 lg:mx-10">
          <img src={firstLeadly} className="w-full object-contain" alt="" />
        </div>

        <div className="lg:col-span-1 py-10 lg:py-20 lg:text-left">
          <h1 className="text-3xl lg:text-4xl font-semibold capitalize">
            Make your first Leadley now!
          </h1>
          <p className="lg:text-xl text-gray-400 my-5">
            Get a taste of what a Leadley can do for your business
          </p>

          <Btn href="https://leadlabs.ezcolab.com/signup/free">
            Create Your First Leadley Now
          </Btn>
        </div>
      </div>
    </div>
  );
}

export default FirstLeadly;
