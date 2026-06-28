import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");

    fetch("https://formspree.io/f/xeebkyvg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(function (response) {
        if (response.ok) {
          setStatus("success");
          setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
          setStatus("error");
        }
      })
      .catch(function () {
        setStatus("error");
      });
  }

  return (
    <div className="contact-section">
      <p className="section-small-title">GET IN TOUCH</p>

      <h2 className="section-title">
        Let&apos;s Work <span>Together</span>
      </h2>

      <p className="contact-description">
        I am looking for frontend developer opportunities and projects where I
        can contribute and improve my skills.
      </p>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>

          <div className="contact-item">
            <p>Email</p>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mdaffananwar2025@gmail.com" target="_blank" rel="noreferrer">mdaffananwar2025@gmail.com</a>
          </div>

          <div className="contact-item">
            <p>Location</p>
            <span>Bengaluru, Karnataka, India</span>
          </div>

          <div className="contact-social-links">
            <a href="https://github.com/affan-anwar" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/mdaffananwar" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter subject"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
              rows="6"
              required
            ></textarea>
          </div>

          <button type="submit" className="send-button" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && <p style={{ color: "#33d6c5", marginTop: "12px" }}>Message sent successfully!</p>}
          {status === "error" && <p style={{ color: "#ff6b6b", marginTop: "12px" }}>Something went wrong. Try again.</p>}
        </form>
      </div>
    </div>
  );
}