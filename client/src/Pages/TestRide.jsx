import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";

function TestRide() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState("10:00");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !date || !time) {
      alert("Please fill all details");
      return;
    }
    navigate("/payment", { state: { name, phone, date, time } });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white pt-20 overflow-hidden">
      {/* Left image section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2 relative h-[300px] md:h-auto"
      >
        <img
          src="https://images.pexels.com/photos/32683779/pexels-photo-32683779.jpeg"
          alt="Bike Test Ride"
          className="w-full h-full object-cover md:rounded-r-3xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-none md:rounded-r-3xl flex flex-col justify-end p-6 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Book Your Dream Ride 🏍️
          </h2>
          <p className="text-gray-300 text-sm md:text-lg">
            Experience the thrill before you own it!
          </p>
        </div>
      </motion.div>

      {/* Right form section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2 flex items-center justify-center px-5 py-10 md:p-8"
      >
        <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-6 md:p-8">
          <h3 className="text-2xl md:text-3xl font-semibold text-center text-white mb-6">
            Schedule Your Test Ride
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 bg-transparent border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 bg-transparent border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Date Picker */}
            <div className="flex flex-col">
              <label className="text-gray-300 mb-1">Select Date</label>
              <DatePicker
                selected={date}
                onChange={(newDate) => setDate(newDate)}
                minDate={new Date()}
                className="w-full p-3 bg-transparent border border-white/30 rounded-xl text-white focus:ring-2 focus:ring-blue-500"
                calendarClassName="rounded-xl shadow-lg"
                dateFormat="dd/MM/yyyy"
              />
            </div>

            {/* Time Picker */}
            <div className="flex flex-col">
              <label className="text-gray-300 mb-1">Select Time</label>
              <div className="p-2 bg-transparent border border-white/30 rounded-xl">
                <TimePicker
                  onChange={setTime}
                  value={time}
                  disableClock={false}
                  className="text-black w-full"
                />
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full"
            >
              <Link
                to="/payment"
                className="block text-center w-full py-3 mt-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold shadow-lg hover:shadow-blue-500/40 transition-all text-white"
              >
                Proceed to Payment 💳
              </Link>
            </motion.div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default TestRide;
