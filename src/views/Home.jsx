import React, { useState, useEffect, useContext } from "react";
import Search from "../components/Search";
import SongLists from "../components/SongLists";
import fire from "../config";
import { AppContext } from "../context/AppContext";

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
      <button onClick={() => fire.auth().signOut()}>Sign Out</button>
      <Search />
      <SongLists dataSongs={queues ? queues : loadingData} />
    </div>
  );
}
