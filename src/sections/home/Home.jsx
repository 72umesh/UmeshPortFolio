
import { ReactTyped } from "react-typed";
import Resume from "../../assets/Resume.pdf";
import "./Home.css";
import MacFrame from "../../components/macframe/MacFrame";
import contactdetails from "../../data/homedata";
import Tooltip from "../../components/tooltip/Tooltip";

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
                "UI Developer",
                "Full Stack Developer",
                "Frontend Web Developer",
              ]}
              typeSpeed={50}
              backSpeed={30}
              backDelay={1500}
              // loop
            />
          </span>
        </h2>
        <p className="home-description p-quicksand">
            Building fast, interactive & pixel-perfect web experiences with React, clean code and attention to detail
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

        <div className="home-contact-container">
          {
          contactdetails.map((contact) => (
            <Tooltip key={contact.title} text={contact.title}>
              <a href={contact.url} target="_blank" rel="noopener noreferrer" className="contacta">
                {<contact.Logo />}
              </a>
            </Tooltip>

          ))
          }
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
