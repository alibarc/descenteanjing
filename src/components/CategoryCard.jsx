// --- COMPONENT: CATEGORIES CARD ---
// File: /components/CategoryCard.jsx
import { ASSETS } from "../assets/assets";

const CategoryCard = ({ km, img, elevation, cutOff }) => (
  <div className="bg-white text-black group hover:-translate-y-2 transition-transform duration-300 shadow-xl overflow-hidden flex flex-col h-full">
    <div className="h-40 overflow-hidden relative">
      <img src={img} alt={`${km} KM`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute bottom-0 left-0 bg-[#DFFF00] px-3 py-1 font-bold text-black text-sm tracking-tighter">
        {km} KM
      </div>
    </div>
    <div className="p-5 flex-1 flex flex-col justify-between">
      <div>
        <div className="flex justify-between mb-4 border-b border-gray-200 pb-2">
           <div className="text-center">
             <p className="text-[10px] uppercase text-gray-500 font-bold">Distance</p>
             <p className="font-black text-xl">{km} KM</p>
           </div>
           <div className="text-center">
             <p className="text-[10px] uppercase text-gray-500 font-bold">Elevation Gain</p>
             <p className="font-black text-xl">{elevation}</p>
           </div>
        </div>
        <div className="mb-4">
          <p className="text-[10px] uppercase text-gray-500 font-bold">Cut Off Time</p>
          <p className="font-bold">{cutOff}</p>
        </div>
      </div>
      
      <button className="w-full bg-[#DFFF00] hover:bg-[#cbe600] text-black font-bold py-2 px-4 text-xs uppercase tracking-widest transition-colors mt-auto">
        Details
      </button>
    </div>
  </div>
);

export default CategoryCard;