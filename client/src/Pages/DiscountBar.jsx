import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  "🔥 Get 10% off on your first test ride booking!",
  "🚀 AI is finding your perfect bike — stay tuned!",
  "🏍️ Limited time: Free helmet with every booking!",
  "💳 Easy EMI options available for top models!",
];

function DiscountBar() {
  const [index, setIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-15 left-0 w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white overflow-hidden z-50 shadow-lg">
      <div className="h-10 flex justify-center items-center text-sm sm:text-base font-medium relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute text-center w-full px-4"
          >
            {messages[index]}
          </motion.div>
        </AnimatePresence>
      </div>

      
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-white/20 blur-lg"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "linear",
        }}
      />
    </div>
  );
}

export default DiscountBar;
