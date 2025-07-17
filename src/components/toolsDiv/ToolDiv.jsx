import "./ToolDiv.css";

function ToolDiv({ Icon, title, description }) {
  return (
    <div className="tooldiv flex-center">
      <Icon className="tool-icon" />

      {/* <div className="tooldiv-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div> */}
    </div>
  );
}

export default ToolDiv;
