import React, { useState, Fragment } from "react";
import SearchResults from "./SearchResults";
import searchYoutube from "youtube-api-v3-search";
import { FiSearch } from "react-icons/fi";

export default function Search() {
  const API_KEY = process.env.REACT_APP_YT_KEY;
  const [temp, setTemp] = useState([]);
  const [term, setTerm] = useState(null);
  const [results, setResults] = useState([
    {
      id: "A0M4ayRcnQiYPOVmXRZZeN_C-Ac",
      video: "sBzrzS1Ag_g",
      title: "Tame Impala - The Less I Know The Better (Official Video)",
      channel: "tameimpalaVEVO",
      thumb: "https://i.ytimg.com/vi/sBzrzS1Ag_g/mqdefault.jpg",
    },
    {
      id: "30fcNt8yKiuokjHxQRASoAQoMGs",
      video: "wycjnCCgUes",
      title: "Tame Impala - Feels Like We Only Go Backwards (Official Video)",
      channel: "tameimpalaVEVO",
      thumb: "https://i.ytimg.com/vi/wycjnCCgUes/mqdefault.jpg",
    },
    {
      id: "CWpEJv4bmAK22cnUss-ezxK0YB0",
      video: "O2lzmpEs29M",
      title: "The Less I Know The Better - Tame Impala Lyrics",
      channel: "THEO",
      thumb: "https://i.ytimg.com/vi/O2lzmpEs29M/mqdefault.jpg",
    },
    {
      id: "R60FRr5tI7PapKlsEq1rwzcBdMQ",
      video: "utCjuKDXQsE",
      title: "Tame Impala - Lost in Yesterday (Official Video)",
      channel: "tameimpalaVEVO",
      thumb: "https://i.ytimg.com/vi/utCjuKDXQsE/mqdefault.jpg",
    },
    {
      id: "rKhW3dStcfV3pYbmT_LwKfx3h3w",
      video: "pFptt7Cargc",
      title: "Tame Impala - Let It Happen (Official Video)",
      channel: "tameimpalaVEVO",
      thumb: "https://i.ytimg.com/vi/pFptt7Cargc/mqdefault.jpg",
    },
    {
      id: "CWpEJv4bmAK22cnUss-ezxK0YB0",
      video: "O2lzmpEs29M",
      title: "The Less I Know The Better - Tame Impala Lyrics",
      channel: "THEO",
      thumb: "https://i.ytimg.com/vi/O2lzmpEs29M/mqdefault.jpg",
    },
    {
      id: "R60FRr5tI7PapKlsEq1rwzcBdMQ",
      video: "utCjuKDXQsE",
      title: "Tame Impala - Lost in Yesterday (Official Video)",
      channel: "tameimpalaVEVO",
      thumb: "https://i.ytimg.com/vi/utCjuKDXQsE/mqdefault.jpg",
    },
    {
      id: "rKhW3dStcfV3pYbmT_LwKfx3h3w",
      video: "pFptt7Cargc",
      title: "Tame Impala - Let It Happen (Official Video)",
      channel: "tameimpalaVEVO",
      thumb: "https://i.ytimg.com/vi/pFptt7Cargc/mqdefault.jpg",
    },
  ]);

  function goSearch(term) {
    searchYoutube(API_KEY, {
      q: term,
      part: "snippet",
      type: "video",
      maxResults: 8,
    }).then((res) => {
      console.log(res);
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
        <FiSearch />
        <input
          onChange={(e) => handleChange(e.target.value)}
          type="text"
          placeholder="Search for song, artist etc.."
        />
      </form>
      <SearchResults results={results} />
    </Fragment>
  );
}
