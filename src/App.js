import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Phone, MapPin, ChevronDown, Play } from 'lucide-react';

// COMPONENTS
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import CategoriesSection from "./components/CategoriesSection";
import LakesSection from "./components/LakesSection";
import HighlightsSection from "./components/HighlightsSection";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs"; 

// ---------------------------
// 🔥 SCROLL TO TOP COMPONENT
// ---------------------------
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);   // scroll ke atas setiap route berubah
  }, [pathname]);

  return null;
}

// ---------------------------
// MAIN APP COMPONENT
// ---------------------------
const App = () => {
  return (
    <Router>

      {/* 👇 ScrollToTop agar pindah halaman selalu mulai dari atas */}
      <ScrollToTop />

      <div className="font-sans antialiased text-gray-900 bg-black min-h-screen selection:bg-[#DFFF00] selection:text-black">
        
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;900&family=Roboto+Condensed:wght@400;700&display=swap');
          body { font-family: 'Montserrat', sans-serif; }
          h1, h2, h3, .font-condensed { font-family: 'Roboto Condensed', sans-serif; }
        `}</style>
        
        <Navbar />

        <main>
          <Routes>

            {/* HOME */}
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <AboutSection />
                  <CategoriesSection />
                  <LakesSection />
                  <HighlightsSection />
                </>
              }
            />

            {/* ABOUT US */}
            <Route path="/aboutus" element={<AboutUs />} />

          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;