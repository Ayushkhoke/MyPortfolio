import React from "react";
import { ImageSlider } from "../data/imageSlider";
import bgimage from '../assets/bgimage.png'
import "../index.css";

export default function Skills() {
  return (
    <div className="w-full h-screen flex items-center justify-center "
    style={{ backgroundImage: `url(${bgimage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      {/* 3D Scene */}
      <div
        className="
          relative w-[600px] h-[600px]
          [transform-style:preserve-3d] [perspective:1200px]
          flex items-center justify-center
        "
      >
        {/* Center image (stable, no movement) */}
        <div className="absolute z-10">
          <img
            src={ImageSlider[0].image}
            alt="center"
            className="w-[220px] h-[320px] object-cover rounded-xl shadow-2xl"
          />
        </div>

        {/* Orbit images */}
        <div className="absolute w-full h-full animate-spin3d [transform-style:preserve-3d]">
          {ImageSlider.slice(1).map((element, index) => (
            <div
              key={index}
              style={{
                transform: `rotateY(${
                  (360 / (ImageSlider.length - 1)) * index
                }deg) translateZ(400px)`,
              }}
              className="absolute flex items-center justify-center mt-[200px]"
            >
              <img
                src={element.image}
                alt={element.id}
                className="w-[150px] h-[220px] object-cover rounded-lg shadow-lg transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



