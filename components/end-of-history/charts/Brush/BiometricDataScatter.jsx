import * as React from "react";
import axios from "axios";
import ScatterplotWithBrushAndZoom from "./ScatterplotWithBrushAndZoom";

const BiometricDataScatter = ({ event = "100 metres", dataUrl }) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(dataUrl);
        const filteredData = response.data.filter(
          (item) => item.Event === `Athletics Men's ${event}`
        );
        setData(filteredData);
        setLoading(false);
      } catch (err) {
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchData();
  }, [dataUrl, event]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const formatData = (accessor) => {
    return data
      .map((d, i) => ({
        id: i,
        x: d.Year,
        y: accessor(d),
      }))
      .filter((d) => d.y !== null && !isNaN(d.y));
  };

  const ageData = formatData((d) => d.Age);
  const heightData = formatData((d) => d.Height);
  const weightData = formatData((d) => d.Weight);
  const medalData = formatData((d) => (d.Medal === 0 ? 0 : 1));

  return (
    <div
      className="flex container resize overflow-hidden p5 bg-darkblack-600 antialised"
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}
    >
      <div className="mb-5 flex items-center justify-between">
        <h4 className="text-base xl:text-2xl text-white font-bold">
          Age vs Year
        </h4>
        <ScatterplotWithBrushAndZoom
          data={ageData}
          width={400}
          height={300}
          color="#0bb"
          mode="zoom"
        />
      </div>
      <div>
        <h4 className="text-base xl:text-2xl text-white font-bold">
          Height vs Year
        </h4>
        <ScatterplotWithBrushAndZoom
          data={heightData}
          width={400}
          height={300}
          color="#c0c"
          mode="zoom"
        />
      </div>
      <div className="mb-5 flex items-center justify-between">
        <h4 className="text-base xl:text-2xl text-white font-bold">
          Weight vs Year
        </h4>
        <ScatterplotWithBrushAndZoom
          data={weightData}
          width={400}
          height={300}
          color="#cc0"
          mode="zoom"
        />
      </div>
      <div className="mb-5 flex items-center justify-between">
        <h4 className="text-base xl:text-2xl text-white font-bold">
          Medal Status vs Year
        </h4>
        <ScatterplotWithBrushAndZoom
          data={medalData}
          width={400}
          height={300}
          color="#f00"
          mode="zoom"
        />
      </div>
    </div>
  );
};

export default BiometricDataScatter;
