import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";
import { initialCreator } from "../../actions/actionCreators";

function Navbar(props) {
  const { auth, users } = props;
  // console.log(auth);

  props.createInitials(users, auth);
  const links = auth.uid && users ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="nav-container">
        <Link to="/" className="brand-logo left">
          ProjectPlan
        </Link>
      </div>
      {links}
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    users: state.firestore.ordered.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createInitials: (users, auth) => {
      dispatch(initialCreator(users, auth));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
