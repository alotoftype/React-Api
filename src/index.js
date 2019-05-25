import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Using React and Api's</h1>
      <p>
        Finish writing the ProfileHome component and write a FavoriteShows
        component that will display a simple list of shows, but only with the
        category “broadway”. You will need to seed the API return or create a
        fake API. Style however you like.
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
