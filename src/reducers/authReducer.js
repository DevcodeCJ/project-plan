import { LOGIN_ERROR } from "../actions/actionTypes";
import { LOGIN_SUCCESS } from "../actions/actionTypes";

const initState = {};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      console.log("Login failed");
      return {
        ...state,
        authError: "Login failed",
      };
    case LOGIN_SUCCESS:
      console.log("Login successful");
      return {
        ...state,
        authError: null,
      };
    default:
      return state;
  }
};

export default authReducer;
