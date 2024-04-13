// Assuming MARGIN and other necessary imports are defined
import React from "react";
import { Histogram } from "./Histogram"; // Adjust path as necessary
import { Scatterplot } from "./Scatterplot"; // Adjust path as necessary

export const Sub10Correlogram = ({ width, height, data }) => {
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;
  const allVariables = ["Date", "Age", "Time", "Continent"];
  const allGroups = [...new Set(data.map((d) => d.Continent))]; // Assuming Continent for grouping

  const graphWidth = boundsWidth / allVariables.length;
  const graphHeight = boundsHeight / allVariables.length;

  const allGraphs = allVariables.map((yVar, i) =>
    allVariables.map((xVar, j) => {
      if (xVar === yVar) {
        // Prepare data for histograms
        const distributionData = allGroups.map((group) => ({
          group,
          values: data.filter((d) => d.Continent === group).map((d) => d[xVar]),
        }));
        return (
          <Histogram
            key={`${i}-${j}`}
            width={graphWidth}
            height={graphHeight}
            data={distributionData}
            variable={xVar}
          />
        );
      } else {
        // Prepare data for scatterplots
        const scatterData = data.map((d) => ({
          x: d[xVar],
          y: d[yVar],
          group: d.Continent,
        }));
        return (
          <div key={`${i}-${j}`}>
            <Scatterplot
              width={graphWidth}
              height={graphHeight}
              data={scatterData}
              xVar={xVar}
              yVar={yVar}
              yLabel={j === 0 ? yVar : undefined}
              xLabel={i === allVariables.length - 1 ? xVar : undefined}
            />
          </div>
        );
      }
    }),
  );

  return (
    <div style={{ width, height }}>
      <div
        style={{
          width: boundsWidth,
          height: boundsHeight,
          display: "grid",
          gridTemplateColumns: `repeat(${allVariables.length}, 1fr)`,
          transform: `translate(${MARGIN.left}px, ${MARGIN.top}px)`,
        }}
      >
        {allGraphs.flat()}
      </div>
    </div>
  );
};
