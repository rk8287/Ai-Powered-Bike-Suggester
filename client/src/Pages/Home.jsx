import React from 'react'
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="bg-[#0f172a] text-white min-h-screen overflow-hidden">
      <HeroSection />
      <Features />
      <Footer />
    </div>
  )
}

export default Home