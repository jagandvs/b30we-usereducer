import React, { useContext, useState } from "react";
import { ADD_EMPLOYEE, INCREMENT_COUNT } from "./action.type";
import context from "./context";

export default function EmployeeForm() {
  const [data, setData] = useState({
    name: "",
    emailId: "",
    id: "",
  });
  const { state, dispatch } = useContext(context);
  console.log(state.employee);
  const handleClick = () => {
    dispatch({
      type: ADD_EMPLOYEE,
      payload: data,
    });
  };
  const handleIncrement = () => {
    dispatch({
      type: INCREMENT_COUNT,
      payload: 1,
    });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <input
        type="email"
        name="emailId"
        value={data.emailId}
        onChange={(e) => setData({ ...data, emailId: e.target.value })}
      />
      <button type="button" onClick={handleClick}>
        Submit
      </button>
      <button type="button" onClick={handleIncrement}>
        increment
      </button>
      <ul>
        {state.employee.map((data) => {
          return <li>{data.name}</li>;
        })}
      </ul>
      {state.count}
    </div>
  );
}
