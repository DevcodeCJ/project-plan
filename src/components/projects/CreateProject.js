import React, { useState } from "react";
import { createProject } from "../../actions/actionCreators";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

function CreateProject(props) {
  const [project, setProject] = useState({});

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(project);
    props.createProject(project);
  };

  const auth = props.auth;
  if (!auth.uid) {
    return <Redirect to="/signIn" />;
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Create new project</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            className="materialize-textarea"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Create</button>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => {
      dispatch(createProject(project));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
