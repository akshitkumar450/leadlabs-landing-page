import React from "react";

function Btn({ children, href, alternate }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <div
        className={` inline-block text-lg cursor-pointer rounded-lg 
        ${
          alternate
            ? " text-[#6D83E8] border-2 border-[#6d83e8]"
            : "bg-[#6D83E8] text-white"
        }  capitalize p-2 lg:px-2 lg:py-3`}
      >
        {children || "create your first Leadley for free"}
      </div>
    </a>
  );
}

export default Btn;
