// import React from 'react';
// import Homepc from "../assets/Homepc.png"; 
// import LanguageCutting from '../components/core/HomePage/LanguageCutting';
// import CuratedWork from '../components/core/HomePage/CuratedWork';
// import bgimage from '../assets/bgimage.png';
// import InfoWork from '../components/core/HomePage/InfoWork';
// import SlidingBar from '../components/core/HomePage/SlidingBar';
// import Footer from '../components/Footer';
// import About from './Aboutus';

// export default function Home() {
//   return (
//     <div
//       className="flex flex-col  w-screen min-h-screen bg-black mt-[50px] pt-[80px] sm:pt-[100px]"
//       style={{
//         backgroundImage: `url(${bgimage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* HERO SECTION */}
//       <div className="flex  flex-col-reverse lg:flex-row justify-center items-center  gap-8 lg:gap-[100px] px-4 sm:px-8">
//         {/* TEXT */}
//         <div className="text-white w-full lg:w-1/2 pl-[10%]">
//           <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-[70px] leading-tight">
//             Full Stack Developer
//           </h1>
//           <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-[25px] lg:pl-[10px] leading-relaxed">
//             A creative Full-Stack Developer passionate about building <br className="hidden md:block" />
//             powerful digital experiences.
//             <br className="hidden md:block" />
//             I love blending technology, design, and problem-solving <br className="hidden md:block" />
//             to craft solutions that leave a lasting impact.
//           </p>
//         </div>

//         {/* IMAGE */}
//         <div className="w-full lg:w-1/2 flex justify-center items-center pr-[10%]">
//           <img
//             src={Homepc}
//             alt="Home pc"
//             className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] object-contain"
//           />
//         </div>
//       </div>

//       {/* BOTTOM CURVE (HERO DECORATION) */}
//       <div
//         className="relative mt-10 h-[60px] sm:h-[80px] lg:h-[100px] bg-black w-full"
//         style={{
//           clipPath: "ellipse(75% 100% at 50% 100%)",
//         }}
//       />

//       {/* LANGUAGE CUTTING */}
//       <div className="bg-black">
//         <LanguageCutting />
//       </div>

//       {/* CURATED WORK */}
//       <div className="bg-black mt-[-40px] sm:mt-[-60px]">
//         <CuratedWork />
//       </div>

//       {/* INFO WORK */}
//       <div className="bg-black mt-[-40px] sm:mt-[-60px]">
//         <InfoWork />
//       </div>

//       {/* SLIDING BAR */}
//       <SlidingBar />

//       {/* ABOUT SECTION */}
//       <About />

//       {/* FOOTER */}
//       <Footer />
//     </div>
//   );
// }


// import React from "react";
// import Homepc from "../assets/Homepc.png";
// import LanguageCutting from "../components/core/HomePage/LanguageCutting";
// import CuratedWork from "../components/core/HomePage/CuratedWork";
// import InfoWork from "../components/core/HomePage/InfoWork";
// import SlidingBar from "../components/core/HomePage/SlidingBar";
// import Footer from "../components/Footer";
// import About from "./Aboutus";
// import Contact from "./Contactus";
// import { toast } from "react-hot-toast";
// import {Link} from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import Projects from "./Projects";
// export default function Home() {

//   const navigate = useNavigate();
 
//    function contacthandler() {
//     toast.success("Contact Me at:");
// navigate("/contactus");

//   }
//   // bg-[#0f172a]
//   return (
//     <main className="min-h-screen w-screen bg-[#010714] mt-[-200px] text-slate-200">
      
//       {/* ================= HERO ================= */}
//       <section className="max-w-7xl mx-auto px-6 md:px-10 pt-32 ">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* LEFT: TEXT */}
//           <div className="space-y-6">
//             <p className="text-sm uppercase tracking-widest text-slate-400">
//               Full-Stack Engineer
//             </p>

//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-white max-w-2xl">
//               I design and engineer production-ready web applications.
//             </h1>

//             <p className="text-slate-400 max-w-xl leading-relaxed">
//               I focus on building scalable systems with clean architecture,
//               thoughtful user experience, and long-term maintainability.
//             </p>

//             <div className="flex gap-4 pt-4">
//               <a
//                 href="#projects"
//                 className="
//                   px-6 py-3 rounded-md
//                   bg-white text-black text-sm font-medium
//                   hover:bg-gray-200 transition
//                 "
//               >
//                 View Work
//               </a>

//               <button onClick={contacthandler}
               
//                 className="
//                   px-6 py-3 rounded-md
//                   border border-white/20 text-sm
//                   hover:border-white/40 transition
//                 "
//               >
//                 Contact
//               </button>
//             </div>
//           </div>

//           {/* RIGHT: IMAGE */}
//           <div className="flex justify-center lg:justify-end">
//             {/* <img
//               src={Homepc}
//               alt="Developer workspace"
//               className="
//                 w-[300px] sm:w-[380px] md:w-[440px] lg:w-[520px]
//                 object-contain
//                 transition-transform duration-500
//                 hover:-translate-y-2
//               "
//             /> */}
//             <LanguageCutting />
//           </div>
//         </div>
//       </section>


// {/* ================= ABOUT ================= */}
//       <section className="bg-[#010714] mt-[-100px]" id="About">
//         <About />
//       </section>


 
//  <SlidingBar />


//      {/* ================= SECTIONS ================= */}
//       <section className="space-y-32 bg-[#010714]">
        
        
//         {/* <InfoWork /> */}
//       </section>

      

// <div id="projects">
//   <Projects/>
// </div>
 
    

//       {/* ================= SLIDER =================
//       <SlidingBar /> */}

     
//       {/* ================= FOOTER ================= */}
//       <Footer />
//     </main>
//   );
// }


import React from "react";
import LanguageCutting from "../components/core/HomePage/LanguageCutting";
import CuratedWork from "../components/core/HomePage/CuratedWork";
import InfoWork from "../components/core/HomePage/InfoWork";
import SlidingBar from "../components/core/HomePage/SlidingBar";
import Footer from "../components/Footer";
import About from "./Aboutus";
import Contact from "./Contactus";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Projects from "./Projects";

export default function Home() {
  const navigate = useNavigate();

  function contacthandler() {
    toast.success("Contact Me at:");
    navigate("/contactus");
  }

  return (
    <main className="min-h-screen w-full bg-[#010714] text-slate-200 overflow-x-hidden pt-[-100px]">
      
      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pt-[100px] lg:mt-[160px] ">
        <div className="grid lg:grid-cols-2 gap-14 items-center ">

          {/* LEFT */}
          <div className="space-y-6 text-center lg:text-left">
            <p className="text-xs uppercase tracking-widest text-slate-400">
              Full-Stack Engineer
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white">
              I design and engineer production-ready web applications.
            </h1>

            <p className="text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed text-sm sm:text-base">
              I focus on building scalable systems with clean architecture,
              thoughtful user experience, and long-term maintainability.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-md bg-white text-black text-sm font-medium hover:bg-gray-200 transition"
              >
                View Work
              </a>

              <button
                onClick={contacthandler}
                className="px-6 py-3 rounded-md border border-white/20 text-sm hover:border-white/40 transition"
              >
                Contact
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center lg:justify-end ">
            <LanguageCutting />
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="About" className="py-24 px-4 sm:px-6     lg:mt-30">
        <About />
      </section>

      {/* ================= SLIDING BAR ================= */}
      <SlidingBar />

      {/* ================= CURATED / INFO ================= */}
      
      
        {/* <InfoWork /> */}
      

      {/* ================= PROJECTS ================= */}
      <section id="projects" >
        <Projects />
      </section>

      {/* ================= FOOTER ================= */}
      <Footer  />
    </main>
  );
}
