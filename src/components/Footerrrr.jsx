// --- COMPONENT: FOOTER (CENTERED DARK) ---
// File: /components/Footer.jsx
import { ASSETS } from "../assets/assets";
import { Instagram, Phone } from "lucide-react";

const Footer = () => {
  return (
    // Mengubah warna background menjadi gelap (bg-gray-900) dan padding vertikal menjadi kecil (py-4)
    <footer className="bg-white py-20 relative">
      {/* Container utama, diatur sebagai kolom dan terpusat */}
      <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-4 text-center">

        {/* Bagian Baru: Organized By */}
        <div className="flex flex-col items-center pt-4 pb-4">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
            ORGANIZED BY :
          </p>
          <h2 className="font-serif text-5xl font-extrabold text-red-600 leading-none">
            GIMBAL ALAS
          </h2>
          <p className="text-sm tracking-[0.25em] font-medium mt-1 text-gray-200">
            INDONESIA 3676 MDPL
          </p>
        </div>

        {/* Contact Info - Centered */}
        <div className="flex flex-col items-center">
          <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-gray-400">
            Contact Us :
          </h4>
          <div className="flex flex-col gap-3 w-full items-center">
            {/* Instagram Item */}
            <div className="flex items-center justify-center gap-2 font-bold text-sm hover:text-pink-600 transition-colors cursor-pointer text-gray-200">
               <Instagram size={18} className="text-pink-600" />
               <span>alastrailrun</span>
            </div>
            {/* Phone Item */}
            <div className="flex items-center justify-center gap-2 font-bold text-sm hover:text-green-400 transition-colors cursor-pointer text-gray-200">
               <div className="bg-green-500 rounded-full p-0.5 text-white">
                 <Phone size={12} />
               </div>
               <span>087704764696</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright - Centered */}
      <div className="container mx-auto px-4 mt-4 text-center">
        <p className="text-[10px] text-gray-500 uppercase tracking-widest">
          © Alas Trail Run | 2026
        </p>
      </div>
    </footer>
  );
};

export default Footer;