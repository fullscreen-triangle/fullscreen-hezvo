"use client";
import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
const Globe = dynamic(import("react-globe.gl"), { ssr: false });

const FastestNations = () => {
  const globeEl = useRef();
  const [countries, setCountries] = useState({ features: [] });
  const [transitionDuration, setTransitionDuration] = useState(1000);

  useEffect(() => {
    // Load countries and athlete data from JSON file
    fetch("/data/sub10s.geojson")
      .then((res) => res.json())
      .then((data) => {
        // Calculate average times for athletes by country
        const athleteTimesByCountry = data.features.reduce((acc, feature) => {
          const countryCode = feature.properties.ADM0_A3;
          const time = parseFloat(feature.properties["Time\n0(seconds)"]);
          if (!acc[countryCode]) {
            acc[countryCode] = { sum: 0, count: 0 };
          }
          acc[countryCode].sum += time;
          acc[countryCode].count += 1;
          return acc;
        }, {});

        const averageTimesByCountry = Object.keys(athleteTimesByCountry).reduce(
          (acc, countryCode) => {
            acc[countryCode] =
              athleteTimesByCountry[countryCode].sum /
              athleteTimesByCountry[countryCode].count;
            return acc;
          },
          {},
        );

        // Adjust altitude based on the average time, inversely
        setCountries(data);
        setAltitude(() => (feat) => {
          const countryCode = feat.properties.ADM0_A3;
          const avgTime = averageTimesByCountry[countryCode];
          // Invert the scale: faster times result in higher altitudes
          // Adjust the calculation based on your dataset's specific range and desired visual effect
          return avgTime
            ? 0.1 +
                (Math.max(...Object.values(averageTimesByCountry)) - avgTime) *
                  0.005
            : 0.1;
        });

        setTimeout(() => {
          setTransitionDuration(4000);
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
      <b>${d.ADMIN} (${d.ISO_A2})</b> <br />
      Population: <i>${Math.round(+d.POP_EST / 1e4) / 1e2}M</i>
    `}
      polygonsTransitionDuration={transitionDuration}
    />
  );
};

export default FastestNations;
