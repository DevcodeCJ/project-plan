import React from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

function Dashboard(props) {
  const { projects, auth, notifications } = props;
  // console.log(projects);
  if (!auth.uid) {
    return <Redirect to="/signIn" />;
  }

  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectList projects={projects} />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications notifications={notifications} />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "projects", limit: 6, orderBy: ["createdAt", "desc"] },
    { collection: "users" },
    { collection: "notifications", limit: 6, orderBy: ["time", "desc"] },
  ])
)(Dashboard);
