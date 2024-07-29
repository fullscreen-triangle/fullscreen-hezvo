import { useState, useEffect } from "react";
import { Correlogram } from "./Correlogram";

export default function CorrelogramPage({ width = 700, height = 400 }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/runningData"); // Assuming you'll create this API route
        const jsonData = await response.json();
        const processedData = jsonData.map((item) => ({
          var1: item.Mark,
          var2: item.WIND,
          var3: calculateAge(item.DOB, item.Date),
          var4: item["Results Score"],
          group: item.Competitor,
        }));
        setData(processedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  function calculateAge(dob, eventDate) {
    const birthDate = new Date(dob);
    const raceDate = new Date(eventDate);
    let age = raceDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = raceDate.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && raceDate.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  }

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return <Correlogram data={data} width={width} height={height} />;
}
