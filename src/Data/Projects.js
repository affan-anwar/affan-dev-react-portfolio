import portfolioImage from "../assets/images/Affan.Dev.png";
import workMateImage from "../assets/images/WorkMate.png";
import weatherImage from "../assets/images/skycast-weather-app.png";

const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description:
      "A responsive portfolio website created to showcase my skills, projects, experience and contact details.",
    technologies: ["React.js", "JavaScript", "CSS3", "Vite"],
    image: portfolioImage,
    liveLink: "https://affan-anwar.github.io/affan-dev-react-portfolio/",
    githubLink: "https://github.com/affan-anwar/affan-dev-react-portfolio",
  },

  {
    id: 2,
    title: "WorkMate - Task Management Application",
    description:
      "A task management application where users can add, delete and mark tasks as completed with priority and category selection.",
    technologies: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "LocalStorage",
    ],
    image: workMateImage,
    liveLink: "https://affan-anwar.github.io/WORKMATE/",
    githubLink: "https://github.com/affan-anwar/WORKMATE",
  },

  {
    id: 3,
    title: "SkyCast - Weather Forecast App",
    description:
      "A weather application that displays temperature, humidity, wind speed and current weather conditions for any searched city.",
    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "REST API",
    ],
    image: weatherImage,
    liveLink: "https://affan-anwar.github.io/skycast-weather-app/",
    githubLink: "https://github.com/affan-anwar/skycast-weather-app",
  },
];

export default projects;