import React from "react";
import Reducer, {initialState} from "./Reducer";

export const DataLayerContext = React.createContext();

export default function DataLayer({ children }) {
  const [dataLayer, dispatch] = React.useReducer(Reducer, initialState);

  return (
    <DataLayerContext.Provider value={[dataLayer, dispatch]}>
      {children}
    </DataLayerContext.Provider>
  );
}

export const useDataLayerValue = () => React.useContext(DataLayerContext);
