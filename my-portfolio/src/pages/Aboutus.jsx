// import React, { useEffect } from "react";
// import './About.css'
// export default function Aboutus() {
//   useEffect(() => {
//     const cards = document.querySelectorAll(".skill-card");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           entry.target.classList.toggle("visible", entry.isIntersecting);
//         });
//       },
//       { threshold: 0.2 }
//     );

//     cards.forEach((card) => observer.observe(card));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="max-w-5xl mx-auto px-6 py-24 text-white">
      
//       {/* About */}
//       <h1 className="text-5xl font-semibold mb-8">About</h1>

//       <div className="text-lg leading-relaxed text-white/80 space-y-5 max-w-3xl">
//         <p>
//           I’m Ayush Khoke, a Full-Stack Developer focused on building scalable,
//           reliable web applications with clean architecture.
//         </p>

//         <p>
//           My work spans frontend interfaces and backend systems, with emphasis on
//           performance, maintainability, and thoughtful user experience.
//         </p>

//         <p>
//           I value clarity over complexity and aim to ship solutions that stand
//           the test of time.
//         </p>
//       </div>

//       {/* Skills */}
//       <div className="mt-20">
//         <h2 className="text-3xl font-medium mb-6">Skills</h2>

//         <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl">
//           {[
//             "HTML & CSS",
//             "JavaScript",
//             "React",
//             "Node.js",
//             "Express",
//             "MongoDB",
//             "Tailwind CSS",
//             "Git & GitHub",
//           ].map((skill) => (
//             <div
//               key={skill}
//               className="skill-card px-4 py-3 border border-white/20 
//               rounded-md text-sm text-white/85 bg-white/[0.03]"
//             >
//               {skill}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import React, { useEffect, useRef } from "react";
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import "./About.css";

export default function Aboutus() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const aboutObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("about-visible");
          aboutObserver.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const skillsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll(".skill-card");
          cards.forEach((card, i) => {
            setTimeout(() => {
              card.classList.add("skill-visible");
            }, i * 120);
          });
          skillsObserver.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) aboutObserver.observe(aboutRef.current);
    if (skillsRef.current) skillsObserver.observe(skillsRef.current);

    return () => {
      aboutObserver.disconnect();
      skillsObserver.disconnect();
    };
  }, []);

  const skills = [
    { name: "HTML & CSS", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Git & GitHub", icon: <FaGithub className="text-white" /> },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-24 text-white">
      
      {/* ABOUT */}
      <div ref={aboutRef} className="about-section">
        <h1 className="text-5xl font-semibold mb-8">About</h1>

        <div className="text-lg leading-relaxed text-white/80 space-y-5 max-w-3xl">
          <p>I’m Ayush Khoke, a Full-Stack Developer focused on scalable web apps.</p>
          <p>Frontend + backend with performance and clean architecture.</p>
          <p>Clarity over complexity. Long-term solutions.</p>
        </div>
      </div>

      {/* SKILLS */}
      <div ref={skillsRef} className="mt-20">
        <h2 className="text-3xl font-medium mb-6">Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="skill-card flex items-center gap-3 px-4 py-3
              border border-white/20 rounded-md bg-white/[0.03]"
            >
              <span className="text-xl">{skill.icon}</span>
              <span className="text-sm text-white/85">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
