export default function Skills() {
  const skills = [
    { name: "HTML5", shortName: "HTML" },
    { name: "CSS3", shortName: "CSS" },
    { name: "JavaScript", shortName: "JS" },
    { name: "React.js", shortName: "React" },
    { name: "Redux", shortName: "Redux" },
    { name: "Bootstrap", shortName: "BS" },
    { name: "Tailwind CSS", shortName: "TW" },
    { name: "Git", shortName: "Git" },
    { name: "GitHub", shortName: "GH" },
    { name: "Figma", shortName: "Figma" },
    { name: "REST API", shortName: "API" },
    { name: "Vite", shortName: "Vite" },
  ];

  const scrollingSkills = [...skills, ...skills];

  return (
    <div className="skills-section">
      <p className="section-small-title">MY TECH STACK</p>

      <h2 className="section-title">
        Technical <span>Skills</span>
      </h2>

      <p className="skills-description">
        Technologies and tools I use to build responsive web applications.
      </p>

      <div className="skills-slider">
        <div className="skills-track">
          {scrollingSkills.map(function (skill, index) {
            return (
              <div className="skill-card" key={index}>
                <div className="skill-icon">
                  {skill.shortName}
                </div>

                <p>{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}