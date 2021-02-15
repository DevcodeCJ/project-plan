import React from "react";

function ProjectSummary({ project }) {
  return (
    <div className="card z-depth-0 project-summary grey">
      <div className="card-content white-text text-darken-3">
        <span className="card-title">
          <strong>{project.title}</strong>
        </span>
        <p>Posted by Chiji Davidson</p>
        <p className="grey-text">10th February, 6am</p>
      </div>
    </div>
  );
}

export default ProjectSummary;
