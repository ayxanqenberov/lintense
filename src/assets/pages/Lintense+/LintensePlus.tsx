import React from "react";
import { FaApplePay, FaGooglePay, FaPaypal } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";

const LintensePlus = () => {
  return (
    <>
      <section className="plusSect1 flex h-[320px] items-center justify-center bg-gradient-to-r from-yellow-100 via-yellow-400 to-yellow-100 px-6">
        <div className="max-w-3xl text-center">
          <h2 className="text-5xl font-extrabold tracking-tight text-black">
            Join Lintense Plus
          </h2>

          <p className="mt-5 text-xl font-medium text-gray-900">
            Experience logistics that's
            <span className="font-bold"> Faster</span>,
            <span className="font-bold"> Safer</span>, and
            <span className="font-bold"> Smarter</span>.
          </p>

          <p className="mt-3 text-lg text-gray-800">
            Unlock premium delivery features, priority support, and exclusive
            benefits with <span className="font-semibold">Lintense Plus</span>.
          </p>
        </div>
      </section>
      <section className="bg-gradient-to-br from-yellow-400 via-amber-400 to-orange-400 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
            <div className="grid items-center gap-10 p-8 lg:grid-cols-2 lg:p-14">
              {/* Content */}
              <div>
                <span className="inline-flex rounded-full bg-yellow-100 px-4 py-1 text-sm font-semibold text-yellow-800">
                  ✨ Limited Time Offer
                </span>

                <h2 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
                  Lintense Plus
                </h2>

                <p className="mt-5 text-lg text-gray-600">
                  Unlock all premium AI features for only{" "}
                  <span className="font-bold text-amber-600">$9.99/month</span>.
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <span className="text-2xl font-semibold text-gray-400 line-through">
                    $19.00
                  </span>

                  <span className="rounded-full bg-red-100 px-4 py-2 text-lg font-bold text-red-600">
                    Now $9.99
                  </span>
                </div>

                <p className="mt-4 text-sm font-medium text-emerald-600">
                  ✔ Save 47% • Cancel anytime
                </p>
                <button
                  onClick={() =>
                    document.getElementById("payment")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="mt-8 rounded-xl bg-amber-500 px-8 py-4 text-lg font-semibold text-white hover:bg-amber-600"
                >
                  Get Lintense Plus
                </button>
                {/* <button className="mt-8 rounded-xl bg-amber-500 px-8 py-4 text-lg font-semibold text-white transition hover:bg-amber-600">
                  <a href="#payment">Get Lintense PLus</a>
                </button> */}
              </div>

              {/* Pricing Card */}
              <div className="flex justify-center">
                <div className="relative w-full max-w-sm rounded-3xl bg-gradient-to-br from-yellow-500 via-amber-500 to-orange-500 p-10 text-center text-white shadow-2xl">
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-white px-5 py-2 text-sm font-bold text-amber-600 shadow">
                    47% OFF
                  </span>

                  <p className="mt-4 text-yellow-100">Monthly Subscription</p>

                  <div className="mt-4">
                    <span className="text-2xl text-yellow-200 line-through">
                      $19
                    </span>

                    <div className="mt-2 text-6xl font-extrabold">$9.99</div>

                    <p className="mt-2 text-yellow-100">per month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="payment"
        className="plusSect2 mb-5 flex flex-col gap-6 text-center items-center pt-[25px] mt-5  justify-center"
      >
        <h2 className="text-5xl font-semibold tracking-tight text-black ">
          Welcome{" "}
        </h2>
        <span>Continue with one of the following options</span>
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
        <span>
          This site protected by Google{" "}
          <a className="text-[#063C32] font-bold" href="">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a className="text-[#063C32] font-bold" href="">
            Terms of Service
          </a>
        </span>
        <button className="flex h-[45px] w-[350px] items-center justify-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 text-sm font-bold text-black transition-all duration-300 hover:bg-yellow-400">
          SMS
        </button>
        <span className="text-[#626364] text-lg"> or with</span>
        <button className="flex h-[50px] w-[350px] items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white font-semibold text-gray-800 shadow-sm hover:bg-black hover:text-white transition-colors delay-50">
          <FaGooglePay className="text-4xl" />
          Continue with Google
        </button>

        <button className="flex h-[50px] w-[350px] items-center justify-center gap-3 rounded-xl bg-black font-semibold text-white hover:bg-white hover:text-black border hover:border-gray-300 transition-colors delay-75">
          <FaApplePay className="text-4xl" />
          Continue with Apple
        </button>
        <button className="flex h-[50px] w-[350px] items-center justify-center gap-3 rounded-xl border border-gray-200 bg-blue-600 font-semibold text-white shadow-sm hover:bg-black hover:text-white transition-colors delay-50">
          <FaPaypal className="text-2xl" />
          Continue with Paypal
        </button>
        <span>
          By creating an account, you automatically accept our {""}
          <a className="text-[#063C32] font-bold" href="">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a className="text-[#063C32] font-bold" href="">
            Terms of Service
          </a>
        </span>
      </section>
    </>
  );
};

export default LintensePlus;
