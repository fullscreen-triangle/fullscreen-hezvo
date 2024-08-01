import { Correlogram } from "../components/Correlogram";

export default function Correlation({ data, width = 700, height = 400 }) {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return <Correlogram data={data} width={width} height={height} />;
}

export async function getServerSideProps() {
  try {
    // Replace this URL with the actual URL of your data file
    const response = await fetch("/data/iaafrecords.json");
    const jsonData = await response.json();

    const processedData = jsonData.map((item) => ({
      var1: item.Mark,
      var2: item.WIND,
      var3: calculateAge(item.DOB, item.Date),
      var4: item["Results Score"],
      group: item.Competitor,
    }));

    return {
      props: { data: processedData },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { data: [] },
    };
  }
}

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
