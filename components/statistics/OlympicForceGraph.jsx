class OlympianVisualizer {
  constructor(svgSelector, dataPath, year, categories) {
    this.svgSelector = svgSelector;
    this.dataPath = dataPath;
    this.year = year;
    this.categories = categories; // e.g., ['Height', 'Weight', 'Age']
    this.svgWidth = 960;
    this.svgHeight = 500;
    this.margin = { top: 20, right: 20, bottom: 30, left: 40 };
  }

  // Load and preprocess data
  loadData() {
    d3.csv(this.dataPath).then((data) => {
      const filteredData = data.filter((d) => d.Year === this.year.toString());
      this.data = filteredData;
      this.drawVisualization();
    });
  }

  // Define scales based on data
  defineScales() {
    this.scales = this.categories.reduce((acc, category) => {
      acc[category] = d3
        .scaleLinear()
        .domain(d3.extent(this.data, (d) => +d[category]))
        .range([5, 20]);
      return acc;
    }, {});
  }

  // Draw circles based on categories
  drawCircles() {
    const svg = d3
      .select(this.svgSelector)
      .attr("width", this.svgWidth)
      .attr("height", this.svgHeight)
      .append("g")
      .attr("transform", `translate(${this.margin.left},${this.margin.top})`);

    this.categories.forEach((category, index) => {
      const xOffset = 300 * index; // Adjust spacing between categories
      svg
        .selectAll(`.${category}-circle`)
        .data(this.data)
        .enter()
        .append("circle")
        .attr("class", `${category}-circle`)
        .attr("cx", (_, i) => xOffset + (i % 10) * 50)
        .attr("cy", (_, i) => Math.floor(i / 10) * 50)
        .attr("r", (d) => this.scales[category](+d[category]))
        .attr("fill", (d) => (d.Medal ? "gold" : "grey"));
    });
  }

  // Main method to draw the visualization
  drawVisualization() {
    this.defineScales();
    this.drawCircles();
  }
}

// Usage
const visualizer = new OlympianVisualizer(
  "#olympian-svg",
  "path/to/olympians.csv",
  2004,
  ["Height", "Weight", "Age"],
);
visualizer.loadData();
