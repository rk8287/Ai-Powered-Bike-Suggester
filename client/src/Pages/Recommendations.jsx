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
       
        const bikesWithDiscount = res.data.map((bike) => ({
          ...bike,
          discount: Math.random() < 0.4, 
        }));
        setBike(bikesWithDiscount);
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
            className="relative bg-gray-800/70 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all"
          >
            
            {bike.discount && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [1.1, 1, 1.1] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
                className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg"
              >
                20% OFF
              </motion.div>
            )}

            <div className="w-full h-48 sm:h-56 md:h-60 overflow-hidden rounded-xl mb-4">
              <img
                src={bike.image}
                alt={bike.name}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>

            <h3 className="text-xl font-semibold mb-2">{bike.name}</h3>
            <p className="text-gray-400 mb-4">
              {bike.discount ? (
                <>
                  <span className="line-through text-gray-500 mr-2">
                    {bike.price}
                  </span>
                  <span className="text-green-400 font-bold">
                    ₹{(parseInt(bike.price.replace(/[^0-9]/g, "")) * 0.8).toLocaleString()}
                 <space></space> L</span>
                </>
              ) : (
                bike.price
              )}
            </p>

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
