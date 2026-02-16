import "./Contribution.css";
import ContributionCard from "./ContributionCard";
import {contribution} from "../../data/contributiondata";

function Contribution() {
  return (
    <section className="container" id="contribution">
      <h1 className="sectionh1">Contribution</h1>

      <div className="contribution-container">
        {contribution.map((c, index) => (
          <ContributionCard
            key={`${c.name}-${index}`}
            {...c}
          />
        ))}
      </div>
    </section>
  );
}
export default Contribution;
