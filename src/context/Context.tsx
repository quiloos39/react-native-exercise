import { createContext, useReducer } from "react";
import { reducer } from "../reducer/mainReducer";

const initialState = {
  loading: true,
  data: [],
  error: null,
};

export const Context = createContext(null);

export function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}
