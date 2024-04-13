const data = [
  {
    id: 1,
    title: "The Start",
    slug: "the-start",
    category: ["Inception", "Athens", "1896"],
    description: "Thomas Burke is the inauguration champion",
    src: "/img/fullscreen/sprint-running/1896-olympic-games-athens-greece-mens-100-metres-the-start-thomas-burke-usa-won-in-12-seconds.jpg",
    overlay: 6,
  },
  {
    id: 2,
    title: "Knight of Dalmatia",
    slug: "showmanship",
    src: "/img/fullscreen/sprint-running/1920-summer-olympics-mens-100m-final-Paddock.jpg",

    category: ["showmenship", "facade", "Antwerp", "1920"],
    description: "The time when sheep and wolves wore the same clothing.",
    overlay: 6,
  },
  {
    id: 3,
    title: "Universal Acclaim",
    slug: "universal-acclaim",
    src: "/img/fullscreen/sprint-running/8-10-1936-berlin-germany-jesse-owens-who-won-four-events-in-the-olympic-games-is-shown-winning.jpg",

    category: ["universal", "intercontinental", "Berlin", "1936"],
    description:
      "The fastest man in the world had become a certified global icon",
    overlay: 6,
  },
  {
    id: 4,
    title: "Decades of Speed",
    slug: "decades-of-speed",
    category: ["Night of Speed", "Sub 10s", "American Domination", "1960-1984"],
    src: "/img/fullscreen/sprint-running/the-us-team-winners-of-the-mens-4x400-metres-relay-at-the-1976-summer-olympics-in-montreal.jpg",
    description:
      "The time when everyone was champion for at least a day, not more.",
    overlay: 2,
  },
  {
    id: 5,
    title: "Vorsprung durch Technik",
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
