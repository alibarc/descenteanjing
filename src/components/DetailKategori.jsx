// DetailKategori.jsx
import React from "react";
import {
  Pencil,
  Flag,
  Mountain,
  Clock,
  Cross,
  Trophy,
  Zap,
  Users,
} from "lucide-react";

// 🔥 IMPORT GAMBAR LOKAL
import bannerImage from "../assets/hero.jpg";
import runnerImg from "../assets/oranglari2.jpg";
import routeMap from "../assets/route-map.jpg"; // <--- PETA RUTE

const raceData = {
  title: "ATR 50 KM",
  tagline: "Solitude",

  summaryCards: [
    { Icon: Pencil, label: "REG FEE", value: "Local: 1.900.000 | Foreign: 2.000.000" },
    { Icon: Flag, label: "START", value: "Friday, 09 May 2025 | 04:00 PM" },
    { Icon: Mountain, label: "ELEVATION GAIN", value: "7.244 m" },
    { Icon: Clock, label: "CUT OFF TIME", value: "34 Hours" },
    { Icon: Cross, label: "WS & DROP BAG", value: "11 WS & Drop Bag at WS6 / KM60" },
    { Icon: Trophy, label: "AWARD & PRIZE", value: "Open, Master 50+" },
  ],

  details: [
    { label: "Distance", value: "106.20 KM", Icon: Zap },
    { label: "Elevation Gain", value: "7.244 m", Icon: Mountain },
    { label: "Cut-Off Time", value: "34 Hours", Icon: Clock },
    { label: "Age Range", value: "18 - 50+", Icon: Users },
    { label: "Award & Prize", value: "Open, Master 50+", Icon: Trophy },
  ],

  copData: [
    "COP 1 at WS4 / KM40 : 9 Hours",
    "COP 2 at WS6 / KM60 : 16 Hours",
    "COP 3 at WS8 / KM80 : 25 Hours",
  ],

  qualificationData: [
    "100K ultra road race",
    "BTRU 55K ultra trail",
    "60K - 80K ultra trail race",
  ],

  bannerImageUrl: bannerImage,
  runnerIllustrationUrl: runnerImg,
};

const SummaryCard = ({ Icon, label, value }) => (
  <div className="flex flex-col items-center justify-center p-6 bg-[#000] rounded-xl border border-gray-800 hover:border-[#DFFF00] transition duration-300 shadow-md">
    <Icon className="w-10 h-10 text-[#DFFF00] mb-3" />
    <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1 text-center">
      {label}
    </p>
    <p className="text-white text-lg font-bold text-center">{value}</p>
  </div>
);

const DetailKategori = () => {
  return (
    <div className="bg-[#000000] text-white min-h-screen font-sans">

      {/* ================= BANNER ================= */}
      <header
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${raceData.bannerImageUrl})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative text-center z-10 px-4">
          <h1 className="text-5xl sm:text-7xl font-extrabold mb-4">
            {raceData.title}
          </h1>
          <p className="text-xl sm:text-2xl italic text-gray-300">
            {raceData.tagline}
          </p>
        </div>
      </header>

      {/* ================= CONTENT ================= */}
      <main className="px-4 sm:px-8 lg:px-16 py-20">

        {/* Summary Icons */}
        <section className="max-w-7xl mx-auto -mt-24 mb-20 relative z-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {raceData.summaryCards.map((c, i) => (
              <SummaryCard key={i} {...c} />
            ))}
          </div>
        </section>

        {/* ================= DETAILS SECTION ================= */}
        <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-10">

            {/* Runner Illustration */}
            <div className="relative overflow-hidden rounded-xl border border-gray-800 shadow-xl bg-[#000]">
              <img
                src={raceData.runnerIllustrationUrl}
                alt="Runner Illustration"
                className="object-cover w-full"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h3 className="text-xl font-bold">100K ROUTE DETAILS</h3>
                <p className="text-[#DFFF00] text-sm">ALASTRAILRUN.COM</p>
              </div>
            </div>

            {/* Race Summary */}
            <div className="bg-[#000] p-6 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold text-[#DFFF00] mb-4 border-b border-gray-800 pb-2">
                RACE SUMMARY
              </h3>

              {raceData.details.map((item, i) => (
                <div key={i} className="flex items-center gap-3 mb-3 text-lg">
                  <item.Icon className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300 font-semibold">
                    {item.label}:
                  </span>
                  <span className="text-white font-bold">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="bg-[#000] p-8 rounded-xl border border-gray-800 shadow-xl">
            <div className="mb-10">
              <h3 className="text-3xl font-bold text-[#DFFF00] mb-4 border-b border-[#DFFF00] pb-2 inline-block">
                CUT-OFF TIME DETAILS
              </h3>
              <ul className="space-y-3 text-lg text-gray-300">
                {raceData.copData.map((c, i) => (
                  <li key={i} className="flex gap-3">
                    <Clock className="w-5 h-5 text-[#DFFF00] mt-1" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#DFFF00] mb-4 border-b border-[#DFFF00] pb-2 inline-block">
                QUALIFICATIONS
              </h3>

              <p className="text-gray-300 mb-4">
                Participants must have completed at least one of the following races:
              </p>

              <ul className="list-disc list-inside space-y-2 text-gray-200">
                {raceData.qualificationData.map((q, i) => (
                  <li key={i} className="marker:text-[#DFFF00]">{q}</li>
                ))}
              </ul>

              <p className="text-sm text-gray-500 italic mt-6">
                *Qualification is mandatory and will be verified.
              </p>
            </div>
          </div>
        </section>

        {/* ================= ROUTE MAP SECTION ================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 mt-20">

          {/* Tabs */}
          <div className="flex gap-8 font-semibold text-lg border-b border-gray-800 mb-6">
            <span className="text-[#DFFF00] border-b-2 border-[#DFFF00] pb-2 cursor-pointer">
              Course Map Details
            </span>
            <span className="text-gray-400 pb-2 cursor-pointer hover:text-white">
              Event Rundown
            </span>
            <span className="text-gray-400 pb-2 cursor-pointer hover:text-white">
              Mandatory Gears
            </span>
          </div>

          {/* Route Map */}
          <div className="bg-[#000] rounded-xl overflow-hidden shadow-xl border border-gray-800">
            <img
              src={routeMap}
              alt="Route Map 100KM"
              className="w-full h-auto object-cover"
            />
          </div>

        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="text-center text-gray-400 text-sm border-t border-gray-800 py-6">
        ALAS TRAIL RUN — CATEGORY 100KM
      </footer>
    </div>
  );
};

export default DetailKategori;
