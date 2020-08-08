import React, { useEffect, useContext } from "react";
import Swiper from "react-id-swiper";
import { AppContext } from "../context/AppContext";
import fire from "../config";

export default function SearchResults({ results } = this.props) {
  const params = {
    slidesPerView: 8,
    freeMode: true,
    dots: false,
    height: 300,
    slidesPerView: "auto",
    spaceBetween: 10,
    breakpoints: {
      768: {},
    },
  };

  const { queues } = useContext(AppContext);

  const handleClick = (param) => (e) => {
    const { dataset: songData } = e.target;
    let currResults = queues;
    currResults.push(songData);
    fire.database().ref("queues").set(currResults);
    // const { thumbs, title, video, channel } = param;
    // let holder = results;
    // console.log(thumbs);
  };

  return (
    <Swiper {...params}>
      {results.map((x, i) => (
        <div
          style={{
            backgroundImage: `url(${x.thumb})`,
            backgroundSize: "cover",
          }}
          key={i}
          data-thumbs={x.thumb}
          data-title={x.title}
          data-video={x.video}
          data-channel={x.channel}
          onClick={handleClick(this)}
        >
          <span>{x.title}</span>
        </div>
      ))}
      {/* {results.map((res) => {
        <div>{res.title}</div>;
      })} */}
    </Swiper>
  );
}
