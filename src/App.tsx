import React from "react";
import Calculator from "./components/Calculator";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <h1 className="font-extrabold text-2xl text-center">Calculator app</h1>
        <Calculator />
      </div>
    </div>
  );
}

export default App;
