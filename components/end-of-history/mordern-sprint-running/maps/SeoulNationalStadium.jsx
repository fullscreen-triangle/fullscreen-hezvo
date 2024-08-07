"use client";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiY2hvbWJvY2hpbm9rb3NvcmFtb3RvIiwiYSI6ImNsYWIzNzN1YzA5M24zdm4xb2txdXZ0YXQifQ.mltBkVjXA6LjUJ1bi7gdRg";

const SeoulNationalStadium = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  // 37.639,21.631
  // 37.515,127.073
  const [lng, setLng] = useState(127.073);
  const [lat, setLat] = useState(37.515);
  const [zoom, setZoom] = useState(15);
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/chombochinokosoramoto/clt2p4rv000b501qp4i71dr43",
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

export default SeoulNationalStadium;
