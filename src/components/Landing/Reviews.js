import React from "react";
import Mask from "../../assets/Mask.png";

function Reviews() {
  return (
    <div className=" bg-[#F4F5FE] py-10 px-5 lg:px-0">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-y-10 lg:gap-y-0">
        <div className="col-span-1 flex gap-x-2">
          <span className="text-3xl font-sans -mt-3">
            <i className="fa-solid fa-quote-left"></i>
          </span>
          <div>
            <p className="text-md lg:text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
              ratione optio velit possimus molestias suscipit dignissimos qui
              atque? Vel expedita quibusdam ipsum maiores quas eius quisquam
              magnam fugit ducimus aliquid.
            </p>
            <div className="flex items-center gap-x-2 mt-5 ">
              <img src={Mask} alt="" />
              <div>
                <p>Jessica Kirk</p>
                <p>CEO Microsoft</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 flex gap-x-2">
          <span className="text-3xl font-sans -mt-3">
            <i className="fa-solid fa-quote-left"></i>
          </span>
          <div>
            <p className="text-md lg:text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
              ratione optio velit possimus molestias suscipit dignissimos qui
              atque? Vel expedita quibusdam ipsum maiores quas eius quisquam
              magnam fugit ducimus aliquid.
            </p>
            <div className="flex items-center gap-x-2 mt-5 ">
              <img src={Mask} alt="" />
              <div>
                <p>Jessica Kirk</p>
                <p>CEO Microsoft</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
