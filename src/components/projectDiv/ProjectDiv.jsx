import { techMap } from "../../data/technologiesData";
import { FaRegPlayCircle } from "react-icons/fa";
import "./ProjectDiv.css";
import Tooltip from "../tooltip/Tooltip";
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { trackEvent } from "../../utils/analytics";

function ProjectDiv(props) {
  function handledemo() {
    window.open(props.demo, "_blank");
    trackEvent("project_demo_click", {
      project: props.title.toLowerCase(),
    });
  }
  function handlegithub() {
    window.open(props.github, "_blank");
    trackEvent("project_github_click", {
      project: props.title.toLowerCase(),
    });
  }
  return (
    <div className="project-card">
      {/* {props.isNew && <div className="project-badge">✨ New</div>} */}

      {/* Project Image */}
      <div className="project-image-wrapper" onClick={handledemo}>
        <img
          src={props.img}
          alt={`${props.title} project preview`}
          className="project-image"
        />
        <div className="project-overlay">
          <FaRegPlayCircle className="play-icon" />
        </div>
      </div>

      {/* Project Content */}
      <div className="project-content">
        <h4 className="project-title">{props.title}</h4>
        <div className="project-tech">
          <span className="tech-label">Technologies: </span>
          <div className="tech-icons">
            {props.technologies?.map((tech, index) => {
              const Icon = techMap[tech];
              const captalizedTech = () =>
                tech.charAt(0).toUpperCase() + tech.slice(1);

              return (
                <Tooltip key={`${tech}-${index}`} text={captalizedTech(tech)}>
                  <Icon key={index} />
                </Tooltip>
              );
            })}
          </div>
        </div>

        <p className="project-description">{props.description}</p>

        <div className="projects-actions">
          <Tooltip text="View Source Code on Github">
            <button className="project-btn flex-center" onClick={handlegithub}>
              <FaGithub fontSize={20} /> Github
            </button>
          </Tooltip>

          <Tooltip text="View live Website">
            <button class="project-btn flex-center" onClick={handledemo}>
              <CiGlobe fontSize={20} />
              Live Demo
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
export default ProjectDiv;
