// --- COMPONENT: LAKES SECTION ---
// File: /components/LakesSection.jsx
import { ASSETS } from "../assets/assets";
const LakesSection = () => {
  const lakes = [
    { name: "RANU KUMBOLO", img: ASSETS.lake3 },
    { name: "RANU REGULO", img: ASSETS.lake2 },
    { name: "RANU PANI", img: ASSETS.lake1 },
  ];

  return (
    <section className="bg-[#050505] py-24 border-t border-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-white text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-[0.25em] mb-16 text-gray-300">
          3 Lake For Solitude
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {lakes.map((lake, idx) => (
            <div key={idx} className="group relative overflow-hidden cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden">
                 <img 
                  src={lake.img} 
                  alt={lake.name} 
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                 />
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-6 text-center">
                <h3 className="text-white font-bold uppercase text-lg md:text-xl tracking-wider border-b-2 border-[#DFFF00] inline-block pb-1">
                  {lake.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LakesSection;