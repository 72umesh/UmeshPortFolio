import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useState } from "react";
import "./ExperienceCard.css";
import { challenges } from "../../data/experiencedata";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

function ExperienceCard({ role, duration, company, description, isView }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="experienceCard">
      <div className="title">
        <h3 className="p-josefin">{role}</h3>
        <span className="p-quicksand">{duration}</span>
      </div>
      <h4 className="p-quicksand company">{company}</h4>

      <div className="descriptions">
        {description.map((d, i) => (
          <p key={i} className="p-quicksand">
            {d}
          </p>
        ))}
      </div>

      {isView && (
        <div className="isview-container">
          <button className="view-button" onClick={() => setIsOpen(!isOpen)}>
            {isOpen
              ? `Hide My Published Questions`
              : "View My Published Questions"}
          </button>

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
