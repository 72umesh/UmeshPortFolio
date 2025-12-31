import "./toogleButton.css";
function ToogleButton({isOpen, openText, closeText, onToogle}) {
    return(
        <button onClick={onToogle} className="view-button">
            {isOpen ? closeText: openText}
        </button>

    )
}
export default ToogleButton;