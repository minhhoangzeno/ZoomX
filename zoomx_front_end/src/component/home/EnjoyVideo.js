import React from "react";
import hotel from "../../image/homePage/hotel.png";
import play from "../../image/home/play.png";
export default function EnjoyVideo() {
  return (
    <>
      <div className="enjoy__video-block">
        <div
          className={"img__video-block"}
          style={{ backgroundImage: `url(${hotel})` }}
        />
        {/* <img src={play} alt="#" /> */}
        <div className="enjoy__flex">
          <p className="content__mid">
            WELCOME &nbsp; TO&nbsp; ZOOMX&nbsp; HOTELS
          </p>
          <div className="empty__element"></div>
          <p className="txt__word-item">Tận hưởng những điều tuyệt vời</p>
          <div className="play__item">
            <img className="icon__plays" src={play} alt="#" />
          </div>
        </div>
      </div>
    </>
  );
}
