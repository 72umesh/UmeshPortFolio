import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import "./ContributionCard.css";
function ContributionCard({ title, description, linkdesc, link }) {
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
    </div>
  );
}
export default ContributionCard;
