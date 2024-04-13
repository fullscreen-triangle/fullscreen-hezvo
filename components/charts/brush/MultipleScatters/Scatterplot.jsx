import { extent } from "d3-array";
import { scaleLinear } from "d3-scale";
import * as React from "react";
import { useHover } from "./useHover";
import { pointer } from "d3-selection";

const Scatterplot = ({
  data,
  width,
  height,
  pointRadius = 5,
  color = "tomato",
}) => {
  const margin = { top: 5, right: 5, bottom: 5, left: 5 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const xExtent = extent(data, (d) => d.x);
  const yExtent = extent(data, (d) => d.y);

  const xScale = scaleLinear().domain(xExtent).range([0, innerWidth]);
  const yScale = scaleLinear().domain(yExtent).range([innerHeight, 0]);

  // listen for interactoin on this rect
  const interactionRef = React.useRef();

  // get hover point
  let { points } = useHover({
    ref: interactionRef,
    strategy: "nearest",
    datasets: React.useMemo(() => [{ dataset: data }], [data]),
    xScale,
    yScale,
    xAccessor: (d) => d.x,
    yAccessor: (d) => d.y,
    radius: 100,
    xOffset: margin.left,
    yOffset: margin.top,
  });

  const [d3mouse, setD3Mouse] = React.useState([0, 0]);

  const hoverPoint = points?.[0].d;

  return (
    <div style={{ width, height, position: "relative" }}>
      <svg width={width} height={height}>
        <g transform={`translate(${margin.left} ${margin.top})`}>
          {data.map((d) => {
            const x = xScale(d.x);
            const y = yScale(d.y);
            const r = pointRadius;
            return <circle key={d.id} cx={x} cy={y} r={r} fill={color} />;
          })}
          {hoverPoint && (
            <g
              transform={`translate(${xScale(hoverPoint.x)} ${yScale(
                hoverPoint.y,
              )})`}
            >
              <text
                dx={pointRadius * 2 + 4}
                dy="0.33em"
                stroke="white"
                strokeWidth={4}
              >
                {hoverPoint.id}
              </text>
              <text dx={pointRadius * 2 + 4} dy="0.33em">
                {hoverPoint.id}
              </text>
              <circle
                key={hoverPoint.id}
                cx={0}
                cy={0}
                r={pointRadius * 2}
                fill={color}
                stroke="white"
                strokeWidth={2}
              />
            </g>
          )}
        </g>
        <rect
          x={0}
          y={0}
          ref={interactionRef}
          width={width}
          height={height}
          fill={"red"}
          fillOpacity={0.0}
          onMouseMove={(evt) => {
            setD3Mouse(pointer(evt));
          }}
        />
      </svg>
    </div>
  );
};

export default Scatterplot;
