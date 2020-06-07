import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { AppContext } from "../context/AppContext";
import fire from "../config";
import { Link } from "react-router-dom";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault();
      const { email, password } = e.target.elements;

      try {
        await fire
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (err) {
        alert(err);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AppContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="auth">
      <div className="auth__wrapper">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <label>
            Email
            <input type="email" name="email" placeholder="Enter Email..." />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              placeholder="Enter Password..."
            />
          </label>
          <button type="submit">Log In</button>
        </form>
        <Link className="note" to="/signup">
          Don't have an account? Signup now!
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Login);
