
import React, { createContext, useReducer } from "react";

export const DataContext = createContext();

const DataProvider = ({ children, reducer, initialstate }) => {
  // const [state, dispatch] = useReducer(reducer, initialstate);

  return (
    <DataContext.Provider value={useReducer(reducer, initialstate )}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
