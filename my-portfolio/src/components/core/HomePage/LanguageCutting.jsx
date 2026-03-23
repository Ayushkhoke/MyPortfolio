// import React from 'react';
// import './language.css';
// import { TypeAnimation } from 'react-type-animation';

// export default function LanguageCutting() {
//   const langs = [
//     "JavaScript",
//     "Python",
//     "Java",
//     "C++",
//     "Go",
//     "Rust",
//     "TypeScript",
//     "Kotlin",
//     "Swift",
//     "PHP",
//   ];

//   const langs2 = [
//     "Node.js",
//     "Python",
//     "Java",
//     "C#",
//     "PHP",
//     "Ruby",
//     "Go",
//     "Rust",
//     "Kotlin",
//     "Scala",
//   ];

//   const tools = [
//     "AWS",
//     "Azure",
//     "Google",
//     "Docker",
//     "Kubernetes",
//     "Terraform",
//     "Ansible",
//     "Jenkins",
//     "GitHub Actions",
//     "Prometheus",
//   ];

//   const sampleCode = `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <title>Lucifer Portfolio</title>
// </head>
// <body>
//   <header>
//     <h1>Hello, I am Lucifer</h1>
//   </header>
//   <main>
//     <p>Welcome to my portfolio website.</p>
//     <button>Get Started</button>
//   </main>
// </body>
// </html>
// `;

//   return (
//     <div className="bg-[#010714] text-white flex  lg:flex-row w-full  justify-center  px-4 sm:px-6 lg:px-12 gap-10">
    

        

//       {/* RIGHT: Code animation */}
//       <div className="flex flex-row bg-black w-full max-w-md sm:max-w-lg lg:max-w-xl mt-6 lg:mt-0 border border-gray-800 rounded-lg p-3 sm:p-4">
//         {/* Line numbers */}
//         <div className="flex flex-col text-gray-500 text-xs sm:text-sm mr-3">
//           {Array.from({ length: 13 }).map((_, idx) => (
//             <p key={idx}>{idx + 1}</p>
//           ))}
//         </div>

//         {/* Code block */}
//         <div className="w-full flex flex-col font-mono text-xs sm:text-sm md:text-base font-semibold text-yellow-500 rounded-md px-2 py-2 overflow-hidden h-[500px]">
//           <TypeAnimation
//             sequence={[sampleCode, 10000, ""]}
//             wrapper="pre"
//             cursor={true}
//             repeat={Infinity}
//             style={{ whiteSpace: "pre-line" }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import './Language.css';
import { TypeAnimation } from 'react-type-animation';

export default function LanguageCutting() {

  const rawCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Full-Stack Developer</title>
</head>
<body>
  <header>
    <h1>Custom software & AI systems — built to save you time and money.</h1>
  </header>
  <main>
    <p>Welcome to my portfolio website.</p>
    <button>Get Started</button>
  </main>
</body>
</html>`;

  // add aligned numbers + small space
  const sampleCode = rawCode
    .split("\n")
    .map((line, i) => `${String(i + 1).padStart(2, " ")}    ${line}`)
    .join("\n");

  return (
    <div className="bg-[#010714] text-white flex lg:flex-row w-full justify-center px-4 sm:px-6 lg:px-12 gap-10">

      {/* Code animation */}
      <div className="flex bg-black w-full max-w-md sm:max-w-lg lg:max-w-xl mt-6 border border-gray-800 rounded-lg p-4">

        <pre className="font-mono text-yellow-500 text-xs pt-[20px] sm:text-sm md:text-base font-semibold overflow-hidden h-[500px]">
          <TypeAnimation
            sequence={[sampleCode, 10000, ""]}
            cursor={true}
            repeat={Infinity}
            wrapper="span"
            style={{ whiteSpace: "pre-line" }}
          />
        </pre>

      </div>
    </div>
  );
}
