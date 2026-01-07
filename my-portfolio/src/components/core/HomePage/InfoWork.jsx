// import React, { useState } from "react";
// import { InfoWorkData } from "../../../data/InfoWorkData";

// export default function InfoWork() {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const handleCardClick = (index) => {
//     setActiveIndex(index);
//   };

//   const closeModal = () => {
//     setActiveIndex(null);
//   };

//   return (
//     <section className="w-full bg-black text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-10">
//       {/* Section Header */}
//       <div className="max-w-4xl mx-auto text-center">
//         <p className="text-xs uppercase tracking-[0.25em] text-blue-400 mb-3">
//           Featured Work
//         </p>
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
//           Bringing <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">Ideas</span> to Life
//         </h2>
//         <p className="mt-3 text-sm sm:text-base text-gray-300">
//           A curated selection of my projects showing clean UI, strong UX, and performant code in action.
//         </p>
//       </div>

//       {/* Cards Grid */}
//       <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//         {InfoWorkData.map((item, index) => (
//           <button
//             key={index}
//             onClick={() => handleCardClick(index)}
//             className="group relative text-left bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-md shadow-lg hover:-translate-y-2 hover:shadow-2xl hover:border-blue-400/60 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/70"
//           >
//             {/* Image / Thumbnail */}
//             <div className="relative overflow-hidden rounded-xl h-40 sm:h-44 md:h-52 mb-4">
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
//               />

//               {/* Gradient overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

//               {/* Play Badge */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 border border-white/30 flex items-center justify-center backdrop-blur group-hover:bg-blue-500/80 group-hover:border-blue-300 transition-colors duration-300">
//                   <span className="ml-0.5 border-l-[7px] border-l-white border-y-[5px] border-y-transparent" />
//                 </div>
//               </div>

//               {/* Tag / Chip */}
//               {item.tag && (
//                 <span className="absolute top-3 left-3 text-xs sm:text-[11px] bg-black/60 px-2 py-1 rounded-full border border-white/20">
//                   {item.tag}
//                 </span>
//               )}
//             </div>

//             {/* Content */}
//             <h3 className="text-lg sm:text-xl font-semibold mb-1 line-clamp-2">
//               {item.title}
//             </h3>
//             <p className="text-xs sm:text-sm text-gray-300 line-clamp-3 mb-3">
//               {item.description}
//             </p>

//             <div className="flex items-center justify-between text-xs sm:text-sm text-blue-300">
//               <span className="flex items-center gap-1">
//                 <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
//                 View demo video
//               </span>
//               <span className="text-gray-400 group-hover:text-blue-200 transition-colors">
//                 Learn more →
//               </span>
//             </div>
//           </button>
//         ))}
//       </div>

//       {/* Video Modal */}
//       {activeIndex !== null && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-3 sm:px-6">
//           {/* Close area (background click) */}
//           <div
//             className="absolute inset-0"
//             onClick={closeModal}
//           />

//           {/* Modal container */}
//           <div className="relative w-full max-w-3xl bg-black/70 border border-white/15 rounded-2xl p-3 sm:p-4 md:p-5 shadow-2xl">
//             {/* Close Button */}
//             <button
//               onClick={closeModal}
//               className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold shadow-lg hover:bg-gray-200 transition-colors"
//             >
//               ✕
//             </button>

//             {/* Title */}
//             <h3 className="mb-3 sm:mb-4 text-base sm:text-lg md:text-xl font-semibold text-white px-1">
//               {InfoWorkData[activeIndex].title}
//             </h3>

//             {/* Video Wrapper (responsive) */}
//             <div className="relative w-full pb-[56.25%] rounded-xl overflow-hidden border border-white/10 bg-black">
//               <video
//                 src={InfoWorkData[activeIndex].video}
//                 autoPlay
//                 controls
//                 className="absolute inset-0 w-full h-full object-contain"
//               />
//             </div>

//             {/* Description below video (optional) */}
//             <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-300 px-1">
//               {InfoWorkData[activeIndex].description}
//             </p>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }


// import React from "react";
// import { InfoWorkData } from "../../../data/InfoWorkData";

// export default function InfoWork() {
//   return (
//     <section className="w-full bg-black text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-10">
      
//       {/* Section Header */}
//       <div className="max-w-4xl mx-auto text-center">
//         <p className="text-xs uppercase tracking-[0.25em] text-blue-400 mb-3">
//           Featured Work
//         </p>

//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
//           Bringing{" "}
//           <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
//             Ideas
//           </span>{" "}
//           to Life
//         </h2>

//         <p className="mt-3 text-sm sm:text-base text-gray-300">
//           A curated selection of my projects demonstrating clean UI,
//           thoughtful UX, and scalable full-stack development.
//         </p>
//       </div>

//       {/* Cards Grid */}
//       <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//         {InfoWorkData.map((item, index) => (
//           <div
//             key={index}
//             className="group relative bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-md shadow-lg
//             hover:-translate-y-2 hover:shadow-2xl hover:border-blue-400/60 transition-all duration-300"
//           >
//             {/* Image */}
//             <div className="relative overflow-hidden rounded-xl h-40 sm:h-44 md:h-52 mb-4">
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
//               />

//               {/* Gradient Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80" />

//               {/* Tag */}
//               {item.tag && (
//                 <span className="absolute top-3 left-3 text-xs bg-black/60 px-2 py-1 rounded-full border border-white/20">
//                   {item.tag}
//                 </span>
//               )}
//             </div>

//             {/* Content */}
//             <h3 className="text-lg sm:text-xl font-semibold mb-2 line-clamp-2">
//               {item.title}
//             </h3>

//             <p className="text-xs sm:text-sm text-gray-300 line-clamp-3 mb-4">
//               {item.description}
//             </p>

//             {/* Links */}
//             <div className="flex items-center justify-between text-xs sm:text-sm">
//               <a
//                 href={item.live}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-green-400 hover:text-green-300 transition-colors"
//               >
//                 Live Demo ↗
//               </a>

//               <a
//                 href={item.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-400 hover:text-blue-300 transition-colors"
//               >
//                 GitHub →
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import React, { useEffect, useRef, useState } from "react";
import './Infowork.css';
import { InfoWorkData } from "../../../data/InfoWorkData";

export default function InfoWork() {
  const [activeIndex, setActiveIndex] = useState(null);
  const total = InfoWorkData.length;

  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    // Header animation
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("info-header-visible");
          headerObserver.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    // Cards animation
    const cardsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll(".info-card");
          cards.forEach((card, i) => {
            setTimeout(() => {
              card.classList.add("info-card-visible");
            }, i * 120);
          });
          cardsObserver.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (headerRef.current) headerObserver.observe(headerRef.current);
    if (cardsRef.current) cardsObserver.observe(cardsRef.current);

    return () => {
      headerObserver.disconnect();
      cardsObserver.disconnect();
    };
  }, []);

  return (
    <section className="w-full bg-black text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-10 pt-[30px]">

      {/* ================= Header ================= */}
      <div
        ref={headerRef}
        className="info-header max-w-4xl mx-auto text-center"
      >
        <p className="text-xs uppercase tracking-[0.25em] text-blue-400 mb-3">
          Featured Work
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Bringing{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
            Ideas
          </span>{" "}
          to Life
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-300">
          A curated selection of my projects showing clean UI, strong UX, and
          performant code in action.
        </p>
      </div>

      {/* ================= Cards Grid ================= */}
      <div
        ref={cardsRef}
        className="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-10
        "
      >
        {InfoWorkData.map((item, index) => {
          const isSecondLast = total % 3 === 2 && index === total - 2;
          const isLast = total % 3 === 2 && index === total - 1;

          return (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`info-card group relative text-left bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-md shadow-lg
              hover:-translate-y-2 hover:shadow-2xl hover:border-blue-400/60 transition-all duration-300
              ${
                isSecondLast
                  ? "lg:col-span-2 lg:col-start-2"
                  : isLast
                  ? "lg:col-span-2 lg:col-start-4"
                  : "lg:col-span-2"
              }`}
            >
              <div className="relative overflow-hidden rounded-xl h-40 sm:h-44 md:h-52 mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80" />
                {item.tag && (
                  <span className="absolute top-3 left-3 text-xs bg-black/60 px-2 py-1 rounded-full border border-white/20">
                    {item.tag}
                  </span>
                )}
              </div>

              <h3 className="text-lg sm:text-xl font-semibold mb-1 line-clamp-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 line-clamp-3 mb-3">
                {item.description}
              </p>

              <div className="flex items-center justify-between text-xs sm:text-sm text-blue-300">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  View project links
                </span>
                <span className="text-gray-400 group-hover:text-blue-200">
                  Learn more →
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* ================= Modal (unchanged) ================= */}
      {activeIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
          <div
            className="absolute inset-0"
            onClick={() => setActiveIndex(null)}
          />
          <div className="relative w-full max-w-3xl bg-black/70 border border-white/15 rounded-2xl p-5 shadow-2xl">
            <button
              onClick={() => setActiveIndex(null)}
              className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-white text-black font-bold hover:bg-gray-200"
            >
              ✕
            </button>

            <h3 className="mb-3 text-lg font-semibold">
              {InfoWorkData[activeIndex].title}
            </h3>
            <p className="text-sm text-gray-300 mb-6">
              {InfoWorkData[activeIndex].description}
            </p>

            <div className="flex gap-4">
              {InfoWorkData[activeIndex].live && (
                <a
                  href={InfoWorkData[activeIndex].live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-lg bg-green-500 text-black font-medium hover:bg-green-400"
                >
                  Live Demo ↗
                </a>
              )}
              {InfoWorkData[activeIndex].github && (
                <a
                  href={InfoWorkData[activeIndex].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-lg border border-white/30 hover:bg-white/10"
                >
                  GitHub →
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
