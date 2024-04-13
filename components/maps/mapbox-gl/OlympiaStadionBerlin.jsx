import React, { useRef, useEffect, useState } from "react";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiY2hvbWJvY2hpbm9rb3NvcmFtb3RvIiwiYSI6ImNsYWIzNzN1YzA5M24zdm4xb2txdXZ0YXQifQ.mltBkVjXA6LjUJ1bi7gdRg"; // Replace with your Mapbox access token

const OlympiaStadion = () => {
  const [viewport, setViewport] = useState({
    latitude: 52.514857, // Approximate latitude of Berlin OlympiaStadion
    longitude: 13.239919, // Approximate longitude of Berlin OlympiaStadion
    zoom: 18.6, // Zoom level to show the stadium clearly
    bearing: 0.0, // Orientation of the map, in degrees clockwise from north
    pitch: 61.51, // Angle towards the horizon, useful for 3D buildings
  });

  // Ref to hold the map instance
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      // If you need to access the Mapbox map instance directly, you can do so here
      // e.g., to add additional controls or interact with the map directly
      const map = mapRef.current.getMap();

      // Example: set the map style to your custom Mapbox Studio style
      map.setStyle(
        "mapbox://styles/chombochinokosoramoto/clssfzqwa00ek01pkfiqq51ge",
      );
    }
  }, []);

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="100vh"
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
      ref={mapRef}
    />
  );
};

export default OlympiaStadion;
