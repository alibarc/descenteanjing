// Contact.jsx
import React from "react";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

// Komponen Card
const ContactCard = ({ Icon, title, detail }) => (
  <div className="bg-[#121212] p-8 rounded-xl text-center border border-gray-800 transition duration-300 ease-in-out hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-500/10">
    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-yellow-500/30">
      <Icon className="w-8 h-8 text-black" />
    </div>
    
    <h3 className="text-lg font-semibold uppercase tracking-wider text-gray-300 mb-1">
      {title}
    </h3>
    <p className="text-yellow-400 text-xl font-bold break-words">{detail}</p>
  </div>
);

const Contact = () => {
  const contacts = [
    { icon: Mail, title: "EMAIL OFFICIAL", detail: "info@alastrailrun.com" },
    { icon: Phone, title: "HOTLINE SERVICE", detail: "(+62) 877-0476-4696" },
    { icon: MapPin, title: "SEKRETARIAT", detail: "Malang, Jawa Timur, ID" },
  ];

  return (
    <section className="max-w-6xl mx-auto text-center">
      <header className="mb-16">
        <p className="text-gray-400 uppercase tracking-widest text-sm mb-2">
          PUNYA PERTANYAAN?
        </p>
        <h2 className="text-5xl sm:text-6xl font-extrabold text-yellow-400">
          HUBUNGI KAMI
        </h2>
      </header>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {contacts.map((c, i) => (
          <ContactCard key={i} Icon={c.icon} title={c.title} detail={c.detail} />
        ))}
      </div>

      {/* Instagram Button */}
      <div className="flex justify-center">
        <a 
          href="https://instagram.com/alastrailrun"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-yellow-400 text-black py-4 px-10 rounded-full font-bold uppercase tracking-wider text-lg transition duration-300 hover:bg-yellow-300 shadow-2xl shadow-yellow-500/50 transform hover:scale-105"
        >
          <Instagram className="w-6 h-6 mr-2" />
          IKUTI KAMI DI INSTAGRAM
        </a>
      </div>
    </section>
  );
};

export default Contact;
