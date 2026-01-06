// import React from 'react'
// import {useState, useEffect} from 'react'
// import { SlidingData } from '../../../data/Slidingdata';
// import './SlidingBar.css'; 
// import American from '../../../assets/American.png';
// export default function SlidingBar(){
//    const[hoveredIndex,setHoveredIndex]=useState(null);
//    const[visibleCards,setVisibleCards]=useState({});

//   //  useEffect(() => {
//   //    const handleScroll = () => {
//   //      const cards = document.querySelectorAll('.sliding-card');
//   //      cards.forEach((card, index) => {
//   //        const rect = card.getBoundingClientRect();
//   //        const isVisible = rect.top < window.innerHeight * 0.75;
//   //        setVisibleCards(prev => ({
//   //          ...prev,
//   //          [index]: isVisible
//   //        }));
//   //      });
//   //    };

//   //    window.addEventListener('scroll', handleScroll);
//   //    handleScroll(); // Check on mount
//   //    return () => window.removeEventListener('scroll', handleScroll);
//   //  }, []);

//  return (
//     <div className="relative flex flex-col items-center w-full mx-auto py-10">
//       <div className="absolute left-1/2 top-0 h-full w-[4px] bg-green-500 -translate-x-1/2"></div>
//     {/* <div className=" absolute flex flex-row w-[790px] mt-[40px]  " >
//         <div className="w-[45%]">
//         <div className={`w-[400px] h-[500px] mt-[10px] slide-left     `}>
//         <h1> Web Developer</h1>
//         <p>A web developer is a creative problem-solver who builds and maintains websites and web applications.<br/> They write clean, efficient code using languages like HTML, CSS, and JavaScript, and often work with frameworks like React, Angular, or Vue. Beyond coding, they ensure websites are responsive, user-friendly, and optimized for performance</p>
//       </div>

//       <div className={`w-[400px] h-[500px] mt-[10px] slide-left `}>
//        <p> Machine Learning (ML) is a branch of artificial intelligence that enables computers to learn from data and make predictions or decisions without being explicitly programmed. ML engineers build models using algorithms like regression, classification, clustering, and deep learning to analyze patterns, recognize images, process language, and recommend solutions.</p>
//       </div>
//         </div>
  

//         <div className=" relative  w-[10px] h-[700px] bg-blue-600 flex justify-center  mx-auto">
//                <div className="rounded-full bg-green-500 w-[50px] h-[50px] absolute    "  >
// </div>
//         </div>

//  <div className="w-[45%]">
//            <div className={`w-[400px] h-[500px] mt-[250px] slide-right`}>
// <h1>Devopes</h1>
// <p>DevOps is a collaborative approach that bridges the gap between software development and IT operations. DevOps engineers focus on automating workflows, improving deployment pipelines, and ensuring continuous integration and continuous delivery (CI/CD). They work with tools like Docker, Kubernetes, Jenkins, and Git to streamline software delivery, improve scalability</p>
//         </div>
//         <div className={`w-[400px] h-[500px] mt-[20px] slide-right`}>
//             <h1>Blockchain</h1>
//             <p>Blockchain is a decentralized digital ledger technology that securely records transactions across a network of computers. Each block contains a set of transactions and is linked to the previous block, creating an immutable chain. Blockchain enables transparency, security, and trust without the need for a central authority.</p>
//         </div>
//  </div>

//     </div> */}
    

//     {
//       SlidingData.map((element,index)=>(
        
//         <div key={index} className={` flex w-[1080px] mb-10  ${index%2===0?"justify-start":"justify-end"}     ${hoveredIndex === index ? "hovered" : ""}`
//        } 
       
//        onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
            
//          >
      
          
//            <div     className={`sliding-card w-[400px] bg-gray-100 p-5 rounded-lg shadow-md   ${
//     index % 2 === 0 ? "slide-left" : "slide-right"
//   } ${visibleCards[index] ? "visible" : ""}`}>
//             <p className="font-bold text-green-600">{element.id}</p>
//             <h1 className="text-xl font-semibold">{element.title}</h1>
//             <p className="text-gray-700">{element.description}</p>
//           </div>
          
          
//         </div>

//       ))
//     }
//     </div>
//  )

// }


// import React, { useState, useEffect, useRef } from "react";
// import { SlidingData } from "../../../data/Slidingdata";
// import "./SlidingBar.css";

// export default function SlidingBar() {
//   const [visibleCards, setVisibleCards] = useState({});
//   const cardRefs = useRef([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const index = entry.target.dataset.index;
//           if (entry.isIntersecting) {
//             setVisibleCards((prev) => ({
//               ...prev,
//               [index]: true,
//             }));
//           }
//         });
//       },
//       {
//         threshold: 0.25,
//       }
//     );

//     cardRefs.current.forEach((card) => {
//       if (card) observer.observe(card);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="relative flex flex-col items-center w-full mx-auto py-16">
//       {/* Center line */}
//       <div className="absolute left-1/2 top-0 h-full w-[3px] bg-green-500/60 -translate-x-1/2" />

//       {SlidingData.map((element, index) => (
//         <div
//           key={index}
//           className={`flex w-[1080px] mb-16 ${
//             index % 2 === 0 ? "justify-start" : "justify-end"
//           }`}
//         >
//           <div
//             ref={(el) => (cardRefs.current[index] = el)}
//             data-index={index}
//             className={`
//               sliding-card w-[420px] bg-gray-100 p-6 rounded-lg shadow-md
//               ${index % 2 === 0 ? "from-left" : "from-right"}
//               ${visibleCards[index] ? "show" : ""}
//             `}
//           >
//             <p className="font-semibold text-green-600">{element.id}</p>
//             <h1 className="text-xl font-semibold mt-1">{element.title}</h1>
//             <p className="text-gray-700 mt-2 leading-relaxed">
//               {element.description}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }


import React, { useState, useEffect, useRef } from "react";
import { SlidingData } from "../../../data/Slidingdata";
import "./SlidingBar.css";

export default function SlidingBar() {
  const [visibleCards, setVisibleCards] = useState({});
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.dataset.index;
          if (entry.isIntersecting) {
            setVisibleCards((prev) => ({
              ...prev,
              [index]: true,
            }));
          }
        });
      },
      { threshold: 0.3 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full py-20 bg-black">
      {/* Timeline line */}
      <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-green-500/60 to-transparent -translate-x-1/2" />

      <div className="flex flex-col items-center gap-20">
        {SlidingData.map((element, index) => (
          <div
            key={index}
            className={`relative flex w-full max-w-6xl px-6 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* Timeline dot */}
            <span
              className={`
                absolute left-1/2 top-6 -translate-x-1/2
                w-4 h-4 rounded-full
                bg-black border-2 border-green-500
                transition-all duration-500
                ${visibleCards[index] ? "scale-100" : "scale-0"}
              `}
            />

            {/* Card */}
            <div
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              className={`
                sliding-card group relative
                w-[420px] p-6 rounded-xl
                backdrop-blur-md bg-white/5
                border border-white/10
                shadow-lg
                transition-all duration-500
                hover:-translate-y-2 hover:shadow-2xl
                ${index % 2 === 0 ? "from-left" : "from-right"}
                ${visibleCards[index] ? "show" : ""}
              `}
            >
              {/* Accent strip */}
              <span className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-green-400/60 to-transparent rounded-l-xl" />

              <p className="text-xs uppercase tracking-wider text-green-400">
                {element.id}
              </p>

              <h3 className="mt-2 text-lg font-semibold text-white">
                {element.title}
              </h3>

              <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                {element.description}
              </p>

              {/* Hover hint */}
              <span className="mt-4 inline-block text-xs text-gray-400 group-hover:text-green-400 transition">
                Explore →
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
