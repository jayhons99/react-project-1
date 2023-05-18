import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode((prev) => !prev)}
      />
      <Main darkMode={darkMode} />
    </>
  );
}

export default App;
