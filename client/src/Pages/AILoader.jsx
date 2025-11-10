import React from "react";
import { motion } from "framer-motion";

function AILoader() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f172a] text-white overflow-hidden">
      {/* Glowing gradient background effect */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full animate-pulse"></div>

      {/* AI pulse ring animation */}
      <motion.div
        className="relative flex items-center justify-center mb-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <div className="w-28 h-28 rounded-full border-4 border-blue-500/60"></div>
        <div className="absolute w-20 h-20 rounded-full border-4 border-blue-400/80 animate-ping"></div>
        <div className="absolute w-12 h-12 rounded-full bg-blue-500 shadow-lg shadow-blue-700/50"></div>
      </motion.div>

      {/* Animated dots + text */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-2xl md:text-3xl font-semibold text-blue-400 text-center"
      >
        AI is analyzing your riding preferences
      </motion.h2>

      <div className="flex space-x-2 mt-4">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-3 h-3 bg-blue-500 rounded-full"
            animate={{ y: [0, -6, 0], opacity: [0.6, 1, 0.6] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          ></motion.span>
        ))}
      </div>

      <motion.p
        className="mt-6 text-gray-400 text-sm text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Finding the perfect bike match for you...
      </motion.p>
    </div>
  );
}

export default AILoader;
