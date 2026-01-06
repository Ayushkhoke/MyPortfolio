// import React from 'react'
// import { Link, NavLink } from 'react-router-dom'
// import bgimage from '../assets/bgimage.png'

// export default function Navbar() {
//   return (
//     <div>
//       <nav
//         className="
//           flex items-center justify-center
//           w-full h-[60px]
//           text-green-400
//           px-4 sm:px-10 md:px-20
//           bg-black/60 backdrop-blur-md
//         "
//         style={{
//           backgroundImage: `url(${bgimage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >

//         {/* CENTERED NAVBAR CONTENT */}
//         <div className="flex items-center gap-4 sm:gap-6 md:gap-10 mx-auto">

//           {/* === LOGO === */}
//           <NavLink
//             to="/"
//             className="
//               text-[20px] sm:text-[22px] md:text-[25px] font-semibold relative left-[-20%]
//             "
//           >
//             Portfolio
//           </NavLink>

//           {/* === NAV LINKS === */}
//           <NavLink to="/" className="hover:text-white transition">
//             Home
//           </NavLink>

//           <NavLink to="/Aboutus" className="hover:text-white transition">
//             About Us
//           </NavLink>

//           <NavLink to="/Project" className="hover:text-white transition">
//             Project
//           </NavLink>

//           <NavLink
//             to="/Contactus"
//             className="
//               hover:text-black hover:bg-green-400
//               px-2 py-1 rounded-md transition
//             "
//           >
//             Contact Us
//           </NavLink>

//           <NavLink
//             to="/Skills"
//             className="
//               hover:text-black hover:bg-green-400
//               px-2 py-1 rounded-md transition
//             "
//           >
//             Skills
//           </NavLink>

//         </div>
//       </nav>
//     </div>
//   )
// }


import React from "react";
import { NavLink,Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="top-0 w-full z-50 pt-[20px] ">
      <nav
        className="
          max-w-[1080px] mx-auto
          flex items-center justify-between
          px-6 md:px-10
          h-16
          bg-[#010714] 
          border-b border-white/10
          text-white
        "
      >
        {/* LOGO */}
        <NavLink
          to="/"
          className="text-lg font-semibold tracking-wide hover:text-white/90 transition"
        >
          Ayush<span className="text-purple-500">.</span>
        </NavLink>

        {/* LINKS */}
        <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <NavLink
            to="/"
            className="relative transition hover:text-white
              after:absolute after:left-0 after:-bottom-1
              after:h-[1.5px] after:w-0 after:bg-yellow-500
              after:transition-all after:duration-300
              hover:after:w-full"
          >
            Home
          </NavLink>

          <NavLink
            onClick={() =>
    document.getElementById("About")?.scrollIntoView({
      behavior: "smooth",
    })
  }
            className="relative transition hover:text-white
              after:absolute after:left-0 after:-bottom-1
              after:h-[1.5px] after:w-0 after:bg-yellow-500
              after:transition-all after:duration-300
              hover:after:w-full"
          >
            About
          </NavLink>

       <span
  onClick={() =>
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    })
  }
  className="relative cursor-pointer transition hover:text-white
    after:absolute after:left-0 after:-bottom-1
    after:h-[1.5px] after:w-0 after:bg-yellow-500
    after:transition-all after:duration-300
    hover:after:w-full"
>
  Projects
</span>

          {/* <NavLink
            to="/skills"
            className="relative transition hover:text-white
              after:absolute after:left-0 after:-bottom-1
              after:h-[1.5px] after:w-0 after:bg-yellow-500
              after:transition-all after:duration-300
              hover:after:w-full"
          >
            Skills
          </NavLink> */}
        </div>

        {/* CTA */}
        <NavLink
          to="/contactus"
          className="
            text-sm px-4 py-2 rounded-md
            bg-white text-black
            hover:bg-white/90
            transition  lg:bg-white
          "
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
