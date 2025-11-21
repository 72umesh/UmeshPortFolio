import React from "react";
import { ReactTyped } from "react-typed";
import HomeImage from "../../assets/HomeImage.png";
import Resume from "../../assets/Resume.pdf";
import "./Home.css";
import MacFrame from "../macframe/MacFrame";

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
  function watchVideo() {
    window.open(
      "https://vimeo.com/1121443866?share=copy&fl=sv&fe=ci",
      "_blank"
    );
  }
  return (
    <section id="home" className="wrapper section-padding">
      <div className="circle-right"></div>
      <div className="home-info">
        <h1 className="home-title p-quicksand ">
          Hi, I'm <span>Umesh</span>
        </h1>
        <h2 className="home-subtitle p-quicksand">
          A {""}
          <span className="p-josefin">
            <ReactTyped
              strings={[
                "Web Developer",
                "UI/UX Enthusiast",
                "Frontend Developer",
              ]}
              typeSpeed={40}
              backSpeed={30}
              // loop
            />
          </span>
        </h2>
        <p className="home-description p-quicksand">
          Crafting fast, responsive, and user-friendly web interfaces with clean
          code and a focus on seamless user experience
        </p>
        <div className="home-buttons p-quicksand">
          <button onClick={handleScrollToProjects} className="p-quicksand">
            My Work
          </button>
          <button onClick={handleViewResume} className="p-quicksand">
            Resume
          </button>
          <button className="p-quicksand" onClick={watchVideo}>
            Intro Video
          </button>
        </div>
      </div>
      <div className="home-img home-right-widget">
        {/* <img src={HomeImage} alt="Web Developer Image" /> */}
        <MacFrame />
      </div>
    </section>
  );
}
export default Home;
