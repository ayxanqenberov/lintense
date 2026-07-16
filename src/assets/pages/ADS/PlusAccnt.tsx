import React from "react";
import "../../../App.css";
import { useNavigate } from "react-router-dom";
const PlusAccnt = () => {
  const navigate = useNavigate()
  return (
    <div className="plusDiv w-full flex items-center justify-center">
      <div className="flex justify-between items-center w-[75%]">
        <span className="lintensePlus">Lintense+</span>
        <div className="flex w-[65%] items-end justify-end gap-[25px]">
          <p className="text-[27px] text-white">
            Skip the delivery fees with Lintense+
          </p>
          <button onClick={()=>navigate('/plus-account')} className="w-[15%] border py-2 text-white hover:bg-[#f6e441] duration-200 rounded-[9px] hover:text-[#bcbcbc] border-[#555b25]">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlusAccnt;
