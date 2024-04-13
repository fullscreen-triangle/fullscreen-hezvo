import React, { useMemo } from "react";
import * as d3 from "d3";
import { AxisBottom } from "./Axis/AxisBottom"; // Adjust path as necessary
import { colors, MARGIN } from "./constants"; // Adjust constants as necessary

const BUCKET_NUMBER = 40;
const BUCKET_PADDING = 0;

export const Histogram = ({ width, height, data, variable }) => {
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;
  const allGroups = [...new Set(data.map((d) => d.group))].sort();
  const colorScale = d3.scaleOrdinal().domain(allGroups).range(colors);

  // Adjust scale based on variable type
  const xScale = useMemo(() => {
    if (variable === "Date") {
      const dates = data.flatMap((d) => d.values);
      const minDate = new Date(Math.min(...dates));
      const maxDate = new Date(Math.max(...dates));
      return d3.scaleTime().domain([minDate, maxDate]).range([0, boundsWidth]);
    } else {
      const values = data.flatMap((d) => d.values);
      const [min, max] = d3.extent(values);
      return d3.scaleLinear().domain([min, max]).range([0, boundsWidth]).nice();
    }
  }, [data, width, variable]);

  const bucketGenerator = useMemo(() => {
    return d3
      .bin()
      .value((d) => (variable === "Date" ? new Date(d).getTime() : d))
      .domain(xScale.domain())
      .thresholds(
        variable === "Date"
          ? d3.timeMonth.every(1)
          : xScale.ticks(BUCKET_NUMBER),
      );
  }, [xScale, variable]);

  const groupBuckets = useMemo(() => {
    return data.map((group) => ({
      group: group.group,
      buckets: bucketGenerator(group.values),
    }));
  }, [data, bucketGenerator]);

  const yScale = useMemo(() => {
    const max = d3.max(groupBuckets, (group) =>
      d3.max(group.buckets, (bucket) => bucket.length),
    );
    return d3.scaleLinear().domain([0, max]).range([boundsHeight, 0]).nice();
  }, [groupBuckets, boundsHeight]);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${MARGIN.left}, ${MARGIN.top})`}>
        {groupBuckets.map((group, i) =>
          group.buckets.map((bucket, j) => (
            <rect
              key={`${i}-${j}`}
              x={xScale(bucket.x0) + BUCKET_PADDING / 2}
              width={xScale(bucket.x1) - xScale(bucket.x0) - BUCKET_PADDING}
              y={yScale(bucket.length)}
              height={boundsHeight - yScale(bucket.length)}
              fill={colorScale(group.group)}
            />
          )),
        )}
        <AxisBottom xScale={xScale} height={boundsHeight} />
      </g>
    </svg>
  );
};
