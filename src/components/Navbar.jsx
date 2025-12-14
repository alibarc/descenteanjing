// --- COMPONENT: NAVBAR ---
// File: /components/Navbar.jsx
import { ASSETS } from "../assets/assets";
import { useState, useEffect } from "react";
import { ChevronDown, X, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false); 

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
          <img src={ASSETS.logo} alt="Logo" className="h-14 w-10 filter invert brightness-0 invert-100" />
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

          {/* ================= DESKTOP CATEGORIES DROPDOWN ================= */}
          <div
            className="relative"
            onMouseEnter={() => setOpenCategory(true)}
          >
            <button
              type="button"
              onClick={() => setOpenCategory(prev => !prev)}
              className="flex items-center gap-1 cursor-pointer hover:text-[#DFFF00] transition-colors py-2 bg-transparent text-white uppercase"
            >
              Categories <ChevronDown size={14} />
            </button>

            {openCategory && (
              <div className="absolute right-0 mt-2 bg-black border border-gray-700 shadow-lg rounded-md w-40 py-2 z-50 animate-fadeSlide">
                <Link to="/category/8"  className="block px-4 py-2 hover:bg-[#DFFF00] hover:text-black"> 8 KM  </Link>
                <Link to="/category/16" className="block px-4 py-2 hover:bg-[#DFFF00] hover:text-black"> 16 KM </Link>
                <Link to="/category/32" className="block px-4 py-2 hover:bg-[#DFFF00] hover:text-black"> 32 KM </Link>
                <Link to="/category/50" className="block px-4 py-2 hover:bg-[#DFFF00] hover:text-black"> 50 KM </Link>
              </div>
            )}
          </div>

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

            {/* Mobile Categories Dropdown */}
            <div className="flex flex-col">
              <button
                type="button"
                onClick={() => setMobileCategoriesOpen(prev => !prev)}
                className="flex items-center justify-between py-2 uppercase"
              >
                <span>Categories</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    mobileCategoriesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileCategoriesOpen && (
                <div className="pl-4 mt-2 flex flex-col gap-2 text-sm">
                  {["8", "16", "32", "50"].map((km) => (
                    <Link
                      key={km}
                      to={`/category/${km}`}
                      onClick={() => {
                        setIsOpen(false);
                        setMobileCategoriesOpen(false);
                      }}
                      className="py-1"
                    >
                      {km} KM
                    </Link>
                  ))}
                </div>
              )}
            </div>


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