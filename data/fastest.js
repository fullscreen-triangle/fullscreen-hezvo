const data = [
  {
    id: 1,
    title: "Asafa Powell",
    slug: "asafa-powell",
    category: ["Most Sub 10s", "1.88m", "87kg"],
    description:
      "Ran the fourth fastest ever recorded legal 100m at 9.72s with a tailwind of 0.2m/s",
    src: "/img/fullscreen/sprint-running/beijing-the-athletes-start-the-mens-100m-semi-final-2-at-the-national-stadium-on-day-8-of-the.jpg",
    overlay: 6,
  },
  {
    id: 2,
    title: "Ben Sinclair Johnson",
    slug: "ben-johnson",
    src: "/img/fullscreen/sprint-running/ben-johnson-from-canada-during-the-100m-sprint-at-the-world-championships-he-was-diqualified.jpg",

    category: ["9.79s", "Maradona", "Seoul", "1.77m", "75kg"],
    description:
      "First and only man to hold 100m and 60m records, and sprint coach to Maradona and Gadaffi.",
    overlay: 6,
  },
  {
    id: 3,
    title: "Frederick Carl Lewis",
    slug: "universal-acclaim",
    src: "/img/fullscreen/sprint-running/carl-lewis-pirelli.jpg",

    category: ["universal", "intercontinental", "Berlin", "1936"],
    description:
      "The fastest man in the world had become a certified global icon",
    overlay: 6,
  },
  {
    id: 4,
    title: "Tyson Gay",
    slug: "tyson-gay",
    category: ["Tripple", "1.81m", "80kg"],
    src: "/img/fullscreen/sprint-running/gay.jpg",
    description:
      "Posted the second ever fastest legal time in recorded history(9.69s) and illegal time(9.68s) and the second man to win a tripple at the World Championships.",
    overlay: 2,
  },
  {
    id: 5,
    title: "Donovan Bailey",
    slug: "athletics-technic",
    src: "/img/fullscreen/sprint-running/ato-boldon-of-trinidad-and-tobago-wears-oakley-sunglasses-september-29-2000-during-the-mens-4x100m.jpg",

    category: ["Biomechanics", "Biochemistry", "Time-keeping"],
    description:
      "Excessive overindulgence in the use of technology for speed and clearer broadcast.",
    overlay: 5,
  },
  {
    id: 6,
    title: "End Of History",
    slug: "end-of-history",
    category: ["End of History", "Usain Bolt", "2008-2016", "The Limit"],
    src: "/img/fullscreen/sprint-running/1.jpg",
    description: "No man, begotten from a woman, shall outshine Bolt.",
    overlay: 4,
  },
];

export const getPortfolioData = () => data;

export const getPortfolioItem = (value, whereName = "slug") => {
  return data.find((item) => item[whereName] === value);
};
export const getPortfolioLink = (item) => {
  if (item) return item.slug && "/portfolio/" + item.slug;

  return "";
};
