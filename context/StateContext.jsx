import React, { createContext, useContext, useState, useEffect } from "react";
const Context = createContext();

export const StateContext = ({ children }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  return (
    <Context.Provider
      value={{
        selectedFilters,
        setSelectedFilters,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
