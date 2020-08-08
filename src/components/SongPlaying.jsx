import React, { useContext, useEffect } from "react";
import { FiTrash2, FiHeart } from "react-icons/fi";
import { AppContext } from "../context/AppContext";
import fire from "../config";

export default function SongPlaying({ title, channel } = this.props) {
  const { queues, removeNowPlaying } = useContext(AppContext);

  return (
    <li>
      <span>{title.length > 48 ? `${title.substring(0, 48)}...` : title}</span>
      <span>{channel}</span>
      <span>
        <FiTrash2 onClick={() => removeNowPlaying()} />
      </span>
    </li>
  );
}
