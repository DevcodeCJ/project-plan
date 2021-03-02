import {
  CREATE_INITIAL_SUCCESS,
  CREATE_INITIAL_ERROR,
} from "../actions/actionTypes";

const initState = {};

const initReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_INITIAL_SUCCESS:
      console.log("Initials created");
      return {
        ...state,
        initialError: action.payload[0].initials,
      };
    case CREATE_INITIAL_ERROR:
      console.log("Initials failed", action.payload);
      return {
        ...state,
        initialError: "",
      };
    default:
      return state;
  }
};

export default initReducer;
