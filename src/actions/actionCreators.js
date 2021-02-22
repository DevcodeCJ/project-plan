import { CREATE_PROJECT } from "./actionTypes";
import { CREATE_PROJECT_ERROR } from "./actionTypes";

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

export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // async call
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
