import profileImage from "../assets/images/profile.jpg";

export default function Hero() {
  const resumeUrl = `${import.meta.env.BASE_URL}resume/MDAFFANANWAR_Resume.pdf`;

  return (
    <div className="hero">
      <div className="hero-content">
        <p className="available-text">Available for opportunities</p>

        <h1>
          MD <span>AFFAN</span>
          <br />
          ANWAR
        </h1>

        <h2>
          Software Engineer | React.js Developer | Frontend Developer
        </h2>

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
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            View Resume
          </a>

          <a href={resumeUrl} download className="secondary-button">
            Download
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/affan-anwar"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/mdaffananwar"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=mdaffananwar2025@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Email
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={profileImage} alt="MD AFFAN ANWAR" />
      </div>
    </div>
  );
}