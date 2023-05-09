import logo from "/react-icon-small.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="left-nav">
        <img src={logo} className="logo" />
        <h3>ReactFacts</h3>
      </div>
      <h4>React Course - Project 1</h4>
    </nav>
  );
}
export default Navbar;
