import * as React from "react";
import { randomNormal } from "d3-random";
import { range } from "d3-array";
import Scatterplot from "./Scatterplot";
import ScatterplotWithBrushAndZoom from "./ScatterplotWithBrushAndZoom";
import "./styles.css";

const rng = randomNormal(0, 0.15);
const numPoints = 500;
const data = range(numPoints).map((i) => ({ id: i, x: rng(), y: rng() }));

export default function App() {
  const [mode, setMode] = React.useState("brush");
  return (
    <div className="App">
      <div
        style={{
          gridTemplateColumns: "300px 300px",
          display: "grid",
          gap: "24px",
        }}
      >
        <div>
          <h4>Hoverable</h4>
          <Scatterplot data={data} width={300} height={300} />
        </div>
        <div>
          <h4>Zoomable</h4>
          <ScatterplotWithBrushAndZoom
            data={data}
            width={300}
            height={300}
            color="#0bb"
          />
        </div>
        <div>
          <h4>Brushable</h4>
          <ScatterplotWithBrushAndZoom
            data={data}
            width={300}
            height={300}
            color="#c0c"
          />
        </div>
        <div>
          <h4>
            <label>
              <input
                type="radio"
                name="mode"
                value="brush"
                checked={mode === "brush"}
                onChange={(evt) => setMode(evt.target.value)}
              />
              Brush/Zoom
            </label>{" "}
            +
            <label>
              <input
                type="radio"
                name="mode"
                value="zoom"
                checked={mode === "zoom"}
                onChange={(evt) => setMode(evt.target.value)}
              />
              Pan/Zoom
            </label>
          </h4>
          <ScatterplotWithBrushAndZoom
            data={data}
            width={300}
            height={300}
            mode={mode}
            color="#cc0"
          />
        </div>
      </div>
    </div>
  );
}
