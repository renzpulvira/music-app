import React, { useEffect } from "react";
import Swiper from "react-id-swiper";

export default function SearchResults({ results } = this.props) {
  const params = {
    slidesPerView: 3,
    freeMode: true,
    dots: false,
    height: 300,
    slidesPerView: "auto",
    spaceBetween: 10,
    breakpoints: {
      768: {},
    },
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
