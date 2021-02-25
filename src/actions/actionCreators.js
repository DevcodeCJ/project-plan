// IMPORT ACTION TYPES
import {
  CREATE_PROJECT,
  CREATE_PROJECT_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNOUT_SUCCESS,
  // SIGNOUT_ERROR,
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
        dispatch(loginError(error));
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
