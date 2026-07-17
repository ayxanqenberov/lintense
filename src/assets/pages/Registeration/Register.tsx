// import React from "react";
import { FaApple, FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../firebase/firebase";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();

  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className="plusSect1 flex h-[320px] items-center justify-center bg-gradient-to-r from-yellow-100 via-yellow-400 to-yellow-100 px-6">
        <div className="max-w-3xl text-center">
          <h2 className="text-5xl font-extrabold tracking-tight text-black">
            Okaay!!! , Register Now
          </h2>

          <p className="mt-5 text-xl font-medium text-gray-900">
            Experience logistics that's
            <span className="font-bold"> Faster</span>,
            <span className="font-bold"> Safer</span>, and
            <span className="font-bold"> Smarter</span>.
          </p>

          <p className="mt-3 text-lg text-gray-800">
            Enjoy from <span className="font-semibold">Lintense </span>.
          </p>
        </div>
      </section>
      <section className="plusSect2 mb-5 flex flex-col gap-6 text-center items-center pt-[25px] mt-5  justify-center">
        <span className="text-gray-500 font-semibold">
          Please enter your number and confirm.
        </span>

        <div className="flex h-[55px] w-[380px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition focus-within:border-yellow-400">
          <div className="flex items-center border-r border-gray-200 bg-yellow-50 px-3">
            <select className="w-[110px] cursor-pointer bg-transparent text-sm font-semibold text-gray-700 outline-none">
              <option>🇦🇿 +994</option>
              <option>🇬🇪 +995</option>
              <option>🇺🇸 +1</option>
            </select>
          </div>
          <input
            className="flex-1 px-4 text-gray-800 outline-none placeholder:text-gray-400"
            placeholder="Phone number"
            type="text"
          />
        </div>
        <button className="flex h-[45px] w-[350px] items-center justify-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 text-sm font-bold text-black transition-all duration-300 hover:bg-yellow-400">
          Send SMS code
        </button>
        <span className="text-[#626364] text-lg">or</span>
        <button
          onClick={googleLogin}
          className="flex h-[50px] w-[350px] items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white font-semibold text-gray-800 shadow-sm hover:bg-black hover:text-white transition-colors delay-50"
        >
          <FcGoogle size={22} />
          Continue with Google
        </button>
        <button className="flex w-[350px] items-center justify-center gap-3 border rounded-lg p-3 hover:bg-gray-100">
          <FaFacebookF className="text-blue-600 text-xl" />
          <span>Sign in with Facebook</span>
        </button>
        <button className="flex w-[350px] items-center justify-center gap-3 border rounded-lg p-3 hover:bg-gray-100">
          <FaApple className="text-black text-xl" />
          <span>Sign in with Apple</span>
        </button>

        <button className="flex h-[50px] w-[350px] items-center justify-center gap-3 rounded-xl bg-black font-semibold text-white hover:bg-white hover:text-black border hover:border-gray-300 transition-colors delay-75">
          <MdEmail size={22} />
          Continue with Email
        </button>
      </section>
    </>
  );
};

export default Register;
