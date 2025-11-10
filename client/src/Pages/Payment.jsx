import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";

function Payment() {
  const location = useLocation();
  const formData = location.state || {};

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = () => {
    const options = {
      key: "rzp_test_XdH8vO4Kf2Qq78",
      amount: 50000,
      currency: "INR",
      name: "First Bike",
      description: "Test Ride Booking",
      image: "https://cdn-icons-png.flaticon.com/512/747/747310.png",
      handler: function (response) {
        alert(`✅ Payment Successful! ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: formData.name,
        email: "user@example.com",
        contact: formData.phone,
      },
      theme: {
        color: "#2563eb",
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-blue-900 to-gray-900 text-white px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative w-full max-w-md bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 text-center"
      >
        {/* Floating Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl -z-10"></div>

        <motion.img
          src="https://cdn-icons-png.flaticon.com/512/679/679720.png"
          alt="Bike Icon"
          className="w-20 mx-auto mb-4 drop-shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />

        <h2 className="text-3xl font-bold mb-3 text-amber-50">
          Confirm Your Payment 💳
        </h2>

        <p className="text-gray-300 mb-6 leading-relaxed">
          Thank you,{" "}
          <span className="font-semibold text-white">{formData.name}</span>!
          <br />
          You’re booking a test ride on{" "}
          <span className="font-semibold text-white">
            {formData.date?.toString().slice(0, 15)}
          </span>{" "}
          at{" "}
          <span className="font-semibold text-white">{formData.time}</span>.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePayment}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold text-white shadow-lg hover:shadow-blue-500/40 transition-all"
        >
          Pay ₹500 with Razorpay
        </motion.button>

        <Link
          to="/"
          className="block mt-6 text-blue-300 hover:text-blue-400 transition-all text-sm"
        >
          ← Go Back to Home
        </Link>
      </motion.div>
    </div>
  );
}

export default Payment;
