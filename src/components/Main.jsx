/* eslint-disable react/prop-types */
function Main(props) {
  return (
    <div className={props.darkMode ? "main-container dark" : "main-container"}>
      <h1 className="main-header">Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}
export default Main;
