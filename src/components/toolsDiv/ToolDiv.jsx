import "./ToolDiv.css";

function ToolDiv({ Icon, title }) {
  return (
    <div className="tooldiv flex-center">
      <Icon className="tool-icon" />
      <p className="tool-title">{title}</p>
    </div>
  );
}

export default ToolDiv;
