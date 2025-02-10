import "./ToolDiv.css";

function ToolDiv({ Icon, title, description }) {
  return (
    <div className="tooldiv">
      <div className="tooldiv-icon flex-center">
        <Icon className="tool-icon" />
      </div>
      <div className="tooldiv-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ToolDiv;
