import certificateImage from "../assets/images/internship-certificate.jpg";

export default function Experience() {
  return (
    <div className="experience-section">
      <p className="section-small-title">MY JOURNEY</p>

      <h2 className="section-title">
        Experience & <span>Education</span>
      </h2>

      <div className="experience-container">
        <div className="experience-card">
          <div className="experience-year">Jan - Feb 2025</div>
          <div className="experience-content">
            <h3>Internship - AiROBOSOFT</h3>
            <h4>AiROBOSOFT Products and Services LLP</h4>
            <p>
              Completed an internship in Full Stack Software Development,
              gaining hands-on exposure to web development practices.
            </p>
            <ul>
              <li>Worked on web development tasks under guidance</li>
              <li>Learned full stack development fundamentals</li>
              <li>Received internship certification (Reg No: AAS7147)</li>
            </ul>
          </div>
        </div>

        <div className="experience-card">
          <div className="experience-year">2021 - 2025</div>
          <div className="experience-content">
            <h3>Bachelor of Engineering</h3>
            <h4>Computer Science and Engineering</h4>
            <p>Khaja Bandanawaz University, Kalaburagi</p>
          </div>
        </div>
      </div>

      <div className="certificate-box">
        <h3>Internship Certificate</h3>
        <a href={certificateImage} target="_blank" rel="noreferrer" className="certificate-link">View Certificate</a>
      </div>
    </div>
  );
}