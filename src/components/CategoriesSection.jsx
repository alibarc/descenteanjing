// --- COMPONENT: CATEGORIES SECTION ---
// File: /components/CategoriesSection.jsx
import { ASSETS } from "../assets/assets";
import CategoryCard from "./CategoryCard";

const CategoriesSection = () => {
  const categories = [
    { km: "8", img: ASSETS.category8k, elevation: "501 +M", cutOff: "4 Hours" },
    { km: "16", img: ASSETS.category16k, elevation: "801 +M", cutOff: "8 Hours" },
    { km: "32", img: ASSETS.category32k, elevation: "801 +M", cutOff: "14 Hours" },
    { km: "50", img: ASSETS.category50k, elevation: "501 +M", cutOff: "18 Hours" },
  ];

  return (
    <section className="bg-white py-20 relative">
      <div className="container mx-auto px-4">
        {/* Header Box Title */}
        <div className="flex justify-center -mt-28 mb-16 relative z-10">
           <div className="bg-white px-12 py-4 shadow-xl border-t-4 border-black">
             <h2 className="text-3xl font-black uppercase tracking-widest text-black">Categories</h2>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {categories.map((cat, idx) => (
            <CategoryCard key={idx} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;