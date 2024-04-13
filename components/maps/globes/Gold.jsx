"use client";
import React, { useState, useEffect, useRef } from "react";
import Globe from "react-globe.gl";

const Gold = () => {
  const globeEl = useRef();
  const [countries, setCountries] = useState({ features: [] });
  const [altitude, setAltitude] = useState(0.1);
  const [transitionDuration, setTransitionDuration] = useState(1000);

  useEffect(() => {
    // load data
    fetch(
      "https://raw.githubusercontent.com/ksachikonye/preface-hezvo/main/dataset_one.geojson",
    )
      .then((res) => res.json())
      .then((countries) => {
        setCountries(countries);

        setTimeout(() => {
          setTransitionDuration(4000);
          setAltitude(
            () => (feat) =>
              Math.max(0.1, Math.sqrt(+feat.properties.totGold) * 7e-5),
          );
        }, 3000);
      });
  }, []);

  useEffect(() => {
    // Auto-rotate
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.3;

    globeEl.current.pointOfView({ altitude: 4 }, 5000);
  }, []);

  return (
    <Globe
      ref={globeEl}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
      polygonsData={countries.features.filter(
        (d) => d.properties.ISO_A2 !== "AQ",
      )}
      polygonAltitude={altitude}
      polygonCapColor={() => "rgba(200, 0, 0, 0.6)"}
      polygonSideColor={() => "rgba(0, 100, 0, 0.15)"}
      polygonLabel={({ properties: d }) => `
        <b>${d.Rank} (${d.totAll})</b> <br />
        Population: <i>${Math.round(+d.POP_EST / 1e4) / 1e2}M</i>
      `}
      polygonsTransitionDuration={transitionDuration}
    />
  );
};

export default Gold;
