import React from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* TOP */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">

          {/* LOGO */}
          <div className="text-center lg:text-left space-y-3">
            <div className="text-2xl font-semibold tracking-wide">
              Ayush<span className="text-blue-400">.</span>
            </div>
            <p className="text-sm text-gray-400 max-w-xs">
              Full-Stack Engineer building scalable, production-ready web
              applications for startups and businesses.
            </p>
          </div>

          {/* NAV */}
   <nav
  className="
    bg-white text-black/90 rounded-md
    flex flex-wrap items-center gap-4
    mx-auto lg:mx-0
    w-fit px-2
    justify-center lg:justify-start
   
  "
>
  <a
    href="/contactus"
    className="
      px-6 py-3 rounded-md border border-white
      text-sm 
    "
  >
    Contact
  </a>
</nav>


          {/* SOCIAL MEDIA LOGOS */}
          <div className="flex gap-4">

            {/* GitHub */}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full
              bg-white/5 border border-white/15
              hover:bg-[#24292F] hover:border-[#24292F]
              transition-all duration-300"
            >
              <FaGithub className="text-lg text-white" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full
              bg-white/5 border border-white/15
              hover:bg-[#0A66C2] hover:border-[#0A66C2]
              transition-all duration-300"
            >
              <FaLinkedinIn className="text-lg text-white" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full
              bg-white/5 border border-white/15
              hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600
              transition-all duration-300"
            >
              <FaInstagram className="text-lg text-white" />
            </a>

          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-10 border-t border-white/10" />

        {/* BOTTOM */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {year} Ayush Khoke. All rights reserved.</p>
          {/* <p>Built with React, Tailwind & Vite</p> */}
        </div>

      </div>
    </footer>
  );
}
