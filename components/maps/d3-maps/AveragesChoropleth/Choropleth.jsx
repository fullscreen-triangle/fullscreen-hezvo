import React from "react";
import * as d3 from "d3";

export const ChoroplethMap = ({ width, height, geoData, attribute }) => {
  // Function to calculate average values for specified attribute
  const calculateAverages = (data, attribute) => {
    let tempData = {};

    data.features.forEach((feature) => {
      const properties = feature.properties;
      const key = properties.ADMIN; // Use ADMIN as the key for each country
      const value = properties[attribute];

      if (!tempData[key]) {
        tempData[key] = { sum: 0, count: 0 };
      }
      tempData[key].sum += parseFloat(value);
      tempData[key].count += 1;
    });

    // Convert sums and counts to averages
    let averages = {};
    Object.keys(tempData).forEach((key) => {
      averages[key] = tempData[key].sum / tempData[key].count;
    });

    return averages;
  };

  const averages = calculateAverages(geoData, attribute);

  // Define a generic color scale for demonstration
  const colorScale = d3
    .scaleSequential(d3.interpolateBlues)
    .domain(d3.extent(Object.values(averages)));

  const projection = d3
    .geoMercator()
    .scale(width / 2 / Math.PI - 20)
    .center([10, 55]);
  const geoPathGenerator = d3.geoPath().projection(projection);

  const allSvgPaths = geoData.features.map((feature) => {
    const regionName = feature.properties.ADMIN;
    const value = averages[regionName];
    const color = value ? colorScale(value) : "lightgrey";
    return (
      <path
        key={feature.properties.ADM0_A3}
        d={geoPathGenerator(feature)}
        stroke="lightGrey"
        strokeWidth={0.5}
        fill={color}
        fillOpacity={1}
      />
    );
  });

  return (
    <div>
      <svg width={width} height={height}>
        {allSvgPaths}
      </svg>
    </div>
  );
};
