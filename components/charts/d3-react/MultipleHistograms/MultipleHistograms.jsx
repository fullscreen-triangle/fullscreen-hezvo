import React, { useEffect, useState, useRef } from "react";
import * as d3 from "d3";

const MultiHistogram = ({ url, width, height }) => {
  const [data, setData] = useState([]);
  const svgRef = useRef();

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((fetchedData) => {
        const processedData = fetchedData.map((d) => ({
          ...d,
          t20m: +d.t20m,
          t40m: +d.t40m,
          t60m: +d.t60m,
          t80m: +d.t80m,
          t100m: +d.t100m,
          "t20-40": +d["t20-40"],
          "t40-60": +d["t40-60"],
          "t60-80": +d["t60-80"],
          "t80-100": +d["t80-100"],
        }));
        setData(processedData);
      });
  }, [url]);

  useEffect(() => {
    if (data.length === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous renderings

    const segmentKeys = [
      "t20m",
      "t40m",
      "t60m",
      "t80m",
      "t100m",
      "t20-40",
      "t40-60",
      "t60-80",
      "t80-100",
    ];
    const margin = { top: 10, right: 30, bottom: 30, left: 40 };
    const individualWidth =
      width / segmentKeys.length - margin.left - margin.right;
    const individualHeight = height / 2 - margin.top - margin.bottom;

    segmentKeys.forEach((key, index) => {
      const xPosition =
        (index % segmentKeys.length) *
        (individualWidth + margin.left + margin.right);
      const yPosition =
        Math.floor(index / segmentKeys.length) *
        (individualHeight + margin.top + margin.bottom);

      const x = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d[key])])
        .range([0, individualWidth]);

      const bins = d3
        .bin()
        .value((d) => d[key])
        .domain(x.domain())
        .thresholds(x.ticks(40))(data);

      const y = d3
        .scaleLinear()
        .domain([0, d3.max(bins, (d) => d.length)])
        .range([individualHeight, 0]);

      const group = svg
        .append("g")
        .attr(
          "transform",
          `translate(${xPosition + margin.left}, ${yPosition + margin.top})`,
        );

      group
        .selectAll("rect")
        .data(bins)
        .enter()
        .append("rect")
        .attr("x", (d) => x(d.x0) + 1)
        .attr("width", (d) => Math.max(0, x(d.x1) - x(d.x0) - 1))
        .attr("y", (d) => y(d.length))
        .attr("height", (d) => individualHeight - y(d.length))
        .style("fill", "#69b3a2");

      // Add X axis
      group
        .append("g")
        .attr("transform", `translate(0,${individualHeight})`)
        .call(d3.axisBottom(x).ticks(3));

      // Add Y axis
      group.append("g").call(d3.axisLeft(y));
    });
  }, [data, width, height]);

  return <svg ref={svgRef} width={width} height={height}></svg>;
};

// Usage example
const MultipleHistograms = () => {
  const url = "/data/100m.json"; // Replace with your actual data URL
  const viewportWidth = 1024;
  const totalHeight = 600;

  return (
    <MultiHistogram url={url} width={viewportWidth} height={totalHeight} />
  );
};

export default MultipleHistograms;
