import React, { useEffect, useState } from "react";
import { ImArrowRight } from "react-icons/im";
import "../../../App.css";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { FaRegUserCircle } from "react-icons/fa";
import { auth } from "../../../firebase/firebase";

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <header className="header bg-amber-300 w-full flex justify-center h-[70px] max-[480px]:h-full">
      <div className="flex items-center justify-around w-[80%] max-[400px]:w-full">
        <div className="flex gap-3 items-center max-[480px]:flex-col">
          <span
            className="bg-gradient-to-r logo from-[#030302] via-[#FFD54A] to-[#D4A017] bg-clip-text text-3xl font-extrabold tracking-[-0.04em] text-transparent"
            style={{
              WebkitTextStroke: "0.5px #d1d5",
            }}
          >
            Lintense
          </span>
          <span className=" w-[1px] bg-black h-[30px] max-[480px]:hidden"></span>
          <div className="flex bg-white rounded-[4px] items-center border-b ">
            <input
              className="outline-none  pl-1"
              type="text"
              placeholder="Shipping service"
            />
            <CiSearch />
          </div>
        </div>
        {user ? (
          <FaRegUserCircle
            onClick={() => navigate("/profile")}
            className="text-4xl cursor-pointer"
          />
        ) : (
          <button
            onClick={() => navigate("/register")}
            className="flex btn-3 items-center w-[110px] justify-center gap-2 bg-[#FFE400] p-2 rounded-lg transition-all duration-300 ease-in-out transform hover:bg-[#FFD700] text-[15px] hover:scale-105 hover:shadow-lg"
          >
            Log in
            <ImArrowRight className="text-[13px] py-[0.5px]" />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
