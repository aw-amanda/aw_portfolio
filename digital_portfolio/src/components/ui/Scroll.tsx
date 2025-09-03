import {  motion, useScroll, useTransform } from 'motion/react';
import { ReactNode, useRef} from "react";

interface ScrollProps {
  children: ReactNode;
  className?: string;
}

export function Scroll({ children, className }: ScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.3, 1], [1, 0.7, 0.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 1, 0]);

  return (
    <div 
      ref={containerRef} 
      className="h-screen w-full sticky top-0 flex items-center justify-center"
    >
      <motion.div
        className={`${className} w-full max-w-5xl max-h-[calc(100vh - 40px)]`}
        style={{
          scale,
          opacity,
          willChange: 'transform, opacity'
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};