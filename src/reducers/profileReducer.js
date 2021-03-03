import {
  CREATE_INITIAL_SUCCESS,
  CREATE_INITIAL_ERROR,
} from "../actions/actionTypes";

const initState = {};

const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_INITIAL_SUCCESS:
      console.log("Initials created");
      return {
        ...state,
        initials: action.payload[0].initials,
        firstName: action.payload[0].firstName,
        lastName: action.payload[0].lastName,
      };
    case CREATE_INITIAL_ERROR:
      console.log("Initials failed.", action.payload);
      return {
        ...state,
        initials: "",
        firstName: "",
        lastName: "",
      };
    default:
      return state;
  }
};

export default profileReducer;
