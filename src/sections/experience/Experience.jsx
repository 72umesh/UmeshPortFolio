import "./Experience.css";
import ExperienceCard from "./ExperienceCard";
import { Experiences } from "../../data/experiencedata";

function Experience() {
  return (
    <section id="experience" className="section-padding">
      <h1 className="sectionh1">Experience</h1>

      <div className="experience-container">

        {Experiences.map((e, index) => (
          <>
            <ExperienceCard key={`${e}-${index}`} {...e} />
          </>
        ))}
      </div>
    </section>
  );
}
export default Experience;
