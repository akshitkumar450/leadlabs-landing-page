import React from "react";
import amazon from "../../assets/amazon.png";
import google from "../../assets/google.png";
import dropbox from "../../assets/dropbox.png";
import microsoft from "../../assets/microsoft.png";

function Companies() {
  return (
    <div className="max-w-6xl mx-auto py-10 text-center">
      <p className="text-lg lg:text-xl text-gray-500">
        Over 100+ companies prefer LeadLabs to connect with prospects.
      </p>
      <p className="text-lg lg:text-xl text-gray-500 my-3 lg:my-5">
        convert more leads and increase their revenue.
      </p>
      <div className="flex flex-wrap gap-5 lg:gap-0 lg:items-center justify-around">
        <img
          src={amazon}
          className="w-40 lg:w-56 object-contain"
          alt="amazon"
        />
        <img
          src={dropbox}
          className="w-40 lg:w-56 object-contain"
          alt="dropbox"
        />
        <img
          src={google}
          className="w-40 lg:w-56 object-contain"
          alt="google"
        />
        <img
          src={microsoft}
          className="w-40 lg:w-56 object-contain"
          alt="microsoft"
        />
      </div>
    </div>
  );
}

export default Companies;
