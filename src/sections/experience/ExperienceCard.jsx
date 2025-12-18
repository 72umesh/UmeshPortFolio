import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useState } from "react";
import "./ExperienceCard.css";
import { challenges } from "../../data/experiencedata";

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

          {isOpen && (
            <div className="challenges-container">
              {challenges.map((c) => (
                <a
                  key={c.title}
                  href={c.link}
                  className="ch-link"
                  target="_blank"
                >
                  <FaArrowUpRightFromSquare fontSize={12} />
                  <h4 className="ch-title">{c.title}</h4>
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
export default ExperienceCard;
