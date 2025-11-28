// --- COMPONENT: NAVBAR ---
// File: /components/Navbar.jsx
import { ASSETS } from "../assets/assets";
import { useState, useEffect } from "react";
import { ChevronDown, X, Menu } from "lucide-react";
import { Link } from "react-router-dom";

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
        <Link to="/" className="flex items-center gap-2">
          <img src={ASSETS.logo} alt="Logo" className="h-10 w-10 filter invert brightness-0 invert-100" />
          <div className="text-white font-bold text-lg leading-tight uppercase">
            Alas <br /> Trail Run
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-white text-sm font-medium uppercase tracking-wider">
          
          <Link to="/" className="hover:text-[#DFFF00] transition-colors">
            Home
          </Link>

          <div className="flex items-center gap-1 cursor-pointer hover:text-[#DFFF00] transition-colors">
            Race Info <ChevronDown size={14} />
          </div>

          <div className="flex items-center gap-1 cursor-pointer hover:text-[#DFFF00] transition-colors">
            Gallery <ChevronDown size={14} />
          </div>

          {/* ✔ CATEGORIES langsung ke detail kategori */}
          <Link 
            to="/detailkategori"
            className="hover:text-[#DFFF00] transition-colors"
          >
            Categories
          </Link>

          {/* About Us */}
          <Link 
            to="/aboutus"
            className="hover:text-[#DFFF00] transition-colors"
          >
            About Us
          </Link>

        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white p-4 absolute w-full top-full left-0 border-t border-gray-800">
          <div className="flex flex-col gap-4 font-medium uppercase">

            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block py-2"
            >
              Home
            </Link>

            <div className="block py-2">Race Info</div>
            <div className="block py-2">Gallery</div>

            {/* Mobile Categories */}
            <Link
              to="/detailkategori"
              onClick={() => setIsOpen(false)}
              className="block py-2"
            >
              Categories
            </Link>

            <Link
              to="/aboutus"
              onClick={() => setIsOpen(false)}
              className="block py-2"
            >
              About Us
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;