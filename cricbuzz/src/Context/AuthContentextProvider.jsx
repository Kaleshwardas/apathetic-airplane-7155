import { createContext, useReducer } from "react";
import reducer from "./Reducer";

export const AppContext = createContext();

function AuthContextProvider({ children }) {
  const initData = {
    isAuth: false,
    login: false,
    home: false,
    wSize:false,
  };

  const [state, dispatch] = useReducer(reducer, initData);
//   console.log(state)
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
export default AuthContextProvider;


