import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <h1>React Weather App</h1>
      <Weather />
      <br />
      <footer>
        <a
          href="https://github.com/Shauna845/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
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
  );
}
