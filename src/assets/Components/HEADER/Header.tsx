import React from "react";
import { ImArrowRight } from "react-icons/im";
import "../../../App.css";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <header className="header w-full flex justify-center h-[70px]">
      <div className="flex items-center justify-around w-[80%]">
        <div className="flex gap-3 items-center">
          <img
            className="w-[153px]"
            src="https://livedemo00.template-help.com/wt_prod-25028/lintense-delivery/images/logo-default-306x84.png"
            alt=""
          />
          <span className="w-[1px] bg-black h-[30px]"></span>
          <div className="flex items-center border-b ">
            <input
              className="outline-none"
              type="text"
              placeholder="Shipping service"
            />
            <CiSearch />
          </div>
        </div>
        <nav>
          <ul className="flex gap-5">
            <li>
              <a
                className="text-black hover:text-[#e3c22b]  duration-200"
                href=""
              >
                Delivery
              </a>
            </li>
            <li>
              <a
                className="text-black hover:text-[#e3c22b]  duration-200"
                href=""
              >
                Solutions
              </a>
            </li>
            <li>
              <a
                className="text-black hover:text-[#e3c22b]  duration-200"
                href=""
              >
                Become a Partner
              </a>
            </li>
            <li>
              <a
                className="text-black hover:text-[#e3c22b]  duration-200"
                href=""
              >
                Contacts
              </a>
            </li>
          </ul>
        </nav>
        <button className="flex btn-3 items-center w-[110px] justify-center gap-2 bg-[#FFE400] p-2 rounded-lg transition-all duration-300 ease-in-out transform hover:bg-[#FFD700] text-[15px] hover:scale-105 hover:shadow-lg">
          Log in
          <ImArrowRight className="text-[13px] py-[0.5px]" />
        </button>
      </div>
    </header>
  );
};

export default Header;
