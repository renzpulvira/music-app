import React, { useState, Fragment } from "react";
import SearchResults from "./SearchResults";
import searchYoutube from "youtube-api-v3-search";

export default function Search() {
  const [temp, setTemp] = useState([]);
  const [term, setTerm] = useState(null);
  const [results, setResults] = useState([
    {
      channel: "MATTSUN BG",
      id: "kcU3Pzlz8HUreKcPPdhB4cprWk4",
      thumb: "https://i.ytimg.com/vi/G6BUQmkwuZc/mqdefault.jpg",
      title: "NULL!? Girl became Boy in Bed wars😳 - Blockman Go",
      video: "G6BUQmkwuZc",
    },
    {
      channel: "Senpai Bmgo",
      id: "Xrzrb6S1_HBKMkQk4-7-jU8Z9LQ",
      thumb: "https://i.ytimg.com/vi/OiuGl_PgsxM/mqdefault.jpg",
      title: "3 unsolved mystery in Null 😨 at Blockman Go 😨",
      video: "OiuGl_PgsxM",
    },
    {
      channel: "YaBoiAction",
      id: "7CWyu-ciMiApwIbzqFkan8SWPe0",
      thumb: "https://i.ytimg.com/vi/IoeScV0Iqjk/mqdefault.jpg",
      title: "MINECRAFT NULL IN REAL LIFE! Minecraft vs Real Life",
      video: "IoeScV0Iqjk",
    },
    {
      channel: "Senpai Bmgo",
      id: "VglsMBZoTHHh7mc1E8T2glaKW5Q",
      thumb: "https://i.ytimg.com/vi/mFAY9kWIesA/mqdefault.jpg",
      title: "NULL The unexplained caught on camera in Blockman Go",
      video: "mFAY9kWIesA",
    },
    {
      channel: "Lucas King",
      id: "gn2fg5FbAGOvmIaAwJ7H0OebVDE",
      thumb: "https://i.ytimg.com/vi/9PNvWVUAxKs/mqdefault.jpg",
      title: "Dark Piano - Null",
      video: "9PNvWVUAxKs",
    },
  ]);
  const [staticData, setStaticData] = useState([
    {
      channel: "iDubbbzTV",
      id: "_tTMICjj09MqXt2fnA0z5grwEf8",
      thumb: "https://i.ytimg.com/vi/Lm6qd1JydBQ/mqdefault.jpg",
      video: "Lm6qd1JydBQ",
    },
  ]);

  function goSearch(term) {
    searchYoutube(process.env.REACT_APP_YT_KEY, {
      q: term,
      part: "snippet",
      type: "video",
      maxResults: 5,
    }).then((res) => {
      setResults(
        res.items.map((data) => {
          return {
            id: data.etag,
            video: data.id.videoId,
            title: data.snippet.title.replace("&#39;", "'"),
            channel: data.snippet.channelTitle.replace("&#39;", "'"),
            thumb: data.snippet.thumbnails.medium.url,
          };
        })
      );
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    term ? goSearch(term) : console.log("Please enter a term...");
  }

  function handleChange(e) {
    setTerm(e);
  }

  return (
    <Fragment>
      <form onSubmit={(e) => handleSubmit(e)} className="search">
        <input
          onChange={(e) => handleChange(e.target.value)}
          type="text"
          placeholder="🔍 Search for song, artist etc.."
        />
      </form>
      <SearchResults results={results} />
    </Fragment>
  );
}
