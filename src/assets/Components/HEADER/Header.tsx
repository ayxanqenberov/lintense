import React from "react";
import { ImArrowRight } from "react-icons/im";
import "../../../App.css";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  return (
    <header className="header bg-amber-300 w-full flex justify-center h-[70px]">
      <div className="flex items-center justify-around w-[80%]">
        <div className="flex gap-3 items-center">
          <span
            className="bg-gradient-to-r logo from-[#030302] via-[#FFD54A] to-[#D4A017] bg-clip-text text-3xl font-extrabold tracking-[-0.04em] text-transparent"
            style={{
              WebkitTextStroke: "0.5px #d1d5", 
            }}
          >
            Lintense
          </span>
          <span className=" w-[1px] bg-black h-[30px]"></span>
          <div className="flex bg-white rounded-[4px] items-center border-b ">
            <input
              className="outline-none  pl-1"
              type="text"
              placeholder="Shipping service"
            />
            <CiSearch />
          </div>
        </div>
        <button onClick={()=>navigate('/register')} className="flex btn-3 items-center w-[110px] justify-center gap-2 bg-[#FFE400] p-2 rounded-lg transition-all duration-300 ease-in-out transform hover:bg-[#FFD700] text-[15px] hover:scale-105 hover:shadow-lg">
          Log in
          <ImArrowRight className="text-[13px] py-[0.5px]" />
        </button>
      </div>
    </header>
  );
};

export default Header;
