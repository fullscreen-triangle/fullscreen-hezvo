import React, { useState, useEffect } from "react";
import Card from "@/components/ui/Card";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Sub10sVariables = () => {
  const [statistics, setStatistics] = useState([]);
  const [charts, setCharts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'URL_TO_YOUR_GEOJSON_DATA' with the actual URL
        const response = await fetch("URL_TO_YOUR_GEOJSON_DATA");
        const geojsonData = await response.json();
        const processedData = processData(geojsonData);
        updateChartsAndStatistics(processedData);
      } catch (error) {
        console.error("Failed to fetch GeoJSON data:", error);
      }
    };

    fetchData();
  }, []);

  const processData = (geojsonData) => {
    const ageSeries = geojsonData.features.map((feature) =>
      convertAgeToYears(feature.properties.Age),
    );
    const timeSeries = geojsonData.features.map((feature) =>
      parseFloat(feature.properties["Time\n0(seconds)"]),
    );
    const dateSeries = geojsonData.features.map((feature) =>
      convertDateToDayOfYear(feature.properties.Date),
    );

    const averageAge = ageSeries.reduce((a, b) => a + b, 0) / ageSeries.length;
    const averageTime =
      timeSeries.reduce((a, b) => a + b, 0) / timeSeries.length;
    const averageDate =
      dateSeries.reduce((a, b) => a + b, 0) / dateSeries.length;

    return {
      averageAge,
      averageTime,
      averageDate,
      ageSeries,
      timeSeries,
      dateSeries,
    };
  };

  const updateChartsAndStatistics = ({
    averageAge,
    averageTime,
    averageDate,
    ageSeries,
    timeSeries,
    dateSeries,
  }) => {
    // Update statistics with averages
    setStatistics([
      {
        title: "Average Age",
        count: `${averageAge.toFixed(2)} years`,
        icon: "heroicons:shopping-cart",
        bg: "bg-[#E5F9FF]",
        text: "text-info-500",
      },
      {
        title: "Average Time",
        count: `${averageTime.toFixed(2)} seconds`,
        icon: "heroicons:cube",
        bg: "bg-[#FFEDE6]",
        text: "text-warning-500",
      },
      {
        title: "Average Day",
        count: `Day ${Math.round(averageDate)} of the year`,
        icon: "heroicons:arrow-trending-up-solid",
        bg: "bg-[#EAE6FF]",
        text: "text-[#5743BE]",
      },
    ]);

    // Update charts with series data
    setCharts([
      // Assuming these are the chart configurations for age, time, and date
      {
        series: [{ data: ageSeries }],
        options: {
          /* Chart options */
        },
      },
      {
        series: [{ data: timeSeries }],
        options: {
          /* Chart options */
        },
      },
      {
        series: [{ data: dateSeries }],
        options: {
          /* Chart options */
        },
      },
    ]);
  };

  function convertAgeToYears(ageString) {
    const [years, days] = ageString.split(" years, ");
    return parseFloat(years) + parseFloat(days) / 365.25;
  }

  function convertDateToDayOfYear(dateString) {
    const date = new Date(dateString);
    const start = new Date(date.getFullYear(), 0, 0);
    const diff =
      date -
      start +
      (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  }

  return (
    <>
      {statistics.map((stat, index) => (
        <Card key={index} bodyClass="pt-4 pb-3 px-4">
          <div className="flex space-x-3">
            <div
              className={`${stat.bg} ${stat.text} h-12 w-12 rounded-full flex items-center justify-center text-2xl`}
            >
              <Icon icon={stat.icon} />
            </div>
            <div>
              <div className="text-sm mb-1 font-medium">{stat.title}</div>
              <div className="text-lg font-medium">{stat.count}</div>
            </div>
          </div>
          {charts[index] && (
            <Chart
              options={charts[index].options}
              series={charts[index].series}
              type="line" // or "area", depending on your specific chart type
              height="150" // Adjust height as needed
            />
          )}
        </Card>
      ))}
    </>
  );
};

export default Sub10sVariables;
