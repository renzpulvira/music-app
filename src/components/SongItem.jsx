import React, { useState, useContext } from "react";
import { FiHeart, FiTrash2, FiTrash } from "react-icons/fi";
import { AppContext } from "../context/AppContext";
import fire from "../config";

export default function SongItem({ title, channel, songId } = this.props) {
  const { queues } = useContext(AppContext);

  const deleteSong = (id) => {
    const currQueues = queues;
    let result = "";
    if (id > 0) {
      let targetVal = currQueues.splice(id, 1);
      result = currQueues.filter((target) => target !== targetVal);
      fire.database().ref().child("queues").set(result);
    } else {
      result = [...currQueues];
      result.shift();
      fire.database().ref().child("queues").set(result);
    }
  };

  return (
    <li>
      <span>{title.length > 48 ? `${title.substring(0, 48)}...` : title}</span>
      <span>{channel}</span>
      <span>
        <FiTrash2 onClick={() => deleteSong(songId)} />

        {/* <MdUnfoldMore /> */}
      </span>
    </li>
  );
}
