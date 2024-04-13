// servicesDetails.js
const allTimesDetails = [
  {
    chartConfig: {
      series: [
        {
          name: "Series 1",
          data: [30, 40, 45, 50],
        },
      ],
      options: {
        chart: {
          id: "chart1",
          toolbar: {
            autoSelected: "pan",
            show: false,
          },
          offsetX: 0,
          offsetY: 0,
          zoom: {
            enabled: false,
          },
          sparkline: {
            enabled: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          width: 2,
        },
        colors: ["#00EBFF"],
        tooltip: {
          theme: "light",
        },
        grid: {
          show: false,
          padding: {
            left: 0,
            right: 0,
          },
        },
        yaxis: {
          show: false,
        },
        fill: {
          type: "solid",
          opacity: [0.1],
        },
        legend: {
          show: false,
        },
        xaxis: {
          low: 0,
          offsetX: 0,
          offsetY: 0,
          show: false,
          labels: {
            low: 0,
            offsetX: 0,
            show: false,
          },
          axisBorder: {
            low: 0,
            offsetX: 0,
            show: false,
          },
        },
        // Other global options
      },
    },
    title: "Creative Idea",
    description: "Description for Creative Idea.",
  },
  {
    chartConfig: {
      series: [
        {
          name: "Series 1",
          data: [800, 600, 1000, 800, 600, 1000, 800, 900],
        },
      ],
      options: {
        chart: {
          id: "chart2",
          toolbar: {
            autoSelected: "pan",
            show: false,
          },
          offsetX: 0,
          offsetY: 0,
          zoom: {
            enabled: false,
          },
          sparkline: {
            enabled: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          width: 2,
        },
        colors: ["#00EBFF"],
        tooltip: {
          theme: "light",
        },
        grid: {
          show: false,
          padding: {
            left: 0,
            right: 0,
          },
        },
        yaxis: {
          show: false,
        },
        fill: {
          type: "solid",
          opacity: [0.1],
        },
        legend: {
          show: false,
        },
        xaxis: {
          low: 0,
          offsetX: 0,
          offsetY: 0,
          show: false,
          labels: {
            low: 0,
            offsetX: 0,
            show: false,
          },
          axisBorder: {
            low: 0,
            offsetX: 0,
            show: false,
          },
        },
        // Options specific to this chart...
      },
    },
    title: "Another Service",
    description: "Description for Another Service.",
  },
  // Other entries...
];

export const getallTimesDetailsData = () => allTimesDetails;
