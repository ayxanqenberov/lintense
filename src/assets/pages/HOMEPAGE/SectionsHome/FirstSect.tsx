import React from "react";

const FirstSect = () => {
  return (
    <section className="w-full bg-[#FFE400] flex items-center justify-center">
      <div className="w-[80%] h-[500px] flex flex-col items-center justify-center">
        <div className="flex flex-col gap-[20px] items-center h-[300px]">
          <span className="text-[45px] font-semibold">Track Your Shipment</span>
          <span className="text-[18px]">Tracking made easy with Lintense</span>
          <div className="h-[45px]">
            <input className="rounded-l-lg outline-none h-full w-[500px] px-3" type="text" placeholder="Enter invoice phone number" />
            <button className="bg-black h-full text-white px-3 rounded-r-lg">Track Now</button>
          </div>
        </div>
        <div>
          s
        </div>
      </div>
    </section>
  );
};

export default FirstSect;
