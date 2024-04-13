import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import * as d3 from "d3";
import "mapbox-gl/dist/mapbox-gl.css";

const BerlinMap = () => {
  const mapContainer = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    // Set up map
    mapboxgl.accessToken =
      "pk.eyJ1Ijoiam9yZGl0b3N0IiwiYSI6ImQtcVkyclEifQ.vwKrOGZoZSj3N-9MB6FF_A";
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/outdoors-v9",
      zoom: 11.5,
      center: [13.4426, 52.51],
    });

    // Mapbox + D3 Connection
    const canvas = map.getCanvasContainer();
    const svg = d3.select(canvas).append("svg");
    svgRef.current = svg;

    // Load map and dataset
    map.on("load", () => {
      d3.json("data/berlin-parks.json", (err, data) => {
        drawData(data);
      });
    });

    // Project GeoJSON coordinate to the map's current state
    function project(d) {
      return map.project(new mapboxgl.LngLat(+d[0], +d[1]));
    }

    // D3 stuff
    let circles;

    function drawData(data) {
      console.log("draw data");

      // Add circles
      circles = svg
        .selectAll("circle")
        .data(data.features)
        .enter()
        .append("circle")
        .attr("r", 16)
        .on("click", function (d) {
          alert(d.properties.name);
        });

      // Call the update function
      update();

      // Update on map interaction
      map.on("viewreset", function () {
        update(0);
      });
      map.on("move", function () {
        update(0);
      });
      map.on("moveend", function () {
        update(0);
      });
    }

    // Update function
    function update(transitionTime) {
      // Default value = 0
      transitionTime =
        typeof transitionTime !== "undefined" ? transitionTime : 0;

      // Map view
      svg
        .selectAll("circle")
        .transition()
        .duration(transitionTime)
        .attr("cx", function (d) {
          return project(d.geometry.coordinates).x;
        })
        .attr("cy", function (d) {
          return project(d.geometry.coordinates).y;
        });
    }

    function setMapOpacity(value) {
      d3.selectAll(".mapboxgl-canvas")
        .transition()
        .duration(500)
        .style("opacity", value);

      d3.selectAll(".mapboxgl-control-container")
        .transition()
        .duration(500)
        .style("opacity", value);
    }

    function showMap() {
      setMapOpacity(1);

      // Enable map interaction
      map.doubleClickZoom.enable();
      map.scrollZoom.enable();
      map.dragPan.enable();
    }

    function hideMap() {
      setMapOpacity(0.1);

      // Disable map interaction
      map.doubleClickZoom.disable();
      map.scrollZoom.disable();
      map.dragPan.disable();
    }

    // Toggle
    let view = "map";

    function toggleViews() {
      // Toggle active view
      if (view === "map") {
        view = "grid";
        hideMap();
      } else if (view === "grid") {
        view = "map";
        showMap();
      }

      update(500);
    }

    // Cleanup
    return () => map.remove();
  }, []);

  return (
    <div>
      <div ref={mapContainer} style={{ height: "400px" }} />
      <button onClick={toggleViews}>Toggle Views</button>
    </div>
  );
};

export default BerlinMap;
