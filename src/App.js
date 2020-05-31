import React, { useState, useEffect, createContext } from "react";
import { MdHome, MdFavorite, MdSettings } from "react-icons/md";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Favorites from "./views/Favorites";
import Settings from "./views/Settings";
import { AppProvider } from "./context/AppContext";
import fire from "./config";

function App() {
  const [currActive, setCurrActive] = useState("linkHome");

  return (
    <Router>
      <nav className="sidenav">
        <Link onClick={() => setCurrActive("linkHome")} id="mainlogo" to="/">
          <span role="img" aria-label="emoji">
            🎶
          </span>
          Beats
        </Link>
        <Link
          onClick={() => setCurrActive("linkHome")}
          className={currActive === "linkHome" ? "active" : ""}
          to="/"
        >
          <MdHome />
          Home
        </Link>
        <Link
          onClick={() => setCurrActive("linkFavorites")}
          className={currActive === "linkFavorites" ? "active" : ""}
          to="/favorites"
        >
          <MdFavorite />
          Favorites
        </Link>
        <Link
          onClick={() => setCurrActive("linkSettings")}
          className={currActive === "linkSettings" ? "active" : ""}
          to="/settings"
        >
          <MdSettings />
          Settings
        </Link>
      </nav>
      <div className="content">
        <Switch>
          <AppProvider>
            <Route exact path="/" component={Home} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/settings" component={Settings} />
          </AppProvider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
