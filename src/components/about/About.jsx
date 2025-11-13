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
    <section id="about" className="section-padding flex-center">
      <h1 className="sectionh1">About</h1>

      <div className="skills-container">
        <div className="circle-left"></div>
        <div className="skills-top p-quicksand">
          <p>
            I'm a creative Frontend Developer who enjoys building responsive and
            user-friendly websites. I specialize in modern web technologies like
            HTML, CSS, JavaScript, and React to create clean, interactive, and
            visually engaging interfaces.
          </p>
          <p>
            I focus on writing maintainable code and delivering seamless user
            experiences across all devices. Recently, I’ve started learning
            backend development to expand my skill set and understand the full
            development cycle.
          </p>
          <p>
            <strong>Fun Fact:</strong> You may not know this, but I can spend
            hours experimenting with small UI tweaks — because for me, even the
            tiniest detail can make a big difference.
          </p>
        </div>
        <div className="skills-bottom">
          <motion.div
            ref={ref}
            className="tools-container"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {[...tools, ...tools, ...tools].map((tool, index) => (
              <motion.div
                key={index}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                }}
                className="tool-item"
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
