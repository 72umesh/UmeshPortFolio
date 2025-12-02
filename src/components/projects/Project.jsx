import ProjectDiv from "../projectDiv/ProjectDiv";
import { projectData, dashboardData } from "./projectdata";
import "./Project.css";
import DashBoardCard from "../dashboardDiv/DashBoardCard";
import FilterProjects from "../filterProjects/FilterProjects";
import { useState } from "react";

function Project() {
  const [selectedCategory, setSelectedCategory] = useState("React.js");
  return (
    <section id="projects" className="section-padding">
      <h1 className="sectionh1">Projects</h1>

      <FilterProjects
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="projects-container">
        <div className="circle-left"></div>
        {projectData.map((data) => (
          <ProjectDiv
            key={data.id}
            title={data.title}
            img={data.img}
            description={data.description}
            stack={data.stack}
            demo={data.demo}
            github={data.github}
          />
        ))}
      </div>

      <div className="dashboard-container">
        {dashboardData.map((dashboard) => (
          <DashBoardCard
            key={dashboard.id}
            title={dashboard.title}
            img={dashboard.img}
            description={dashboard.description}
            github={dashboard.github}
            demo={dashboard.demo}
          />
        ))}
      </div>
    </section>
  );
}
export default Project;
