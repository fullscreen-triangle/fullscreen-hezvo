"use client";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiY2hvbWJvY2hpbm9rb3NvcmFtb3RvIiwiYSI6ImNsYWIzNzN1YzA5M24zdm4xb2txdXZ0YXQifQ.mltBkVjXA6LjUJ1bi7gdRg";

const ArchaicOlympics = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  // 37.639,21.631
  const [lng, setLng] = useState(21.631);
  const [lat, setLat] = useState(37.639);
  const [zoom, setZoom] = useState(15);
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/chombochinokosoramoto/cll81w5hj00mt01pbc0p9aev2",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return (
    <div>
      <div
        ref={mapContainer}
        className="fixed flex container box-border resize m-0 p-0 mx-auto touch-none antialiased"
      />
    </div>
  );
};

export default ArchaicOlympics;
