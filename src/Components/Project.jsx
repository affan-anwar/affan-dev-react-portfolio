import projects from "../Data/Projects";

export default function Project() {
  return (
    <div className="projects-section">
      <p className="section-small-title">WHAT I BUILT</p>
      <h2 className="section-title">
        My <span>Projects</span>
      </h2>

      <div className="projects-container">
        {projects.map(function (project) {
          return (
            <div className="project-card" key={project.id}>
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              )}

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="technology-list">
                  {project.technologies.map(function (technology) {
                    return (
                      <span key={technology} className="technology">
                        {technology}
                      </span>
                    );
                  })}
                </div>

                <div className="project-links">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Project
                    </a>
                  )}

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}