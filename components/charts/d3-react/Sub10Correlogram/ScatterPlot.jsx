import React, { useMemo } from "react";
import * as d3 from "d3";
import { AxisLeft } from "./Axis/AxisLeft"; // Adjust path as necessary
import { AxisBottom } from "./Axis/AxisBottom"; // Adjust path as necessary
import { colors, MARGIN } from "./constants"; // Adjust constants as necessary

export const Scatterplot = ({
  width,
  height,
  data,
  xVar,
  yVar,
  xLabel,
  yLabel,
}) => {
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // Adjust scales based on variable type
  const xScale = useMemo(() => {
    if (xVar === "Date") {
      const dates = data.map((d) => d.x);
      const minDate = new Date(Math.min(...dates));
      const maxDate = new Date(Math.max(...dates));
      return d3.scaleTime().domain([minDate, maxDate]).range([0, boundsWidth]);
    } else {
      const [min, max] = d3.extent(data.map((d) => d.x));
      return d3.scaleLinear().domain([min, max]).range([0, boundsWidth]).nice();
    }
  }, [data, boundsWidth, xVar]);

  const yScale = useMemo(() => {
    if (yVar === "Date") {
      const dates = data.map((d) => d.y);
      const minDate = new Date(Math.min(...dates));
      const maxDate = new Date(Math.max(...dates));
      return d3.scaleTime().domain([minDate, maxDate]).range([boundsHeight, 0]);
    } else {
      const [min, max] = d3.extent(data.map((d) => d.y));
      return d3
        .scaleLinear()
        .domain([min, max])
        .range([boundsHeight, 0])
        .nice();
    }
  }, [data, boundsHeight, yVar]);

  const colorScale = d3
    .scaleOrdinal()
    .domain([...new Set(data.map((d) => d.group))])
    .range(colors);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${MARGIN.left}, ${MARGIN.top})`}>
        {data.map((d, i) => (
          <circle
            key={i}
            cx={xScale(d.x)}
            cy={yScale(d.y)}
            r={3}
            fill={colorScale(d.group)}
          />
        ))}
        {yLabel && (
          <AxisLeft yScale={yScale} width={boundsWidth} label={yLabel} />
        )}
        {xLabel && (
          <AxisBottom xScale={xScale} height={boundsHeight} label={xLabel} />
        )}
      </g>
    </svg>
  );
};
