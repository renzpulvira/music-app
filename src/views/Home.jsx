import React, { useState, useEffect, useContext } from "react";
import Search from "../components/Search";
import SongLists from "../components/SongLists";
import fire from "../config";
import { AppContext } from "../context/AppContext";
import Player from "../components/Player";

export default function Home() {
  const { queues } = useContext(AppContext);
  const loadingData = [
    {
      title: "Getting Title...",
      channel: "Getting Channel...",
    },
    {
      title: "Getting Title...",
      channel: "Getting Channel...",
    },
    {
      title: "Getting Title...",
      channel: "Getting Channel...",
    },
  ];

  return (
    <div>
      <Search />
      <div>
        <SongLists dataSongs={queues ? queues : loadingData} />
        {/* {!queues ? (
          <div>
            <span>Loading Player...</span>
          </div>
        ) : (
          <Player currSong={queues[0]} />
        )} */}
      </div>
    </div>
  );
}
