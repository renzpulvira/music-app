import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdHome, MdFavorite, MdSettings } from "react-icons/md";
import { AppContext } from "../context/AppContext";

export default function Navbar() {
  const [currActive, setCurrActive] = useState("linkHome");
  const { currentUser } = useContext(AppContext);

  return (
    <nav className="sidenav">
      <Link onClick={() => setCurrActive("linkHome")} id="mainlogo" to="/">
        <span role="img" aria-label="emoji">
          🎶
        </span>
        Beats
      </Link>
      {currentUser ? (
        <Link
          onClick={() => setCurrActive("linkHome")}
          className={currActive === "linkHome" ? "active" : ""}
          to="/"
        >
          <MdHome />
          Home
        </Link>
      ) : null}

      {currentUser ? (
        <Link
          onClick={() => setCurrActive("linkFavorites")}
          className={currActive === "linkFavorites" ? "active" : ""}
          to="/favorites"
        >
          <MdFavorite />
          Favorites
        </Link>
      ) : null}
      {!currentUser ? (
        <span>
          <Link
            onClick={() => setCurrActive("linkLogin")}
            className={currActive === "linkLogin" ? "active" : ""}
            to="/login"
          >
            <MdSettings />
            login
          </Link>
          <Link
            onClick={() => setCurrActive("linkSignin")}
            className={currActive === "linkSignin" ? "active" : ""}
            to="/signup"
          >
            <MdSettings />
            Register
          </Link>
        </span>
      ) : null}

      <Link
        onClick={() => setCurrActive("linkSettings")}
        className={currActive === "linkSettings" ? "active" : ""}
        to="/settings"
      >
        <MdSettings />
        Settings
      </Link>
    </nav>
  );
}
