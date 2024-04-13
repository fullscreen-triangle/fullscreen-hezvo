import React, { useEffect, useState } from "react";
import crossfilter from "crossfilter2";
import * as d3 from "d3";
import { BarChart, LineChart, ChartContext } from "react-dc-js";
import sprintData from "./sprintData.json"; // Importing data from a local JSON file

const AllTimesHundredFilter = () => {
  const [cx, setCx] = useState(null);

  useEffect(() => {
    const data = sprintData.map((d) => {
      const dateFormatParser = d3.timeParse("%d.%m.%Y");
      return {
        ...d,
        Time: +d.Time, // Convert string time to number for calculations
        Date: dateFormatParser(d.Date), // Format the date
        DOB: dateFormatParser(d.DOB), // Format the DOB
      };
    });

    const cx = crossfilter(data);
    setCx(cx);
  }, []);

  if (!cx) {
    return <p>Loading Data...</p>;
  }

  // Defining dimensions and groups based on sprint event data
  const dateDimension = cx.dimension((d) => d.Date);
  const timeByDateGroup = dateDimension.group().reduceSum((d) => d.Time);

  const athleteDimension = cx.dimension((d) => d.Athlete);
  const timeByAthleteGroup = athleteDimension.group().reduceSum((d) => d.Time);

  return (
    <div className="App">
      <ChartContext>
        <LineChart
          width={990}
          height={200}
          dimension={dateDimension}
          group={timeByDateGroup}
          x={d3.scaleTime().domain(d3.extent(data, (d) => d.Date))}
          elasticY={true}
          renderHorizontalGridLines={true}
          brushOn={false}
        />
        <BarChart
          width={990}
          height={180}
          dimension={athleteDimension}
          group={timeByAthleteGroup}
          x={d3.scaleBand()}
          xUnits={d3.scaleBand}
          elasticY={true}
        />
      </ChartContext>
    </div>
  );
};

export default AllTimesHundredFilter;
