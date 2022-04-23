import React, { useReducer } from "react";
import Context from "./context";
import EmployeeForm from "./EmployeeForm";
import Reducer from "./reducer";

export default function App() {
  var initialState = {
    employee: [],
    count: 0,
  };
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <EmployeeForm />
    </Context.Provider>
  );
}
