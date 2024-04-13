import React, { useState, useEffect } from "react";
import MapGL, { Source, Layer } from "react-map-gl";
import ControlPanel from "./control-panel";
import { heatmapLayer } from "./map-style";
import LineChart from "./LineChart"; // Import the LineChart component
import BarChart from "./BarChart"; // Import the BarChart component
import ScatterPlot from "./ScatterPlot"; // Import the ScatterPlot component

const MAPBOX_TOKEN = "YOUR_MAPBOX_TOKEN";

export default function App() {
  const [selectedTime, setSelectedTime] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch or calculate your dataset here, for demo purposes let's assume it's already available
    setData(yourInitialDataset);
  }, []);

  // This example assumes your dataset filtering logic by time is already defined
  const filteredData = data.filter((item) => {
    // Example filtering logic based on selectedTime
    // Convert item.date and selectedTime to comparable formats as needed
    return new Date(item.date).getTime() === selectedTime;
  });

  const handleSliderChange = (newTime) => {
    setSelectedTime(newTime);
    // Optionally filter your data here or in the render body based on newTime
  };

  return (
    <>
      <MapGL
        initialViewState={{
          latitude: 40,
          longitude: -100,
          zoom: 3,
        }}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        {/* Map layers and other components */}
      </MapGL>
      <ControlPanel
        selectedTime={selectedTime}
        onChangeTime={handleSliderChange}
        // Pass other necessary props to the ControlPanel
      />
      {/* Pass the filteredData to each chart component */}
      <LineChart data={filteredData} {...otherProps} />
      <BarChart data={filteredData} {...otherProps} />
      <ScatterPlot data={filteredData} {...otherProps} />
    </>
  );
}
