import React, { useState, useEffect, useMemo } from "react";
import Map, { Source, Layer } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN = "YOUR_MAPBOX_ACCESS_TOKEN"; // Set your Mapbox access token here

function ControlPanel({ year, onChange, yearRange }) {
  return (
    <div className="control-panel">
      <label>Year</label>
      <select value={year} onChange={(e) => onChange(e.target.value)}>
        {yearRange.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function App() {
  const [year, setYear] = useState("");
  const [allData, setAllData] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch your dataset
    fetch("URL_TO_YOUR_DATASET")
      .then((resp) => resp.json())
      .then((json) => {
        setAllData(json); // Assuming json is the entire GeoJSON dataset
        // Extract years from the dataset to populate the control panel
        const years = new Set(
          json.features.map((feature) => feature.properties.Date.split(" ")[2]),
        );
        setYear([...years][0]); // Set the initial year to the first found year
      })
      .catch((err) => console.error("Could not load data", err));
  }, []);

  useEffect(() => {
    if (!allData) return;

    // Filter the GeoJSON features based on the selected year
    const filteredData = {
      ...allData,
      features: allData.features.filter((feature) =>
        feature.properties.Date.includes(year),
      ),
    };

    setData(filteredData);
  }, [year, allData]);

  // Assuming you have a range of years in your dataset
  const yearRange = useMemo(() => {
    if (!allData) return [];
    return [
      ...new Set(
        allData.features.map(
          (feature) => feature.properties.Date.split(" ")[2],
        ),
      ),
    ];
  }, [allData]);

  return (
    <>
      <ControlPanel year={year} onChange={setYear} yearRange={yearRange} />
      <Map
        initialViewState={{
          latitude: 40,
          longitude: -100,
          zoom: 3,
        }}
        style={{ width: "100%", height: 400 }}
        mapStyle="mapbox://styles/mapbox/light-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        {data && (
          <Source type="geojson" data={data}>
            <Layer
              {...{
                id: "data",
                type: "fill",
                paint: {
                  "fill-color": "#2288ee",
                  "fill-opacity": 0.4,
                },
              }}
            />
          </Source>
        )}
      </Map>
    </>
  );
}
