import "./Experience.css";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "../../data/experiencedata";

function Experience() {
  return (
    <section id="experience" className="section-padding">
      <h1 className="sectionh1">Experience</h1>

      <div className="experience-container">
        <div className="circle-right"></div>
        <div className="line"></div>
        {experiences.map((e, index) => (
          <ExperienceCard
            key={index}
            role={e.role}
            duration={e.duration}
            company={e.company}
            description={e.description}
            isView={e.isView}
          />
        ))}
      </div>
    </section>
  );
}
export default Experience;
