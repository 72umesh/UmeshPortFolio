import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useState } from "react";
import "./ExperienceCard.css";
import { challenges } from "../../data/experiencedata";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import Tooltip from "../../components/tooltip/Tooltip";
import ToogleButton from "../../components/toogleButton/toogleButton";

function ExperienceCard({ role, duration, company, description, isView }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="experienceCard">
      <div className="title-container">
        <h3 className="experience-role">{role}</h3>
        <span className="experience-duration">{duration}</span>
      </div>
      <h4 className="company">{company}</h4>

      <div className="descriptions">
        <ul>
        {description.map((d, i) => (
          <li key={i} className="p-quicksand">
            {d}
          </li>
        ))}
        </ul>
      </div>

      {isView && (
        <div className="isview-container">
          <ToogleButton isOpen={isOpen} openText="View My Published Questions" closeText="Hide My Published Questions" onToogle={() => setIsOpen(!isOpen)} />

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                  height: { duration: 0.35, ease: "easeInOut" },
                  scale: { duration: 0.35 },
                  when: "beforeChildren",
                  staggerChildren: 0.05,
                }}
                className="challenges-container"
              >
                {challenges.map((c, i) => (
                  <motion.a
                    key={c.title}
                    href={c.link}
                    className="ch-link"
                    target="_blank"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <FaArrowUpRightFromSquare fontSize={12} />
                    <h4 className="ch-title">{c.title}</h4>
                  </motion.a>

                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
export default ExperienceCard;
