// CoreStory.jsx
import React from "react";

const CoreStory = () => {
  return (
    <section className="pt-28 mb-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Teks Kiri */}
        <div>
          {/* Core Story Title + Paragraph */}
          <div className="mb-10">
            <h2 className="text-4xl sm:text-5xl font-extrabold border-l-4 border-yellow-400 pl-4 mb-6">
              THE SEMERU <br />
              CORE STORY
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              Alas Trail Run lahir dari kecintaan yang mendalam terhadap alam
              liar <b>Gunung Semeru</b>. Kami percaya bahwa berlari melintasi batas
              alam adalah cara terbaik untuk menemukan batas diri. Event ini
              didirikan sebagai jembatan yang menghubungkan komunitas
              pelari, konservasi, dan budaya lokal.
            </p>
          </div>

          {/* Misi & Visi ke dalam grid 2 kolom */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            
            {/* Misi */}
            <div className="bg-[#121212] p-6 rounded-xl shadow-md border border-gray-900">
              <h3 className="text-xl font-bold text-yellow-400 mb-2">MISI</h3>
              <p className="text-gray-300">
                Menyajikan jalur lari lintas alam berstandar internasional sambil
                mempromosikan pariwisata ekologis yang bertanggung jawab.
              </p>
            </div>

            {/* Visi */}
            <div className="bg-[#121212] p-6 rounded-xl shadow-md border border-gray-900">
              <h3 className="text-xl font-bold text-yellow-400 mb-2">VISI</h3>
              <p className="text-gray-300">
                Menjadi "event trail run" nomor satu di Asia Tenggara yang paling dicintai
                karena integritas dan keindahan alaminya.
              </p>
            </div>

          </div>
        </div>

        {/* Gambar */}
        <div className="rounded-xl overflow-hidden shadow-2xl">
          <img 
            src="https://placehold.co/800x500/1e293b/FFFFFF?text=Pelari+Jalur+Gunung"
            alt="Pelari jalur gunung Semeru"
            className="w-full h-auto object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default CoreStory;
