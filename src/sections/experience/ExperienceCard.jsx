import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useState } from "react";
import "./ExperienceCard.css";
import { Challenges } from "../../data/experiencedata";
import { motion } from "framer-motion";
import ToogleButton from "../../components/toogleButton/toogleButton";
import AnimatedCollapse from "../../components/animatedCollapse/AnimatedCollapse";
import { trackEvent } from "../../utils/analytics";

function ExperienceCard({ role, duration, company, description, isView }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    trackEvent("experience_namastedev_click");
    trackEvent("experience_toggle", {
      company: "namastedev",
      action: newState ? "open" : "close",
    });
  };

  const handleChallengeClick = (title) => {
    trackEvent("experience_challenge_click", {
      challenge: title?.toLowerCase().replace(/\s+/g, "_"),
    });
  };
  return (
    <div className="experience-card">
      <div className="experience-content">
        <div className="experience-header">
          <h3 className="experience-role">{role}</h3>
          <span className="experience-duration">{duration}</span>
        </div>
        <h4 className="experience-company">{company}</h4>

        <ul className="experience-descriptions">
          {description.map((desc, i) => (
            <li key={i} className="description-item">
              {desc}
            </li>
          ))}
        </ul>
      </div>

      {isView && (
        <div className="isview-container">
          <ToogleButton
            isOpen={isOpen}
            openText="View My Published Questions"
            closeText="Hide My Published Questions"
            onToogle={handleToggle}
          />

          <AnimatedCollapse isOpen={isOpen} className="challenges-container">
            {Challenges.map((c, i) => (
              <motion.a
                key={c.title}
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="challenge-link"
                onClick={() => handleChallengeClick(c.title)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <FaArrowUpRightFromSquare fontSize={12} />
                <span className="challenge-title">{c.title}</span>
              </motion.a>
            ))}
          </AnimatedCollapse>
        </div>
      )}
    </div>
  );
}

export default ExperienceCard;
