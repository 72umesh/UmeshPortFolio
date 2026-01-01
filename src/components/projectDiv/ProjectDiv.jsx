import { techMap } from "../../data/technologiesData";
import { FaRegPlayCircle } from "react-icons/fa";
import "./ProjectDiv.css";
import Tooltip from "../tooltip/Tooltip";
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

function ProjectDiv(props) {
  function handledemo() {
    window.open(props.demo, "_blank");
  }
  function handlegithub() {
    window.open(props.github, "_blank");
  }

  return (
    <div className="project-div">
      <h2 className="project-title">{props.title}</h2>
      {props.isNew && <div className="new-badge">✨New</div>}

      <div className="project-image" onClick={handledemo}>
        <img src={props.img} />
        <p className="play">
          <FaRegPlayCircle className="play-icon" />
        </p>
      </div>
      <div className="project-descriptions">
        <h3 className="techStack">
          Tech:{" "}
          <span className="techstackIcon">
            {props.technologies?.map((tech, index) => {
              const Icon = techMap[tech];
              const captalizedTech = () => tech.charAt(0).toUpperCase() + tech.slice(1);

              return(
                <Tooltip key={index} text={captalizedTech(tech)}>
                  <Icon key={index} />
                  </Tooltip>
              )
            })}
          </span>
        </h3>
        <p className="desc">{props.description}</p>
        <div class="projects-buttons">
          <Tooltip text="View Source Code on Github">
            <button class="project-btn flex-center" onClick={handlegithub}>
            <FaGithub fontSize={20}/> Github
            </button>
          </Tooltip>

          <Tooltip text="View live Website">
            <button class="project-btn flex-center" onClick={handledemo}>
              <CiGlobe fontSize={20} />Live Demo
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
export default ProjectDiv;
