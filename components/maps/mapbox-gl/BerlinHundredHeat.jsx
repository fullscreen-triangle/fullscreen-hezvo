import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

// Your provided athlete data
const athletes = [
  {
    FIELD1: "Bailey Daniel",
    t20m: "2,99",
    t40m: "4,83",
    t60m: "6,63",
    t80m: "8,42",
    t100m: "10,26",
  },
  {
    FIELD1: "Martina Churandy",
    t20m: "3,06",
    t40m: "4,94",
    t60m: "6,73",
    t80m: "8,47",
    t100m: "10,26",
  },
  {
    FIELD1: "Grueso Daniel",
    t20m: "3,05",
    t40m: "4,92",
    t60m: "6,71",
    t80m: "8,46",
    t100m: "10,27",
  },
  {
    FIELD1: "Mbandjock Martial",
    t20m: "3,08",
    t40m: "4,94",
    t60m: "6,73",
    t80m: "8,48",
    t100m: "10,28",
  },
  {
    FIELD1: "Palacios Rolando",
    t20m: "3,02",
    t40m: "4,90",
    t60m: "6,71",
    t80m: "8,48",
    t100m: "10,28",
  },
  // Include other athletes as necessary
];

// Assuming this is your simplified geojson data structure for points
const geojsonPoints = [
  { distance: "20m", coordinates: [13.239274, 52.515021] },
  { distance: "40m", coordinates: [13.238981, 52.514986] },
  { distance: "60m", coordinates: [13.240075, 52.515098] },
  { distance: "80m", coordinates: [13.240083, 52.515073] },
  { distance: "100m", coordinates: [13.239583, 52.515018] },
];

const BerlinHundredHeat = () => {
  const [viewport, setViewport] = useState({
    latitude: 52.51505, // Central latitude for the initial map view
    longitude: 13.2395, // Central longitude for the initial map view
    zoom: 15,
    width: "100vw",
    height: "100vh",
  });

  const MAPBOX_TOKEN =
    "pk.eyJ1IjoiY2hvbWJvY2hpbm9rb3NvcmFtb3RvIiwiYSI6ImNsYWIzNzN1YzA5M24zdm4xb2txdXZ0YXQifQ.mltBkVjXA6LjUJ1bi7gdRg";

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/chombochinokosoramoto/clsli08bl021m01pe25v8h46w"
      mapboxApiAccessToken={MAPBOX_TOKEN}
      onViewportChange={setViewport}
    >
      {athletes.map((athlete, athleteIndex) => {
        return geojsonPoints.map((point, pointIndex) => {
          const [longitude, latitude] = point.coordinates;
          // Unique key for each marker: athlete name + distance
          const key = `${athlete.FIELD1}-${point.distance}`;
          return (
            <Marker key={key} latitude={latitude} longitude={longitude}>
              <div
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  padding: "5px",
                }}
              >
                {`${athlete.FIELD1}: ${point.distance}`}
              </div>
            </Marker>
          );
        });
      })}
    </ReactMapGL>
  );
};

export default BerlinHundredHeat;
