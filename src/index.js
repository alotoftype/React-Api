import React from "react";
import ReactDOM from "react-dom";

import ProfileHome from "./components/ProfileHome";
import "./globalStyles.css";

function App() {
  return (
    <div className="App">
      <ProfileHome />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
