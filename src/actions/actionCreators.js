import { CREATE_PROJECT } from "./actionTypes";

const createNewProject = (project) => {
  return {
    type: CREATE_PROJECT,
    payload: project,
  };
};

export const createProject = (project) => {
  return (dispatch, getState) => {
    // async call
    dispatch(createNewProject(project));
  };
};
