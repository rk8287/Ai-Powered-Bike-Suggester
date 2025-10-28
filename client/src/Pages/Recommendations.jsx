import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";

function Recommendations() {
  const [bikes, setBike] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchBikes = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/bikes");
        setBike(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBikes();
  }, []);

  const filteredBikes = bikes.filter((bike) =>
    bike.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white pt-24 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Your Best Matches 🚀
      </h2>

      <div className="max-w-md mx-auto mb-10">
        <input
          type="text"
          placeholder="Search for bikes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 rounded-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredBikes.map((bike, i) => (
          <motion.div
            key={bike._id || i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-gray-800/70 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all"
          >
            <div className="w-full h-48 sm:h-56 md:h-60 overflow-hidden rounded-xl mb-4">
              <img
                src={bike.image}
                alt={bike.name}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>

            <h3 className="text-xl font-semibold mb-2">{bike.name}</h3>
            <p className="text-gray-400 mb-4">{bike.price}</p>

            <Link
              to={`/details/${bike.id}`}
              className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-full inline-block font-semibold shadow-lg transition-all hover:scale-105"
            >
              View Details
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Recommendations;
