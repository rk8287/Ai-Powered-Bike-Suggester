import React from 'react'
import { motion } from "framer-motion";
import { Brain, Gauge, Wallet } from "lucide-react";

const features = [
  {
    icon: <Brain className="w-8 h-8 text-blue-500" />,
    title: "AI Smart Suggestions",
    desc: "Get recommendations powered by intelligent logic that matches your riding style."
  },
  {
    icon: <Gauge className="w-8 h-8 text-yellow-400" />,
    title: "Performance Insights",
    desc: "Compare speed, mileage, and performance easily."
  },
  {
    icon: <Wallet className="w-8 h-8 text-green-400" />,
    title: "Budget Friendly",
    desc: "Find bikes that fit perfectly within your budget range."
  }
];

function Features() {
  return (
    <section className="py-24 bg-[#111827]">
      <h2 className="text-center text-4xl font-bold mb-12">Why Choose Us?</h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-[#1f2937] hover:bg-[#2d3748] shadow-xl text-center"
          >
            <div className="flex justify-center mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-400">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Features