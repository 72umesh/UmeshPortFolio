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
      <div className="project-image">
        <img src={props.img} onClick={handledemo} />
      </div>
      <div className="project-descriptions">
        <h3>{props.description}</h3>
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
