import React from "react";
import ServiceGrid from "@/components/services/Service"; // Or however you import this
import { getAllTimesData } from "@/data/allTimes";

const AllTimesGrid = ({ className, ...restProps }) => {
  // Fetches and passes the data with chartConfig to the ServiceGrid
  const data = getAllTimesData().slice(0, 4);

  return (
    <ServiceGrid
      col={2}
      colTablet={2}
      colMobile={1}
      className={className}
      data={data}
      backgroundColor={"background-section"}
      styleBox={"corner"}
      {...restProps}
    />
  );
};

export default AllTimesGrid;
