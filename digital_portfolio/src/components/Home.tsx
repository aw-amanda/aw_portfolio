import { motion, useScroll, useTransform } from "motion/react";
import React, { useEffect, useRef } from "react";
import HeroLayer1 from '../assets/HeroLayer1.png';
import HeroLayer2 from '../assets/HeroLayer2.png';
import HeroLayer3 from '../assets/HeroLayer3.png';

export default function Parallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll(
    {
    container: containerRef,
    offset: ["start start", "end start"]
  });

  // Background (HeroLayer3)
  const bgScale = useTransform(scrollY, [0, 1000], [1, 1.3]);
  const bgY = useTransform(scrollY, [0, 1000], ["0%", "5%"]);
  
  // Middleground (HeroLayer2)
  const middleY = useTransform(scrollY, [0, 1000], ["0%", "-10%"]);
  
  // Foreground (HeroLayer1)
  const fgScale = useTransform(scrollY, [0, 1000], [1, 1.15]);
  
  // Text moves fastest
  const textY = useTransform(scrollY, [0, 1000], ["0%", "50%"]);

  useEffect(() => {
  [HeroLayer1, HeroLayer2, HeroLayer3].forEach(src => {
    const img = new Image();
    img.src = src;
  });
}, []);

  const containerExit = useTransform(scrollY, 
    [800, 1000], // Start fading out at 800px, complete by 1000px
    [0, -100]    // Moves up 100vh while fading out
  );

    return (
    <>
      {/* Parallax Container */}
      <motion.div 
        ref={containerRef}
        className="relative w-full h-[300vh]" // Extra space for scroll
        style={{
          y: containerExit
        }}
      >
        {/* Fixed viewport container */}
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Background Layer */}
          <motion.div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${HeroLayer3})`,
              backgroundPosition: "center bottom",
              backgroundSize: "cover",
              scale: bgScale,
              translateY: bgY
            }}
          />

          {/* Middleground Layer */}
          <motion.div
            className="absolute inset-0 z-20"
            style={{
              backgroundImage: `url(${HeroLayer2})`,
              backgroundPosition: "center bottom",
              backgroundSize: "cover",
              translateY: middleY
            }}
          />

          {/* Foreground Layer */}
          <motion.div
            className="absolute inset-0 z-30 origin-bottom"
            style={{
              backgroundImage: `url(${HeroLayer1})`,
              backgroundPosition: "center bottom",
              backgroundSize: "cover",
              scale: fgScale
            }}
          />

          <motion.h1 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl font-bold text-white z-40 drop-shadow-lg"
            style={{ translateY: textY }}
          >
            Welcome to my Universe
          </motion.h1>
        </div>
      </motion.div>

      {/* Empty space to push content up */}
      <div className="relative w-full h-screen bg-transparent"></div>
    </>
  );
}