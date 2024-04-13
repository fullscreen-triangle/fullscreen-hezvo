import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css"; // Import the CSS for mapbox-gl styles

const MapScroller = ({ sections, mapStyle, accessToken }) => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  // Easing functions for smooth camera movements
  const easingFunctions = {
    easeInCubic: (t) => t * t * t,
    easeOutQuint: (t) => 1 - Math.pow(1 - t, 5),
    easeInOutCirc: (t) =>
      t < 0.5
        ? (1 - Math.sqrt(1 - Math.pow(2 * t, 2))) / 2
        : (Math.sqrt(1 - Math.pow(-2 * t + 2, 2)) + 1) / 2,
    easeOutBounce: (t) => {
      const n1 = 7.5625;
      const d1 = 2.75;
      if (t < 1 / d1) {
        return n1 * t * t;
      } else if (t < 2 / d1) {
        return n1 * (t -= 1.5 / d1) * t + 0.75;
      } else if (t < 2.5 / d1) {
        return n1 * (t -= 2.25 / d1) * t + 0.9375;
      } else {
        return n1 * (t -= 2.625 / d1) * t + 0.984375;
      }
    },
  };

  // Initialize map
  useEffect(() => {
    mapboxgl.accessToken = accessToken;
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: mapStyle,
      center: sections[0]?.coordinates, // Use the first section's coordinates as initial center
      zoom: 15,
    });

    // Scroll event listener to fly to new section coordinates
    const onScroll = () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        const bounds = element.getBoundingClientRect();
        if (bounds.top < window.innerHeight && bounds.bottom >= 0) {
          mapRef.current.flyTo({
            center: section.coordinates,
            zoom: 15,
            essential: true,
            easing: easingFunctions.easeOutQuint, // Example usage of an easing function
          });
        }
      });
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [sections, mapStyle, accessToken]); // Dependencies

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div ref={mapContainerRef} style={{ width: "50%", height: "100%" }}></div>
      <div style={{ overflowY: "scroll", width: "50%" }}>
        {sections.map((section) => (
          <section id={section.id} key={section.id}>
            <h3>{section.title}</h3>
            <p>{section.text}</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default MapScroller;
