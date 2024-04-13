import React from "react";
import dynamic from "next/dynamic";

// Dynamically import ApexCharts only if needed to avoid SSR issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const AllTimesService = ({ data }) => {
  const { chartConfig, title, description } = data;

  return (
    <div className="service-item">
      {chartConfig ? (
        <Chart
          options={chartConfig.options}
          series={chartConfig.series}
          type="bar"
        />
      ) : (
        // Handle rendering your SVG or other icons here if no chartConfig
        <div>Your Icon Here</div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default AllTimesService;
