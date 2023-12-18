import "./App.css";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  return (
    <div className="sweet-loading">
      <h1>React Weather App</h1>
      <ClipLoader
        color="blue"
        loading={true}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default App;
