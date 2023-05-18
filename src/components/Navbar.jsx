/* eslint-disable react/prop-types */
import logo from "/react-icon-small.png";

function Navbar(props) {
  return (
    <nav className={props.darkMode ? "navbar dark" : "navbar"}>
      <div className="left-nav">
        <img src={logo} className="logo" />
        <h3>ReactFacts</h3>
      </div>
      <div className="--toggler">
        <p className="--toggler-light">Light</p>
        <div className="--toggler-slider" onClick={props.toggleDarkMode}>
          <div className="--toggler-slider-circle"></div>
        </div>
        <p className="--toggler-dark">Dark</p>
      </div>
    </nav>
  );
}
export default Navbar;
