import React, { useState, useEffect, useContext } from "react";
import Search from "../components/Search";
import SongLists from "../components/SongLists";
import fire from "../config";
import { AppContext } from "../context/AppContext";

export default function Home() {
  const { queues } = useContext(AppContext);
  const loadingData = [
    {
      song: "Loading...",
      channel: "waiting...",
    },
    {
      song: "Loading...",
      channel: "waiting...",
    },
    {
      song: "Loading...",
      channel: "waiting...",
    },
  ];

  return (
    <div>
      <Search />
      <SongLists dataSongs={queues ? queues : loadingData} />
    </div>
  );
}
