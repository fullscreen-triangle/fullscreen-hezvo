import React, { useState, useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as d3 from "d3";

gsap.registerPlugin(ScrollTrigger);

const SubTenGlobeStory = () => {
  const globeEl = useRef();
  const chartRef = useRef();
  const [countries, setCountries] = useState({ features: [] });
  const [athleteData, setAthleteData] = useState([]);
  const [altitude, setAltitude] = useState(0.1);
  const [transitionDuration, setTransitionDuration] = useState(1000);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson"
    )
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setTimeout(() => {
          setTransitionDuration(4000);
          setAltitude(
            () => (feat) =>
              Math.max(0.1, Math.sqrt(+feat.properties.POP_EST) * 7e-5)
          );
        }, 3000);
      });

    fetch("https://your-athlete-data-url.com/data.json")
      .then((res) => res.json())
      .then((data) => {
        setAthleteData(data.features);
      });
  }, []);

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.3;
      globeEl.current.pointOfView({ altitude: 4 }, 5000);
    }
  }, []);

  useEffect(() => {
    if (athleteData.length > 0 && countries.features.length > 0) {
      createScatterPlot();
      setupScrollAnimations();
    }
  }, [athleteData, countries]);

  const createScatterPlot = () => {
    const svgWidth = 700;
    const svgHeight = 500;
    const circleRad = 10;

    const svg = d3
      .select(chartRef.current)
      .attr("width", svgWidth)
      .attr("height", svgHeight);

    const g = svg.append("g");

    const timeScale = d3
      .scaleTime()
      .domain(d3.extent(athleteData, (d) => new Date(d.properties.Date)))
      .range([circleRad, svgWidth - circleRad]);

    const circles = g
      .selectAll("circle")
      .data(athleteData)
      .join("circle")
      .attr("class", "points")
      .attr("r", 0)
      .attr("cx", () => Math.random() * svgWidth)
      .attr("cy", () => Math.random() * svgHeight)
      .style("fill", (d) => getColorByContinent(d.properties.Continent))
      .style("opacity", 0.7);

    gsap.to(".points", {
      attr: { r: () => Math.random() * 20 },
      duration: 0.5,
      ease: "power3.out",
    });
  };

  const setupScrollAnimations = () => {
    gsap.utils.toArray(".step").forEach((step, index) => {
      ScrollTrigger.create({
        trigger: step,
        start: "top 80%",
        end: "center top",
        onEnter: () => updateVisualization(index),
        onEnterBack: () => updateVisualization(index),
        markers: true,
      });
    });
  };

  const updateVisualization = (step) => {
    switch (step) {
      case 0:
        updateGlobeByAverageAge();
        updateScatterPlotByAge();
        break;
      case 1:
        updateGlobeByAverageBestTime();
        updateScatterPlotByBestTime();
        break;
      case 2:
        updateGlobeBySubTenAthletes();
        updateScatterPlotBySubTen();
        break;
      default:
        break;
    }
  };

  const updateGlobeByAverageAge = () => {
    const avgAgeByCountry = d3.rollup(
      athleteData,
      (v) => d3.mean(v, (d) => parseInt(d.properties.Age)),
      (d) => d.properties.Nationality
    );

    setAltitude(() => (feat) => {
      const avgAge = avgAgeByCountry.get(feat.properties.NAME) || 0;
      return Math.max(0.1, avgAge * 0.01);
    });
  };

  const updateScatterPlotByAge = () => {
    gsap.to(".points", {
      attr: {
        cy: (d) => {
          const age = parseInt(d.properties.Age);
          return 500 - age * 10;
        },
      },
      duration: 1,
      ease: "power3.inOut",
    });
  };

  const updateGlobeByAverageBestTime = () => {
    const avgBestTimeByCountry = d3.rollup(
      athleteData,
      (v) => d3.mean(v, (d) => parseFloat(d.properties["Time\n0(seconds)"])),
      (d) => d.properties.Nationality
    );

    setAltitude(() => (feat) => {
      const avgBestTime = avgBestTimeByCountry.get(feat.properties.NAME) || 0;
      return Math.max(0.1, (10 - avgBestTime) * 0.1);
    });
  };

  const updateScatterPlotByBestTime = () => {
    gsap.to(".points", {
      attr: {
        cy: (d) => {
          const bestTime = parseFloat(d.properties["Time\n0(seconds)"]);
          return bestTime * 50;
        },
      },
      duration: 1,
      ease: "power3.inOut",
    });
  };

  const updateGlobeBySubTenAthletes = () => {
    const subTenAthletesByCountry = d3.rollup(
      athleteData,
      (v) =>
        v.filter((d) => parseFloat(d.properties["Time\n0(seconds)"]) < 10)
          .length,
      (d) => d.properties.Nationality
    );

    setAltitude(() => (feat) => {
      const subTenCount =
        subTenAthletesByCountry.get(feat.properties.NAME) || 0;
      return Math.max(0.1, subTenCount * 0.05);
    });
  };

  const updateScatterPlotBySubTen = () => {
    gsap.to(".points", {
      attr: {
        r: (d) => (parseFloat(d.properties["Time\n0(seconds)"]) < 10 ? 15 : 5),
      },
      duration: 1,
      ease: "power3.inOut",
    });
  };

  const getColorByContinent = (continent) => {
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);
    return colorScale(continent);
  };

  return (
    <div>
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        polygonsData={countries.features.filter(
          (d) => d.properties.ISO_A2 !== "AQ"
        )}
        polygonAltitude={altitude}
        polygonCapColor={() => "rgba(200, 0, 0, 0.6)"}
        polygonSideColor={() => "rgba(0, 100, 0, 0.15)"}
        polygonLabel={({ properties: d }) => `
          <b>${d.ADMIN} (${d.ISO_A2})</b> <br />
          Population: <i>${Math.round(+d.POP_EST / 1e4) / 1e2}M</i>
        `}
        polygonsTransitionDuration={transitionDuration}
      />
      <svg ref={chartRef}></svg>
      <div className="step">Step 1: Average Age</div>
      <div className="step">Step 2: Average Best Time</div>
      <div className="step">Step 3: Sub-10 Athletes</div>
    </div>
  );
};

export default SubTenGlobeStory;
