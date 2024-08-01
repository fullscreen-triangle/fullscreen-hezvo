import React, { Component } from "react";
import * as d3 from "d3";

const width = 960;
const height = 500;
const margin = { top: 20, right: 20, bottom: 30, left: 40 };

class MultiChart extends Component {
  state = {
    data: [],
    range: [],
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await fetch("URL_TO_YOUR_DATASET");
      const data = await response.json();
      this.setState({ data }, this.processData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  processData = () => {
    const { data } = this.state;
    data.forEach((d) => {
      d.Date = new Date(d.Date.split(".").reverse().join("-"));
      d.Time = parseFloat(d.Time);
      d.Wind = parseFloat(d.Wind);
      d.Age = this.calculateAge(d.DOB, d.Date);
    });
    this.setState({ data }, this.createCharts);
  };

  calculateAge = (dob, date) => {
    const birthDate = new Date(dob.split(".").reverse().join("-"));
    const ageDifMs = date - birthDate;
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  createCharts = () => {
    this.createLineChart();
    this.createRadialChart();
    this.createWindBarChart();
    this.createAgeBarChart();
    this.createNationalityBarChart();
  };

  createLineChart = () => {
    const { data } = this.state;
    const svg = d3.select(this.lineChart);
    svg.selectAll("*").remove();

    const x = d3
      .scaleTime()
      .domain(d3.extent(data, (d) => d.Date))
      .range([margin.left, width - margin.right]);

    const y = d3
      .scaleLinear()
      .domain([d3.min(data, (d) => d.Time), d3.max(data, (d) => d.Time)])
      .range([height - margin.bottom, margin.top]);

    const line = d3
      .line()
      .x((d) => x(d.Date))
      .y((d) => y(d.Time));

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", line);

    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x));

    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));

    // Add brush
    const brush = d3
      .brushX()
      .extent([
        [margin.left, margin.top],
        [width - margin.right, height - margin.bottom],
      ])
      .on("end", this.brushed);

    svg.append("g").attr("class", "brush").call(brush);
  };

  createRadialChart = () => {
    const { data } = this.state;
    const svg = d3.select(this.radialChart);
    svg.selectAll("*").remove();

    const radius = Math.min(width, height) / 2 - margin.top;

    const x = d3
      .scaleBand()
      .range([0, 2 * Math.PI])
      .align(0)
      .domain(data.map((d) => d3.timeDay.count(d3.timeYear(d.Date), d.Date)));

    const y = d3
      .scaleRadial()
      .range([radius * 0.1, radius])
      .domain([0, d3.max(data, (d) => d.Time)]);

    const arc = d3
      .arc()
      .innerRadius((d) => y(d.Time))
      .outerRadius(y(0))
      .startAngle((d) => x(d3.timeDay.count(d3.timeYear(d.Date), d.Date)))
      .endAngle(
        (d) => x(d3.timeDay.count(d3.timeYear(d.Date), d.Date)) + x.bandwidth()
      )
      .padAngle(0.01)
      .padRadius(radius);

    const g = svg
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    g.selectAll("path")
      .data(data)
      .enter()
      .append("path")
      .attr("fill", "steelblue")
      .attr("d", arc);
  };

  createWindBarChart = () => {
    const { data } = this.state;
    const svg = d3.select(this.windBarChart);
    svg.selectAll("*").remove();

    const x = d3
      .scaleBand()
      .range([margin.left, width - margin.right])
      .padding(0.1)
      .domain(data.map((d) => d.Wind));

    const y = d3
      .scaleLinear()
      .range([height - margin.bottom, margin.top])
      .domain([0, d3.max(data, (d) => d.Time)]);

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d) => x(d.Wind))
      .attr("y", (d) => y(d.Time))
      .attr("width", x.bandwidth())
      .attr("height", (d) => height - margin.bottom - y(d.Time))
      .attr("fill", "steelblue");

    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x));

    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));
  };

  createAgeBarChart = () => {
    const { data } = this.state;
    const svg = d3.select(this.ageBarChart);
    svg.selectAll("*").remove();

    const x = d3
      .scaleBand()
      .range([margin.left, width - margin.right])
      .padding(0.1)
      .domain(data.map((d) => d.Age));

    const y = d3
      .scaleLinear()
      .range([height - margin.bottom, margin.top])
      .domain([0, d3.max(data, (d) => d.Time)]);

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d) => x(d.Age))
      .attr("y", (d) => y(d.Time))
      .attr("width", x.bandwidth())
      .attr("height", (d) => height - margin.bottom - y(d.Time))
      .attr("fill", "steelblue");

    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x));

    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));
  };

  createNationalityBarChart = () => {
    const { data } = this.state;
    const svg = d3.select(this.nationalityBarChart);
    svg.selectAll("*").remove();

    const nationalityCounts = d3.rollup(
      data,
      (v) => v.length,
      (d) => d.Nationality
    );
    const nationalityData = Array.from(nationalityCounts, ([key, value]) => ({
      Nationality: key,
      Count: value,
    }));

    const x = d3
      .scaleBand()
      .range([margin.left, width - margin.right])
      .padding(0.1)
      .domain(nationalityData.map((d) => d.Nationality));

    const y = d3
      .scaleLinear()
      .range([height - margin.bottom, margin.top])
      .domain([0, d3.max(nationalityData, (d) => d.Count)]);

    svg
      .selectAll("rect")
      .data(nationalityData)
      .enter()
      .append("rect")
      .attr("x", (d) => x(d.Nationality))
      .attr("y", (d) => y(d.Count))
      .attr("width", x.bandwidth())
      .attr("height", (d) => height - margin.bottom - y(d.Count))
      .attr("fill", "steelblue");

    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x));

    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));
  };

  brushed = () => {
    if (!d3.event.selection) {
      this.setState({ range: [] });
      return;
    }
    const [x0, x1] = d3.event.selection.map(d3.scaleTime().invert);
    this.setState({ range: [x0, x1] });
  };

  render() {
    return (
      <div>
        <svg
          ref={(el) => (this.lineChart = el)}
          width={width}
          height={height}
        ></svg>
        <svg
          ref={(el) => (this.radialChart = el)}
          width={width}
          height={height}
        ></svg>
        <svg
          ref={(el) => (this.windBarChart = el)}
          width={width}
          height={height}
        ></svg>
        <svg
          ref={(el) => (this.ageBarChart = el)}
          width={width}
          height={height}
        ></svg>
        <svg
          ref={(el) => (this.nationalityBarChart = el)}
          width={width}
          height={height}
        ></svg>
      </div>
    );
  }
}

export default MultiChart;
