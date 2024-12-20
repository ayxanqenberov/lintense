import React from "react";
import PlusAccnt from "../../ADS/PlusAccnt";
import { GiShoppingBag } from "react-icons/gi";
import { MdOutlinePayment } from "react-icons/md";
import { GoLocation } from "react-icons/go";

const FourSect = () => {
  return (
    <section className="flex flex-col w-full items-center justify-center">
      <PlusAccnt />
      <div className="w-[73.5%] flex flex-col">
        <h2 className="text-[30px] mt-5 mb-1">How we work?</h2>
        <div className="flex gap-[20px]">
          <div className="w-[33.3%] rounded-xl h-[210px] flex flex-col  bg-[#fff494] pl-6 py-5">
            <div className="relative w-[90px]">
              <div className="w-[80px] h-[80px] rounded-[50%] bg-[#FFE600]"></div>
              <GiShoppingBag className="absolute top-[15px] right-[-15px] text-[50px]" />
            </div>
            <span className="text-[27px] font-medium">How do I order?</span>
            <p>Choose the product, pay, we buy the product, or declare</p>
          </div>
          <div className="w-[33.3%] rounded-xl h-[210px] flex flex-col bg-[#fff494] pl-6 py-5">
            <div className="relative w-[90px]">
              <div className="w-[80px] h-[80px] rounded-[50%] bg-[#FFE600]"></div>
              <MdOutlinePayment className="absolute top-[15px] right-[-15px] text-[50px]" />
            </div>
            <span className="text-[27px] font-medium">Payment methods</span>
            <p>Visa, Master bank cards.</p>
          </div>
          <div className="w-[33.3%] rounded-xl h-[210px] flex flex-col bg-[#fff494] pl-6 py-5">
            <div className="relative w-[90px]">
              <div className="w-[80px] h-[80px] rounded-[50%] bg-[#FFE600]"></div>
              <GoLocation className="absolute top-[15px] right-[-15px] text-[50px]" />
            </div>
            <span className="text-[27px] font-medium">Delivery</span>
            <p>The parcel is received at the warehouse in differnt countries.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourSect;
