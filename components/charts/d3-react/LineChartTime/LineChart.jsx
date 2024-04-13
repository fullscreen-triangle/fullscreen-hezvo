import { useEffect, useRef } from "react";
import * as d3 from "d3";
const MARGIN = { top: 30, right: 30, bottom: 50, left: 50 };
export const LineChart = ({ width, height, data }) => {
  // bounds = area inside the graph axis = calculated by substracting the margins
  const axesRef = useRef(null);
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;
  // Y axis
  const max = d3.max(data, (d) => d.y);
  const yScale = d3
    .scaleLinear()
    .domain([0, max || 0])
    .range([boundsHeight, 0]);
  // X axis
  const customTimeParser = d3.timeParse("%Y-%m-%d");
  const times = data
    .map((d) => customTimeParser(d.x))
    .filter((item) => item instanceof Date); // filter is typed weirdly 🤔
  const dateDomain = d3.extent(times);
  const xScale = d3.scaleTime().domain(dateDomain).range([0, boundsWidth]);
  // Render the X and Y axis using d3.js, not react
  useEffect(() => {
    const svgElement = d3.select(axesRef.current);
    svgElement.selectAll("*").remove();
    const xAxisGenerator = d3.axisBottom(xScale);
    svgElement
      .append("g")
      .attr("transform", "translate(0," + boundsHeight + ")")
      .call(xAxisGenerator);
    const yAxisGenerator = d3.axisLeft(yScale);
    svgElement.append("g").call(yAxisGenerator);
  }, [xScale, yScale, boundsHeight]);
  // Build the line
  const lineBuilder = d3
    .line()
    .x((d) => xScale(customTimeParser(d.x)))
    .y((d) => yScale(d.y));
  const linePath = lineBuilder(data);
  if (!linePath) {
    return null;
  }
  return (
    <div>
      <svg width={width} height={height}>
        <g w
     i    dth={boundsWidth} h
    e     ight={boundsHeight} t
  r       ansform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}>

                  <path d=
{           linePath} op
      a     city={1} st
r           oke="#9a6fb0" fi
           ll="none" st
     r      okeWidth={2}/>

                  </g>
        <g widt
         h={boundsWidth} heig
       h  t={boundsHeight} ref=
      {   axesRef} tran
    s     form={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}/>
  
            </svg>
    </div>);
};
  
