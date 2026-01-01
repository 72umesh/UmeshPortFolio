import { FaArrowUpRightFromSquare,FaCodeMerge  } from "react-icons/fa6";
import "./ContributionCard.css";
import { useState } from "react";
import ToogleButton from "../../components/toogleButton/toogleButton";
import { hacktoberfestPRs } from "../../data/contributiondata";

function ContributionCard({ title, description, linkdesc, link, isView }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="contributionCard">
      <div className="title-div">
        <h3 className="p-josefin">{title}</h3>
        <p className="view-link">
          <a href={link} target="_blank" className="p-quicksand">
            <FaArrowUpRightFromSquare />
            {linkdesc}
          </a>
        </p>
      </div>
      <p className="p-quicksand">{description}</p>
      {isView && (
        <div className="isview-container">
          <ToogleButton isOpen={isOpen} openText="View PRs" closeText="Hide PRs" onToogle={() => setIsOpen(!isOpen)} />

            {isOpen && (
              <div className="PRs-container">
              {hacktoberfestPRs.map((pr, index) => (
                <div key={index} className="PRs">
                  <h4>
                    <FaCodeMerge color="#a57af0"/> 
                    <a href={pr.url} target="_blank">{pr.title}</a>
                  </h4>
                  <h5>Contributed to {pr.repoName}</h5>
                </div>
              ))}
              </div>
            )}
        </div>
      )}
    </div>
  );
}
export default ContributionCard;
