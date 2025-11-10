import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Motorbike, User, Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isLoggedIn = false; 

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur-md text-white border-b border-gray-800 shadow-lg"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
     
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-semibold hover:text-blue-400 transition-colors"
        >
          <Motorbike className="w-6 h-6 text-blue-500" />
          <span>First Bike</span>
        </Link>

       
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-blue-400 transition-colors">
            Home
          </Link>
          <Link to="/preferences" className="hover:text-blue-400 transition-colors">
            Get Suggestion
          </Link>

          {isLoggedIn ? (
            <Link
              to="/profile"
              className="flex items-center gap-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 shadow-md"
            >
              <User className="w-4 h-4" />
              Profile
            </Link>
          ) : (
            <Link
              to="/login"
              className="relative overflow-hidden px-4 py-2 rounded-full text-white font-medium shadow-md bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            >
              <span className="relative z-10 ">Login / Signup</span>
              <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] animate-shine"></span>
            </Link>
          )}
        </div>

        
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

    </motion.nav>
  );
}

export default Navbar;
