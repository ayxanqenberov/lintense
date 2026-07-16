import React, { useState } from "react";
import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaMinus,
  FaPlus,
  FaTelegramPlane,
  FaTicketAlt,
  FaWallet,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const faqs = [
  {
    question: "How long does international shipping take?",
    answer:
      "Delivery usually takes between 5–10 business days depending on the destination.",
  },
  {
    question: "How can I track my shipment?",
    answer:
      "You can track your shipment using the tracking number provided.",
  },
  {
    question: "Can I cancel my shipment?",
    answer:
      "Yes, before your shipment is processed in our warehouse.",
  },
  {
    question: "Do you provide insurance?",
    answer:
      "Yes, insurance is available for eligible shipments.",
  },
];
const Profile = () => {
  const [open, setOpen] = useState(0);

  return (
    <>
      <header className="w-full h-[75px] bg-white border-b border-gray-200 shadow-sm flex justify-center">
        <div className="w-[88%] flex items-center justify-between">
          <span
            className="bg-gradient-to-r from-[#030302] via-[#FFD54A] to-[#D4A017] bg-clip-text text-3xl font-extrabold tracking-[-0.04em] text-transparent cursor-pointer"
            style={{
              WebkitTextStroke: "0.5px #d1d5",
            }}
          >
            Lintense
          </span>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3 bg-[#FFF8D9] px-5 py-2 rounded-xl border border-yellow-300 shadow-sm">
              <FaWallet className="text-[#D4A017] text-xl" />
              <div>
                <p className="text-[11px] text-gray-500">Balance</p>
                <span className="font-bold text-gray-800">$0.00</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="pt-4 mx-5">
        <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">
              Cargo Pricing
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Shipping prices based on package weight.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr className="text-left text-gray-600 text-sm uppercase">
                  <th className="px-6 py-4 font-semibold">Weight</th>
                  <th className="px-6 py-4 font-semibold">Price</th>
                  <th className="px-6 py-4 font-semibold">Delivery Time</th>
                  <th className="px-6 py-4 font-semibold">Service</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">0.01 – 1 kg</td>
                  <td className="px-6 py-4 font-semibold text-green-600">
                    $3.00
                  </td>
                  <td className="px-6 py-4">5–7 Days</td>
                  <td className="px-6 py-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                      Standard
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">1.01 – 3 kg</td>
                  <td className="px-6 py-4 font-semibold text-green-600">
                    $6.00
                  </td>
                  <td className="px-6 py-4">5–7 Days</td>
                  <td className="px-6 py-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                      Standard
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">3.01 – 5 kg</td>
                  <td className="px-6 py-4 font-semibold text-green-600">
                    $9.00
                  </td>
                  <td className="px-6 py-4">4–6 Days</td>
                  <td className="px-6 py-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                      Express
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">5.01 – 10 kg</td>
                  <td className="px-6 py-4 font-semibold text-green-600">
                    $15.00
                  </td>
                  <td className="px-6 py-4">3–5 Days</td>
                  <td className="px-6 py-4">
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium">
                      Priority
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">10.01 – 20 kg</td>
                  <td className="px-6 py-4 font-semibold text-green-600">
                    $28.00
                  </td>
                  <td className="px-6 py-4">2–4 Days</td>
                  <td className="px-6 py-4">
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-medium">
                      Premium
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="w-full mt-8">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center">
              <FaTicketAlt className="text-yellow-600 text-xl" />
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Promo Code
              </h2>
              <p className="text-sm text-gray-500">
                Enter your promo code to receive a discount.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Enter promo code..."
              className="flex-1 h-12 px-4 rounded-xl border border-gray-300 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition"
            />

            <button className="px-8 bg-[#FFE400] hover:bg-[#FFD700] rounded-xl font-semibold transition">
              Apply
            </button>
          </div>
        </div>
      </section>
      <section className="w-full mt-8">
        <div className="bg-gradient-to-r from-[#FFE400] to-[#FFD54A] rounded-2xl p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Stay Updated</h2>

              <p className="text-gray-700 mt-3 max-w-xl leading-7">
                Follow us to stay informed about the latest shipping updates,
                exclusive promotions, delivery news, and special offers.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow hover:scale-110 transition"
              >
                <FaFacebookF className="text-xl text-[#1877F2]" />
              </a>

              <a
                href="#"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow hover:scale-110 transition"
              >
                <FaInstagram className="text-xl text-pink-600" />
              </a>

              <a
                href="#"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow hover:scale-110 transition"
              >
                <FaXTwitter className="text-xl text-black" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full mt-1">
        <div className="relative overflow-hidden bg-gradient-to-r from-[#229ED9] via-[#1D8ACB] to-[#1677B8] px-10 py-12 shadow-xl">
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/10"></div>
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-white/5"></div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
                <FaTelegramPlane />
                Official Telegram Community
              </span>

              <h2 className="text-4xl font-bold text-white mt-6 leading-tight">
                Join Our Telegram Group
              </h2>

              <p className="text-blue-100 text-lg mt-5 leading-8">
                Be the first to receive shipping updates, exclusive discounts,
                promo codes, delivery announcements, and important news directly
                from our team.
              </p>

              <button className="mt-8 bg-white text-[#229ED9] font-semibold px-8 py-4 rounded-xl hover:scale-105 transition duration-300 shadow-lg">
                Join Telegram
              </button>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-52 h-52 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20">
                <FaTelegramPlane className="text-white text-[110px]" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full mt-10">
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>
              <p className="text-gray-500 mt-2">
                Stay informed with our latest updates and announcements.
              </p>
            </div>

            <button className="text-[#D4A017] font-semibold hover:underline">
              View All
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="group rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800"
                className="h-52 w-full object-cover group-hover:scale-105 transition duration-500"
                alt=""
              />

              <div className="p-6">
                <span className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                  Announcement
                </span>

                <h3 className="font-bold text-xl mt-4">
                  New Warehouse in Germany
                </h3>

                <p className="text-gray-500 mt-3 leading-7">
                  We have expanded our warehouse network to provide faster
                  shipping across Europe.
                </p>

                <button className="flex items-center gap-2 mt-6 font-semibold text-[#D4A017]">
                  Read More <FaArrowRight />
                </button>
              </div>
            </div>

            <div className="group rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=800"
                className="h-52 w-full object-cover group-hover:scale-105 transition duration-500"
                alt=""
              />

              <div className="p-6">
                <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                  Shipping
                </span>

                <h3 className="font-bold text-xl mt-4">
                  Faster Express Delivery
                </h3>

                <p className="text-gray-500 mt-3 leading-7">
                  Express shipments now arrive up to 2 days earlier for selected
                  countries.
                </p>

                <button className="flex items-center gap-2 mt-6 font-semibold text-[#D4A017]">
                  Read More <FaArrowRight />
                </button>
              </div>
            </div>

            <div className="group rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800"
                className="h-52 w-full object-cover group-hover:scale-105 transition duration-500"
                alt=""
              />

              <div className="p-6">
                <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                  Promotion
                </span>

                <h3 className="font-bold text-xl mt-4">
                  Summer Shipping Discounts
                </h3>

                <p className="text-gray-500 mt-3 leading-7">
                  Save up to 20% on selected international shipping routes this
                  month.
                </p>

                <button className="flex items-center gap-2 mt-6 font-semibold text-[#D4A017]">
                  Read More <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full mb-10 mt-10">
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>

            <p className="text-gray-500 mt-3">
              Everything you need to know about our shipping services.
            </p>
          </div>

          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpen(open === index ? -1 : index)}
                  className="w-full flex justify-between items-center p-6 hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-lg text-left">
                    {faq.question}
                  </span>

                  {open === index ? <FaMinus /> : <FaPlus />}
                </button>

                {open === index && (
                  <div className="px-6 pb-6 text-gray-600 leading-8">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
