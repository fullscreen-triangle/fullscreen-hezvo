import { numData, geoData } from "./data";
import { Choropleth } from "./Choropleth";
export const AveragesChoropleth = ({ width = 700, height = 400 }) => {
  if (width === 0) {
    return null;
  }
  return (
    <Choropleth
      geoData={geoData}
      numData={numData}
      width={width}
      height={height}
    />
  );
};
