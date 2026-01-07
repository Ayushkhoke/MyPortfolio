import React from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  const navigate = useNavigate();
    function contacthandler() {
    toast.success("Contact Me at:");
    navigate("/contactus");
  }
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
 <div className="flex flex-col sm:flex-row items-center gap-6 bg-white text-black rounded-md  relative lg:left-[20%] sm-mx-auto">
  <button
                onClick={contacthandler}
                className="px-6 py-3 rounded-md border border-white/20 text-sm hover:border-white/40 transition"
              >
                Contact
              </button>
 </div>


          {/* SOCIAL MEDIA LOGOS */}
          <div className="flex gap-4">

            {/* GitHub */}
            <a
              href="https://github.com/Spartan253"
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
              href="https://linkedin.com/in/ayush-khoke-23811b25b/"
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
              href="https://www.instagram.com/ayushkhoke1"
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
