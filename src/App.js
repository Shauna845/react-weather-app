import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Belfast" />
        <br />
        <footer>
          This project is built with{" "}
          <a
            href="https://github.com/Shauna845/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code{" "}
          </a>{" "}
          created by{" "}
          <a
            href="https://www.shecodes.io/graduates/65141-shauna-bratten"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Shauna Bratten{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
