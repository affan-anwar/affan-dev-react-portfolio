import skills from "../Data/Skills";

export default function Skills() {
  const scrollingSkills = [...skills, ...skills];

  return (
    <div className="skills-section">
      <p className="section-small-title">MY TECH STACK</p>

      <h2 className="section-title">
        Technical <span>Skills</span>
      </h2>

      <p className="skills-description">
        Frontend, backend, database, GenAI, testing and DevOps technologies I
        use to build modern web applications.
      </p>

      <div className="skills-slider">
        <div className="skills-track">
          {scrollingSkills.map(function (skill, index) {
            return (
              <div className="skill-card" key={`${skill.id}-${index}`}>
                <div className="skill-icon">{skill.shortName}</div>

                <p>{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}