"use client";

import dynamic from "next/dynamic";

const Stadium = dynamic(() => import("./Stadium"), {
  ssr: false,
});

const chapters = {
  baker: {
    bearing: 27,
    center: [-0.15591514, 51.51830379],
    zoom: 15.5,
    pitch: 20,
  },
  // ... other chapters
};

const descriptiveSections = [
  {
    id: "baker",
    title: "221b Baker St.",
    content: "November 1895. London is shrouded in fog...",
    chartData: {
      labels: ["Label 1", "Label 2"],
      datasets: [
        {
          label: "Dataset 1",
          data: [10, 20],
          backgroundColor: "rgba(75, 192, 192, 0.6)",
        },
      ],
    },
  },
  // ... other sections
];

const TrackSections = () => {
  return (
    <div className="overflow-hidden fixed container resize mx-auto antialiased justify-text ">
    <Stadium chapters={chapters} descriptiveSections={descriptiveSections} />
    </div>
  );
};

export default TrackSections;
