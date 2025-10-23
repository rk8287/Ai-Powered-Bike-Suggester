import React from 'react'
import { motion } from "framer-motion";

function Profile() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white pt-24 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Your Profile 👤</h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-[#1e293b] p-8 rounded-2xl max-w-3xl mx-auto shadow-xl"
      >
        <h3 className="text-xl font-semibold mb-4">Saved Bikes</h3>
        <p className="text-gray-400">You haven't saved any bikes yet.</p>
      </motion.div>
    </div>
  )
}

export default Profile