import React, { Fragment } from "react";
import { MdClose, MdUnfoldMore } from "react-icons/md";
import SongItem from "../components/SongItem";

export default function SongLists({ dataSongs } = this.props) {
  return (
    <div className="queues">
      <div className="queues__nowplaying">
        <h3>Now Playing</h3>
        <ul>
          <li className="list-header">
            <span>TITLE</span>
            <span>CHANNEL</span>
            <span>CONTROLS</span>
          </li>
          <li>
            <span>Tame Impala - Feels we only go backwards</span>
            <span>Tame Impala</span>
            <span>
              <MdClose />
              <MdUnfoldMore />
            </span>
          </li>
        </ul>
      </div>
      <div className="queues__songqueues">
        <h3>Up Next</h3>
        <ul>
          <li className="list-header">
            <span>TITLE</span>
            <span>CHANNEL</span>
            <span>CONTROLS</span>
          </li>
          {dataSongs.map((data, i) => (
            <SongItem song={data.song} channel={data.channel} key={i} />
          ))}
        </ul>
      </div>
    </div>
  );
}
