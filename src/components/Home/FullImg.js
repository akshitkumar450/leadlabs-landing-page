import React from "react";
import fullimg from "../../assets/full-img-1.png";

function FullImg() {
  return (
    <div className=" bg-[#F4F5FE]">
      <div className="max-w-6xl mx-auto p-5">
        <img src={fullimg} className="w-full" alt="" />
      </div>
    </div>
  );
}

export default FullImg;
