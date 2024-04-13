import { useMemo } from "react";
import * as d3 from "d3";
import { useSpring, animated } from "react-spring";
export const CircularPackingDatasetTransition = ({ width, height, data, }) => {
    const hierarchy = useMemo(() => {
        return d3
            .hierarchy(data)
            .sum((d) => d.value)
            .sort((a, b) => b.value - a.value);
    }, [data]);
    const root = useMemo(() => {
        return d3.pack().size([width, height]).padding(4)(hierarchy);
    }, [hierarchy, width, height]);
    return (<svg width={width} height={height} style={{ display: "inline-block" }}>
      {root
            .descendants()
            .slice(1)
            .map((node) => (<AnimatedCircle key={node.data.name} cx={node.x} cy={node.y} r={node.r} stroke="#553C9A" strokeWidth={2} fill="#B794F4" fillOpacity={0.2}/>))}
      {root
            .descendants()
            .slice(1)
            .map((node) => (<AnimatedText key={node.data.name} x={node.x} y={node.y} fontSize={13} fontWeight={0.4} textAnchor="middle" alignmentBaseline="middle">
            {node.data.name}
          </AnimatedText>))}
    </svg>);
};
const AnimatedCircle = ({ cx, cy, r, ...props }) => {
    const animatedProps = useSpring({
        cx,
        cy,
        r,
    });
    return (<animated.circle {...props} r={animatedProps.r} cx={animatedProps.cx} cy={animatedProps.cy}/>);
};
const AnimatedText = ({ x, y, ...props }) => {
    const animatedProps = useSpring({
        x,
        y,
    });
    return (<animated.text {...props} x={animatedProps.x} y={animatedProps.y}/>);
};
