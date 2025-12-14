import "./Project.css";
import ProjectDiv from "../../components/projectDiv/ProjectDiv";
import DashBoardCard from "../../components/dashboardDiv/DashBoardCard";
import FilterProjects from "../../components/filterProjects/FilterProjects";
import { useState } from "react";
import { projectData, dashboardData } from "../../data/projectdata";

function Project() {
  const [selectedCategory, setSelectedCategory] = useState("React.js");

  const filteredProjects = projectData.filter((data) => {
    if (selectedCategory === "All") return true;
    return data.categories === selectedCategory;
  });

  console.log(filteredProjects);
  return (
    <section id="projects" className="section-padding">
      <h1 className="sectionh1">Projects</h1>

      <FilterProjects
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="projects-container">
        <div className="circle-left"></div>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((data) => (
            <ProjectDiv
              key={data.id}
              title={data.title}
              img={data.img}
              description={data.description}
              technologies={data.technologies}
              demo={data.demo}
              github={data.github}
              isNew={data.isNew}
            />
          ))
        ) : (
          <div className="project-empty">
            <h3>Work In Progress</h3>
            <p>
              No projects in <strong>{selectedCategory}</strong> yet, <br />
              but I'm actively working on it ,check back in 3-4 days!
            </p>
          </div>
        )}
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
