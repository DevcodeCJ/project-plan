import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  SIGNOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
} from "../actions/actionTypes";

const initState = {};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      console.log("Login failed");
      return {
        ...state,
        authError: action.payload,
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
    case SIGNUP_SUCCESS:
      console.log("Signup successful");
      return {
        ...state,
        authError: null,
      };
    case SIGNUP_ERROR:
      console.log("Signup failed. ", action.payload);
      return {
        ...state,
        authError: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
