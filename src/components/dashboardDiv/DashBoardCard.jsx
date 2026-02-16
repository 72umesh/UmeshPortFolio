import "./DashBoardCard.css";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function DashBoardCard({ id, title, description, img, demo, github }) {
  function handledemo() {
    if (demo) {
      window.open(demo, "_blank");
      trackEvent("dashboard_demo_click", { dashboard: title });
    }
  }
  function handlegithub() {
    if (github) {
      window.open(github, "_blank");
      trackEvent("dashboard_github_click", { dashboard: title });
    }
  }
  return (
    <div className="dashboard-card">
      <div className="dashboard-image-wrapper">
        <img
          src={img}
          alt={`${title} dashboard preview`}
          className="dashboard-image"
        />
      </div>
      <div className="dashboard-content">
        <h4 className="dashboard-title">{title} </h4>
        <p className="dashboard-description">{description}</p>

        <div className="dashboard-actions">
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
