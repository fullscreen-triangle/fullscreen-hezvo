const { useState, useEffect, useMemo } = React;
import * as d3 from "d3";
import Globe from "react-globe.gl";

const Sub10s = () => {
  const [countries, setCountries] = useState({ features: [] });
  const [hoverD, setHoverD] = useState();

  useEffect(() => {
    // Load custom dataset
    fetch("/data/sub10s.geojson")
      .then((res) => res.json())
      .then((data) => {
        // Assuming your dataset is in the same format as the GeoJSON you mentioned
        const processedData = processDataset(data);
        setCountries(processedData);
      });
  }, []);

  // Function to process dataset and calculate average sprint time and age
  function processDataset(data) {
    const countryTimes = {};
    const countryAges = {};

    data.features.forEach((feat) => {
      const country = feat.properties.ADMIN;
      const time = parseFloat(feat.properties["Time\n0(seconds)"]);
      const age = parseInt(feat.properties.Age.match(/\d+/)[0]); // Extract age in years

      if (!countryTimes[country]) {
        countryTimes[country] = [];
        countryAges[country] = [];
      }

      countryTimes[country].push(time);
      countryAges[country].push(age);
    });

    const avgTimes = {};
    const avgAges = {};

    Object.keys(countryTimes).forEach((country) => {
      avgTimes[country] = d3.mean(countryTimes[country]);
      avgAges[country] = d3.mean(countryAges[country]);
    });

    // Add these averages to your country features (assuming countries.features is available and matches by ADMIN property)
    // This step may need adjustment based on how your initial country polygons are structured
    return {
      ...data,
      features: data.features.map((feat) => ({
        ...feat,
        properties: {
          ...feat.properties,
          avgTime: avgTimes[feat.properties.ADMIN],
          avgAge: avgAges[feat.properties.ADMIN],
        },
      })),
    };
  }

  const colorScaleTime = d3.scaleSequentialSqrt(d3.interpolateBlues);
  const colorScaleAge = d3.scaleSequentialSqrt(d3.interpolateOranges);

  // Calculate max values for color scales
  const maxTime = useMemo(
    () =>
      Math.max(...countries.features.map((feat) => feat.properties.avgTime)),
    [countries],
  );
  const maxAge = useMemo(
    () => Math.max(...countries.features.map((feat) => feat.properties.avgAge)),
    [countries],
  );

  colorScaleTime.domain([0, maxTime]);
  colorScaleAge.domain([0, maxAge]);

  // Decide which scale to use for coloring (for demonstration, let's use time)
  const colorScale = colorScaleTime;

  return (
    <Globe
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      lineHoverPrecision={0}
      polygonsData={countries.features.filter(
        (d) => d.properties.ISO_A2 !== "AQ",
      )}
      polygonAltitude={(d) => (d === hoverD ? 0.12 : 0.06)}
      polygonCapColor={(d) =>
        d === hoverD ? "steelblue" : colorScale(d.properties.avgTime)
      }
      polygonSideColor={() => "rgba(0, 100, 0, 0.15)"}
      polygonStrokeColor={() => "#111"}
      polygonLabel={({ properties: d }) => `
      <b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
      Average Sprint Time: <i>${d.avgTime.toFixed(2)}</i> seconds<br/>
      Average Age: <i>${Math.round(d.avgAge)}</i> years
    `}
      onPolygonHover={setHoverD}
      polygonsTransitionDuration={300}
    />
  );
};

export default Sub10s;
