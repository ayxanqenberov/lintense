import React from "react";
import { FaApple, FaFacebook, FaGithub, FaGooglePlay, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white flex flex-col gap-3">
      <div className="upFooter w-full pt-5 flex items-center justify-center">
        <nav className="flex w-[73.3%] justify-between">
          <ul>
            <h2 className="text-[18px] font-semibold">About us</h2>
            <li>
              <a
                className="text-[#FFE400] duration-200 hover:text-[#CCB600]"
                href=""
              >
                About the Company
              </a>
            </li>
            <li>
              <a
                className="text-[#FFE400] duration-200 hover:text-[#CCB600]"
                href=""
              >
                Contacts
              </a>
            </li>
            <li>
              <a
                className="text-[#FFE400] duration-200 hover:text-[#CCB600]"
                href=""
              >
                Vacancies
              </a>
            </li>
          </ul>
          <ul>
            <h2 className="text-[18px] font-semibold">Help</h2>
            <li>
              <a
                className="text-[#FFE400] duration-200 hover:text-[#CCB600]"
                href=""
              >
                Privacy policy
              </a>
            </li>
            <li>
              <a
                className="text-[#FFE400] duration-200 hover:text-[#CCB600]"
                href=""
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                className="text-[#FFE400] duration-200 hover:text-[#CCB600]"
                href=""
              >
                Write to Chat
              </a>
            </li>
          </ul>
          <ul>
            <h2 className="text-[18px] font-semibold">Products</h2>
            <li>
              <a
                className="text-[#FFE400] duration-200 hover:text-[#CCB600]"
                href=""
              >
                Security
              </a>
            </li>
            <li>
              <a
                className="text-[#FFE400] duration-200 hover:text-[#CCB600]"
                href=""
              >
                Litense+
              </a>
            </li>
            <li>
              <a
                className="text-[#FFE400] duration-200 hover:text-[#CCB600]"
                href=""
              >
                Lintense Ads
              </a>
            </li>
          </ul>
          <div>
            <ul className="flex flex-col gap-2">
              <h2 className="text-[18px] font-semibold">
                Download Lintense mobile app
              </h2>
              <div className="flex gap-5">
                <li className="flex duration-200 bg-[#2C2F3A] hover:bg-[#242529] cursor-pointer px-4 py-2 rounded-lg items-center gap-1">
                  <FaApple className="text-3xl text-[#FFE400]" />
                  <p className="flex flex-col items-center">
                    <span className="text-[13.5px]">Avaible on</span>
                    <span>APP STORE</span>
                  </p>
                </li>
                <li className="flex duration-200 bg-[#2C2F3A] hover:bg-[#242529] cursor-pointer px-4 py-2 rounded-lg items-center gap-1">
                  <FaGooglePlay className="text-2xl text-[#FFE400]" />
                  <p className="flex flex-col items-center">
                    <span className="text-[13.5px]">Avaible on</span>
                    <span>GOOGLE PLAY</span>
                  </p>
                </li>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-[18px] font-semibold">Follow us</h2>
                <ul className="flex gap-4">
                    <li><a className="text-xl text-[#FFE400] duration-200 hover:text-[#fff]" href="https://github.com/ayxanqenberov"><FaGithub /></a></li>
                    <li><a className="text-xl text-[#FFE400] duration-200 hover:text-[#0A66C2]" href="https://www.linkedin.com/in/ayxan-q%C9%99nb%C9%99rov-7b4ba630a/"><FaLinkedin /></a></li>
                    <li><a className="text-xl text-[#FFE400] duration-200 hover:text-red-600" href=""><FaYoutube /></a></li>
                    <li><a className="text-xl text-[#FFE400] duration-200 hover:text-[#1877F2]" href="https://www.facebook.com/"><FaFacebook /></a></li>
                </ul>
              </div>
            </ul>
          </div>
        </nav>
      </div>
      <div className="downFooter border-t w-full flex justify-center">
        <span className="text-[#809194] py-1.5">© 2023. Lintense. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
