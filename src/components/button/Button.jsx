import "./Button.css";

function Button({ variant = "primary",size= "md", onClick, className = "", children, ...rest }) {

  const buttonClass = `btn btn-${variant} btn-${size} ${className}`.trim();

  return <button className={buttonClass}>{children}</button>;
}
export default Button;
