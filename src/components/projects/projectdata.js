import MovieList from "../../assets/MovieList.png";
import Maharaja from "../../assets/Maharaja.png";
import StoreX from "../../assets/StoreX.png";
import WidgetHub from "../../assets/WidgetHub.png";
import Documentation from "../../assets/Documentation.png";
import OsloDashBoard from "../../assets/Oslo_DashBoard.png";
import HealthCareDashBoard from "../../assets/Healthcare_Dasbhoard.png";

const projectData = [
  {
    id: 1,
    title: "WidgetHub",
    img: WidgetHub,
    github: "https://github.com/72umesh/WidgetHub",
    demo: "https://72umesh.github.io/WidgetHub/#/",
    stack: "React, SCSS, Framer Motion",
    description:
      "A React-based showcase of interactive UI components and mini-projects, all in one place.",
  },
  {
    id: 2,
    title: "MovieList",
    img: MovieList,
    github: "https://github.com/72umesh/MovieList/",
    demo: "https://72umesh.github.io/MovieList/",
    stack: "React, CSS, REST API",
    description:
      "A responsive React movie app with search, pagination, and a Favorites page using Hooks and an external API.",
  },
  {
    id: 3,
    title: "Maharaja",
    img: Maharaja,
    github: "https://github.com/72umesh/Maharaja-Restaurant",
    demo: "https://72umesh.github.io/Maharaja-Restaurant/",
    stack: "React, CSS",
    description:
      "Developed a visually appealing and fully responsive restaurant website, using React and styled with CSS",
  },
  // {
  //   id: 4,
  //   title: "StoreX",
  //   img: StoreX,
  //   github: "https://github.com/72umesh/StoreX",
  //   demo: "https://72umesh.github.io/StoreX",
  //   stack: "React, CSS, JavaScript",
  //   description:
  //     "Designed a responsive Bootstrap product page with seamless navigation and dedicated sections.",
  // },
  // {
  //   id: 5,
  //   title: "Documentation Page",
  //   img: Documentation,
  //   github: "https://github.com/72umesh/Documentation-Page",
  //   demo: "https://72umesh.github.io/Documentation-Page/",
  //   stack: "HTML, CSS",
  //   description:
  //     "A simple documentation page that explains DaVinci Resolve’s features and interface for beginners.",
  // },
];
const dashboardData = [
  {
    id: 1,
    title: "HealthCare Dashboard",
    img: HealthCareDashBoard,
    github: "https://github.com/72umesh/Healthcare-Dashboard",
    demo: "https://72umesh.github.io/Healthcare-Dashboard/",
    description:
      "React.js dashboard for tracking health metrics, schedules, and activities.",
  },
  {
    id: 2,
    title: "Oslo Dashboard",
    img: OsloDashBoard,
    github: "https://github.com/72umesh/Zi_Cloud_Oslo_Dashboard",
    demo: "https://72umesh.github.io/Zi_Cloud_Oslo_Dashboard/",
    description: "CRM dashboard for chats, campaigns, and lead management.",
  },
];
export { projectData, dashboardData };
