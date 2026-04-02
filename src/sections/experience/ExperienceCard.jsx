import { useState, useEffect } from "react";
import "./ExperienceCard.css";
import { Challenges } from "../../data/experiencedata";
import ToogleButton from "../../components/toogleButton/toogleButton";
import { trackEvent } from "../../utils/analytics";
import ChallengeCard from "../../components/challengeCard/challengeCard";
import { motion, AnimatePresence } from "framer-motion";


function ExperienceCard({ role, duration, company, description, isView }) {
  const [showAll, setShowAll] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
  const updateCount = () => {
    const width = window.innerWidth;

    if (width <= 640) {
      setVisibleCount(2); // mobile
    } else if (width <= 1024) {
      setVisibleCount(3); // tablet
    } else {
      setVisibleCount(4); // desktop
    }
  };

  updateCount(); 
  window.addEventListener("resize", updateCount);

  return () => window.removeEventListener("resize", updateCount);
}, []);

  const visibleChallenges = showAll
    ? Challenges
    : Challenges.slice(0, visibleCount);
  const hasMore = Challenges.length > visibleCount;

  const handleChallengeClick = (title) => {
    trackEvent("experience_challenge_click", {
      challenge: title?.toLowerCase().replace(/\s+/g, "_"),
    });
  };

  const handleViewAll = () => {
    setShowAll((prev) => !prev);
    trackEvent("experience_challenges_view_all", {
      action: showAll ? "collapse" : "expand",
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
          <p className="challenges-section-label">My Published Challenges</p>

          <motion.div
            className="challenge-cards-grid"
            layout
            transition={{
              layout: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
            }}
          >
            <AnimatePresence initial={false}>
              {visibleChallenges.map((c, i) => (
                <ChallengeCard
                  key={c.title}
                  challenge={c}
                  index={i}
                  onClick={handleChallengeClick}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {hasMore && (
            <ToogleButton
              isOpen={showAll}
              openText="View More Questions"
              closeText="Show Less"
              onToogle={handleViewAll}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default ExperienceCard;
