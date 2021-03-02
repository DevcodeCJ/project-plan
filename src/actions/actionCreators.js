// IMPORT ACTION TYPES
import { actionTypes } from "react-redux-firebase";
import {
  CREATE_PROJECT,
  CREATE_PROJECT_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNOUT_SUCCESS,
  // SIGNOUT_ERROR,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  CREATE_INITIAL_SUCCESS,
  CREATE_INITIAL_ERROR,
} from "./actionTypes";

// PURE FUNCTIONS
const createNewProject = (project) => {
  return {
    type: CREATE_PROJECT,
    payload: project,
  };
};

const createProjectError = (error) => {
  return {
    type: CREATE_PROJECT_ERROR,
    payload: error,
  };
};

const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  };
};

const loginError = (error) => {
  return {
    type: LOGIN_ERROR,
    payload: error,
  };
};

const signOutSuccess = () => {
  return {
    type: SIGNOUT_SUCCESS,
  };
};

// const signOutError = (error) => {
//   return {
//     type: SIGNOUT_ERROR,
//     payload: error,
//   };
// };

const signUpSuccess = () => {
  return {
    type: SIGNUP_SUCCESS,
  };
};

const signUpError = (error) => {
  return {
    type: SIGNUP_ERROR,
    payload: error,
  };
};

const createInitialSuccess = (arr) => {
  return {
    type: CREATE_INITIAL_SUCCESS,
    payload: arr,
  };
};

const createInitialError = (error) => {
  return {
    type: CREATE_INITIAL_ERROR,
    payload: error,
  };
};

// ASYNC FUNCTIONS
export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "Chiji",
        authorLastName: "Davidson",
        authorId: 12345,
        creadtedAt: new Date(),
      })
      .then(() => {
        dispatch(createNewProject(project));
      })
      .catch((err) => {
        dispatch(createProjectError(err));
      });
  };
};

export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch(loginSuccess());
      })
      .catch((error) => {
        dispatch(loginError(error.message));
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => dispatch(signOutSuccess()));
    // .catch((error) => dispatch(signOutError(error)));
  };
};

export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    try {
      firebase
        .auth()
        .createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then((response) => {
          firestore
            .collection("users")
            .doc(response.user.uid)
            .set({
              firstName: newUser.firstName,
              lastName: newUser.lastName,
              initials: newUser.firstName[0] + newUser.lastName[0],
            });
        })
        .then(dispatch(signUpSuccess()))
        .catch((error) => dispatch(signUpError(error.message)));
    } catch (error) {
      dispatch(signUpError(error.message));
    }
  };
};

export const initialCreator = (users, auth) => {
  return (dispatch) => {
    try {
      const initialsArr = users && users.filter((user) => user.id === auth.uid);
      // console.log(auth);
      dispatch(createInitialSuccess(initialsArr));
    } catch (error) {
      dispatch(createInitialError(error.message));
    }
  };
};
