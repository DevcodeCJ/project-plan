import React from "react";

function ProjectDetails(props) {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
            nostrum maiores incidunt modi numquam est itaque veniam ut, quasi
            eligendi.
          </p>
        </div>
        <div className="card-action grey grey-text lighten-4">
          <p>Posted by Chiji Davidson</p>
          <p>10th February, 6am</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
