import { techMap } from "../../data/technologiesData";
import { FaRegPlayCircle } from "react-icons/fa";
import "./ProjectDiv.css";

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
              return <Icon key={index} />;
            })}
          </span>
        </h3>
        <p className="desc">{props.description}</p>
        <div class="projects-buttons">
          <button class="project-btn" onClick={handlegithub}>
            Github
          </button>
          <button class="project-btn" onClick={handledemo}>
            Live Demo
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProjectDiv;
