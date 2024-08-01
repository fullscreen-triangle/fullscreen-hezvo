import React, { useEffect, useState } from "react";
import crossfilter from "crossfilter2";
import * as d3 from "d3";
import { BarChart, LineChart, ChartContext } from "react-dc-js";

const AllTimesHundredFilter = () => {
  const [cx, setCx] = useState(null);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("/data/Alltimes100m.json");
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  useEffect(() => {
    const loadData = async () => {
      const sprintData = await fetchData();
      if (sprintData) {
        const formattedData = sprintData.map((d) => {
          const dateFormatParser = d3.timeParse("%d.%m.%Y");
          return {
            ...d,
            Time: +d.Time, // Convert string time to number for calculations
            Date: dateFormatParser(d.Date), // Format the date
            DOB: dateFormatParser(d.DOB), // Format the DOB
          };
        });

        setData(formattedData);
        const cx = crossfilter(formattedData);
        setCx(cx);
      }
    };

    loadData();
  }, []);

  if (!cx || !data) {
    return <p>Loading Data...</p>;
  }

  // Defining dimensions and groups based on sprint event data
  const dateDimension = cx.dimension((d) => d.Date);
  const timeByDateGroup = dateDimension.group().reduceSum((d) => d.Time);

  const athleteDimension = cx.dimension((d) => d.Athlete);
  const timeByAthleteGroup = athleteDimension.group().reduceSum((d) => d.Time);

  return (
    <div className="flex bg-darkblack-600 mb-[24px] w-full mx-auto overflow-hidden resize m-0 p-0 antialised">
      <div className="xl:w-66 w-full bg-darkblack-600 flex flex-col justify-between rounded-lg px-6 py-3">
        <div className="flex justify-between items-center pb-2 mb-2 border-b border-bgray-300">
          <h3 className="text-white sm:text-2xl text-xl font-bold">
            All Times Hundred
          </h3>
        </div>
        <div className="w-full text-white font-bold text-2xl leading-[30px]">
          <ChartContext>
            <div className="flex flex-col gap-4 rounded-none md:flex-row md:items-center">
              <LineChart
                className="w-full h-[255px] px-2 pb-0"
                width={990}
                height={200}
                dimension={dateDimension}
                group={timeByDateGroup}
                x={d3.scaleTime().domain(d3.extent(data, (d) => d.Date))}
                elasticY={true}
                renderHorizontalGridLines={true}
                brushOn={false}
              />
            </div>
            <div className="flex flex-col gap-4 rounded-none md:flex-row md:items-center">
              <BarChart
                className="w-full h-[160px] px-2 pb-0"
                width={990}
                height={180}
                dimension={athleteDimension}
                group={timeByAthleteGroup}
                x={d3.scaleBand()}
                xUnits={d3.scaleBand}
                elasticY={true}
              />
            </div>
          </ChartContext>
        </div>
      </div>
    </div>
  );
};

export default AllTimesHundredFilter;
