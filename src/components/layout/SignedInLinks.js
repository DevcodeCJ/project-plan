import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../actions/actionCreators";
import { initialCreator } from "../../actions/actionCreators";

function SignedInLinks(props) {
  const { initials } = props;
  // console.log(users);
  return (
    <ul className="right">
      <li>
        <NavLink to="/create" className="nav-links">
          New Project
        </NavLink>
      </li>
      <li>
        <a onClick={props.signOut} className="nav-links">
          Log Out
        </a>
      </li>
      <li>
        <NavLink
          to="/"
          className="nav-links btn btn-floating lighten-1 navlink-btn"
        >
          {initials}
        </NavLink>
      </li>
    </ul>
  );
}

const mapStateToProps = (state) => {
  return {
    initials: state.profile.initials,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
    createInitials: (users, auth) => {
      dispatch(initialCreator(users, auth));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);
