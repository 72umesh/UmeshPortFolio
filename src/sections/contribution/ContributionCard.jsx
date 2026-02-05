import { FaArrowUpRightFromSquare,FaCodeMerge  } from "react-icons/fa6";
import "./ContributionCard.css";
import { useState } from "react";
import ToogleButton from "../../components/toogleButton/toogleButton";
import AnimatedCollapse from "../../components/animatedCollapse/AnimatedCollapse";
import { motion } from "framer-motion";
import { trackEvent } from "../../utils/analytics";

function ContributionCard({ title, description, linkdesc, link, isView,prs, toggleText }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="contributionCard">
      <div className="title-div">
        <h3 className="p-josefin">{title}</h3>
        {/* <p className="view-link">
          <a href={link} target="_blank" className="p-quicksand">
            <FaArrowUpRightFromSquare />
            {linkdesc}
          </a>
        </p> */}
      </div>
      <p className="p-quicksand">{description}</p>
      {isView && (
        <div className="isview-container">
          <ToogleButton isOpen={isOpen} openText={toggleText.open} closeText={toggleText.close} onToogle={() => {setIsOpen(!isOpen); trackEvent("experience_hacktoberfest_click")}} />

          <AnimatedCollapse isOpen={isOpen} className="PRs-container">
              {prs.map((pr, index) => (
                <motion.div key={index} className="PRs"                 initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}>
                  <h4>
                    <FaCodeMerge color="#a57af0"/> 
                    <a href={pr.url} target="_blank">{pr.title}</a>
                  </h4>
                  <h5>Contributed to {pr.repoName}</h5>
                </motion.div>
              ))}
          </AnimatedCollapse>
        </div>
      )}
    </div>
  );
}
export default ContributionCard;
