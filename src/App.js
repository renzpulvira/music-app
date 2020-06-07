import React, { useState, useEffect, createContext } from "react";
import { MdHome, MdFavorite, MdSettings } from "react-icons/md";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Favorites from "./views/Favorites";
import Settings from "./views/Settings";
import { AppProvider } from "./context/AppContext";
import PrivateRoute from "./PrivateRouter";
import Signup from "./views/Signup";
import Login from "./views/Signin";
import Navbar from "./components/Navbar";
import fire from "./config";

function App() {
  return (
    <Router>
      <AppProvider>
        <Navbar />
        <div className="content">
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/settings" component={Settings} />
          </Switch>
        </div>
      </AppProvider>
    </Router>
  );
}

export default App;
