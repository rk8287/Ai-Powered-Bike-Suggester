import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button, Card, CardContent } from "@mui/material";
import { Gauge, Fuel, Cpu, Zap, Wallet } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function BikeDetails() {
  const { id } = useParams();
  const [bike, setBike] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBike = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/bikes/${id}`);
        setBike(res.data);
      } catch (error) {
        console.error("Error fetching bike:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBike();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white text-xl">
        Loading bike details...
      </div>
    );
  }

  if (!bike) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-400 text-xl">
        Bike not found 😢
      </div>
    );
  }

  const features = [
    {
      icon: <Gauge className="w-5 h-5 text-blue-500" />,
      title: "Top Speed",
      value: bike.topSpeed,
    },
    {
      icon: <Fuel className="w-5 h-5 text-blue-500" />,
      title: "Mileage",
      value: bike.mileage,
    },
    {
      icon: <Cpu className="w-5 h-5 text-blue-500" />,
      title: "Engine",
      value: bike.engine,
    },
    {
      icon: <Zap className="w-5 h-5 text-blue-500" />,
      title: "Power",
      value: bike.power,
    },
    {
      icon: <Wallet className="w-5 h-5 text-blue-500" />,
      title: "Price",
      value: bike.price,
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex justify-center py-16 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="max-w-5xl w-full bg-gray-800/70 backdrop-blur-xl shadow-xl rounded-2xl p-8 border border-gray-700"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        
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
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {bike.name}
            </motion.h1>

            <p className="text-gray-300 leading-relaxed">
              {bike.company} presents the {bike.name}, a high-performance
              machine built for style and speed.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                to={'/contact'}
                variant="contained"
                className="!bg-blue-600 hover:!bg-blue-700 text-white text-lg px-6 py-2 rounded-xl shadow-md"
              >
                Contact Showroom
              </Link>
              <Link to={'/test-ride/booking'}
                variant="outlined"
                className="!border-blue-500 !text-white hover:!bg-blue-600/20 text-lg px-6 py-2 rounded-xl border-1"
              >
                Test Ride
              </Link>
            </motion.div>
          </div>
        </div>

        
        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {features.map((feature, index) => (
            <Card
              key={index}
              className="!bg-gray-800/60 !border !border-gray-700 hover:!border-blue-500 hover:scale-105 transition-all duration-300"
            >
              <CardContent className="flex items-center gap-4 py-6">
                {feature.icon}
                <div>
                  <h3 className="text-lg text-white font-semibold">{feature.title}</h3>
                  <p className="text-gray-400">{feature.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default BikeDetails;
