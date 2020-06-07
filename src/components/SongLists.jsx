import React, { useEffect, useState } from "react";
import { MdClose, MdUnfoldMore } from "react-icons/md";
import SongItem from "./SongItem";
import SongPlaying from "./SongPlaying";

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
          <SongPlaying
            title={dataSongs[0].title}
            channel={dataSongs[0].channel}
          />
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
          {dataSongs.map((data, i) =>
            // Don't render first item
            i == 0 ? null : (
              <SongItem
                songId={i}
                title={data.title}
                channel={data.channel}
                key={i}
              />
            )
          )}
        </ul>
      </div>
    </div>
  );
}
