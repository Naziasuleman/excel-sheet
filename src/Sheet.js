import React, { useState } from "react";
import Cell from "./Cell";
import "./Sheet.css";

const numRows = 8;
const numCols = 8;

const Sheet = () => {
  const [rowCount, setRowCount] = useState(numRows);

  const addRow = () => {
    setRowCount(rowCount + 1);
  };

  const deleteRow = () => {
    if (rowCount > 1) {
      setRowCount(rowCount - 1);
    }
  };

  return (
    <div>
      <table className="sheet-table">
        <tbody>
          {Array.from({ length: rowCount }).map((_, row) => (
            <tr key={row}>
              {Array.from({ length: numCols }).map((_, col) => (
                <Cell key={col} row={row} col={col} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addRow}>Add Row</button>
      <button onClick={deleteRow}>Delete Row</button>
    </div>
  );
};

export default Sheet;
