import React, { useEffect, useContext, useRef, useState } from "react";
import { FaPlay, FaStepForward } from "react-icons/fa";
import { AppContext } from "../context/AppContext";
import ReactPlayer from "react-player";

export default function PlayerBar() {
  const { queues, isPlaying, setIsPlaying } = useContext(AppContext);
  const { currentUser } = useContext(AppContext);
  const playerRef = useRef();

  if (!currentUser) {
    return null;
  }

  return (
    <div className="playerbar">
      {!queues ? (
        <div>
          <span>Loading Player...</span>
        </div>
      ) : (
        <div className="playerbar__inner">
          <ReactPlayer
            className="thePlayer"
            url={`https://youtube.com/watch?v=${queues[0].video}`}
            style={{
              position: "absolute",
              opacity: "0",
            }}
            playing={isPlaying}
            muted="true"
            ref={playerRef}
          />
          <div className="playerbar__playing">
            <div
              className="thumb"
              style={{ backgroundImage: `url(${queues[0].thumbs})` }}
              ref={playerRef}
            ></div>
            <div className="playerbar__info">
              <p>{queues[0].title}</p>
              <span>{queues[0].channel}</span>
            </div>
          </div>
          <div className="playerbar__controls">
            <FaPlay onClick={() => setIsPlaying(!isPlaying)} />
            <FaStepForward />
          </div>
          <input className="playerbar__seek" type="range" min="0" max="10" />
        </div>
      )}
    </div>
  );
}
