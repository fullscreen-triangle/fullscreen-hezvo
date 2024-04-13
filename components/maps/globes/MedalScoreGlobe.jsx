import React, { useState, useEffect, useRef } from "react";
import Globe from "react-globe.gl";

const MedalScoreGlobe = ({ datasetUrl }) => {
  const globeEl = useRef();
  const [countries, setCountries] = useState([]);
  const [transitionDuration, setTransitionDuration] = useState(1000);

  useEffect(() => {
    // Fetch and process data
    fetch(datasetUrl)
      .then((res) => res.json())
      .then((data) => {
        // Assuming data is an array of features
        const scoresByCountry = data.reduce((acc, feature) => {
          const { properties } = feature;
          const countryName = properties.ADMIN;
          const medalType = properties.Medal;
          const medalScores = { 1: 3, 2: 2, 3: 1 }; // Gold: 3, Silver: 2, Bronze: 1

          const score = medalScores[medalType] || 0;

          if (!acc[countryName]) {
            acc[countryName] = { score: 0, properties };
          }
          acc[countryName].score += score;

          return acc;
        }, {});

        const scoredCountries = Object.values(scoresByCountry).map(
          (country) => ({
            ...country.properties,
            score: country.score,
          }),
        );

        setCountries(scoredCountries);
      });
  }, [datasetUrl]);

  useEffect(() => {
    // Set auto-rotate
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.3;
      globeEl.current.pointOfView({ altitude: 4 }, 5000);
    }
  }, []);

  // Determine the maximum score to normalize altitudes
  const maxScore = Math.max(...countries.map((c) => c.score), 0);
  const altitudeScale = (score) => (score / maxScore) * 0.1; // Max altitude is 0.1; adjust as needed

  return (
    <Globe
      ref={globeEl}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
      polygonsData={countries}
      polygonAltitude={({ score }) => altitudeScale(score)}
      polygonCapColor={() => "rgba(30, 60, 90, 0.6)"} // Uniform color for all countries
      polygonSideColor={() => "rgba(30, 60, 90, 0.3)"}
      polygonsTransitionDuration={transitionDuration}
    />
  );
};

export default MedalScoreGlobe;
