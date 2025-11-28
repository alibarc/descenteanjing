// --- COMPONENT: HIGHLIGHTS SECTION ---
// File: /components/HighlightsSection.jsx

import { ASSETS } from "../assets/assets";

const HighlightsSection = () => {
  return (
    <section className="bg-black py-20 pb-32">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white uppercase mb-10 tracking-wider">
          Highlights of Alas Trail Run
        </h2>

       {/* Video Player Frame */}
        <div className="relative max-w-4xl mx-auto border-2 border-white p-2 rounded-lg">
          <div className="relative aspect-video bg-gray-800 overflow-hidden">
            <iframe
              src={"https://www.youtube.com/embed/UfDEMVLrmkk"}
              title="YouTube video player - Alas Trail Run Highlights"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          
          {/* Logo Overlay - Dipertahankan di sini di luar iframe, karena iframe adalah konten eksternal */}
          <div className="absolute top-6 right-6 z-10"> 
              <img 
                src={ASSETS.logo} 
                className="w-8 h-8 opacity-80 filter invert brightness-0 invert-100" 
                alt="Logo Alas Trail Run"
              />
          </div>
        </div>
        
        {/* Organized By
        <div className="mt-20">
           <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">Organized By :</p>
           <div className="text-red-600 font-black text-3xl font-serif tracking-widest">
             GIMBAL ALAS
             <div className="text-white text-xs font-sans tracking-[0.5em] mt-1">INDONESIA 3676 MDPL</div>
           </div>
        </div> */}
      </div>
    </section>
  );
};

export default HighlightsSection;