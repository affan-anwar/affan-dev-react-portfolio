import { useEffect, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sectionNames = [
        "home",
        "projects",
        "experience",
        "skills",
        "contact",
      ];

      const scrollPosition = window.scrollY + 150;

      sectionNames.forEach(function (sectionName) {
        const section = document.getElementById(sectionName);

        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(sectionName);
          }
        }
      });
    }

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <a
        href="#home"
        className={`logo ${activeSection === "home" ? "active" : ""}`}
        onClick={closeMenu}
      >
        AFFAN.DEV
      </a>

      <button
        className="menu-button"
        onClick={function () {
          setMenuOpen(!menuOpen);
        }}
        aria-label="Open navigation menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <nav className={`nav-links ${menuOpen ? "menu-open" : ""}`}>
        <a
          href="#projects"
          className={activeSection === "projects" ? "active" : ""}
          onClick={closeMenu}
        >
          Projects
        </a>

        <a
          href="#experience"
          className={activeSection === "experience" ? "active" : ""}
          onClick={closeMenu}
        >
          Experience
        </a>

        <a
          href="#skills"
          className={activeSection === "skills" ? "active" : ""}
          onClick={closeMenu}
        >
          Skills
        </a>

        <a
          href="#contact"
          className={activeSection === "contact" ? "active" : ""}
          onClick={closeMenu}
        >
          Contact
        </a>
      </nav>

      <a href="#contact" className="hire-button" onClick={closeMenu}>
        Hire Me
      </a>
    </header>
  );
}