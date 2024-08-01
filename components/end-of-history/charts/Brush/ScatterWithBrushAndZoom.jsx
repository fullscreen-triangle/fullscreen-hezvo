import { extent } from "d3-array";
import { scaleLinear } from "d3-scale";
import { zoomIdentity } from "d3-zoom";
import * as React from "react";
import useBrush from "./useBrush";
import { useHover } from "./useHover";
import { useZoom } from "./useZoom";

const ScatterplotWithBrushAndZoom = ({
  data,
  width,
  height,
  pointRadius = 5,
  color = "tomato",
  mode = "brush",
}) => {
  const margin = { top: 5, right: 5, bottom: 5, left: 5 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const { xExtent, yExtent, yScale, xScale } = React.useMemo(() => {
    const xExtent = extent(data, (d) => d.x);
    const yExtent = extent(data, (d) => d.y);

    const xScale = scaleLinear().domain(xExtent).range([0, innerWidth]);
    const yScale = scaleLinear().domain(yExtent).range([innerHeight, 0]);

    return { xExtent, yExtent, yScale, xScale };
  }, [data, innerWidth, innerHeight]);

  // attach zoom behavior
  const interactionRef = React.useRef();

  // set up zoom
  const [zoomTransform, setZoomTransform] = React.useState(zoomIdentity);

  // setup a callback to keep the zoom react state in sync with the d3 zoom transform
  const handleChangeZoom = React.useCallback((newTransform) => {
    setZoomTransform(newTransform);
  }, []);

  // attach zoom behavior
  const updateZoomTransform = useZoom({
    interactionRef,
    onZoom: handleChangeZoom,
    width,
    height,
    enabled: mode === "zoom",
  });

  // adjust scales for zoom
  const [xZoomScale, yZoomScale] = React.useMemo(
    () => [zoomTransform.rescaleX(xScale), zoomTransform.rescaleY(yScale)],
    [zoomTransform, xScale, yScale],
  );

  const [brushedInterval, setBrushedInterval] = React.useState(undefined);
  const handleChangeBrushedInterval = React.useCallback((brushedInterval) => {
    if (brushedInterval == null) {
      setBrushedInterval(undefined);
      return;
    }
    setBrushedInterval(brushedInterval);
  }, []);

  // add in brush
  useBrush({
    ref: interactionRef, // <-- must be a <g> for d3-brush
    xScale: xZoomScale,
    yScale: yZoomScale,
    margin,
    innerWidth,
    height,
    innerHeight,
    xIntervalBounds: xExtent,
    yIntervalBounds: yExtent,
    onChangeBrushedInterval: handleChangeBrushedInterval,
    brushedInterval,
    hideBrushOnEnd: false,
  });

  const brushedPoints = React.useMemo(() => {
    if (brushedInterval == null) return undefined;
    let xMin = brushedInterval[0][0];
    let yMin = brushedInterval[0][1];
    let xMax = brushedInterval[1][0];
    let yMax = brushedInterval[1][1];

    if (xMin > xMax) {
      [xMax, xMin] = [xMin, xMax];
    }
    if (yMin > yMax) {
      [yMax, yMin] = [yMin, yMax];
    }

    return data.filter(
      (d) => xMin <= d.x && d.x <= xMax && yMin <= d.y && d.y <= yMax,
    );
  }, [brushedInterval, data]);
  const brushColor = "#45f";

  // get hover point
  let { points } = useHover({
    ref: interactionRef,
    strategy: "nearest",
    datasets: React.useMemo(() => [{ dataset: data }], [data]),
    xScale: xZoomScale,
    yScale: yZoomScale,
    xAccessor: (d) => d.x,
    yAccessor: (d) => d.y,
    radius: 100,
    xOffset: margin.left,
    yOffset: margin.top,
  });

  const hoverPoint = points?.[0].d;
  let hoverIsBrushed = brushedPoints?.includes(hoverPoint);

  return (
    <div
      style={{
        width,
        height,
        position: "relative",
      }}
      className={mode === "zoom" ? "zoomable" : "brushable"}
    >
      <svg width={width} height={height}>
        <g transform={`translate(${margin.left} ${margin.top})`}>
          {data.map((d) => {
            const x = xZoomScale(d.x);
            const y = yZoomScale(d.y);
            const r = pointRadius;
            return <circle key={d.id} cx={x} cy={y} r={r} fill={color} />;
          })}
          {brushedPoints?.map((d) => {
            const x = xZoomScale(d.x);
            const y = yZoomScale(d.y);
            const r = pointRadius;
            return <circle key={d.id} cx={x} cy={y} r={r} fill={brushColor} />;
          })}
          {hoverPoint && (
            <g
              transform={`translate(${xZoomScale(hoverPoint.x)} ${yZoomScale(
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
                fill={hoverIsBrushed ? brushColor : color}
                stroke="white"
                strokeWidth={2}
              />
            </g>
          )}
        </g>

        <g ref={interactionRef}>
          <rect
            x={0}
            y={0}
            width={width}
            height={height}
            fill={"red"}
            fillOpacity={0.0}
          />
        </g>
      </svg>
    </div>
  );
};

export default ScatterplotWithBrushAndZoom;
