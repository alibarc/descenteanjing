// --- COMPONENT: FOOTER (MINIMALIST) ---
// File: /components/Footer.jsx
import { ASSETS } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-400 border-t border-gray-400 py-10">
  <div className="container mx-auto px-4">

    {/* CENTERED ORGANIZER (FULL WIDTH) */}
    <div className="text-center mb-10">
      <p className="text-[10px] tracking-widest uppercase text-black">
        Organized by :
      </p>

      <p className="text-red-600 font-black text-3xl font-serif tracking-widest">
        GIMBAL ALAS
      </p>

      <p className="text-white text-xs font-sans tracking-[0.5em] mt-1">
        INDONESIA 3676 Mdpl
      </p>
    </div>

    {/* LEFT & RIGHT CONTENT */}
    <div className="flex flex-col md:flex-row justify-between items-center gap-10">

      {/* Left: Brand Identity */}
      <div className="flex items-center gap-3 cursor-default">
        <img 
          src={ASSETS.logo} 
          alt="Logo" 
          className="w-12 h-15 opacity-100" 
        />
        <div className="flex flex-col">
          <h3 className="font-black text-xl uppercase tracking-tighter text-black leading-none">
            Alas Trail Run
          </h3>
          <span className="text-[10px] font-semibold tracking-[0.3em] text-black uppercase mt-1">
            Est. 2026
          </span>
        </div>
      </div>

      {/* Right */}
      <div>
        <p className="text-[12px] font-medium text-black uppercase tracking-widest text-center md:text-right">
          © 2026 Alas Trail Run. <span className="hidden sm:inline">All Rights Reserved.</span>
        </p>
      </div>

    </div>
  </div>
</footer>

  );
};

export default Footer;
