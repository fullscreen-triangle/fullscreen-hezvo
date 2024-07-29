const data = [
  {
    id: 1,
    title: "The Start",
    slug: "the-start",
    category: ["Inception", "Seoul", "1986"],
    description: "The fastest man in the universe",
    src: "/img/fullscreen/sprint-running/ben-johnson-leads.jpeg",
    overlay: 6,
  },
  {
    id: 2,
    title: "Diaspora",
    slug: "showmanship",
    src: "/img/fullscreen/sprint-running/r-l-bruny-surin-of-canada-raymond-stewart-of-jamaica-silver-medal-winner-frankie-fredericks-of.jpg",

    category: ["Johnson", "Burin", "Bailey", "Christie"],
    description: "The time when only men of Jamaican ancestry won",
    overlay: 6,
  },
  {
    id: 3,
    title: "Watching the Throne",
    slug: "universal-acclaim",
    src: "/img/fullscreen/sprint-running/view-of-athletes-coming-around-the-bend-during-competition-in-the-final-of-the-mens-200-metres.jpg",

    category: ["universal", "intercontinental"],
    description: "Every month brought a new champion",
    overlay: 6,
  },
  {
    id: 4,
    title: "Innovation",
    slug: "over-the-top",
    category: ["Oakley", "Over the Top", "Puma", "Mondo"],
    src: "/img/fullscreen/sprint-running/ato-boldon-oakley.jpeg",
    description: "Application of science in sports",
    overlay: 2,
  },
  {
    id: 5,
    title: "Time before Punctuation",
    slug: "punctuation",
    src: "/img/fullscreen/sprint-running/2004-summer-olympics-usa-justin-gatlin-in-action-winning-during-100m-final-race-at-olympic.jpg",

    category: ["Punctuation", "End of Times"],
    description: "The good times were meant to last forever",
    overlay: 5,
  },
  {
    id: 6,
    title: "End Of History",
    slug: "end-of-history",
    category: ["End of History", "Usain Bolt", "2008-2016", "The Limit"],
    src: "/img/fullscreen/sprint-running/12th-iaaf-world-athletics-championships-day-two.jpg",
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
