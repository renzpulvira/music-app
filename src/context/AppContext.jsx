import React, { useState, useEffect, createContext } from "react";
import fire from "../config";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [queues, setQueues] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const getData = () => {
    fire
      .database()
      .ref()
      .on("value", (snapShot) => {
        setQueues(
          snapShot.val().queues.map((x) => {
            return x;
          })
        );
      });
  };

  useEffect(() => {
    getData();
    fire.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AppContext.Provider value={{ queues, currentUser }}>
      {props.children}
    </AppContext.Provider>
  );
};
