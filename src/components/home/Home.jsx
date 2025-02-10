import React from "react";
import { ReactTyped } from "react-typed";
import HomeImage from "../../assets/HomeImage.png";
import Resume from "../../assets/Resume.pdf";
import "./Home.css";

function Home() {
  function handleViewResume() {
    window.open(Resume, "_blank");
  }
  function handleScrollToProjects() {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <section id="home" className="wrapper section-padding">
      <div className="home-info">
        <h1 className="home-title">
          Hi, I'm <span>Umesh</span>
        </h1>
        <h2 className="home-subtitle">
          A passionate {""}
          <span>
            <ReactTyped
              strings={[
                "Web Developer",
                "UI/UX Enthusiast",
                "Frontend Engineer",
              ]}
              typeSpeed={40}
              backSpeed={30}
              // loop
            />
          </span>
        </h2>
        <p className="home-description">
          I specialize in building interactive and responsive web applications
          that provide seamless user experiences.
        </p>
        <div className="home-buttons">
          <button onClick={handleScrollToProjects}>My Work</button>
          <button onClick={handleViewResume}>Resume</button>
        </div>
      </div>
      <div className="home-img">
        <img src={HomeImage} alt="Web Developer Image" />
      </div>
    </section>
  );
}
export default Home;
