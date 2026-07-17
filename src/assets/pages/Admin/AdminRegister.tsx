import { useState } from "react";
import { FaUserShield } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AdminRegister = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      form.name === import.meta.env.VITE_ADMIN_NAME &&
      form.email === import.meta.env.VITE_ADMIN_EMAIL &&
      form.password === import.meta.env.VITE_ADMIN_PASS
    ) {
      localStorage.setItem("admin", "true");
      navigate("/admin-dashboard");
    } else {
      alert("Invalid admin credentials");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-yellow-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">
        {/* Header */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-[#FFE400] flex items-center justify-center shadow-md">
            <FaUserShield className="text-4xl text-gray-900" />
          </div>

          <h1 className="text-3xl font-bold mt-5 text-gray-900">Admin Login</h1>

          <p className="text-gray-500 mt-2 text-center">
            Authorized personnel only.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full h-12 px-4 rounded-xl border border-gray-300 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full h-12 px-4 rounded-xl border border-gray-300 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="********"
              className="w-full h-12 px-4 rounded-xl border border-gray-300 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300"
            />
          </div>

          <button
            type="submit"
            className="w-full h-12 rounded-xl bg-[#FFE400] hover:bg-[#FFD700] transition font-semibold text-gray-900 shadow-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminRegister;
