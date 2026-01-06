// // import React from 'react'

// // export default function Projects() {
// //   return (
// //     <div>
// //       <h1>this is project page</h1>
// //     </div>
// //   )
// // }


// // import React from "react";
// // import pc from "../assets/pc.png";
// // import './Projects.css'
// // export default function Hero() {
// //   return (
// //     <section className="relative min-h-screen bg-[#050510] overflow-hidden">
      
// //       {/* Background waves */}
// //       <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.15),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(139,92,246,0.12),transparent_40%)]" />

// //       {/* Content */}
// //       <div className="relative z-10 max-w-6xl mx-auto px-6 pt-36 grid md:grid-cols-2 items-center gap-12">
        
// //         {/* Text */}
// //         <div>
// //           <div className="flex items-center gap-4 mb-6">
// //             <span className="h-12 w-[3px] bg-purple-500" />
// //             <h1 className="text-5xl lg:text-6xl font-semibold leading-tight">
// //               Hi, I'm <span className="text-purple-500">Ayush</span>
// //             </h1>
// //           </div>

// //           <p className="text-lg text-white/70 max-w-xl">
// //             Full-Stack Developer focused on building scalable, secure,
// //             and well-designed web applications using MERN and modern tools.
// //           </p>
// //         </div>

// //         {/* Fake 3D PC */}
// //         <div className="relative">
// //           <img
// //             src={pc}
// //             alt="3D PC setup"
// //             className="hero-pc"
// //           />
// //         </div>

// //       </div>

// //       {/* Scroll hint */}
// //       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-60">
// //         <div className="h-10 w-6 border border-white/40 rounded-full flex justify-center">
// //           <div className="h-2 w-2 bg-white rounded-full mt-2 animate-bounce" />
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// import React, { useRef } from "react";
// import pc from "../assets/pc.png";

// export default function Hero() {
//   const pcRef = useRef(null);

//   const handleMove = (clientX, clientY) => {
//     const card = pcRef.current;
//     if (!card) return;

//     const rect = card.getBoundingClientRect();
//     const x = clientX - rect.left;
//     const y = clientY - rect.top;

//     const centerX = rect.width / 2;
//     const centerY = rect.height / 2;

//     const rotateY = ((x - centerX) / centerX) * 20; // left-right
//     const rotateX = -((y - centerY) / centerY) * 12; // up-down

//     card.style.transform = `
//       perspective(1200px)
//       rotateY(${rotateY}deg)
//       rotateX(${rotateX}deg)
//       translateY(6px)
//     `;
//   };

//   const resetTransform = () => {
//     const card = pcRef.current;
//     if (!card) return;

//     card.style.transform = `
//       perspective(1200px)
//       rotateY(0deg)
//       rotateX(0deg)
//       translateY(0)
//     `;
//   };

//   return (
//     <section className="relative min-h-screen bg-[#050510] overflow-hidden">
      
//       {/* Background */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.15),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(139,92,246,0.12),transparent_40%)]" />

//       <div className="relative z-10 max-w-6xl mx-auto px-6 pt-36 grid md:grid-cols-2 items-center gap-12">
        
//         {/* Text */}
//         <div>
//           <div className="flex items-center gap-4 mb-6">
//             <span className="h-12 w-[3px] bg-purple-500" />
//             <h1 className="text-5xl lg:text-6xl font-semibold">
//               Hi, I'm <span className="text-purple-500">Ayush</span>
//             </h1>
//           </div>

//           <p className="text-lg text-white/70 max-w-xl">
//             Full-Stack Developer focused on building scalable and
//             well-structured web applications.
//           </p>
//         </div>

//         {/* Interactive 3D PC */}
//         <div
//           className="relative"
//           onMouseMove={(e) => handleMove(e.clientX, e.clientY)}
//           onMouseLeave={resetTransform}
//           onTouchMove={(e) =>
//             handleMove(
//               e.touches[0].clientX,
//               e.touches[0].clientY
//             )
//           }
//           onTouchEnd={resetTransform}
//         >
//           <img
//             ref={pcRef}
//             src={pc}
//             alt="3D PC setup"
//             className="hero-pc"
//           />
//         </div>

//       </div>
//     </section>
//   );
// }


// import React, { useRef, useState } from "react";
// import pc from "../assets/pc.png";

// export default function Hero() {
//   const pcRef = useRef(null);
//   const startX = useRef(0);
//   const currentRotation = useRef(0);
//   const [dragging, setDragging] = useState(false);

//   const startDrag = (x) => {
//     setDragging(true);
//     startX.current = x;
//   };

//   const onDrag = (x) => {
//     if (!dragging) return;

//     const deltaX = x - startX.current;
//     let rotation = currentRotation.current + deltaX * 0.15;

//     // Clamp rotation (IMPORTANT – keeps it professional)
//     rotation = Math.max(-35, Math.min(35, rotation));

//     pcRef.current.style.transform = `
//       perspective(1200px)
//       rotateY(${rotation}deg)
//       translateY(6px)
//     `;
//   };

//   const endDrag = () => {
//     setDragging(false);
//     currentRotation.current = parseFloat(
//       pcRef.current.style.transform.match(/rotateY\(([-\d.]+)deg\)/)?.[1] || 0
//     );
//   };

//   return (
//     <section className="relative min-h-screen bg-[#050510] overflow-hidden">
      
//       <div className="relative z-10 max-w-6xl mx-auto px-6 pt-36 grid md:grid-cols-2 items-center gap-12">
        
//         {/* Text */}
//         <div>
//           <h1 className="text-5xl font-semibold text-white">
//             Hi, I'm <span className="text-purple-500">Ayush</span>
//           </h1>
//           <p className="mt-6 text-white/70 max-w-xl">
//             Full-Stack Developer building scalable web applications.
//           </p>
//         </div>

//         {/* Rotating PC */}
//         <div
//           className="relative cursor-grab active:cursor-grabbing"
//           onMouseDown={(e) => startDrag(e.clientX)}
//           onMouseMove={(e) => onDrag(e.clientX)}
//           onMouseUp={endDrag}
//           onMouseLeave={endDrag}
//           onTouchStart={(e) => startDrag(e.touches[0].clientX)}
//           onTouchMove={(e) => onDrag(e.touches[0].clientX)}
//           onTouchEnd={endDrag}
//         >
//           <img
//             ref={pcRef}
//             src={pc}
//             alt="3D PC"
//             className="hero-pc"
//             draggable={false}
//           />
//         </div>

//       </div>
//     </section>
//   );
// }

// import React, { useRef, useState } from "react";
// import pc from "../assets/pc.png";
// import "./Projects.css";

// export default function Hero() {
//   const pcRef = useRef(null);
//   const startX = useRef(0);
//   const rotation = useRef(0);
//   const [dragging, setDragging] = useState(false);

//   const startDrag = (x) => {
//     setDragging(true);
//     startX.current = x;
//   };

//   const onDrag = (x) => {
//     if (!dragging || !pcRef.current) return;

//     const delta = x - startX.current;
//     startX.current = x; // 🔥 FIX: update reference

//     let nextRotation = rotation.current + delta * 0.2;

//     // clamp rotation
//     nextRotation = Math.max(-40, Math.min(40, nextRotation));
//     rotation.current = nextRotation;

//     pcRef.current.style.transform = `
//       perspective(1400px)
//       rotateY(${nextRotation}deg)
//       translateY(8px)
//     `;
//   };

//   const endDrag = () => {
//     setDragging(false);
//   };

//   return (
//     <section className="hero">
//       {/* Text */}
//       <div className="hero-text">
//         <span className="line" />
//         <h1>
//           Hi, I’m <span>Ayush</span>
//         </h1>
//         <p>
//           Full-Stack Developer building scalable and reliable web applications.
//         </p>
//       </div>

//       {/* PC Setup */}
//       <div
//         className="pc-wrapper"
//         onMouseDown={(e) => startDrag(e.clientX)}
//         onMouseMove={(e) => onDrag(e.clientX)}
//         onMouseUp={endDrag}
//         onMouseLeave={endDrag}
//         onTouchStart={(e) => startDrag(e.touches[0].clientX)}
//         onTouchMove={(e) => onDrag(e.touches[0].clientX)}
//         onTouchEnd={endDrag}
//       >
//         <img
//           ref={pcRef}
//           src={pc}
//           alt="PC Setup"
//           className="pc-image"
//           draggable={false}
//         />
//       </div>

//       {/* Scroll hint */}
//       <div className="scroll-indicator">
//         <span />
//       </div>
//     </section>
//   );
// }


// import { useEffect, useState } from "react";

// const books = [
//   "Book 1",
//   "Book 2",
//   "Book 3",
//   "Book 4",
//   "Book 5",
//   "Book 6",
//   "Book 7",
// ];

// const ITEM_WIDTH = 220; // width + margin
// const CENTER_INDEX = 2; // visible center position

// export default function CenterActiveCarousel() {
//   const [offset, setOffset] = useState(0);
//   const [active, setActive] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setOffset((prev) => prev + ITEM_WIDTH);
//       setActive((prev) => (prev + 1) % books.length);
//     }, 3000); // includes pause + scale

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
//       <div className="w-full max-w-6xl overflow-hidden">
//         <div
//           className="flex transition-transform duration-1000 ease-in-out"
//           style={{ transform: `translateX(-${offset}px)` }}
//         >
//           {[...books, ...books].map((book, index) => {
//             const logicalIndex = index % books.length;
//             const isCenter = logicalIndex === active;

//             return (
//               <div
//                 key={index}
//                 className={`flex-shrink-0 w-48 h-64 mx-4 
//                 flex items-center justify-center 
//                 rounded-xl text-white text-xl font-semibold
//                 transition-all duration-500
//                 ${
//                   isCenter
//                     ? "scale-110 w-60 h-70 bg-green-500"
//                     : "scale-100 bg-gray-700 opacity-60"
//                 }`}
//               >
//                 {book}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useEffect, useRef, useState } from "react";
// import image1 from '../assets/image1.png'
// import image2 from "../assets/image2.png";
// import image3 from "../assets/image3.png";
// import image4 from "../assets/image4.png";
// import image5 from "../assets/image5.png";
// const books = [
//   { id: 1, img:image1},
//    { id: 2, img:image2},
//     { id: 3, img:image3},
//      { id: 4, img:image4},
//       { id: 5, img:image5},
// ];

// const ITEM_WIDTH = 224;
// const GAP = 32;
// const TOTAL_WIDTH = ITEM_WIDTH + GAP;

// export default function CenterActiveCarousel() {
//   const [index, setIndex] = useState(0);
//   const containerRef = useRef(null);
//   const [containerCenter, setContainerCenter] = useState(0);

//   useEffect(() => {
//     if (containerRef.current) {
//       setContainerCenter(containerRef.current.offsetWidth / 2);
//     }
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => prev + 1);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   const data = [...books, ...books, ...books];

//   return (
//     <div className="h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
//       <div ref={containerRef} className="relative w-full max-w-6xl overflow-hidden">
//         <div
//           className="flex items-center transition-transform duration-700 ease-in-out"
//           style={{
//             transform: `translateX(-${index * TOTAL_WIDTH}px)`,
//           }}
//         >
//           {data.map((book, i) => {
//             const itemCenter =
//               i * TOTAL_WIDTH - index * TOTAL_WIDTH + TOTAL_WIDTH / 2;

//             const isCenter =
//               Math.abs(itemCenter - containerCenter) < TOTAL_WIDTH / 2;

//             return (
//               <div
//                 key={i}
//                 className={`
//                   flex-shrink-0 mx-4
//                   rounded-xl overflow-hidden
//                   transition-all duration-50
//                   ${
//                     isCenter
//                       ? "w-64 h-80 z-20 shadow-2xl"
//                       : "w-56 h-64 opacity-60"
//                   }
//                 `}
//               >
//                 <img
//                   src={book.img}
//                   alt={`Book ${book.id}`}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }



import React from 'react'
import CuratedWork from '../components/core/HomePage/CuratedWork'

import InfoWork from '../components/core/HomePage/InfoWork'
export default function Projects() {
  return (
    <div>
      <InfoWork/>
    </div>
  )
}
