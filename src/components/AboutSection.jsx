// --- COMPONENT: ABOUT SECTION ---
// File: /components/AboutSection.jsx
import { ASSETS } from "../assets/assets";

const AboutSection = () => {
  return (
    <section className="bg-[#050505] text-white pt-3 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Bagian Atas: Runner Kiri & Text Kanan */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-6">
          {/* Runner Image kiri */}
          <div className="w-full lg:w-1/3 relative group">
             {/* <div className="absolute -inset-2 bg-[#DFFF00] blur opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div> 
                ^ Elemen di atas ini yang saya hapus/hilangkan, 
                karena ini adalah div blur kuning yang Anda maksud.
             */}
             <img 
              src={ASSETS.runnerAbout} 
              alt="Trail Runner" 
              className="relative w-full max-w-sm mx-auto lg:max-w-full object-cover rounded-xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
             />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              About Experiences on <br />
              <span className="text-[#DFFF00]">The Slopes of Semeru</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6 text-sm md:text-base text-justify">
              Alas Trail Run adalah ajang lari lintas alam yang menghadirkan pengalaman berlari di kaki Gunung Semeru — gunung tertinggi di Pulau Jawa. Melalui jalur hutan, perbukitan, dan pedesaan di kawasan Semeru, peserta diajak menyatu dengan alam sambil menantang batas diri mereka.
            </p>
            
            {/* small thumbnail */}
            <div className="flex gap-4 mt-8">
              <div className="w-[260px] h-[160px] bg-gray-800 rounded overflow-hidden border border-gray-700 shrink-0">
                <img src={ASSETS.ASimg1} className="w-full h-full object-cover" />
              </div>

              <div className="w-[260px] h-[160px] bg-gray-800 rounded overflow-hidden border border-gray-700 shrink-0">
                <img src={ASSETS.ASimg2} className="w-full h-full object-cover" />
              </div>
            </div>

          </div>
          
           {/* Gambar tambahan di kanan layout asli: Lebar diubah dari w-1/5 menjadi lg:w-1/4 dan tinggi gambar diubah dari h-48 menjadi h-64 */}
           <div className="hidden lg:block lg:w-1/4">
             {/* Menghilangkan 'shadow-lg' dari container gambar kanan */}
             <div className="bg-gray-800 p-2 rotate-3 transform hover:rotate-0 transition rounded-xl">
                {/* Menghilangkan 'grayscale hover:grayscale-0' pada gambar kanan */}
                <img src={ASSETS.start} className="w-full h-100 object-cover transition rounded-lg" />
             </div>
           </div>
        </div>

        {/* Bagian Bawah: Landscape Image & Text */}
        <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
             <img src={ASSETS.ortu} alt="Landscape" className="w-full h-64 object-cover rounded-lg shadow-lg opacity-80" />
          </div>
          <div className="w-full md:w-1/2 pl-0 md:pl-10 border-l-0 md:border-l border-gray-800">
            <p className="text-gray-300 text-sm md:text-base italic leading-loose">
              "Event ini bukan sekadar lomba lari, tetapi sebuah perjalanan spiritual dan petualangan yang memadukan olahraga, keindahan alam, serta semangat pelestarian lingkungan. Dengan udara pegunungan yang sejuk dan panorama hutan yang memukau, Alas Trail Run menjadi simbol kebebasan, ketangguhan, dan kecintaan terhadap alam Semeru."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;