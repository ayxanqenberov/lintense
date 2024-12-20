import React from "react";
import "../../../App.css";
const PlusAccnt = () => {
  return (
    <div className="plusDiv w-full flex items-center justify-center">
      <div className="flex justify-between items-center w-[75%]">
        <span className="lintensePlus">Lintense+</span>
        <div className="flex w-[65%] items-end justify-end gap-[25px]">
          <p className="text-[27px] text-white">
            Skip the delivery fees with Lintense+
          </p>
          <button className="w-[15%] border py-2 text-white hover:bg-[#f6e441] duration-200 rounded-[9px] hover:text-[#bcbcbc] border-[#e4fd02]">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlusAccnt;
