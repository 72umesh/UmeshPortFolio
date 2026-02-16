import { FaArrowUpRightFromSquare, FaCodeMerge } from "react-icons/fa6";
import "./ContributionCard.css";
import { useState } from "react";
import ToogleButton from "../../components/toogleButton/toogleButton";
import AnimatedCollapse from "../../components/animatedCollapse/AnimatedCollapse";
import { motion } from "framer-motion";
import { trackEvent } from "../../utils/analytics";

function ContributionCard({
  title,
  description,
  linkdesc,
  link,
  isView,
  prs,
  toggleText,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="contribution-card">
      <div className="contribution-content">
        <h3 className="contribution-title">{title}</h3>
        <p className="contribution-description">{description}</p>
      </div>

      {isView && (
        <div className="isview-container">
          <ToogleButton
            isOpen={isOpen}
            openText={toggleText.open}
            closeText={toggleText.close}
            onToogle={() => {
              setIsOpen(!isOpen);
              trackEvent("experience_hacktoberfest_click");
            }}
          />

          <AnimatedCollapse isOpen={isOpen} className="prs-list">
            {prs.map((pr, index) => (
              <motion.div
                key={`${pr.repoName}-${pr.title}`}
                className="pr-item"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="pr-header">
                  <FaCodeMerge color="#a57af0" className="pr-icon" />
                  <a
                    href={pr.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pr-title"
                  >
                    {pr.title}
                  </a>
                </div>
                <p className="pr-repo">
                  Contributed to <span className="repo-name">{pr.repoName}</span>
                </p>
              </motion.div>
            ))}
          </AnimatedCollapse>
        </div>
      )}
    </div>
  );
}
export default ContributionCard;
