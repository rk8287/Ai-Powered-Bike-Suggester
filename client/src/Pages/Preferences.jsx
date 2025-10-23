import React, { useState } from 'react'
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Preferences() {
   const navigate = useNavigate();
  const [form, setForm] = useState({
    budget: "200000",
    usage: "",
    style: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/recommendations");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#0f172a] text-white px-6">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#1e293b] p-10 rounded-2xl shadow-xl w-full max-w-lg space-y-6"
      >
        <h2 className="text-3xl font-bold text-center mb-6">
          Tell Us About Your Preference 🧠
        </h2>

        <div>
          <label className="block mb-2 text-gray-300">Budget (₹)</label>
          <input
            type="number"
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-[#111827] border border-gray-700"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-300">Usage Type</label>
          <select
            name="usage"
            value={form.usage}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-[#111827] border border-gray-700"
          >
            <option value="">Select...</option>
            <option value="daily">Daily Commute</option>
            <option value="touring">Touring</option>
            <option value="sport">Sport</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 text-gray-300">Style Preference</label>
          <select
            name="style"
            value={form.style}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-[#111827] border border-gray-700"
          >
            <option value="">Select...</option>
            <option value="sporty">Sporty</option>
            <option value="classic">Classic</option>
            <option value="cruiser">Cruiser</option>
          </select>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className="bg-blue-600 hover:bg-blue-700 w-full p-3 rounded-lg font-semibold mt-4"
        >
          Get Suggestion
        </motion.button>
      </motion.form>
    </div>
  )
}

export default Preferences