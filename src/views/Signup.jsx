import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import fire from "../config";

export default function Signup({ history }) {
  const handleSignup = useCallback(
    async (e) => {
      e.preventDefault();
      const { email, password } = e.target.elements;
      try {
        await fire
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (err) {
        alert(err);
      }
    },
    [history]
  );

  return (
    <div className="auth">
      <div className="auth__wrapper">
        <h1>Register</h1>
        <form onSubmit={handleSignup}>
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
          <button type="submit">Sign Up</button>
        </form>
        <Link className="note" to="/login">
          Have an account? Go Log In!
        </Link>
      </div>
    </div>
  );
}
