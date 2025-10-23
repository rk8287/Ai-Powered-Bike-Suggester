import React from 'react'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const bikes = [
  { name: "Pulsar N250", price: "₹1.49 L", image: "https://i.pinimg.com/736x/58/9c/4d/589c4db8f454ecd59ad6ea9a4e791184.jpg" },
  { name: "Hunter 350", price: "₹1.60 L", image: "https://images.pexels.com/photos/17944593/pexels-photo-17944593.jpeg?cs=srgb&dl=pexels-venkatganta-17944593.jpg&fm=jpg" },
  { name: "Apache RTR 200", price: "₹1.45 L", image: "https://i.pinimg.com/736x/77/d1/a9/77d1a9cacb387a45d1f7947430af94e9.jpg" },
];

function Recommendations() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white pt-24 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Your Best Matches 🚀</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {bikes.map((bike, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
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
              to="/details"
              className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-full inline-block font-semibold shadow-lg transition-all hover:scale-105"
            >
              View Details
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Recommendations
