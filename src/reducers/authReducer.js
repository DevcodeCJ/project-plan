import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  SIGNOUT_SUCCESS,
} from "../actions/actionTypes";

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
    case SIGNOUT_SUCCESS:
      console.log("Logout successful");
      return state;
    default:
      return state;
  }
};

export default authReducer;
