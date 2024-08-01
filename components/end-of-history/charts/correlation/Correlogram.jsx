import { MARGIN } from "./constants";
import { Histogram } from "./Histogram";
import { Scatterplot } from "./Scatterplot";

export const Correlogram = ({ width, height, data }) => {
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;
  const allVariables = ["var1", "var2", "var3", "var4"];
  const allGroups = [...new Set(data.map((d) => d.group))];
  const graphWidth = boundsWidth / allVariables.length;
  const graphHeight = boundsHeight / allVariables.length;

  const allGraphs = allVariables.map((yVar, i) => {
    return allVariables.map((xVar, j) => {
      if (xVar === yVar) {
        const distributionData = allGroups.map((group) => {
          return {
            group,
            values: data.filter((d) => d.group === group).map((d) => d[xVar]),
          };
        });
        return (
          <Histogram
            key={`hist-${i}-${j}`}
            width={graphWidth}
            height={graphHeight}
            data={distributionData}
            limits={[
              Math.min(...data.map((d) => d[xVar])),
              Math.max(...data.map((d) => d[xVar])),
            ]}
          />
        );
      }
      const scatterData = data.map((d) => {
        return { x: d[xVar], y: d[yVar], group: d.group };
      });
      return (
        <div key={`scatter-${i}-${j}`}>
          <Scatterplot
            width={graphWidth}
            height={graphHeight}
            data={scatterData}
            yLabel={j === 0 ? allVariables[i] : undefined}
            xLabel={i === allVariables.length - 1 ? allVariables[j] : undefined}
          />
        </div>
      );
    });
  });

  return (
    <div style={{ width, height }}>
      <div
        style={{
          width: boundsWidth,
          height: boundsHeight,
          display: "grid",
          gridTemplateColumns: "1fr ".repeat(allVariables.length),
          transform: `translate(${MARGIN.left}px, ${MARGIN.top}px)`,
        }}
      >
        {allGraphs}
      </div>
    </div>
  );
};
