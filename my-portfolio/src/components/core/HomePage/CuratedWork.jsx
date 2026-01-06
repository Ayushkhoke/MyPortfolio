// import React from 'react'
// import { Curateddata } from "../../../data/Curateddata"
// import {useState} from 'react';
// export default function CuratedWork() {
//      const [hoveredIndex, setHoveredIndex] = useState(null)
//   return (
//     <div className='w-full  bg-[#010714]'>
//       <div className="flex flex-col mx-auto justify-center items-center pt-[50px] pb-[50px] mt- ">
//         {
//             Curateddata.map((element,index)=>(
// <div key={index} className="flex flex-row gap-[10px] ">

//     <div className="flex flex-col mb-[20px]">
//          <img  src={element.image}
//                  className="w-[1050px] h-[700px] "
//                  onMouseEnter={()=>setHoveredIndex(index)}
//                  onMouseLeave={()=>setHoveredIndex(null)}
//                  />
//             </div>
//     <div className="w-[500px] h-[500px]  text-white text-[25px] flex justify-center items-center text-center">
//        {hoveredIndex===index &&(
//         <div className="w-[500px] h-[500px] flex flex-col ">
//           <h1 className="text-left pl-[6px] flex flex-row"><div className="h-[7px] w-[40px] bg-green-500 flex mt-[20px]" ></div>{element.title}</h1>
//           <p className="text-[20px] text-left pl-[10px] ">{element.description}</p>
//          <div className="text-[17px] mt-[30px] pl-[5px]">
//            <p>{element.paragraph1}</p>
//             <p>{element.paragraph2}</p>
//               <p>{element.paragraph3}</p>
//           </div>
            
//           </div>
//        )}

//         </div>

        
//     </div>
//             ))
//         }
//       </div>
//     </div>
//   )
// }


import React, { useState } from "react";
import { Curateddata } from "../../../data/Curateddata";

export default function CuratedWork() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="w-full bg-[#010714]">
      <div className="flex flex-col mx-auto items-center py-12 gap-16 px-4">

        {Curateddata.map((element, index) => (
          <div
            key={index}
            className="
              flex flex-col lg:flex-row
              gap-6 lg:gap-10
              items-center
              w-full max-w-7xl
            "
          >
            {/* IMAGE */}
            <div
              className="w-full lg:w-[65%]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={element.image}
                alt={element.title}
                className="
                  w-full
                  h-[220px] sm:h-[350px] lg:h-[650px]
                  object-cover
                  rounded-xl
                  transition-transform duration-500
                  hover:scale-[1.02]
                "
              />
            </div>

            {/* CONTENT */}
            <div
              className="
                w-full lg:w-[35%]
                text-white
                flex justify-center
              "
            >
              {/* Desktop: show on hover | Mobile: always show */}
              {(hoveredIndex === index || window.innerWidth < 1024) && (
                <div className="flex flex-col gap-4 w-full">
                  <h1 className="flex items-center gap-3 text-xl sm:text-2xl font-semibold">
                    <span className="h-[6px] w-[40px] bg-green-500" />
                    {element.title}
                  </h1>

                  <p className="text-gray-300 text-sm sm:text-base">
                    {element.description}
                  </p>

                  <div className="text-gray-400 text-sm space-y-1">
                    <p>{element.paragraph1}</p>
                    <p>{element.paragraph2}</p>
                    <p>{element.paragraph3}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
