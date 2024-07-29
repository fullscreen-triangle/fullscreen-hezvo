import React, { useEffect } from "react";
import Gold from "components/maps/globes/Gold";

const Background = () => {
  return (
    <div>
      <div
        className="overflow-visible relative p-0 leading-6 text-black align-baseline border-0"
        style={{ height: 900 }}
      >
        <div className="fixed flex resize box-border m-0 p-0 antialiased">
          <Gold />
        </div>
        <div
          className="font-serif text-6xl text-center text-white"
          data-i18n="headline"
          style={{ lineHeight: 80 }}
        >
          The Perfect 100
        </div>
        <div className="relative py-12 px-0 font-sans text-base text-black align-baseline border-0 bg-zinc-800">
          <div className="my-0 mx-auto w-3/5 align-baseline border-0">
            <div
              className="p-0 m-0 text-white align-baseline border-0"
              data-i18n="subhead1"
            >
              The first competition in the first modern Olympics in 1896 was the
              100-meter dash, with American Thomas Burke winning gold in a time
              of 12 seconds. More than a century later, the 100 meters remains
              one of the more popular events at the Olympics, and the winning
              times have steadily improved. At the 2012 Games in London,
              Jamaican Usain Bolt won gold with an Olympic-record time of 9.63
              seconds, nearly 2.5 seconds faster than Burke ran in 1896. (Bolt
              also holds the world record of 9.58, set at the 2009 world
              championships.)
            </div>
            <div
              className="p-0 mx-0 mt-5 mb-0 text-white align-baseline border-0"
              data-i18n="subhead2"
            >
              The 100-meter dash may be the fastest event at the Olympics, but
              there is so much that goes on during those 10 seconds. Heres a
              look at the science and technique in the race, along with the
              sprinters views of those 100 meters.
            </div>
            <div
              className="p-0 my-5 mx-0 w-64 h-2 align-baseline border-0"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgb(12, 38, 75) 0px, rgb(170, 75, 143) 100%)",
              }}
            />
            <div
              className="p-0 m-0 text-white uppercase align-baseline border-0"
              data-i18n="byline1"
            >
              By Jim Caple • ESPN.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
