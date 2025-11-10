import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AILoader from "./AILoader";

const Preference = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); 

   
    setTimeout(() => {
      setLoading(false);
      navigate("/recommendations"); 
    }, 5000);
  };

  if (loading) {
    return <AILoader />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-slate-900 to-purple-900 px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-md w-full border border-white/10"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-400 mb-6">
          Choose Your Riding Preferences 🏍️
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-2">Budget Range 💰</label>
            <select className="w-full bg-slate-800/80 text-white p-3 rounded-lg border border-slate-700 focus:ring-2 focus:ring-blue-500">
              <option value="">Select Range</option>
              <option>₹80,000 - ₹1,00,000</option>
              <option>₹1,00,000 - ₹1,50,000</option>
              <option>₹1,50,000+</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Purpose 🛣️</label>
            <select className="w-full bg-slate-800/80 text-white p-3 rounded-lg border border-slate-700 focus:ring-2 focus:ring-blue-500">
              <option value="">Select Purpose</option>
              <option>Daily Commute</option>
              <option>Long Ride / Touring</option>
              <option>Sports / Performance</option>
              <option>Electric / Eco-Friendly</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Brand Preference 🏁</label>
            <select className="w-full bg-slate-800/80 text-white p-3 rounded-lg border border-slate-700 focus:ring-2 focus:ring-blue-500">
              <option value="">Select Brand</option>
              <option>Yamaha</option>
              <option>TVS</option>
              <option>Royal Enfield</option>
              <option>Hero</option>
              <option>Honda</option>
            </select>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 mt-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold shadow-lg hover:shadow-blue-500/40 transition-all text-white"
          >
            Find My Bike 🚀
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Preference;
