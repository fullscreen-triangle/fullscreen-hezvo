// pages/map.js or wherever you wish to place your map component
import React, { useEffect } from "react";
import Head from "next/head";

const ThreeDModelThreebox = () => {
  useEffect(() => {
    // Dynamically load the mapbox-gl and threebox scripts since they are not part of the initial bundle
    const mapboxGlScript = document.createElement("script");
    mapboxGlScript.src =
      "https://api.mapbox.com/mapbox-gl-js/v3.1.2/mapbox-gl.js";
    mapboxGlScript.onload = () => {
      const threeboxScript = document.createElement("script");
      threeboxScript.src =
        "https://cdn.jsdelivr.net/gh/jscastro76/threebox@v.2.2.2/dist/threebox.min.js";
      threeboxScript.onload = initMap;
      document.body.appendChild(threeboxScript);
    };
    document.body.appendChild(mapboxGlScript);
  }, []);

  const initMap = () => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiY2hvbWJvY2hpbm9rb3NvcmFtb3RvIiwiYSI6ImNsYWIzNzN1YzA5M24zdm4xb2txdXZ0YXQifQ.mltBkVjXA6LjUJ1bi7gdRg";
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/light-v11",
      center: { lng: 13.23989, lat: 52.514582 },
      zoom: 17.95,
      pitch: 85.0,
      bearing: -151.82,
      antialias: true,
    });

    const tb = new Threebox(map, map.getCanvas().getContext("webgl"), {
      defaultLights: true,
    });

    map.on("style.load", () => {
      map.addLayer({
        id: "custom-threebox-model",
        type: "custom",
        renderingMode: "3d",
        onAdd: function () {
          const scale = 3.2;
          const options = {
            obj: "/models/olympiastadion_berlin.glb",
            type: "gltf",
            scale: { x: scale, y: scale, z: 2.7 },
            units: "meters",
            rotation: { x: 90, y: -90, z: 0 },
          };

          tb.loadObj(options, (model) => {
            model.setCoords([13.23989, 52.514582]);
            model.setRotation({ x: 0, y: 0, z: 241 });
            tb.add(model);
          });
        },
        render: function () {
          tb.update();
        },
      });
    });
  };

  return (
    <div>
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v3.1.2/mapbox-gl.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/gh/jscastro76/threebox@v.2.2.2/dist/threebox.css"
          rel="stylesheet"
        />
      </Head>
      <div id="map" style={{ height: "100vh", width: "100%" }}></div>
    </div>
  );
};

export default ThreeDModelThreebox;
