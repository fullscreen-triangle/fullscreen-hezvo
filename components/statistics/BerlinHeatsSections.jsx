import React, { useState, useEffect } from "react";

const initialData = [
  // Your dataset goes here
];

// Function to calculate the percentage of total time spent in each section
const calculatePercentages = (athlete) => ({
  ...athlete,
  t20mPercentage: (
    (parseFloat(athlete.t20m) / parseFloat(athlete.t100m)) *
    100
  ).toFixed(2),
  t40mPercentage: (
    ((parseFloat(athlete.t40m) - parseFloat(athlete.t20m)) /
      parseFloat(athlete.t100m)) *
    100
  ).toFixed(2),
  t60mPercentage: (
    ((parseFloat(athlete.t60m) - parseFloat(athlete.t40m)) /
      parseFloat(athlete.t100m)) *
    100
  ).toFixed(2),
  t80mPercentage: (
    ((parseFloat(athlete.t80m) - parseFloat(athlete.t60m)) /
      parseFloat(athlete.t100m)) *
    100
  ).toFixed(2),
  t100mPercentage: (
    ((parseFloat(athlete.t100m) - parseFloat(athlete.t80m)) /
      parseFloat(athlete.t100m)) *
    100
  ).toFixed(2),
});

// Function to find leaders at each section within each round
const findSectionLeaders = (groupedByRound) => {
  const sections = ["t20m", "t40m", "t60m", "t80m", "t100m"];

  Object.keys(groupedByRound).forEach((round) => {
    const athletes = groupedByRound[round];
    const leaders = sections.reduce((acc, section) => {
      const leader = athletes.reduce(
        (leader, athlete) =>
          parseFloat(athlete[section]) < parseFloat(leader[section])
            ? athlete
            : leader,
        athletes[0],
      );
      acc[section] = leader.FIELD1; // Store the name of the leader for the section
      return acc;
    }, {});

    // Attach leaders information to each athlete for rendering
    athletes.forEach((athlete) => {
      athlete.leaders = sections.map((section) => ({
        section,
        leader: leaders[section],
        isLeader: leaders[section] === athlete.FIELD1,
      }));
    });
  });

  return groupedByRound;
};

const AthletesComponent = () => {
  const [groupedData, setGroupedData] = useState({});

  useEffect(() => {
    const processedData = findSectionLeaders(
      processData(initialData.map(calculatePercentages)),
    );
    setGroupedData(processedData);
  }, []);

  return (
    <div>
      {Object.entries(groupedData).map(([round, athletes]) => (
        <div key={round}>
          <h3>{round}</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Nationality</th>
                <th>t20m (%)</th>
                <th>t40m (%)</th>
                <th>t60m (%)</th>
                <th>t80m (%)</th>
                <th>t100m (%)</th>
                <th>Leaders</th>
              </tr>
            </thead>
            <tbody>
              {athletes.map((athlete, index) => (
                <tr key={index}>
                  <td>{athlete.FIELD1}</td>
                  <td>{athlete.Nationality}</td>
                  <td>
                    {athlete.t20m} ({athlete.t20mPercentage}%)
                  </td>
                  <td>
                    {athlete.t40m} ({athlete.t40mPercentage}%)
                  </td>
                  <td>
                    {athlete.t60m} ({athlete.t60mPercentage}%)
                  </td>
                  <td>
                    {athlete.t80m} ({athlete.t80mPercentage}%)
                  </td>
                  <td>
                    {athlete.t100m} ({athlete.t100mPercentage}%)
                  </td>
                  <td>
                    {athlete.leaders.map(({ section, leader, isLeader }) => (
                      <div key={section}>
                        {section}:{" "}
                        {isLeader ? <strong>{leader}</strong> : leader}
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default AthletesComponent;
