import React, { useState, useRef, useEffect } from "react";
import { useCellContext } from "./CellContext";
import "./Cell.css";

const Cell = ({ row, col }) => {
  const { cellData, updateCellData } = useCellContext();
  const [isEditing, setIsEditing] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const inputRef = useRef(null);

  const cellValue = cellData[`${row}-${col}`] || "";

  const handleClick = () => {
    if (isEditing) {
      return;
    }

    if (!isHighlighted) {
      setIsHighlighted(true);
    } else {
      setIsEditing(true);
      setIsHighlighted(false);
    }
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleChange = (e) => {
    updateCellData(row, col, e.target.value);
  };

  return (
    <td
      className={isHighlighted ? "highlighted" : ""}
      onClick={handleClick}
      onBlur={handleBlur}
    >
      {isEditing ? (
        <input
          ref={inputRef}
          value={cellValue}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      ) : (
        cellValue
      )}
    </td>
  );
};

export default Cell;
