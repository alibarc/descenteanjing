import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Phone, MapPin, ChevronDown, Play } from 'lucide-react';
// App.js
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import CategoriesSection from "./components/CategoriesSection";
import LakesSection from "./components/LakesSection";
import HighlightsSection from "./components/HighlightsSection";
import Footer from "./components/Footer";


// --- KONFIGURASI & ASET ---
// Catatan: Di lingkungan produksi, ganti URL ini dengan import gambar lokal Anda 
// contoh: import heroBg from './assets/Home BG Hitam.png';


const COLORS = {
  primaryBlack: "#050505", // Hitam pekat untuk background
  accentYellow: "#DFFF00", // Warna stabilo/kuning khas jersey lari
  textWhite: "#FFFFFF",
  textGrey: "#9CA3AF",
  footerBg: "#F3F4F6",
};
// --- MAIN APP COMPONENT ---
// File: App.js
const App = () => {
  return (
    <div className="font-sans antialiased text-gray-900 bg-black min-h-screen selection:bg-[#DFFF00] selection:text-black">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;900&family=Roboto+Condensed:wght@400;700&display=swap');
        body { font-family: 'Montserrat', sans-serif; }
        h1, h2, h3, .font-condensed { font-family: 'Roboto Condensed', sans-serif; }
      `}</style>
      
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <CategoriesSection />
        <LakesSection />
        <HighlightsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
