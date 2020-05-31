import React, { useState, useContext } from "react";
import { MdClose, MdUnfoldMore } from "react-icons/md";

export default function SongItem({ song, channel } = this.props) {
  return (
    <li>
      <span>{song}</span>
      <span>{channel}</span>
      <span>
        <MdClose />
        <MdUnfoldMore />
      </span>
    </li>
  );
}
