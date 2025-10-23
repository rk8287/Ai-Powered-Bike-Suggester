import React from 'react'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Bike, User } from "lucide-react";

function Navbar() {
  return (
       <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur-md text-white border-b border-gray-800"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-2 text-xl font-semibold">
          <Bike className="w-6 h-6 text-blue-500" />
          <span>AI Bike Suggester</span>
        </Link>

        <div className="flex gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/preferences" className="hover:text-blue-400">Get Suggestion</Link>
          <Link to="/profile" className="hover:text-blue-400 flex items-center gap-1">
            <User className="w-4 h-4" /> Profile
          </Link>
        </div>
      </div>
    </motion.nav>

  )
}

export default Navbar