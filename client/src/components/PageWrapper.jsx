import React from "react";
import { motion } from "framer-motion";

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}          // start position (invisible + slightly down)
      animate={{ opacity: 1, y: 0 }}           // animate to visible
      exit={{ opacity: 0, y: -50 }}            // smooth exit when leaving page
      transition={{ duration: 0.8, ease: "easeOut" }} // animation timing
    >
      {children}
    </motion.div>
  );
}

export default PageWrapper;
