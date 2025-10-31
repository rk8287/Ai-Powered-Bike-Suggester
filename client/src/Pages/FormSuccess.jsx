import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function FormSuccess() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-900 via-gray-900 to-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="bg-gray-800/80 p-10 rounded-3xl shadow-2xl text-center max-w-md w-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold mb-4 text-green-400">
          ✅ Form Submitted Successfully!
        </h2>
        <p className="text-gray-300 mb-6">
          Thank you for reaching out. Our team will get back to you shortly.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold shadow-md transition-all"
        >
          Go Back to Home
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default FormSuccess;
