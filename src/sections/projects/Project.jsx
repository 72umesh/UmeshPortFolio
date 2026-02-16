import { useState } from "react";
import ProjectDiv from "../../components/projectDiv/ProjectDiv";
import DashBoardCard from "../../components/dashboardDiv/DashBoardCard";
import FeaturedCard from "../../components/featuredCard/FeaturedCard";
import {
  projectData,
  dashboardData,
  featuredData,
} from "../../data/projectdata";
import "./Project.css";

function Project() {
  return (
    <section id="projects" className="container">

        <h1 className="sectionh1">Proof of Work</h1>

        {/* Featured Projects */}
        <div className="featured-section" id="featured-section">
          <h3 className="subsection-title">Features Work</h3>
          <div className="featured-container">
            {featuredData.map((featured) => (
              <FeaturedCard key={featured.id} {...featured} />
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div className="projects-section">
          <h3 className="subsection-title">All Projects</h3>

          <div className="projects-container">
            {projectData.map((project) => (
              <ProjectDiv key={project.id} {...project} />
            ))}
          </div>
        </div>

        {/* Dashboards */}
        <div className="dashboard-section">
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
