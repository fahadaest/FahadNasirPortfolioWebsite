import React from "react";
import Marquee from "react-fast-marquee";


const MarqueeWapper = ({ images, direction, type }) => {
  return (
    <div className="marquee-wrapper text-slider">
      <div className="marquee-inner ">
        <Marquee direction={direction}>
          {type === "text" &&
            images?.map(({ id, text }) => (
              <span
                key={id}
                className="mx-8 text-xl font-semibold lowercase whitespace-nowrap text-black"
              >
                {text}
              </span>
            ))}
          {type === "image" &&
            images?.map(({ id, image }) => (
              <img
                key={id}
                src={image}
                alt=""
                className="mx-8 h-12 w-auto object-contain"
              />
            ))}
        </Marquee>
      </div>
    </div >
  );
};

export default MarqueeWapper;
