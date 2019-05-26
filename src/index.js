import React from "react";
import ReactDOM from "react-dom";
import GoogleFontLoader from "react-google-font-loader";
import ProfileHome from "./components/ProfileHome";
import "./globalStyles.scss";

function App() {
  return (
    <>
      <GoogleFontLoader
        fonts={[
          {
            font: "Rubik",
            weights: ["700"],
          },
          {
            font: "Karla",
            weights: [400, 700],
          },
        ]}
      />
      <div className="App">
        <ProfileHome />
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
