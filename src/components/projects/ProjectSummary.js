import React from "react";
import moment from "moment";

function ProjectSummary({ project }) {
  // console.log(project);
  return (
    <div className="card z-depth-0 project-summary grey">
      <div className="card-content white-text text-darken-3">
        <span className="card-title">
          <strong>{project.title}</strong>
        </span>
        <p>
          Posted by {project.authorFirstName} {project.authorLastName}
        </p>
        <p className="white-text">{moment(project.createdAt).calendar()}</p>
      </div>
    </div>
  );
}

export default ProjectSummary;
