import profileImage from "../assets/images/profile.jpg";
import resumeFile from "../assets/resume/MDAFFANANWAR_Resume.pdf?url";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <p className="available-text">Available for opportunities</p>

        <h1>
          MD <span>AFFAN</span>
          <br />
          ANWAR
        </h1>

        <h2>Software Engineer | React.js Developer | Frontend Developer</h2>

        <p className="hero-description">
          Software Engineer with 1+ year of hands-on experience building modern
          web applications using React.js, JavaScript, Python, FastAPI and
          PostgreSQL, with exposure to REST APIs, Agile development and GenAI.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-button">
            View Projects
          </a>

          <a
            href={resumeFile}
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-button"
          >
            View Resume
          </a>

          <a
            href={resumeFile}
            download="MDAFFANANWAR_Resume.pdf"
            className="secondary-button"
          >
            Download Resume
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/affan-anwar"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/mdaffananwar"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:affananwar63@gmail.com">Email</a>
        </div>
      </div>

      <div className="hero-image">
        <img src={profileImage} alt="MD AFFAN ANWAR" />
      </div>
    </div>
  );
}