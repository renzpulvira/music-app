import React, { useContext, useEffect } from "react";
import { MdClose, MdUnfoldMore } from "react-icons/md";
import { AppContext } from "../context/AppContext";
import fire from "../config";

export default function SongPlaying({ title, channel } = this.props) {
  const { queues } = useContext(AppContext);

  // Remove First item from queues array store
  const removeNowPlaying = () => {
    let result = [...queues];
    result.shift();
    fire.database().ref().child("queues").set(result);
  };

  return (
    <li>
      <span>{title}</span>
      <span>{channel}</span>
      <span>
        <MdClose onClick={() => removeNowPlaying()} />
      </span>
    </li>
  );
}
