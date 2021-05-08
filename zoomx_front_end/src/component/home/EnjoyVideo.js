import React from "react";
import hotel from "../../image/homePage/hotel.png";
export default function EnjoyVideo() {
  return (
    <>
      <div className="enjoy__video-block">
        <div
          className={"img__video-block"}
          style={{ backgroundImage: `url(${hotel})` }}
        />
        <div className="enjoy__flex">
          <p className="text__headline">WELCOME TO ZOOMX HOTELS</p>
          <div className="empty__element"></div>
          <p className="big__word-item">Khách sạn quay ZoomX là gì ?</p>
        </div>
      </div>
    </>
  );
}
