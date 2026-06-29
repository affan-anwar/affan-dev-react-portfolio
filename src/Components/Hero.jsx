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

        <h2>Frontend Developer | React Developer</h2>

        <p className="hero-description">
          B.E. Computer Science graduate from Khaja Bandanawaz University,
          Kalaburagi. I build clean and responsive web applications using
          HTML5, CSS3, JavaScript and React.js.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-button">View Projects</a>
          <a href={resumeUrl} target="_blank" className="secondary-button">View Resume</a>
          <a href={resumeUrl} download className="secondary-button">Download</a>
        </div>

        <div className="social-links">
          <a href="https://github.com/affan-anwar" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/mdaffananwar" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mdaffananwar2025@gmail.com" target="_blank" rel="noreferrer">Email</a>
        </div>
      </div>

      <div className="hero-image">
        <img src={profileImage} alt="MD AFFAN ANWAR" />
      </div>
    </div>
  );
}