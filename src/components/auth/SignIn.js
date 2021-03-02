import React, { useState } from "react";
import { connect } from "react-redux";
import { signIn } from "../../actions/actionCreators";
import { Redirect } from "react-router-dom";
import { initialCreator } from "../../actions/actionCreators";

function SignIn(props) {
  const [userCredentials, setUserCredentials] = useState({});
  const { authError, auth } = props;

  const handleChange = (e) => {
    setUserCredentials({
      ...userCredentials,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.signIn(userCredentials);
  };

  if (auth.uid) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleChange} required />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Login</button>
          <div className="red-text center">
            {authError ? <p>{authError}</p> : null}
          </div>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credentials) => {
      dispatch(signIn(credentials));
    },
    createInitials: (users, auth) => {
      dispatch(initialCreator(users, auth));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
