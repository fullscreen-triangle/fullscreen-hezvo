import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

function ScatterPlot({ data, dimensions, xAccessor, yAccessor }) {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!data || data.length === 0) return;
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear before redrawing

    const { width, height, margin } = dimensions;
    const adjustedWidth = width - margin.left - margin.right;
    const adjustedHeight = height - margin.top - margin.bottom;

    const xScale = d3
      .scaleLinear()
      .domain(d3.extent(data, xAccessor))
      .range([0, adjustedWidth]);

    const yScale = d3
      .scaleLinear()
      .domain(d3.extent(data, yAccessor))
      .range([adjustedHeight, 0]);

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    g.selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", (d) => xScale(xAccessor(d)))
      .attr("cy", (d) => yScale(yAccessor(d)))
      .attr("r", 3);

    // Add X axis
    g.append("g")
      .attr("transform", `translate(0,${adjustedHeight})`)
      .call(d3.axisBottom(xScale));

    // Add Y axis
    g.append("g").call(d3.axisLeft(yScale));
  }, [data, dimensions, xAccessor, yAccessor]);

  return (
    <svg ref={svgRef} width={dimensions.width} height={dimensions.height}></svg>
  );
}

export default ScatterPlot;
