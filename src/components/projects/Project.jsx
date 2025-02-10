import ProjectDiv from "../projectDiv/ProjectDiv";
import projectData from "./projectdata";
import "./Project.css";

function Project() {
  return (
    <section id="projects" className="section-padding">
      <h1 className="sectionh1">Projects</h1>
      <div className="projects-container">
        {projectData.map((data) => (
          <ProjectDiv
            key={data.id}
            title={data.title}
            img={data.img}
            description={data.description}
            demo={data.demo}
            github={data.github}
          />
        ))}
      </div>
    </section>
  );
}
export default Project;
