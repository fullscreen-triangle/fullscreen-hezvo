import { useMemo } from "react";
import * as d3 from "d3";

// Custom hook to transform flat data into a hierarchical structure
function useHierarchy(data, groupByFns) {
  return useMemo(() => {
    // Group data by provided functions
    const groupedData = d3.groups(data, ...groupByFns);

    // Recursive function to build hierarchy
    const buildHierarchy = (grouped, level = 0) => ({
      name: level === 0 ? "root" : grouped[0], // Use 'root' for the top level
      children:
        grouped[1] instanceof Map
          ? Array.from(grouped[1], (childGroup) =>
              buildHierarchy(childGroup, level + 1),
            )
          : grouped[1].map((item) => ({
              // Assuming 'name' and 'value' are desired properties at the leaf level
              name: item.Name,
              value: 1, // Or derive a value based on item properties
            })),
    });

    // Convert grouped data into a hierarchy-friendly format
    const hierarchyRoot = {
      name: "root",
      children: groupedData.map((group) => buildHierarchy(group)),
    };

    // Create a d3 hierarchy
    const root = d3
      .hierarchy(hierarchyRoot)
      .sum((d) => d.value) // Ensure leaf nodes have a 'value' property
      .sort((a, b) => b.value - a.value);

    return root;
  }, [data, groupByFns]);
}

export default useHierarchy;
