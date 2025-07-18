import "./ExperienceCard.css";

function ExperienceCard({ role, duration, company, description }) {
  return (
    <div className="experienceCard">
      <div className="title">
        <h3 className="p-josefin">{role}</h3>
        <span className="p-quicksand">{duration}</span>
      </div>
      <h4 className="p-quicksand">{company}</h4>

      <div className="descriptions">
        {description.map((d, i) => (
          <p key={i} className="p-quicksand">
            {d}
          </p>
        ))}
      </div>
    </div>
  );
}
export default ExperienceCard;
