import { useEffect, useRef } from "react";
import ToolDiv from "../toolsDiv/ToolDiv";
import tools from "../toolsDiv/ToolDivData..js";
import "./About.css";

import { motion, useAnimation, useInView } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isView = useInView(ref, { threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isView) {
      controls.start({ opacity: 1, x: 0 });
    } else {
      controls.start({ opacity: 0, x: 100 });
    }
  }, [isView, controls]);
  return (
    <section id="about" class="section-padding flex-center">
      <h1 className="sectionh1">About</h1>

      <div class="skills-container">
        <div className="circle-left"></div>
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
          <motion.div
            ref={ref}
            className="tools-container"
            initial={{ opacity: 0, x: 150 }}
            animate={controls}
            transition={{ duration: 0.8 }}
          >
            {tools.map((tool) => (
              <motion.div
                key={tool.id}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                }}
              >
                <ToolDiv
                  title={tool.title}
                  Icon={tool.Icon}
                  description={tool.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default About;
