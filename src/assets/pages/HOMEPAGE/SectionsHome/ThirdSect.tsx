import React from "react";
import "../../../../App.css";
import PlusAccnt from "../../ADS/PlusAccnt";

const ThirdSect = () => {
  return (
    <section className="thirdSect bg-gradient-to-b from-black via-[#1a1a00] to-[#FFE400] flex justify-center items-center h-[400px]">
      <div className="text-white flex flex-col gap-4 items-center text-center w-[40%]">
        <h2 className="text-[35px] font-bold">
          Experienced Drivers & Quality Fleet
        </h2>

        <p className="text-[17.5px] text-[#f5f5f5]">
          Our qualified drivers and best-in-class fleet are the reasons of our
          success and our customers’ satisfaction. They make us #1 logistic
          company worldwide.
        </p>

        <button className="w-[350px] h-[50px] rounded-[9px] bg-[#FFE400] text-black font-semibold hover:bg-[#E7D001] duration-200">
          Learn More About Lintense
        </button>
      </div>
    </section>
  );
};

export default ThirdSect;
