// --- COMPONENT: NAVBAR ---
// File: /components/Navbar.jsx
import { ASSETS } from "../assets/assets";
import { useState, useEffect } from "react";
import { ChevronDown, X, Menu } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={ASSETS.logo} alt="Logo" className="h-10 w-10 filter invert brightness-0 invert-100" />
          <div className="text-white font-bold text-lg leading-tight uppercase">
            Alas <br /> Trail Run
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-white text-sm font-medium uppercase tracking-wider">
          <a href="#" className="hover:text-[#DFFF00] transition-colors">Home</a>
          <div className="flex items-center gap-1 cursor-pointer hover:text-[#DFFF00] transition-colors">
            Race Info <ChevronDown size={14} />
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-[#DFFF00] transition-colors">
            Announcement <ChevronDown size={14} />
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-[#DFFF00] transition-colors">
            Categories <ChevronDown size={14} />
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-[#DFFF00] transition-colors">
            About Us <ChevronDown size={14} />
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black text-white p-4 absolute w-full top-full left-0 border-t border-gray-800">
          <div className="flex flex-col gap-4 font-medium uppercase">
            <a href="#" className="block py-2">Home</a>
            <a href="#" className="block py-2">Race Info</a>
            <a href="#" className="block py-2">Announcement</a>
            <a href="#" className="block py-2">Categories</a>
            <a href="#" className="block py-2">About Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;