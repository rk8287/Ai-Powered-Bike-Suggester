import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Payment.css";

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

        {/* From Uiverse.io by Praashoo7 */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p className="heading_8264">MASTERCARD</p>

              <svg
                className="logo"
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#ff9800"
                  d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"
                ></path>
                <path
                  fill="#d50000"
                  d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"
                ></path>
                <path
                  fill="#ff3d00"
                  d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48
          C20.376,15.05,18,19.245,18,24z"
                ></path>
              </svg>

              <svg
                version="1.1"
                className="chip"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="30px"
                height="30px"
                viewBox="0 0 50 50"
                xmlSpace="preserve"
              >
                {/* chip SVG image content here */}
              </svg>

              <svg
                version="1.1"
                className="contactless"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="20px"
                height="20px"
                viewBox="0 0 50 50"
                xmlSpace="preserve"
              >
                {/* contactless SVG image content here */}
              </svg>

              <p className="number">9759 2484 5269 6576</p>
              <p className="valid_thru">VALID THRU</p>
              <p className="date_8264">1 2 / 2 4</p>
              <p className="name">BRUCE WAYNE</p>
            </div>

            <div className="flip-card-back">
              <div className="strip"></div>
              <div className="mstrip"></div>
              <div className="sstrip">
                <p className="code">***</p>
              </div>
            </div>
          </div>
        </div>

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
          at <span className="font-semibold text-white">{formData.time}</span>.
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
