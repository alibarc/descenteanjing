// --- COMPONENT: FOOTER ---
// File: /components/Footer.jsx
import { ASSETS } from "../assets/assets";
import { Instagram, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#F3F4F6] text-gray-800 py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        
        {/* Left: Logo & Brand */}
        <div className="flex items-center gap-4">
          <img src={ASSETS.logo} alt="Logo" className="w-16 h-16" />
          <div>
             <h3 className="font-black text-2xl uppercase leading-none">Alas <br/> Trail Run</h3>
          </div>
        </div>

        {/* Right: Contact Info */}
        <div className="text-left md:text-right">
          <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-gray-500">Contact Us :</h4>
          <div className="flex flex-col gap-3">
            <div className="flex items-center md:justify-end gap-2 font-bold text-sm">
               <Instagram size={18} className="text-pink-600" />
               <span>alastrailrun</span>
            </div>
            <div className="flex items-center md:justify-end gap-2 font-bold text-sm">
               <div className="bg-green-500 rounded-full p-0.5 text-white">
                 <Phone size={12} />
               </div>
               <span>087704764696</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-12 text-center md:text-right">
        <p className="text-[10px] text-gray-400 uppercase tracking-widest">© Alas Trail Run | 2026</p>
      </div>
    </footer>
  );
};

export default Footer;