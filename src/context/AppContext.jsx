import React, { useState, useEffect, createContext } from "react";
import fire from "../config";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [queues, setQueues] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

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

  const removeNowPlaying = () => {
    let result = [...queues];
    result.shift();
    fire.database().ref().child("queues").set(result);
  };

  useEffect(() => {
    getData();
    fire.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AppContext.Provider
      value={{
        queues,
        currentUser,
        currentTime,
        setCurrentTime,
        isPlaying,
        setIsPlaying,
        removeNowPlaying,
        isMuted,
        setIsMuted,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
