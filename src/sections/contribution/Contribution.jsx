import "./Contribution.css";
import ContributionCard from "./ContributionCard";
import {contribution} from "../../data/contributiondata";

function Contribution() {
  return (
    <section className="section-padding" id="contribution">
      <h1 className="sectionh1">Contribution</h1>

      <div className="contribution-container">
        <div className="circle-right"></div>
        <div className="line"></div>
        {contribution.map((c, index) => (
          <ContributionCard
            key={index}
            {...c}
          />
        ))}
      </div>
    </section>
  );
}
export default Contribution;
