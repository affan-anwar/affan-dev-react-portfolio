import portfolioImage from "../assets/images/Affan.Dev.png";
import workMateImage from "../assets/images/WorkMate.png";
import weatherImage from "../assets/images/skycast-weather-app.png";

const projects = [
  {
    id: 1,
    title: "WorkMate - Task Management Application",

    description:
      "A responsive task management application with complete CRUD operations, categories, priorities, Local Storage persistence and real-time progress tracking.",

    technologies: [
      "React.js",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "React Hooks",
      "Local Storage",
    ],

    image: workMateImage,

    liveLink: "https://affan-anwar.github.io/WORKMATE/",

    githubLink: "https://github.com/affan-anwar/WORKMATE",
  },

  {
    id: 2,
    title: "SkyCast - Weather Forecast Web Application",

    description:
      "A responsive weather application using Open-Meteo APIs with city and location search, loading and error handling, and detailed real-time weather information.",

    technologies: [
      "React.js",
      "JavaScript ES6+",
      "Tailwind CSS",
      "Fetch API",
      "Open-Meteo API",
    ],

    image: weatherImage,

    liveLink:
      "https://affan-anwar.github.io/skycast-weather-app/",

    githubLink:
      "https://github.com/affan-anwar/skycast-weather-app",
  },

  {
    id: 3,
    title: "Personal Portfolio Website",

    description:
      "A responsive React portfolio with reusable components, active section navigation and a functional Formspree contact form with loading, success and error states.",

    technologies: [
      "React.js",
      "JavaScript ES6+",
      "CSS3",
      "Vite",
      "Formspree",
    ],

    image: portfolioImage,

    liveLink:
      "https://affan-anwar.github.io/affan-dev-react-portfolio/",

    githubLink:
      "https://github.com/affan-anwar/affan-dev-react-portfolio",
  },
];

export default projects;