import React from "react";
import PlusAccnt from "../../ADS/PlusAccnt";
import { GiShoppingBag } from "react-icons/gi";
import { MdOutlinePayment } from "react-icons/md";
import { GoLocation } from "react-icons/go";

const FourSect = () => {
  return (
    <section className="flex flex-col mb-4 w-full items-center justify-center">
      <PlusAccnt />
      <div className="w-[73.5%] max-[973px]:w-full  flex flex-col">
        <h2 className="text-[30px] max-[800px]:text-center mt-5 mb-1">How we work?</h2>
        <div className="flex max-[800px]:flex-col max-[800px]:items-center max-[800px]:justify-center gap-[20px]">
          <div className="w-[33.3%] max-[800px]:w-[60%] max-[390px]:w-full rounded-xl h-[210px] flex flex-col bg-[#fff494] pl-6 py-5">
            <div className="relative w-[80px] h-[80px] rounded-full bg-[#FFE600]">
              <GiShoppingBag className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[42px]" />
            </div>

            <span className="text-[27px] font-medium mt-4">
              How do I order?
            </span>
            <p>Choose the product, pay, we buy the product, or declare</p>
          </div>

          <div className="w-[33.3%] max-[800px]:w-[60%] max-[390px]:w-full rounded-xl h-[210px] flex flex-col bg-[#fff494] pl-6 py-5">
            <div className="relative w-[80px] h-[80px] rounded-full bg-[#FFE600]">
              <MdOutlinePayment className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[42px]" />
            </div>

            <span className="text-[27px] font-medium mt-4">
              Payment methods
            </span>
            <p>Visa, Master bank cards.</p>
          </div>

          <div className="w-[33.3%] max-[800px]:w-[60%] max-[390px]:w-full rounded-xl h-[210px] flex flex-col bg-[#fff494] pl-6 py-5">
            <div className="relative w-[80px] h-[80px] rounded-full bg-[#FFE600]">
              <GoLocation className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[42px]" />
            </div>

            <span className="text-[27px] font-medium mt-4">Delivery</span>
            <p>
              The parcel is received at the warehouse in different countries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourSect;
