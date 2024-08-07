"use client";
import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Chart } from "react-chartjs-2";

mapboxgl.accessToken = "YOUR_MAPBOX_ACCESS_TOKEN";

const Stadium = ({ chapters, descriptiveSections }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [activeChapterName, setActiveChapterName] = useState(
    Object.keys(chapters)[0],
  );

  useEffect(() => {
    if (map.current) return; // Initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: chapters[activeChapterName].center,
      zoom: chapters[activeChapterName].zoom,
      bearing: chapters[activeChapterName].bearing,
      pitch: chapters[activeChapterName].pitch,
    });

    const handleScroll = () => {
      for (const chapterName in chapters) {
        if (isElementOnScreen(chapterName)) {
          setActiveChapterName(chapterName);
          map.current.flyTo(chapters[chapterName]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      map.current.remove();
    };
  }, [chapters]);

  const isElementOnScreen = (id) => {
    const element = document.getElementById(id);
    if (!element) return false;
    const bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
  };

  return (
    <div className="flex h-screen container mx-auto box-border p-0 m-0 resize justify-text overflow-hidden antialiased">
      <div
        ref={mapContainer}
        className="flex fixed  h-full overflow-hidden container p-0 m-0  "
      />

      <div className="flex relative justify-between p-0 m-0 h-full leading-6 text-white align-baseline border-0">
        {descriptiveSections.map((section, index) => (
          <section
            key={index}
            id={section.id}
            className={activeChapterName === section.id ? "active" : ""}
          >
            <h3>{section.title}</h3>
            <p>{section.content}</p>
            <Chart type="bar" data={section.chartData} />
          </section>
        ))}
      </div>
    </div>
  );
};

export default Stadium;
