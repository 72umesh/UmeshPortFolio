import "./DashBoardCard.css";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function DashBoardCard(dashboard) {
  function handledemo() {
    window.open(dashboard.demo, "_blank");
  }
  function handlegithub() {
    window.open(dashboard.github, "_blank");
  }
  return (
    <div className="dashboardCard">
      <div className="d-card-img">
        <img src={dashboard.img} alt={dashboard.title} />
      </div>
      <div className="d-card-descriptions">
        <h3 className="d-card-title">{dashboard.title} </h3>
        <h4 className="d-card-desc">{dashboard.description}</h4>
        <div className="d-card-buttons">
          <button onClick={handlegithub}>
            <FaGithub fontSize={20} /> <span>Github</span>
          </button>
          <button onClick={handledemo}>
            <FaArrowUpRightFromSquare />
            <span>View</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default DashBoardCard;
