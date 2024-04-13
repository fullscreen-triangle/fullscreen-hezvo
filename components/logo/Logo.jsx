"use client";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";

const Logo = () => {
  const controlsLineOne = useAnimation();
  const controlsLineTwo = useAnimation();
  const controlsRectangle = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      // Line animations
      controlsLineOne.start({
        pathLength: [0.5, 0.005, 0.5],
        pathOffset: [0, 0, 0.5],
        transition: { duration: 2, ease: "linear", repeat: Infinity },
      });

      controlsLineTwo.start({
        pathLength: [0.5, 0.005, 0.5],
        pathOffset: [0, 0, 0.5],
        transition: { duration: 2, ease: "linear", repeat: Infinity },
      });

      // Rectangle animation
      controlsRectangle.start({
        x: [0, 100], // Adjust these values based on the desired motion path
        y: [0, 50], // Adjust these values based on the desired motion path
        transition: { duration: 2, repeat: Infinity },
      });
    };

    sequence();
  }, [controlsLineOne, controlsLineTwo, controlsRectangle]);

  return (
    <div className="relative h-32 w-32" width={80} height={60}>
      <svg
        className="absolute block left-0 top-0 h-16 w-16"
        preserveAspectRatio="xMidYMid meet"
        height="300"
        width="600"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 300" // Corrected from 'viewport' to 'viewBox'
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <motion.path
          d="M0,90L150,90M150,90Q158,60 162,87T167,95 170,88 173,92t6,35 7,-60T190,127 197,107s2,-11 10,-10 1,1 8,-10T219,95c6,4 8,-6 10,-17s2,10 9,11h110"
          stroke="rgba(155,55,255,0.4)"
          fill="none"
          strokeWidth="3"
          strokeLinejoin="round"
          style={{ overflow: "visible" }}
          animate={controlsLineOne}
        />
        <motion.path
          d="M0,90L150,90M150,90Q158,60 162,87T167,95 170,88 173,92t6,35 7,-60T190,127 197,107s2,-11 10,-10 1,1 8,-10T219,95c6,4 8,-6 10,-17s2,10 9,11h110"
          stroke="#00AEAA"
          fill="none"
          strokeWidth="1"
          strokeLinejoin="round"
          style={{ overflow: "visible" }}
          animate={controlsLineTwo}
        />
        <motion.rect
          x="-3"
          y="-4"
          height="8"
          width="6"
          rx="20"
          ry="20"
          fill="red"
          animate={controlsRectangle}
        />
      </svg>
    </div>
  );
};

Logo.defaultProps = { alt: "Fullscreen" };

export default React.memo(Logo);
