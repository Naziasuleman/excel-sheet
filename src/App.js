import React from "react";
import { CellProvider } from "./CellContext";
import Sheet from "./Sheet";

const App = () => {
  return (
    <CellProvider>
      <div>
        <h1>SpreadSheet</h1>
        <Sheet />
      </div>
    </CellProvider>
  );
};

export default App;
