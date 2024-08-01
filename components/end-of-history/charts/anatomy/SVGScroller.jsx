import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SVGScroller = ({ svgUrl, highlightElements }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;

    if (svg) {
      // Load the SVG content
      fetch(svgUrl)
        .then((response) => response.text())
        .then((svgContent) => {
          svg.innerHTML = svgContent;

          // Set up GSAP animations for highlighting elements
          highlightElements.forEach((element, index) => {
            gsap.fromTo(
              svg.querySelector(`#${element}`),
              { fill: "transparent" },
              {
                fill: "#FF0000", // Highlight color
                scrollTrigger: {
                  trigger: svg,
                  start: `${index * 20}% center`,
                  end: `${(index + 1) * 20}% center`,
                  toggleActions: "play reverse play reverse",
                  scrub: true,
                },
              }
            );
          });
        });
    }
  }, [svgUrl, highlightElements]);

  return <div ref={svgRef} style={{ width: "100%", height: "100vh" }} />;
};

export default SVGScroller;
