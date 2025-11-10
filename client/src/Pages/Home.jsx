import React from 'react'
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import Footer from "../components/Footer";
import BikeBrands from '../components/BikeBrands';
import PageWrapper from '../components/PageWrapper';
import DiscountBar from './DiscountBar';

function Home() {
  return (
    <div className="bg-[#0f172a] text-white min-h-screen overflow-hidden">
      <PageWrapper>
        <DiscountBar/>
        <HeroSection />
      </PageWrapper>
      <Features />
      <BikeBrands/>
      <Footer />
    </div>
  )
}

export default Home