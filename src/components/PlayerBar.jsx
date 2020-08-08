import React, { useEffect, useContext, useRef, useState } from "react";
import {
  FiPause,
  FiPlay,
  FiHeart,
  FiSkipForward,
  FiLogOut,
  FiVolumeX,
  FiVolume2,
} from "react-icons/fi";
import { AppContext } from "../context/AppContext";
import ReactPlayer from "react-player";
import fire from "../config";

export default function PlayerBar() {
  const {
    queues,
    isPlaying,
    setIsPlaying,
    removeNowPlaying,
    setIsMuted,
    isMuted,
  } = useContext(AppContext);
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
            muted={isMuted}
            ref={playerRef}
            onEnded={() => removeNowPlaying()}
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
            {!isPlaying ? (
              <FiPlay onClick={() => setIsPlaying(!isPlaying)} />
            ) : (
              <FiPause onClick={() => setIsPlaying(!isPlaying)} />
            )}

            <FiSkipForward onClick={() => removeNowPlaying()} />
            {isMuted ? (
              <FiVolumeX onClick={() => setIsMuted(!isMuted)} />
            ) : (
              <FiVolume2 onClick={() => setIsMuted(!isMuted)} />
            )}

            <FiHeart />
          </div>
          <input className="playerbar__seek" type="range" min="0" max="10" />
          <span
            className="playerbar__signout"
            onClick={() => fire.auth().signOut()}
          >
            <span>Sign Out</span>
          </span>
        </div>
      )}
    </div>
  );
}
