import React, { useEffect, useMemo, useRef } from "react";
import * as d3 from "d3";

const Histogram = ({ width, height, data }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!data.length) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear SVG before redrawing

    const margin = { top: 10, right: 30, bottom: 30, left: 40 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    // Create scales
    const xScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.time)]) // Assuming 'time' is the value you want to use
      .range([0, chartWidth]);

    const [min, max] = d3.extent(data, (d) => d.time);
    const histogram = d3
      .histogram()
      .value((d) => d.time)
      .domain(xScale.domain())
      .thresholds(xScale.ticks(20)); // Adjust tick count as needed

    const bins = histogram(data);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(bins, (d) => d.length)])
      .range([chartHeight, 0]);

    // Append the bar rectangles
    svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`)
      .selectAll("rect")
      .data(bins)
      .enter()
      .append("rect")
      .attr("x", (d) => xScale(d.x0))
      .attr("y", (d) => yScale(d.length))
      .attr("width", (d) => xScale(d.x1) - xScale(d.x0) - 1)
      .attr("height", (d) => chartHeight - yScale(d.length))
      .style("fill", "#69b3a2");

    // Add the x-axis
    svg
      .append("g")
      .attr("transform", `translate(${margin.left},${height - margin.bottom})`)
      .call(d3.axisBottom(xScale));

    // Add the y-axis
    svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`)
      .call(d3.axisLeft(yScale));
  }, [data, height, width]);

  return <svg ref={svgRef} width={width} height={height} />;
};
