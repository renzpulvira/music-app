import React, { useEffect, useRef, useState, useContext } from "react";
import ReactPlayer from "react-player";
import { FaPlay, FaStepForward } from "react-icons/fa";
import { AppContext } from "../context/AppContext";
import fire from "../config";

export default function Player({ currSong } = this.props) {
  const { queues } = useContext(AppContext);
  const { currentTime } = useContext(AppContext);
  const { setCurrentTime } = useContext(AppContext);
  const playerRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const goNext = () => {
    let result = [...queues];
    result.shift();
    fire.database().ref().child("queues").set(result);
  };

  const doSomething = () => {
    setProgress(playerRef.current.getCurrentTime());
  };

  useEffect(() => {
    console.log(currentTime);
  }, []);

  useEffect(() => {
    setCurrentTime(progress);
    console.log(progress);
  }, [progress]);

  return (
    <div className="player" onClick={() => console.log(playerRef.current)}>
      <div className="player__wrapper">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${currSong.video}`}
          width="408px"
          height="358px"
          className="player__video"
          style={{ backgroundImage: `url(${currSong.thumbs})` }}
          ref={playerRef}
          playing={isPlaying}
          onProgress={() => doSomething()}
        />
        <div className="player__playing">
          <span className="title">{currSong.title}</span>
          <span className="channel">{currSong.channel}</span>
        </div>
        <div className="player__controls">
          {/* <FaStepBackward /> */}
          <FaPlay onClick={() => setIsPlaying(!isPlaying)} />
          <FaStepForward onClick={() => goNext()} />
        </div>
      </div>
    </div>
  );
}
