import React from 'react'
import { motion } from "framer-motion";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Gauge, Fuel, Cpu, Zap, Wallet } from "lucide-react";




function BikeDetails() {

  const bike = {
    name: "Yamaha R15 V4",
    image:
      "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "₹1,80,000",
    description:
      "The Yamaha R15 V4 combines performance and technology with a stunning aerodynamic design and an AI-based riding mode suggestion system.",
    features: [
      { icon: <Gauge className="w-5 h-5 text-blue-500" />, title: "Top Speed", value: "150 km/h" },
      { icon: <Fuel className="w-5 h-5 text-blue-500" />, title: "Mileage", value: "40 km/l" },
      { icon: <Cpu className="w-5 h-5 text-blue-500" />, title: "Engine", value: "155cc Liquid Cooled" },
      { icon: <Zap className="w-5 h-5 text-blue-500" />, title: "Power", value: "18.6 PS" },
      { icon: <Wallet className="w-5 h-5 text-blue-500" />, title: "On-Road Price", value: "₹1,80,000" },
    ],
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex justify-center py-16 px-6">
      <motion.div
        className="max-w-5xl w-full bg-gray-800/70 backdrop-blur-xl shadow-xl rounded-2xl p-8 border border-gray-700"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Image and Basic Info */}
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <motion.img
            src={bike.image}
            alt={bike.name}
            className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />

          <div className="md:w-1/2 flex flex-col justify-center space-y-6">
            <motion.h1
              className="text-4xl font-extrabold text-blue-400"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {bike.name}
            </motion.h1>
            <p className="text-gray-300 leading-relaxed">{bike.description}</p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-xl shadow-md">
                Contact Showroom
              </Button>
              <Button variant="outline" className="text-white border-blue-500 hover:bg-blue-600/20 text-lg px-6 py-3 rounded-xl">
                Test Ride
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Features Section */}
        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {bike.features.map((feature, index) => (
            <Card
              key={index}
              className="bg-gray-800/60 border border-gray-700 hover:border-blue-500 transition-all hover:scale-105 duration-300"
            >
              <CardContent className="flex items-center gap-4 py-6">
                {feature.icon}
                <div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-gray-400">{feature.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default BikeDetails