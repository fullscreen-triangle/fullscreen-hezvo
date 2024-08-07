import React, { useState, useEffect, useMemo } from "react";
import Map, { Source, Layer } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN = "pk.eyJ1IjoiY2hvbWJvY2hpbm9rb3NvcmFtb3RvIiwiYSI6ImNsYWIzNzN1YzA5M24zdm4xb2txdXZ0YXQifQ.mltBkVjXA6LjUJ1bi7gdRg; // Set your Mapbox access token here

function ControlPanel({ year, onChange, yearRange }) {
  return (
    <div className="flex relative grid grid-cols-12 gap-5 rounded p-1 flex items-center rounded-md mx-auto resize bg-slate-800">
      <label className="text-slate-200 text-xs font-normal">Year</label>
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

export default function TimeSlideSub10() {
  const [year, setYear] = useState("");
  const [allData, setAllData] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch your dataset
    fetch("/data/sub10s.geojson")
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
