import React, { useEffect, useState } from "react";
import crossfilter from "crossfilter2";
import * as d3 from "d3";
import { BarChart, BubbleChart, ChartContext } from "react-dc-js";

function processData(data) {
  const avgPerson = { height: 180, weight: 75, age: 27 };
  data.forEach((d) => {
    // Convert attributes as necessary, assuming data is already in correct format
    d.Age = +d.Age;
    d.Height = +d.Height;
    d.Weight = +d.Weight;
    d.Year = +d.Year;
    // Calculate the deviation scores for each athlete (example calculation)
    d.deviationScore = Math.sqrt(
      Math.pow(d.Height - avgPerson.height, 2) +
        Math.pow(d.Weight - avgPerson.weight, 2) +
        Math.pow(d.Age - avgPerson.age, 2),
    );
  });
  return data;
}

function BiometricsCrossFilter() {
  const [cx, setCx] = useState(null);

  useEffect(() => {
    const processedData = processData(athletesData);
    const ndx = crossfilter(processedData);
    setCx(ndx);
  }, []);

  if (!cx) {
    return <p>Loading Data...</p>;
  }

  // Define dimensions and groups
  const weightDimension = cx.dimension((d) => d.Weight);
  const heightDimension = cx.dimension((d) => d.Height);
  const ageDimension = cx.dimension((d) => d.Age);
  const yearDimension = cx.dimension((d) => d.Year);

  // Groups for bar charts
  const weightGroup = weightDimension.group();
  const heightGroup = heightDimension.group();
  const ageGroup = ageDimension.group();

  // Group for bubble chart
  const performanceGroup = yearDimension.group().reduce(
    (p, v) => {
      p.count++;
      p.totalDeviation += v.deviationScore;
      p.avgDeviation = p.count ? p.totalDeviation / p.count : 0;
      return p;
    },
    (p, v) => {
      p.count--;
      if (p.count) {
        p.totalDeviation -= v.deviationScore;
        p.avgDeviation = p.totalDeviation / p.count;
      } else {
        p.totalDeviation = 0;
        p.avgDeviation = 0;
      }
      return p;
    },
    () => ({ count: 0, totalDeviation: 0, avgDeviation: 0 }),
  );

  return (
    <div className="App">
      <h1>Olympic Data Analysis</h1>
      <ChartContext>
        <BarChart
          dimension={weightDimension}
          group={weightGroup} /* other props */
        />
        <BarChart
          dimension={heightDimension}
          group={heightGroup} /* other props */
        />
        <BarChart dimension={ageDimension} group={ageGroup} /* other props */ />
        <BubbleChart
          width={990}
          height={500}
          dimension={yearDimension}
          group={performanceGroup}
          keyAccessor={(p) => p.value.avgHeight}
          valueAccessor={(p) => p.value.avgWeight}
          radiusValueAccessor={(p) => p.value.score}
          x={d3.scaleLinear().domain([170, 190])}
          y={d3.scaleLinear().domain([70, 80])}
          r={d3.scaleLinear().domain([0, 50])}
          maxBubbleRelativeSize={0.05}
          xAxisLabel="Average Height"
          yAxisLabel="Average Weight"
        />
      </ChartContext>
    </div>
  );
}

export default App;
