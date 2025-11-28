// --- COMPONENT: HERO SECTION ---
// File: /components/HeroSection.jsx
import { ASSETS } from "../assets/assets";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background Image dengan Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={ASSETS.heroBg} alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center md:justify-end pb-20 md:pb-32">
        <div className="max-w-3xl mt-20 md:mt-0">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase leading-[0.9] tracking-tighter mb-4 drop-shadow-lg">
            Alas <br />
            Trail Run 2026 <br />
            Semeru
          </h1>
          <p className="text-white/90 text-sm md:text-base uppercase tracking-[0.3em] font-semibold border-l-4 border-[#DFFF00] pl-4">
            See You on Semeru 2026 | Ranu Pani
          </p>
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;