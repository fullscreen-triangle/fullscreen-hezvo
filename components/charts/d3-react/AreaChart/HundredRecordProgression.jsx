import React, { useRef, useEffect, useState } from "react";
import { useDimensions } from "@/hooks/useDimensions"; // Assuming this is the file path to your hook
import { AreaChartBasicDemo } from "./AreaChartBasicDemo"; // Adjust import based on your project structure

const parseDate = d3.timeParse("%Y-%m-%d");

const fetchData = async () => {
  const response = await fetch("URL_TO_YOUR_API");
  const rawData = await response.json();
  // Assuming your API returns an array of objects
  return rawData.map((d) => ({
    x: parseDate(d.Date), // You may need to preprocess `d.Date` to match your chosen format
    y: +d.Time, // Convert to number
  }));
};

const ResponsiveAreaChartWrapper = () => {
  const chartRef = useRef(null);
  const { width, height } = useDimensions(chartRef);

  // Providing a default height or making it responsive as needed
  const chartHeight = height > 0 ? height : 400;

  return (
    <div ref={chartRef} style={{ width: "100%", height: "100%" }}>
      {width > 0 && <AreaChartBasicDemo width={width} height={chartHeight} />}
    </div>
  );
};

export default ResponsiveAreaChartWrapper;
