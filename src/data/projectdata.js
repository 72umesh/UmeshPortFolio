import MovieList from "../assets/MovieList.png";
import Maharaja from "../assets/Maharaja.png";
import StoreX from "../assets/StoreX.png";
import WidgetHub from "../assets/WidgetHub.png";
import Documentation from "../assets/Documentation.png";
import OsloDashBoard from "../assets/Oslo_DashBoard.png";
import HealthCareDashBoard from "../assets/Healthcare_DashBoard.png";
import TripWave from "../assets/Tripwave.png"
import { techMap } from "./technologiesData";

const projectData = [
  // React.js
  {
    id: 1,
    title: "WidgetHub",
    img: WidgetHub,
    github: "https://github.com/72umesh/WidgetHub",
    demo: "https://72umesh.github.io/WidgetHub/#/",
    technologies: ["react", "scss", "framer"],
    description:
      "A React-based showcase of interactive UI components and mini-projects, all in one place.",
    categories: "React.js",
  },
  {
    id: 2,
    title: "MovieList",
    img: MovieList,
    github: "https://github.com/72umesh/MovieList/",
    demo: "https://72umesh.github.io/MovieList/",
    stack: "React, CSS, REST API",
    technologies: ["react", "css",],
    description:
      "A responsive React movie app with search, pagination, and a Favorites page using Hooks and an external API.",
    categories: "React.js"
  },
  {
    id: 3,
    title: "Maharaja",
    img: Maharaja,
    github: "https://github.com/72umesh/Maharaja-Restaurant",
    demo: "https://72umesh.github.io/Maharaja-Restaurant/",
    stack: "React, CSS",
    technologies: ["react", "css"],
    description:
      "Developed a visually appealing and fully responsive restaurant website, using React and styled with CSS",
    categories: "React.js"

  },
  // HTML/CSS

  {
    id: 4,
    title: "StoreX",
    img: StoreX,
    github: "https://github.com/72umesh/StoreX",
    demo: "https://72umesh.github.io/StoreX",
    technologies: ["html", "bootstrap"],
    description:
      "Designed a responsive Bootstrap product page with seamless navigation and dedicated sections.",
    categories: "HTML/CSS"
  },
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

  {
    id: 5,
    title: "TripWave",
    img: TripWave,
    github: "https://github.com/72umesh/TripWave",
    demo: "https://tripwave.vercel.app/",
    technologies: ["nextjs", "typescript", "tailwind"],
    description: "TripWave is a modern travel website that helps users discover destinations, explore trips, and plan journeys with an intuitive interface.",
    categories: "Next.js",
    isNew: true
  }
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
