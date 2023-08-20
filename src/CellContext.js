import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from "react";

const CellContext = createContext();

export const CellProvider = ({ children }) => {
  const [cellData, setCellData] = useState({});

  const updateCellData = useCallback((row, col, value) => {
    setCellData((prevData) => ({
      ...prevData,
      [`${row}-${col}`]: value,
    }));
  }, []);

  const contextValue = useMemo(
    () => ({
      cellData,
      updateCellData,
    }),
    [cellData, updateCellData]
  );

  return (
    <CellContext.Provider value={contextValue}>{children}</CellContext.Provider>
  );
};

export const useCellContext = () => {
  return useContext(CellContext);
};
