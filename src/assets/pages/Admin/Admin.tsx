import React, { useEffect, useState } from "react";
import { FaBullhorn, FaTicketAlt, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem("admin");

    if (!isAdmin) {
      navigate("/admin");
    }
  }, [navigate]);

  const [news, setNews] = useState([]);
  const [promos, setPromos] = useState([]);

  const [newsTitle, setNewsTitle] = useState("");
  const [newsDesc, setNewsDesc] = useState("");

  const [code, setCode] = useState("");
  const [discount, setDiscount] = useState("");
  const [limit, setLimit] = useState("");
  const [expire, setExpire] = useState("");

  const addNews = () => {
    if (!newsTitle || !newsDesc) return;

    setNews([
      ...news,
      {
        id: Date.now(),
        title: newsTitle,
        description: newsDesc,
      },
    ]);

    setNewsTitle("");
    setNewsDesc("");
  };

  const deleteNews = (id) => {
    setNews(news.filter((item) => item.id !== id));
  };

  const addPromo = () => {
    if (!code || !discount || !limit || !expire) return;

    setPromos([
      ...promos,
      {
        id: Date.now(),
        code,
        discount,
        limit,
        expire,
      },
    ]);

    setCode("");
    setDiscount("");
    setLimit("");
    setExpire("");
  };

  const deletePromo = (id) => {
    setPromos(promos.filter((item) => item.id !== id));
  };

  const handleLogout = () => {
    localStorage.removeItem("admin");
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Admin Panel</h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow p-6">
          <div className="flex items-center gap-3 mb-6">
            <FaBullhorn className="text-yellow-500 text-2xl" />
            <h2 className="text-2xl font-bold">Latest News</h2>
          </div>

          <input
            className="w-full border rounded-lg p-3 mb-3"
            placeholder="Title"
            value={newsTitle}
            onChange={(e) => setNewsTitle(e.target.value)}
          />

          <textarea
            className="w-full border rounded-lg p-3 mb-3"
            rows={4}
            placeholder="Description"
            value={newsDesc}
            onChange={(e) => setNewsDesc(e.target.value)}
          />

          <button
            onClick={addNews}
            className="bg-yellow-400 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500"
          >
            Publish News
          </button>

          <div className="mt-8 space-y-4">
            {news.map((item) => (
              <div
                key={item.id}
                className="border rounded-xl p-4 flex justify-between"
              >
                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-gray-500 mt-2">{item.description}</p>
                </div>

                <button
                  onClick={() => deleteNews(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow p-6">
          <div className="flex items-center gap-3 mb-6">
            <FaTicketAlt className="text-yellow-500 text-2xl" />
            <h2 className="text-2xl font-bold">Promo Codes</h2>
          </div>

          <input
            className="w-full border rounded-lg p-3 mb-3"
            placeholder="Promo Code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />

          <input
            className="w-full border rounded-lg p-3 mb-3"
            placeholder="Discount (%)"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />

          <input
            className="w-full border rounded-lg p-3 mb-3"
            placeholder="Usage Limit"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
          />

          <input
            type="date"
            className="w-full border rounded-lg p-3 mb-3"
            value={expire}
            onChange={(e) => setExpire(e.target.value)}
          />

          <button
            onClick={addPromo}
            className="bg-yellow-400 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500"
          >
            Create Promo
          </button>

          <div className="mt-8 space-y-4">
            {promos.map((item) => (
              <div
                key={item.id}
                className="border rounded-xl p-4 flex justify-between"
              >
                <div>
                  <h3 className="font-bold">{item.code}</h3>
                  <p className="text-gray-500">{item.discount}% Discount</p>
                  <p className="text-gray-500">Limit: {item.limit}</p>
                  <p className="text-gray-500">
                    Expires: {item.expire}
                  </p>
                </div>

                <button
                  onClick={() => deletePromo(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;