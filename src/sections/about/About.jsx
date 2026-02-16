import { useEffect, useRef } from "react";
import ToolDiv from "../../components/toolsDiv/ToolDiv.jsx";
import tools from "../../data/ToolDivData..js";
import "./About.css";

import { motion, useAnimation, useInView } from "framer-motion";
import Tooltip from "../../components/tooltip/Tooltip.jsx";

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
    <section id="about" className="flex-center container">
      <h1 className="sectionh1">About</h1>

      <div className="skills-container">
        <div className="circle-left"></div>
        <div className="skills-top p-quicksand">
          <p>
          I'm a frontend developer obsessed with the tiny details that turn good interfaces into great ones. 
          I spend way too many hours pixel-pushing, animation-tweaking, and interaction-polishing because that 2px margin or 0.1s timing difference can completely change how something <em>feels</em>.
          </p>
          <p>
            Right now I'm strongest in React, TypeScript, modern CSS (Tailwind + vanilla), and building responsive, 
            fast-loading experiences that work everywhere. I've authored 22+ real interview-style React & JavaScript 
            challenges for NamasteDev (getting 3000+ attempts and 15k+ views), and during my internship I went full-stack
            building a complete pet-selling platform with Node, Express, MySQL and fighting deployment demons on Render/Railway.
          </p>

          <p>
            <strong>Fun Fact:</strong> I once spent a weekend perfecting a button hover... and I'd do it again.
          </p>
        </div>
        <div className="skills-bottom">
          <motion.div
            ref={ref}
            className="tools-container"
            animate={{ x: ["0%", "-50%"] }} // -50%
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {
            [...tools, ...tools, ...tools].map((tool, index) => (

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
            ))
            }
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default About;
