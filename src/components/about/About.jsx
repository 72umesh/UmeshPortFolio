import ToolDiv from "../toolsDiv/ToolDiv";
import tools from "../toolsDiv/ToolDivData..js";
import "./About.css";

function About() {
  return (
    <section id="about" class="section-padding flex-center">
      <h1 className="sectionh1">About</h1>

      <div class="skills-container">
        <div class="skills-top">
          <p>
            A passionate and creative Frontend Developer, I specialize in
            building responsive and user-friendly websites using modern web
            technologies like HTML, CSS, JavaScript, and popular frameworks such
            as React.
          </p>
          <p>
            Focused on delivering clean code and ensuring a seamless user
            experience across devices. Always eager to learn and grow, I stay
            up-to-date with the latest trends in frontend development to deliver
            high-quality solutions.
          </p>
        </div>
        <div class="skills-bottom">
          <div className="tools-container">
            {tools.map((tool) => (
              <ToolDiv
                key={tool.id}
                title={tool.title}
                Icon={tool.Icon}
                description={tool.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
