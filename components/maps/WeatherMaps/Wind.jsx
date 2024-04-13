import React from "react";

const Wind = ({ lat, long, theme, colorTheme, weatherUnit }) => {
  return (
    <div>
      <div className="flex justify-center mt-4">
        <iframe
          width="650"
          height="450"
          title="Windy Map"
          src={`https://embed.windy.com/embed2.html?lat=${lat}&lon=${long}&detailLat=${lat}&detailLon=${long}&width=650&height=450&zoom=5&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=%C2%B0${weatherUnit}&radarRange=-1`}
          frameBorder="0"
        ></iframe>
      </div>
      <div>
        <p
          className={`mx-auto text-center pt-2 pb-10 text-xs font-light text-${colorTheme} bg-${theme}`}
        >
          Wind data provided by&nbsp;
          <a
            href="https://www.windy.com/"
            target="_blank"
            rel="noreferrer noopener"
            className={`link z-0 font-medium hover:text-${theme}`}
            onClick={() => emitGA("provided-by", "Windy")}
          >
            Windy
          </a>
        </p>
      </div>
    </div>
  );
};

export default Wind;
