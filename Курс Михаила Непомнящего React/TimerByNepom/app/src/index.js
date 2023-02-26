import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Timer from "./components/timer/timer";
// import timerStyles from "./components/timer/timerStyles.css";

function App() {
  return (
    <div>
      <Timer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);
