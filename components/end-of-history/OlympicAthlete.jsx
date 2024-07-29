import React, { useEffect, useState } from "react";
import crossfilter from "crossfilter2";
import * as d3 from "d3";
import {
  BarChart,
  PieChart,
  BubbleChart,
  LineChart,
  ChartContext,
} from "react-dc-js";

const numberFormat = d3.format(".2f");

function App() {
  const [cx, setCx] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await d3.json("path_to_your_data.json");
      data.forEach((d) => {
        d.Year = +d.Year;
        d.Age = +d.Age;
        d.Height = +d.Height;
        d.Weight = +d.Weight;
        d.BMI = d.Weight / (d.Height / 100) ** 2;
      });
      const cx = crossfilter(data);
      setCx(cx);
    })();
  }, []);

  if (!cx) {
    return <p>Loading Data...</p>;
  }

  const yearDimension = cx.dimension((d) => d.Year);
  const avgHeightByYear = yearDimension.group().reduce(
    (p, v) => {
      ++p.count;
      p.sum += v.Height;
      p.avg = p.sum / p.count;
      return p;
    },
    (p, v) => {
      --p.count;
      p.sum -= v.Height;
      p.avg = p.count ? p.sum / p.count : 0;
      return p;
    },
    () => ({ count: 0, sum: 0, avg: 0 }),
  );

  const nocDimension = cx.dimension((d) => d.NOC);
  const athletesByNOC = nocDimension.group();

  const bmiDimension = cx.dimension((d) => {
    if (d.BMI < 18.5) return "Underweight";
    if (d.BMI < 25) return "Normal";
    if (d.BMI < 30) return "Overweight";
    return "Obese";
  });
  const athletesByBMI = bmiDimension.group();

  const ageDimension = cx.dimension((d) => {
    if (d.Age < 23) return "18-22";
    if (d.Age < 28) return "23-27";
    if (d.Age < 33) return "28-32";
    return "33+";
  });
  const athletesByAge = ageDimension.group();

  const heightWeightDimension = cx.dimension((d) => [d.Height, d.Weight]);
  const athletesByHeightWeight = heightWeightDimension.group();

  return (
    <div className="App">
      <h1>Olympic 100m Sprint Athletes Analysis</h1>
      <ChartContext>
        <LineChart
          width={990}
          height={200}
          dimension={yearDimension}
          group={avgHeightByYear}
          x={d3.scaleLinear().domain([1896, 2020])}
          xUnits={d3.timeYears}
          elasticY={true}
          renderHorizontalGridLines={true}
          valueAccessor={(d) => d.value.avg}
          title="Average Height Over Time"
        />
        <PieChart
          dimension={nocDimension}
          group={athletesByNOC}
          width={450}
          height={300}
          title="Athletes by Country"
        />
        <PieChart
          dimension={bmiDimension}
          group={athletesByBMI}
          width={450}
          height={300}
          title="BMI Distribution"
        />
        <BarChart
          dimension={ageDimension}
          group={athletesByAge}
          width={480}
          height={300}
          x={d3.scaleBand()}
          xUnits={dc.units.ordinal}
          elasticY={true}
          title="Age Distribution"
        />
        <BubbleChart
          width={990}
          height={250}
          dimension={heightWeightDimension}
          group={athletesByHeightWeight}
          x={d3.scaleLinear().domain([150, 210])}
          y={d3.scaleLinear().domain([50, 120])}
          r={d3.scaleLinear().domain([0, 100])}
          elasticY={true}
          elasticX={true}
          renderHorizontalGridLines={true}
          renderVerticalGridLines={true}
          xAxisLabel={"Height (cm)"}
          yAxisLabel={"Weight (kg)"}
          title="Height vs Weight Distribution"
        />
      </ChartContext>
    </div>
  );
}

export default App;
