import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line, Scatter } from "react-chartjs-2";
import TreeMap from "react-d3-treemap";
import "react-d3-treemap/dist/react.d3.treemap.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

const SprintVisualization = ({ dataUrl }) => {
  const [rawData, setRawData] = useState(null);
  const [processedData, setProcessedData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(dataUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRawData(data);
      } catch (e) {
        setError(`Failed to fetch data: ${e.message}`);
      }
    };

    fetchData();
  }, [dataUrl]);

  useEffect(() => {
    if (rawData) {
      const processed = processData(rawData);
      setProcessedData(processed);
    }
  }, [rawData]);

  if (error) return <div>Error: {error}</div>;
  if (!processedData) return <div>Loading...</div>;

  const { heatmapData, treemapData, windData } = processedData;

  const heatmapOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Sprint Performance Heatmap" },
    },
    scales: {
      y: { title: { display: true, text: "Athletes" } },
      x: { title: { display: true, text: "Rounds" } },
    },
  };

  const windChartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Wind Conditions Across Rounds" },
    },
    scales: {
      y: { title: { display: true, text: "Wind Speed" } },
      x: { title: { display: true, text: "Rounds" } },
    },
  };

  return (
    <div className="sprint-visualization">
      <h2>Sprint Performance Visualization</h2>
      <div className="heatmap-container">
        <Scatter options={heatmapOptions} data={heatmapData} />
      </div>
      <div
        className="treemap-container"
        style={{ height: "400px", width: "100%" }}
      >
        <TreeMap
          data={treemapData}
          height={400}
          width={800}
          valueUnit="seconds"
        />
      </div>
      <div className="wind-chart-container">
        <Line options={windChartOptions} data={windData} />
      </div>
    </div>
  );
};

const processData = (data) => {
  // Process data for heatmap
  const heatmapData = {
    datasets: data.map((athlete, index) => ({
      label: athlete.FIELD1,
      data: [
        {
          x: athlete.Round,
          y: index,
          v: parseFloat(athlete.t100m.replace(",", ".")),
        },
      ],
      backgroundColor: `hsl(${(index * 360) / data.length}, 70%, 50%)`,
    })),
  };

  // Process data for treemap
  const treemapData = {
    name: "Sprint Final",
    children: data
      .filter((athlete) => athlete.Round === "Ht 9")
      .map((athlete) => ({
        name: athlete.FIELD1,
        children: [
          { name: "0-20m", value: parseFloat(athlete.t20m.replace(",", ".")) },
          {
            name: "20-40m",
            value: parseFloat(athlete["t20-40"].replace(",", ".")),
          },
          {
            name: "40-60m",
            value: parseFloat(athlete["t40-60"].replace(",", ".")),
          },
          {
            name: "60-80m",
            value: parseFloat(athlete["t60-80"].replace(",", ".")),
          },
          {
            name: "80-100m",
            value: parseFloat(athlete["t80-100"].replace(",", ".")),
          },
        ],
      })),
  };

  // Process data for wind chart
  const rounds = [...new Set(data.map((athlete) => athlete.Round))].sort();
  const windData = {
    labels: rounds,
    datasets: [
      {
        label: "Wind Speed",
        data: rounds.map((round) => {
          const roundData = data.find((athlete) => athlete.Round === round);
          return roundData
            ? parseFloat(roundData.Wind.replace(",", "."))
            : null;
        }),
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return { heatmapData, treemapData, windData };
};

export default function Home() {
  const dataUrl = "https://your-api-endpoint.com/sprint-data";

  return (
    <div>
      <h1>Sprint Data Visualization</h1>
      <SprintVisualization dataUrl={dataUrl} />
    </div>
  );
}
