import "./Project.css";
import ProjectDiv from "../../components/projectDiv/ProjectDiv";
import DashBoardCard from "../../components/dashboardDiv/DashBoardCard";
import FilterProjects from "../../components/filterProjects/FilterProjects";
import { useState } from "react";
import { projectData, dashboardData, featuredData } from "../../data/projectdata";
import FeaturedCard from "../../components/featuredCard/FeaturedCard";

function Project() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = projectData.filter((data) => {
    if (selectedCategory === "All") return true;
    return data.categories === selectedCategory;
  });

  return (
    <section id="projects" className="section-padding">
      <h1 className="sectionh1">Proof of Work</h1>

      <div className="featured-section" id="featured-section">
        <h2 className="section-subtitle">Features Work</h2>
        <div className="featured-container">
          {featuredData.map((featured) => (
            <FeaturedCard key={featured.id} {...featured} />
          ))}
        </div>
      </div>

      <div className="projects-section">
        <h2 className="section-subtitle">Projects</h2>

        <FilterProjects
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <div className="projects-container">
          {/* <div className="circle-left"></div> */}
          {filteredProjects.length > 0 ? (
            filteredProjects.map((data) => (
              <ProjectDiv key={data.id} {...data} />
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
            <DashBoardCard key={dashboard.id} {...dashboard} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Project;
