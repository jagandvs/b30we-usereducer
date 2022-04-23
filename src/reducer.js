import { ADD_EMPLOYEE, INCREMENT_COUNT, REMOVE_EMPLOYEE } from "./action.type";

const Reducer = (state, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return { ...state, employee: [...state.employee, action.payload] };
    case REMOVE_EMPLOYEE:
      return state.filter((employee) => employee.id !== action.payload);
    case INCREMENT_COUNT:
      return { ...state, count: state.count + action.payload };
    default:
      return state;
  }
};

export default Reducer;
